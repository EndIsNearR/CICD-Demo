output "resource_group_ids" {
  value = { for key, rg in module.resource_groups : key => rg.id }
}

output "resource_group_names" {
  value = { for key, rg in module.resource_groups : key => rg.name }
}

output "virtual_network_id" {
  value = module.network.virtual_network_id
}

output "subnet_ids" {
  value = module.network.subnet_ids
}

output "nsg_ids" {
  value = module.security.nsg_ids
}

output "route_table_ids" {
  value = module.network.route_table_ids
}

output "vm_ids" {
  value = module.compute.vm_ids
}

output "vm_public_ips" {
  value = module.compute.public_ip_addresses
}

output "storage_account_names" {
  value = module.storage.storage_account_names
}

output "key_vault_uri" {
  value = module.key_vault.vault_uri
}

output "acr_login_server" {
  value = module.acr.login_server
}

output "app_host_public_ip" {
  value = try(module.compute.public_ip_addresses["apphost"], null)
}
