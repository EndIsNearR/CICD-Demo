locals {
  common_tags = merge(var.tags, {
    project = var.project_name
  })

  rg_locations = {
    for key, rg in var.resource_groups : key => coalesce(try(rg.location, null), var.location)
  }
  //coalesce takes any number of arguments and returns the first one that isn't null or an empty string.
  rg_tags = {
    for key, rg in var.resource_groups : key => merge(local.common_tags, try(rg.tags, {}))
  }
}

data "azurerm_client_config" "current" {}

module "resource_groups" {
  source   = "./modules/resource-group"
  for_each = var.resource_groups

  name     = each.value.name
  location = local.rg_locations[each.key]
  tags     = local.rg_tags[each.key]
}

module "network" {
  source = "./modules/network"

  name                = "${var.project_name}-vnet"
  location            = module.resource_groups["network"].location
  resource_group_name = module.resource_groups["network"].name
  address_space       = var.address_space
  subnets             = var.subnets
  tags                = local.common_tags
}

module "security" {
  source = "./modules/security"

  location            = module.resource_groups["security"].location
  resource_group_name = module.resource_groups["security"].name
  subnet_ids          = module.network.subnet_ids
  tags                = local.common_tags
}

module "storage" {
  source = "./modules/storage"

  name_prefix         = var.project_name
  location            = module.resource_groups["data"].location
  resource_group_name = module.resource_groups["data"].name
  storage_accounts    = var.storage_accounts
  tags                = local.common_tags
}

module "key_vault" {
  source = "./modules/key-vault"

  name                = var.key_vault_name
  location            = module.resource_groups["security"].location
  resource_group_name = module.resource_groups["security"].name
  tenant_id           = data.azurerm_client_config.current.tenant_id
  tags                = local.common_tags
}

module "acr" {
  source = "./modules/container-registry"

  name                = var.acr_name
  location            = module.resource_groups["security"].location
  resource_group_name = module.resource_groups["security"].name
  tags                = local.common_tags
}

module "compute" {
  source = "./modules/compute"

  name_prefix         = var.project_name
  location            = module.resource_groups["compute"].location
  resource_group_name = module.resource_groups["compute"].name
  subnet_ids          = module.network.subnet_ids
  virtual_machines    = var.virtual_machines
  tags                = local.common_tags
}

# module "app_service" {
#   source = "./modules/app-service"

#   name_prefix         = var.project_name
#   location            = module.resource_groups["web"].location
#   resource_group_name = module.resource_groups["web"].name
#   subnet_id           = module.network.subnet_ids["appservice"]
#   tags                = local.common_tags
# }
