variable "project_name" {
  description = "Name prefix used for all resources."
  type        = string
  default     = "az104lab08"
}

variable "location" {
  description = "Azure region to deploy into."
  type        = string
  default     = "eastus"
}

variable "resource_groups" {
  description = "Resource groups to create."
  type = map(object({
    name     = string
    location = optional(string)
    tags     = optional(map(string))
  }))
  default = {
    network = {
      name = "rg-network"
      tags = {
        workload = "networking"
      }
    }
    compute = {
      name = "rg-compute"
      tags = {
        workload = "compute"
      }
    }
    data = {
      name = "rg-data"
      tags = {
        workload = "storage"
      }
    }
    security = {
      name = "rg-security"
      tags = {
        workload = "security"
      }
    }
    web = {
      name = "rg-web"
      tags = {
        workload = "app-service"
      }
    }
  }
}

variable "address_space" {
  description = "VNet address space."
  type        = list(string)
  default     = ["10.10.0.0/16"]
}

variable "subnets" {
  description = "Subnet definitions for the hub VNet."
  type = map(object({
    address_prefixes = list(string)
    nsg_association  = optional(bool, true)
    route_table      = optional(bool, true)
    delegation = optional(object({
      name = string
      service_delegation = object({
        name    = string
        actions = list(string)
      })
    }))
  }))
  default = {
    app = {
      address_prefixes = ["10.10.1.0/24"]
    }
    data = {
      address_prefixes = ["10.10.2.0/24"]
    }
    web = {
      address_prefixes = ["10.10.3.0/24"]
    }
    vm = {
      address_prefixes = ["10.10.4.0/24"]
    }
    appservice = {
      address_prefixes = ["10.10.5.0/24"]
      delegation = {
        name = "appservice-delegation"
        service_delegation = {
          name    = "Microsoft.Web/serverFarms"
          actions = ["Microsoft.Network/virtualNetworks/subnets/action"]
        }
      }
    }
  }
}

variable "storage_accounts" {
  description = "Storage accounts to create."
  type = map(object({
    account_tier             = optional(string, "Standard")
    account_replication_type = optional(string, "LRS")
    container_names          = optional(list(string), [])
  }))
  default = {
    app = {
      container_names = ["uploads", "backups"]
    }
  }
}

variable "key_vault_name" {
  description = "Name of the Key Vault."
  type        = string
  default     = "kv-az104lab08"
}

variable "acr_name" {
  description = "Name of the Azure Container Registry."
  type        = string
  default     = "acraz104lab08"
}

variable "app_service_plan_name" {
  description = "App Service Plan name."
  type        = string
  default     = "asp-az104lab08"
}

variable "web_app_name" {
  description = "Web App name."
  type        = string
  default     = "web-az104lab08"
}

variable "virtual_machines" {
  description = "Virtual machines to deploy."
  type = map(object({
    size              = string
    admin_username    = string
    admin_password    = string
    subnet_key        = string
    private_ip_index  = number
    os_disk_type      = optional(string, "Standard_LRS")
    public_ip_enabled = optional(bool, false)
    image_reference = optional(object({
      publisher = string
      offer     = string
      sku       = string
      version   = string
    }))
  }))
  default = {
    vm1 = {
      size             = "Standard_B2s"
      admin_username   = "azureuser"
      admin_password   = "ChangeM3Now!12345"
      subnet_key       = "vm"
      private_ip_index = 5
      image_reference = {
        publisher = "Canonical"
        offer     = "0001-com-ubuntu-server-jammy"
        sku       = "22_04-lts-gen2"
        version   = "latest"
      }
    }
    vm2 = {
      size             = "Standard_B2s"
      admin_username   = "azureuser"
      admin_password   = "ChangeM3Now!12345"
      subnet_key       = "vm"
      private_ip_index = 6
      image_reference = {
        publisher = "Canonical"
        offer     = "0001-com-ubuntu-server-jammy"
        sku       = "22_04-lts-gen2"
        version   = "latest"
      }
    }
    apphost = {
      size              = "Standard_B2s"
      admin_username    = "azureuser"
      admin_password    = "ChangeM3Now!12345"
      subnet_key        = "vm"
      private_ip_index  = 7
      public_ip_enabled = true
      image_reference = {
        publisher = "Canonical"
        offer     = "0001-com-ubuntu-server-jammy"
        sku       = "22_04-lts-gen2"
        version   = "latest"
      }
    }
  }
}

variable "tags" {
  description = "Common tags applied to all resources."
  type        = map(string)
  default = {
    environment = "lab"
    managedby   = "terraform"
  }
}
