# Setup Instructions

## Quick Setup Guide

### Step 1: Install Node.js
1. Download Node.js LTS from: https://nodejs.org/
2. Run the installer (accept all defaults)
3. **Restart your terminal/PowerShell after installation**

### Step 2: Install Git
1. Download Git from: https://git-scm.com/download/win
2. Run the installer (accept all defaults)
3. **Restart your terminal/PowerShell after installation**

### Step 3: Verify Installations
Open a NEW terminal/PowerShell window and run:
```powershell
node --version
npm --version
git --version
```

All three commands should show version numbers.

### Step 4: Install Project Dependencies
Navigate to this project folder and run:
```powershell
cd "C:\Users\pauli\Desktop\Custor 1 belenkas"
npm install
```

### Step 5: Initialize Git Repository
```powershell
git init
git add .
git commit -m "Initial commit: S&P 500 News Website"
```

### Step 6: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (name it `sp500-news-website` or your choice)
3. **DO NOT** initialize with README (we already have one)
4. Copy the repository URL

### Step 7: Connect to GitHub
Replace `<your-repo-url>` with your actual GitHub repository URL:
```powershell
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

### Step 8: Run Development Server
```powershell
npm run dev
```

Then open http://localhost:3000 in your browser.

## Troubleshooting

**If `node` or `npm` commands don't work:**
- Restart your computer to update PATH environment variables
- Or manually add Node.js to PATH:
  - Right-click "This PC" → Properties → Advanced System Settings → Environment Variables
  - Add `C:\Program Files\nodejs` to System PATH

**If `git` command doesn't work:**
- Restart your terminal/PowerShell
- Or use Git Bash (installed with Git) instead of PowerShell

**If `npm install` fails:**
- Delete `node_modules` folder if it exists
- Delete `package-lock.json` if it exists
- Run `npm install` again

