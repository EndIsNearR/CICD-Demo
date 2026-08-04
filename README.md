# Azure Lab CI/CD Setup

This repository contains:
- Terraform infrastructure code in the terraform-azure-lab folder
- A React application in the Fakhar Abbas React folder
- GitHub Actions workflow definitions in .github/workflows

## Required GitHub secrets

Create these repository secrets in GitHub:
- AZURE_CLIENT_ID
- AZURE_TENANT_ID
- AZURE_SUBSCRIPTION_ID

## Notes

- The React app is built without modifying its source code.
- Terraform uses Azure remote state through the backend configuration already defined in terraform-azure-lab/providers.tf.
