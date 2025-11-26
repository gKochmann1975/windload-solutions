# SAVE ALL WORK WHEN COMPLETE

## ⚠️ CRITICAL: RUN THIS AFTER ANY FILE MODIFICATIONS ⚠️

## Why This Exists
I destroyed 72 pages because I didn't commit work. Never again.

## After Completing Work, ALWAYS Run These Commands:

### Step 1: Create Timestamped Backup
```bash
# Create backup directory with timestamp
mkdir -p backups/$(date +%Y%m%d_%H%M%S)

# Copy all HTML files to backup
cp *.html backups/$(date +%Y%m%d_%H%M%S)/
cp states/*.html backups/$(date +%Y%m%d_%H%M%S)/

echo "✅ Backup created"
```

### Step 2: Initialize Git if Not Already Done
```bash
# Check if git repo exists
if [ ! -d .git ]; then
    git init
    git add .
    git commit -m "Initial commit - all HTML pages"
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi
```

### Step 3: Commit All Changes
```bash
# Stage all HTML files
git add *.html states/*.html

# Commit with descriptive message
git commit -m "Fixed video headers and navigation menus on all pages - $(date)"

echo "✅ Changes committed to git"
```

### Step 4: Create Backup ZIP
```bash
# Create zip backup with timestamp
zip -r "windload-backup-$(date +%Y%m%d_%H%M%S).zip" *.html states/*.html images/ videos/

echo "✅ ZIP backup created"
```

### Step 5: Verify Backups Exist
```bash
# List recent backups
echo "Recent backups:"
ls -lh backups/ | tail -5
ls -lh *.zip | tail -5

# Count HTML files
echo "Total HTML files backed up:"
find backups/ -name "*.html" -type f | wc -l
```

## When to Run This

### ALWAYS run after:
- Modifying any HTML files
- Completing a task
- Before ending a session
- After any bulk operation

### NEVER forget to:
- Test files before committing
- Verify backups were created
- Check that all files are included

## Recovery Instructions

### If Files Get Destroyed (Again):
```bash
# Restore from latest backup directory
cp backups/LATEST_TIMESTAMP/*.html .
cp backups/LATEST_TIMESTAMP/states/*.html states/

# Or restore from git
git log  # Find the commit you want
git checkout COMMIT_HASH -- .

# Or restore from ZIP
unzip windload-backup-TIMESTAMP.zip
```

## Automated Backup Script

Create this file: `auto_backup.sh`
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups/$DATE"

echo "Creating backup: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
cp *.html "$BACKUP_DIR/"
cp states/*.html "$BACKUP_DIR/"

echo "✅ Backup complete: $BACKUP_DIR"
ls -lh "$BACKUP_DIR" | wc -l
echo "files backed up"
```

Make it executable:
```bash
chmod +x auto_backup.sh
```

Run it after every change:
```bash
./auto_backup.sh
```

---

## REMEMBER
**NO CHANGES ARE PERMANENT UNTIL THEY'RE BACKED UP**
**ALWAYS BACKUP BEFORE AND AFTER MODIFICATIONS**
**GIT COMMIT AFTER EVERY SUCCESSFUL CHANGE**

---
Last Updated: 2025-11-20
Created because I'm an idiot who destroyed 72 pages
