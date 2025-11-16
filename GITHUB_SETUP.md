# GitHub Repository Setup Guide

## Step 1: Install Git

If Git is not installed on your system, download and install it:

1. Visit: https://git-scm.com/download/win
2. Download the Windows installer
3. Run the installer with default settings
4. Restart your terminal/PowerShell after installation

## Step 2: Initialize Git Repository

After Git is installed, run these commands in your project directory:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: S&P 500 News Website"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - Repository name: `sp500-news-website` (or your preferred name)
   - Description: "A Next.js application that aggregates and displays the latest news about S&P 500 companies"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

## Step 4: Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```powershell
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/sp500-news-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using GitHub CLI

If you have GitHub CLI installed, you can create the repository directly:

```powershell
# Install GitHub CLI if not installed: winget install GitHub.cli

# Create and push repository
gh repo create sp500-news-website --public --source=. --remote=origin --push
```

## Troubleshooting

- If you get authentication errors, you may need to set up a Personal Access Token:
  - Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
  - Generate a new token with `repo` permissions
  - Use the token as your password when pushing

