variable "name_prefix" {
  type = string
}

variable "location" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "tags" {
  type    = map(string)
  default = {}
}

variable "subnet_ids" {
  type = map(string)
}

variable "virtual_machines" {
  type = map(object({
    size              = string
    admin_username    = string
    admin_password    = string
    subnet_key        = string
    private_ip_index  = number
    os_disk_type      = optional(string, "Standard_LRS")
    public_ip_enabled = optional(bool, false)
    image_reference = object({
      publisher = string
      offer     = string
      sku       = string
      version   = string
    })
  }))
}

resource "azurerm_public_ip" "this" {
  for_each            = { for key, vm in var.virtual_machines : key => vm if try(vm.public_ip_enabled, false) }
  name                = "pip-${var.name_prefix}-${each.key}"
  location            = var.location
  resource_group_name = var.resource_group_name
  allocation_method   = "Static"
  sku                 = "Standard"
  tags                = var.tags
}

resource "azurerm_network_interface" "this" {
  for_each            = var.virtual_machines
  name                = "nic-${var.name_prefix}-${each.key}"
  location            = var.location
  resource_group_name = var.resource_group_name
  tags                = var.tags

  ip_configuration {
    name                          = "ipconfig1"
    subnet_id                     = var.subnet_ids[each.value.subnet_key]
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = try(azurerm_public_ip.this[each.key].id, null)
  }
}

resource "azurerm_linux_virtual_machine" "this" {
  for_each                        = var.virtual_machines
  name                            = "vm-${var.name_prefix}-${each.key}"
  location                        = var.location
  resource_group_name             = var.resource_group_name
  size                            = each.value.size
  admin_username                  = each.value.admin_username
  admin_password                  = each.value.admin_password
  disable_password_authentication = false
  network_interface_ids           = [azurerm_network_interface.this[each.key].id]
  tags                            = var.tags

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = each.value.os_disk_type
  }

  source_image_reference {
    publisher = each.value.image_reference.publisher
    offer     = each.value.image_reference.offer
    sku       = each.value.image_reference.sku
    version   = each.value.image_reference.version
  }

  computer_name = substr("${var.name_prefix}-${each.key}", 0, 64)
}
