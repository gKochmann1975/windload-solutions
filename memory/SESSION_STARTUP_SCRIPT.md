# Session Startup Script - Wind Load Solutions Project

**RUN THIS AT THE START OF EVERY NEW SESSION**

## Purpose
This script ensures Claude Code reviews all critical project documentation before starting work, preventing repeated mistakes and maintaining consistency.

## Required Documents to Read

### 1. Core Project Standards (ALWAYS READ)

```bash
# Read these files in order at session start:

1. docs/SESSION_STARTUP_CHECKLIST.md
2. docs/CSS_COLOR_STANDARDS.md
3. docs/BUSINESS_STRATEGY_SEO.md
4. docs/STATE_REQUIREMENTS_RESEARCH.md
5. memory/STATE_PAGE_CREATION_CHECKLIST.md
```

### 2. Quick Command for Claude Code

When starting a new session, use this command:

```
Read these files in order:
1. c:\windload-solutions-parent\docs\SESSION_STARTUP_CHECKLIST.md
2. c:\windload-solutions-parent\docs\CSS_COLOR_STANDARDS.md
3. c:\windload-solutions-parent\docs\BUSINESS_STRATEGY_SEO.md
4. c:\windload-solutions-parent\docs\STATE_REQUIREMENTS_RESEARCH.md
5. c:\windload-solutions-parent\memory\STATE_PAGE_CREATION_CHECKLIST.md
```

## What Each Document Contains

### SESSION_STARTUP_CHECKLIST.md
- General project context
- Communication standards
- Common mistakes to avoid
- Commit message format

### CSS_COLOR_STANDARDS.md
- WCAG AA accessibility requirements (4.5:1 contrast ratio)
- Approved color palettes
- Gradient standards
- Typography standards
- Glassmorphism design patterns

### BUSINESS_STRATEGY_SEO.md
- SEO requirements (800-1200 words per page)
- WindLoadCalc.com CTA placement
- Internal linking strategy
- Meta tag requirements
- Schema markup standards

### STATE_REQUIREMENTS_RESEARCH.md
- **CRITICAL: Accurate state-by-state data**
- Building code editions by state
- ASCE 7 versions by state
- PE seal requirements
- HVHZ designations
- Product approval systems (FL Numbers, NOA, TDI)
- County-specific requirements (Miami-Dade 175 mph, Broward 170 mph, etc.)

### STATE_PAGE_CREATION_CHECKLIST.md
- Step-by-step checklist for creating new state pages
- Common mistakes to avoid
- Post-creation verification steps
- **CRITICAL: Remember to update state-requirements.html links!**

## Current Project Status

### Completed State Pages:
- ✅ Florida (florida-wind-load-requirements.html) - LINKED
- ✅ Texas (texas-wind-load-requirements.html) - LINKED

### Pending State Pages (Priority Order):
1. Louisiana
2. North Carolina
3. South Carolina
4. Georgia
5. Hawaii
6. New York
7. Virginia
8. California

### Common Mistakes Already Made (DON'T REPEAT):
1. ❌ Forgetting to update state card links in state-requirements.html after creating new pages
2. ❌ Using insufficient hero padding (5rem instead of 10rem) causing header overlap
3. ❌ Not including WindLoad.Solutions logo in header
4. ❌ Forgetting hamburger menu navigation
5. ❌ Using wrong ASCE 7 version for states
6. ❌ Poor search box UX (placing it far from filterable content)

## Session Startup Verification

After reading all documents, verify you understand:

- [ ] Color contrast must meet WCAG AA (4.5:1 ratio)
- [ ] Every state page needs 800-1200 words
- [ ] Hero sections need `padding: 10rem 2rem 5rem;`
- [ ] WindLoadCalc.com CTA must appear before footer
- [ ] State card links MUST be updated after creating new page
- [ ] Commit messages use specific format with Claude Code attribution
- [ ] ASCE 7 versions vary by state (check STATE_REQUIREMENTS_RESEARCH.md)
- [ ] HVHZ only applies to Miami-Dade (175 mph) and Broward (170 mph) in Florida
- [ ] Texas uses TDI evaluations, not FL Numbers
- [ ] California transitions from ASCE 7-16 to ASCE 7-22 in January 2026

## Quick Reference: Critical Data

### HVHZ States:
- Florida ONLY (Miami-Dade 175 mph, Broward 170 mph)
- Texas has coastal HVHZ-like areas but not official HVHZ designation

### Product Approval Systems:
- **Florida:** FL Numbers + NOA (Notice of Acceptance)
- **Texas:** TDI (Texas Department of Insurance) evaluations - VOLUNTARY
- **All other states:** No special product approval system

### C&C Certification States (10 total):
FL, TX, LA, NC, SC, GA, HI, NY, VA, CA

### ASCE 7 Version Quick Reference:
- **ASCE 7-22:** Florida (FBC 8th Edition 2023), California (2025 CBC)
- **ASCE 7-16:** Most states using 2018/2021 IBC
- **ASCE 7-10:** Some states still using 2015 IBC

## Template Files to Reference

When creating new state pages, use these as templates:
- `florida-wind-load-requirements.html` - Full-featured example with HVHZ
- `texas-wind-load-requirements.html` - Example with TDI and coastal requirements

## Git Workflow

Every commit should:
1. Have descriptive commit message
2. Include Claude Code attribution footer:
```
🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```
3. Use proper formatting (see SESSION_STARTUP_CHECKLIST.md)

## Workflow for Creating New State Pages

1. Read STATE_REQUIREMENTS_RESEARCH.md for state data
2. Use STATE_PAGE_CREATION_CHECKLIST.md as step-by-step guide
3. Create new HTML file using Florida/Texas as template
4. **IMMEDIATELY update state-requirements.html card link**
5. Test page loads and links work
6. Git commit BOTH files together
7. Move to next state

---

**IMPORTANT:** This document should be read at the start of EVERY new Claude Code session to maintain project consistency and avoid repeating past mistakes.

**Last Updated:** 2025-01-21
