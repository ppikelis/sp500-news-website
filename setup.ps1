# S&P 500 News Website - Automated Setup Script
# Run this script in PowerShell (as Administrator for best results)

Write-Host "=== S&P 500 News Website Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "✓ Node.js is installed: $nodeVersion" -ForegroundColor Green
        $nodeInstalled = $true
    } else {
        $nodeInstalled = $false
    }
} catch {
    $nodeInstalled = $false
}

if (-not $nodeInstalled) {
    Write-Host "✗ Node.js is not installed" -ForegroundColor Red
    Write-Host "Installing Node.js via winget..." -ForegroundColor Yellow
    winget install OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
    Write-Host "Please restart your terminal and run this script again after Node.js installation completes." -ForegroundColor Yellow
    Write-Host "Or download manually from: https://nodejs.org/" -ForegroundColor Yellow
    exit
}

# Check if npm is available
Write-Host "Checking for npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version 2>$null
    if ($npmVersion) {
        Write-Host "✓ npm is installed: $npmVersion" -ForegroundColor Green
    } else {
        Write-Host "✗ npm is not available" -ForegroundColor Red
        exit
    }
} catch {
    Write-Host "✗ npm is not available" -ForegroundColor Red
    exit
}

# Check if Git is installed
Write-Host "Checking for Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
        $gitInstalled = $true
    } else {
        $gitInstalled = $false
    }
} catch {
    $gitInstalled = $false
}

if (-not $gitInstalled) {
    Write-Host "✗ Git is not installed" -ForegroundColor Red
    Write-Host "Installing Git via winget..." -ForegroundColor Yellow
    winget install Git.Git --silent --accept-package-agreements --accept-source-agreements
    Write-Host "Please restart your terminal and run this script again after Git installation completes." -ForegroundColor Yellow
    Write-Host "Or download manually from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

# Install project dependencies
Write-Host ""
Write-Host "Installing project dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit
}

# Initialize Git repository (if not already initialized)
Write-Host ""
Write-Host "Setting up Git repository..." -ForegroundColor Yellow
if (-not (Test-Path .git)) {
    git init
    git add .
    git commit -m "Initial commit: S&P 500 News Website"
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✓ Git repository already initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Setup Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository at https://github.com/new" -ForegroundColor White
Write-Host "2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor White
Write-Host "3. Run: git push -u origin main" -ForegroundColor White
Write-Host "4. Run: npm run dev" -ForegroundColor White
Write-Host "5. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host ""


