output "virtual_network_id" {
  value = azurerm_virtual_network.this.id
}

output "virtual_network_name" {
  value = azurerm_virtual_network.this.name
}

output "subnet_ids" {
  value = { for key, subnet in azurerm_subnet.this : key => subnet.id }
}

output "subnet_names" {
  value = { for key, subnet in azurerm_subnet.this : key => subnet.name }
}

output "route_table_ids" {
  value = { for key, route_table in azurerm_route_table.this : key => route_table.id }
}
