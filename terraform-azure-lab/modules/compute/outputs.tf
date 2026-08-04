output "vm_ids" {
  value = { for key, vm in azurerm_linux_virtual_machine.this : key => vm.id }
}

output "nic_ids" {
  value = { for key, nic in azurerm_network_interface.this : key => nic.id }
}

output "public_ip_addresses" {
  value = { for key, pip in azurerm_public_ip.this : key => pip.ip_address }
}
