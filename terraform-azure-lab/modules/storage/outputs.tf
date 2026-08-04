output "storage_account_names" {
  value = { for key, account in azurerm_storage_account.this : key => account.name }
}

output "storage_account_ids" {
  value = { for key, account in azurerm_storage_account.this : key => account.id }
}
