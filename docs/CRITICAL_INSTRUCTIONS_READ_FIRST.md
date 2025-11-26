# CRITICAL INSTRUCTIONS FOR HTML PAGE FIXES

## ⚠️ READ THIS BEFORE TOUCHING ANY HTML FILES ⚠️

## THE GOAL
Fix the video header and navigation menu on all HTML pages to match state-requirements.html

## WHAT TO COPY FROM state-requirements.html

### 1. CSS TO COPY (these sections only):
- Header CSS (`.main-header`, `.logo`, `.hamburger`, etc.)
- Video/Hero section CSS (`.hero-section`, `.hero-video`, `.hero-overlay`, `.hero-content`)
- Scroll behavior CSS (`.main-header.scrolled`)
- Navigation menu CSS (`.nav-links`, `.nav-overlay`, `.hamburger`)

### 2. HTML TO COPY (these sections only):
- `<header class="main-header">` ... `</header>` - The entire header element
- `<div class="nav-overlay"></div>` - Navigation overlay
- `<nav class="nav-links">` ... `</nav>` - The full navigation menu with TOPO submenu

### 3. JAVASCRIPT TO COPY (these sections only):
- Header scroll effect code
- Hamburger menu toggle code
- All event listeners for menu

## WHAT **NEVER** TO TOUCH

### ❌ DO NOT COPY OR CHANGE:
- The `<title>` tag - each page has unique title
- The meta description - each page has unique description
- **THE MAIN CONTENT** - Everything between the hero section and footer
  - All the unique text content
  - All the animations
  - All the state certification info
  - All the educational content
  - All the topographic content
  - EVERYTHING that makes each page unique

## THE PROCESS

### Step 1: TEST ON ONE PAGE FIRST
1. Choose ONE test page
2. Extract header CSS/HTML/JS from state-requirements.html
3. Insert into test page WITHOUT touching main content
4. Verify it works
5. Get user approval before proceeding

### Step 2: CREATE BACKUP
Before modifying any files:
```bash
cp file.html file.html.BACKUP
```

### Step 3: SCRIPT LOGIC
The script should:
1. Read the target page to extract title and description
2. Read the target page to extract main content (between hero and footer)
3. Read state-requirements.html to get header/CSS/JS
4. Combine: header parts + unique content
5. Write back to file

### Step 4: VERIFY
Open the file in browser and check:
- ✅ Full screen video before scroll
- ✅ Logo shrinks when scrolling (100px → 70px)
- ✅ Header becomes white on scroll
- ✅ Hamburger menu opens and works
- ✅ All original page content is still there
- ✅ No duplicate headers or logos

## WHAT WENT WRONG BEFORE

### ❌ MISTAKE: Copied entire state-requirements.html page
- This overwrote all unique content on 72 pages
- Destroyed 12 hours of work
- Lost topographic animations, state certifications, educational content

### ✅ CORRECT: Copy only header/CSS/JS, preserve all unique content

## REFERENCE FILE
The working example: **state-requirements.html**
- This page has everything working correctly
- Full screen video
- Logo shrinks on scroll
- Hamburger menu with TOPO submenu
- All features we want on every page

## NEVER FORGET
**ONLY FIX THE TOP OF THE PAGE (header, video, menu)**
**NEVER TOUCH THE MAIN CONTENT**
**EACH PAGE HAS UNIQUE CONTENT THAT MUST BE PRESERVED**

---
Last Updated: 2025-11-20
Created after destroying 72 pages by not following instructions
