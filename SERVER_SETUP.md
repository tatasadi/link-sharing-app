# Ubuntu Server Setup Guide

This guide will help you set up your Ubuntu server to deploy the Link Sharing App using Docker and GitHub Actions.

## Prerequisites

### 1. Ubuntu Server Setup
Ensure your Ubuntu server has:
- Ubuntu 18.04+ (recommended: Ubuntu 20.04 or 22.04)
- At least 2GB RAM
- At least 10GB storage
- Internet connectivity

### 2. Install Docker

```bash
# Update package index
sudo apt update

# Install required packages
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index again
sudo apt update

# Install Docker
sudo apt install docker-ce docker-ce-cli containerd.io

# Add your user to docker group (to run docker without sudo)
sudo usermod -aG docker $USER

# Log out and back in, then test Docker
docker --version
```

### 3. Configure SSH Access

```bash
# Generate SSH key pair on your local machine (if you don't have one)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy the public key to your server
ssh-copy-id username@your-server-ip

# Test SSH connection
ssh username@your-server-ip
```

### 4. Configure Firewall (if needed)

```bash
# Allow SSH (if not already configured)
sudo ufw allow ssh

# Allow port 3003 for the application
sudo ufw allow 3003

# Enable firewall (if not already enabled)
sudo ufw enable

# Check status
sudo ufw status
```

## GitHub Repository Setup

### 1. Configure GitHub Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add these secrets:

#### Server Connection Secrets:
- `SERVER_HOST`: Your Ubuntu server's IP address or hostname
- `SERVER_USER`: Your Ubuntu server username
- `SERVER_SSH_KEY`: Your private SSH key (the content of `~/.ssh/id_ed25519` from your local machine)
- `SERVER_PORT`: SSH port (optional, defaults to 22)

#### Application Environment Variables:
- `DATABASE_URL`: PostgreSQL connection string
- `AUTH_SECRET`: NextAuth secret key (generate with: `openssl rand -base64 32`)
- `AZURE_STORAGE_CONNECTION_STRING`: Azure Blob Storage connection string
- `AZURE_STORAGE_CONTAINER_NAME`: Azure container name
- `AZURE_STORAGE_NAME`: Azure storage account name

### 2. Test SSH Connection from GitHub Actions

The workflow will automatically test the connection when you push to the main branch.

## Database Setup

### Option 1: PostgreSQL on the same server

```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start and enable PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
```

In PostgreSQL shell:
```sql
CREATE DATABASE linksharing;
CREATE USER linkuser WITH ENCRYPTED PASSWORD 'your-secure-password';
GRANT ALL PRIVILEGES ON DATABASE linksharing TO linkuser;
\q
```

Your `DATABASE_URL` would be:
```
postgresql://linkuser:your-secure-password@localhost:5432/linksharing
```

### Option 2: External Database Service

Use a managed PostgreSQL service like:
- DigitalOcean Managed Databases
- AWS RDS
- Google Cloud SQL
- Azure Database for PostgreSQL

## Deployment Process

1. **Push to main branch**: The GitHub Action will automatically trigger
2. **Monitor deployment**: Check the Actions tab in your GitHub repository
3. **Verify deployment**:
   ```bash
   # SSH into your server
   ssh username@your-server-ip

   # Check if container is running
   docker ps

   # Check application logs
   docker logs link-sharing-app
   ```
4. **Access your app**: Visit `http://your-server-ip:3003`

## Troubleshooting

### Check Docker container status:
```bash
docker ps -a
docker logs link-sharing-app
```

### Restart the container:
```bash
docker restart link-sharing-app
```

### View detailed logs:
```bash
docker logs link-sharing-app --tail 100 -f
```

### Check server resources:
```bash
# Check memory usage
free -h

# Check disk usage
df -h

# Check running processes
top
```

### Test database connection:
```bash
# If using local PostgreSQL
sudo -u postgres psql -d linksharing -c "SELECT version();"
```

## Security Considerations

1. **Firewall**: Only open necessary ports (22 for SSH, 3003 for the app)
2. **SSH**: Use key-based authentication, disable password auth
3. **Updates**: Regularly update your server
4. **SSL**: Consider using a reverse proxy (nginx) with SSL certificate
5. **Environment Variables**: Never commit secrets to your repository

## Optional: Reverse Proxy with SSL

For production, consider setting up nginx as a reverse proxy with SSL:

```bash
# Install nginx
sudo apt install nginx

# Install certbot for Let's Encrypt SSL
sudo apt install certbot python3-certbot-nginx

# Configure nginx (create /etc/nginx/sites-available/linksharing)
sudo nano /etc/nginx/sites-available/linksharing
```

Basic nginx configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/linksharing /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com
```