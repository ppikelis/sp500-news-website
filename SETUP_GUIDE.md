# Complete Setup Guide for S&P 500 News Website

This guide will help you install all required tools and get the project running.

## Prerequisites Installation

### Step 1: Install Node.js

**Option A: Direct Download (Recommended)**
1. Go to https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. Accept all default settings
5. **Important**: Restart your terminal/PowerShell after installation

**Option B: Using winget (if available)**
```powershell
winget install OpenJS.NodeJS.LTS
```

**Verify Installation:**
Open a NEW terminal window and run:
```powershell
node --version
npm --version
```
You should see version numbers. If not, restart your computer.

---

### Step 2: Install Git

**Option A: Direct Download (Recommended)**
1. Go to https://git-scm.com/download/win
2. Download the installer
3. Run the installer
4. Accept all default settings
5. **Important**: Restart your terminal/PowerShell after installation

**Option B: Using winget (if available)**
```powershell
winget install Git.Git
```

**Verify Installation:**
Open a NEW terminal window and run:
```powershell
git --version
```
You should see a version number. If not, restart your computer.

---

## Project Setup

### Step 3: Navigate to Project Directory

Open PowerShell or Command Prompt and navigate to the project:
```powershell
cd "C:\Users\pauli\Desktop\Custor 1 belenkas"
```

### Step 4: Install Project Dependencies

```powershell
npm install
```

This will install all required packages. Wait for it to complete (2-5 minutes).

### Step 5: Verify Installation

Check that `node_modules` folder was created:
```powershell
Test-Path node_modules
```
Should return `True`.

---

## Git Repository Setup

### Step 6: Initialize Git Repository

```powershell
git init
git add .
git commit -m "Initial commit: S&P 500 News Website"
```

### Step 7: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `sp500-news-website` (or your preferred name)
3. Description: "Next.js website for S&P 500 company news aggregation"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (we already have one)
6. Click "Create repository"

### Step 8: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with setup instructions. Use these commands:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

**Note**: If you haven't set up GitHub authentication, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

---

## Running the Development Server

### Step 9: Start the Server

```powershell
npm run dev
```

You should see:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
```

### Step 10: Open in Browser

Open your browser and go to: **http://localhost:3000**

The website should load and display news about the companies!

---

## Troubleshooting

### Node.js/npm not found after installation
- **Solution**: Restart your computer to update PATH environment variables
- Or manually add Node.js to PATH (usually `C:\Program Files\nodejs\`)

### npm install fails
- **Solution**: Delete `node_modules` folder and `package-lock.json` (if exists), then run `npm install` again
- Make sure you have internet connection

### Git push fails
- **Solution**: You may need to authenticate with GitHub
  - Use Personal Access Token: https://github.com/settings/tokens
  - Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Development server won't start
- **Solution**: Make sure port 3000 is not in use
- Check for errors in the terminal output
- Try `npm run build` first to check for compilation errors

---

## Quick Command Reference

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace with your repo URL)
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

---

## Next Steps After Setup

1. ✅ Verify the website loads at http://localhost:3000
2. ✅ Test the search functionality
3. ✅ Test filtering by company
4. ✅ Test category filtering
5. ✅ Push code to GitHub
6. ✅ Consider deploying to Vercel (free hosting for Next.js)

Enjoy your S&P 500 News Website! 🚀


