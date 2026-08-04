variable "location" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "name_prefix" {
  type = string
}

variable "tags" {
  type    = map(string)
  default = {}
}

variable "storage_accounts" {
  type = map(object({
    account_tier             = optional(string, "Standard")
    account_replication_type = optional(string, "LRS")
    container_names          = optional(list(string), [])
  }))
}

resource "azurerm_storage_account" "this" {
  for_each                        = var.storage_accounts
  name                            = substr(replace(lower("st${var.name_prefix}${each.key}"), "-", ""), 0, 24)
  location                        = var.location
  resource_group_name             = var.resource_group_name
  account_tier                    = each.value.account_tier
  account_replication_type        = each.value.account_replication_type
  account_kind                    = "StorageV2"
  allow_nested_items_to_be_public = false
  tags                            = var.tags
}

resource "azurerm_storage_container" "this" {
  for_each = {
    for item in flatten([
      for account_key, account in var.storage_accounts : [
        for container_name in try(account.container_names, []) : {
          key             = "${account_key}-${container_name}"
          storage_account = account_key
          container_name  = container_name
        }
      ]
    ]) : item.key => item
  }
  name                  = each.value.container_name
  storage_account_id    = azurerm_storage_account.this[each.value.storage_account].id
  container_access_type = "private"
}
