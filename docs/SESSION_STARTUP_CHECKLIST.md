# SESSION STARTUP CHECKLIST

## 🚨 READ THIS FIRST - EVERY SESSION

Before doing ANY work, you MUST read these documents in order:

### 1. CRITICAL_INSTRUCTIONS_READ_FIRST.md
**Purpose**: Understand what went wrong previously and what NOT to do
**Key Points**: Never overwrite files, always backup, test on one page first

### 2. BUSINESS_STRATEGY_SEO.md
**Purpose**: Understand the business model and conversion strategy
**Key Points**:
- WindLoad.Solutions = Parent company (educational authority)
- WindLoadCalc.com = DBA (product/sales site)
- EVERY page must include CTAs to WindLoadCalc.com
- 800-1200 words per page for SEO
- Preserve WordPress URLs

### 3. CSS_COLOR_STANDARDS.md
**Purpose**: Prevent accessibility failures and unreadable text
**Key Points**:
- NEVER use light text on light backgrounds
- NEVER use dark text on dark backgrounds
- ALWAYS check contrast ratios (4.5:1 minimum)
- White text ONLY on dark backgrounds
- Dark text ONLY on light backgrounds

### 4. DESIGN_SYSTEM.md
**Purpose**: Maintain consistent Web 3.0 styling across all pages
**Key Points**:
- Use index.html as ONLY design reference
- Glassmorphism effects with backdrop-filter
- Gradient backgrounds for hero sections
- Rounded corners (border-radius: 50px for buttons)

### 5. NEVER_OVERWRITE_FILES.md
**Purpose**: File protection rules
**Key Points**:
- Never modify images, animations, or assets
- Never touch favicon
- Always ask before overwriting existing files

---

## MANDATORY CHECKS BEFORE ANY CODING

### Before Writing HTML:
- [ ] Have I read all 5 critical docs above?
- [ ] Do I understand the WindLoadCalc.com conversion strategy?
- [ ] Do I know the correct color contrast rules?
- [ ] Am I using index.html as my design reference?

### Before Writing CSS:
- [ ] Is this text color readable on this background? (Check CSS_COLOR_STANDARDS.md)
- [ ] Am I using approved color combinations?
- [ ] Does this match the DESIGN_SYSTEM.md patterns?

### Before Creating Content:
- [ ] Does this page include CTAs to WindLoadCalc.com?
- [ ] Is the content 800-1200 words for SEO?
- [ ] Are there at least 2-3 conversion points per page?
- [ ] Is the content educational AND sales-focused?

### Before Committing:
- [ ] Did I run auto_backup.sh?
- [ ] Did I test the page in a browser (if user can)?
- [ ] Are all WindLoadCalc.com links present and functional?
- [ ] Is all text readable (no contrast failures)?

---

## COMMON FAILURE MODES TO AVOID

### 1. Forgetting WindLoadCalc.com CTAs
**Problem**: Pages don't convert visitors to customers
**Solution**: Every page needs:
- Contextual inline links mentioning "wind load calculator"
- Mid-content CTA section with gradient background
- Pre-footer CTA section
- All linking to https://windloadcalc.com

### 2. Poor Color Contrast
**Problem**: Text is unreadable, fails accessibility
**Solution**:
- White text ONLY on dark backgrounds (#1f2937, #0018ff, etc.)
- Dark text (#1f2937, #4b5563) ONLY on light backgrounds (white, #f8fafc)
- Check CSS_COLOR_STANDARDS.md before every color choice

### 3. Thin Content
**Problem**: Pages don't rank in search engines
**Solution**: Every page needs 800-1200 words of quality educational content with proper H2/H3 structure

### 4. Inconsistent Design
**Problem**: Site looks unprofessional
**Solution**: ONLY use index.html as design reference, never copy from other pages

### 5. Overwriting User Files
**Problem**: Destroys user's work
**Solution**: Never touch images/, animations, or any file the user explicitly worked on

---

## IF YOU MAKE A MISTAKE

1. **Stop immediately**
2. **Don't try to hide it or fix it without telling user**
3. **Explain what happened honestly**
4. **Restore from backup if needed** (`git checkout` or use backup folder)
5. **Learn from it** - update documentation if needed

---

## QUICK DECISION TREE

```
Am I about to write HTML/CSS?
├─ YES → Did I read CSS_COLOR_STANDARDS.md?
│   ├─ NO → STOP. Read it now.
│   └─ YES → Continue
└─ NO → Proceed

Am I creating a new page?
├─ YES → Does it include WindLoadCalc.com CTAs?
│   ├─ NO → STOP. Add them.
│   └─ YES → Continue
└─ NO → Proceed

Am I using a color?
├─ YES → Is the contrast ratio ≥ 4.5:1?
│   ├─ NO → STOP. Choose different color.
│   └─ YES → Continue
└─ NO → Proceed

Am I about to modify an image or animation?
├─ YES → STOP. Never do this.
└─ NO → Proceed
```

---

## SUCCESS CRITERIA

A successful session means:
✅ All documentation read and understood
✅ All pages include WindLoadCalc.com conversion elements
✅ All text is readable (proper contrast)
✅ All content is 800-1200 words
✅ Design matches index.html style
✅ Work is backed up and committed
✅ No user files were overwritten
✅ User is happy with results

---

**Created**: 2025-11-21
**Must Read**: Every session startup, no exceptions
