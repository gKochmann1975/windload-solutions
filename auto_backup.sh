#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups/$DATE"

echo "Creating backup: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
cp *.html "$BACKUP_DIR/" 2>/dev/null
cp states/*.html "$BACKUP_DIR/" 2>/dev/null

FILE_COUNT=$(ls "$BACKUP_DIR"/*.html 2>/dev/null | wc -l)
echo "✅ Backup complete: $BACKUP_DIR"
echo "✅ $FILE_COUNT files backed up"
