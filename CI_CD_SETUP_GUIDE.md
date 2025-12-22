# CI/CD Setup & Cheat Sheet

Follow these steps to configure your automated deployment pipeline.

## 1. GitHub Secrets Setup
Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.

Add the following secrets:

| Secret Name | Value |
|-------------|-------|
| `DOCKER_USERNAME` | Your Docker Hub Username |
| `DOCKER_PASSWORD` | Your Docker Hub Password (or Access Token) |
| `EC2_HOST` | The Public IPv4 address of your EC2 instance |
| `EC2_USER` | Usually `ubuntu` (for Ubuntu AMIs) or `ec2-user` (for Amazon Linux) |
| `EC2_SSH_KEY` | Copy the entire content of your `.pem` key file (Open it with Notepad) |

## 2. Prepare your EC2 Instance
Connect to your EC2 instance and run these commands to install Docker:

```bash
# Update and install Docker
sudo apt-get update
sudo apt-get install -y docker.io

# Start Docker and enable it on boot
sudo systemctl start docker
sudo systemctl enable docker

# Allow your user to run Docker commands without sudo
sudo usermod -aG docker $USER

# IMPORTANT: Log out and log back in for changes to take effect!
exit
```

## 3. Verify Deployment
Once the GitHub Action finishes successfully:
1. Open your browser.
2. Go to `http://<YOUR-EC2-IP>`.
3. You should see the name printer app running!

## Useful Commands (Cheat Sheet)

### Check Running Containers
```bash
docker ps
```

### View Logs
```bash
docker logs name-printer-app
```

### Manual Restart
```bash
docker stop name-printer-app
docker rm name-printer-app
docker run -d -p 80:80 --name name-printer-app <YOUR_DOCKER_USERNAME>/name-printer-app:latest
```
