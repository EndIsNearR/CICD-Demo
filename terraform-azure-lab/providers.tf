provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    resource_group_name  = "rg-data"
    storage_account_name = "staz104lab08app"
    container_name       = "tfstate"
    key                  = "lab08/terraform.tfstate"
    use_azuread_auth     = true
  }
}
