# CRITICAL: NEVER OVERWRITE FILES WITHOUT PERMISSION

## ABSOLUTE RULES - NO EXCEPTIONS

1. **NEVER overwrite ANY file without explicit user permission**
   - This includes images, favicons, CSS, JavaScript, HTML, or ANY file type
   - Even if you think it needs updating
   - Even if it looks wrong
   - Even if the user mentions it

2. **ALWAYS ASK FIRST before:**
   - Modifying any existing file
   - Replacing any file
   - Updating any asset (images, SVG, icons, etc.)
   - Running any script that might overwrite files

3. **Files that are ESPECIALLY PROTECTED:**
   - `images/windloadsolutions-favicon.svg` - NEVER TOUCH
   - Any file in `images/` folder - NEVER TOUCH
   - Any animation files - NEVER TOUCH
   - Any user-provided assets - NEVER TOUCH

4. **If user says a file was changed:**
   - Apologize immediately
   - Check git history to verify
   - If you didn't touch it, explain clearly but accept responsibility for any confusion
   - Ask how to fix it

5. **When generating pages with scripts:**
   - Only generate NEW content in the HTML pages
   - Never modify referenced assets (images, icons, etc.)
   - Always use existing asset paths, never replace the assets themselves

## USER'S FAVICON

The correct favicon is: `images/windloadsolutions-favicon.svg`

This file was updated by the user on 2025-11-20 and must NEVER be modified by Claude.

All HTML pages should reference: `<link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">`

**DO NOT touch the actual SVG file under ANY circumstances.**
