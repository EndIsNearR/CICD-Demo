#!/bin/bash
set -euo pipefail

VM_NAME="${1:-vm-az104lab08-vm1}"
RESOURCE_GROUP="${2:-rg-compute}"
APP_DIR="${3:-/var/www/fakhar-abbas-react}"

mkdir -p "$APP_DIR"

cat > /tmp/deploy-app.sh <<'EOF'
#!/bin/bash
set -euo pipefail
APP_DIR="$1"
mkdir -p "$APP_DIR"
cd "$APP_DIR"
if [ -d .git ]; then rm -rf .git; fi
apt-get update
apt-get install -y nginx unzip
systemctl enable nginx
systemctl start nginx
cat > /etc/nginx/sites-available/default <<'NGINX'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/fakhar-abbas-react;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX
systemctl reload nginx
EOF

az vm run-command invoke \
  --resource-group "$RESOURCE_GROUP" \
  --name "$VM_NAME" \
  --command-id RunShellScript \
  --scripts "bash -lc 'APP_DIR=\"$APP_DIR\"; bash /tmp/deploy-app.sh \"$APP_DIR\"'" \
  --output none
