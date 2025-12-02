# WindLoad Solutions - Project Context

> This document preserves critical project knowledge in case Claude session logs are lost.

---

## Site Architecture

| Site | Domain | Purpose | Hosting |
|------|--------|---------|---------|
| SEO/Content Site | windload.solutions | Educational content, SEO, lead generation | GitHub Pages / Vercel |
| Product Site | windloadcalc.com | Calculator software, shop, purchases | Separate repo |

**Relationship:** windload.solutions drives traffic via SEO → funnels to windloadcalc.com for conversions

---

## Repository Structure

```
windload-solutions-parent/
├── .claude/
│   ├── memory.md          # Persistent notes (git troubleshooting)
│   └── settings.local.json
├── docs/
│   └── session-notes-*.md # Session documentation
├── cities/                # 100 city-specific pages
│   └── [city]-wind-load-requirements.html
├── [pillar-pages].html    # Main SEO content
├── sitemap.xml
└── [utility scripts].js/.sh
```

---

## Content Inventory

### Pillar Pages (High Priority SEO)
1. `complete-guide-wind-load-calculations.html` - Comprehensive wind load guide
2. `cc-vs-mwfrs-guide.html` - C&C vs MWFRS comparison
3. `asce-7-22-tornado-loads-chapter-32-guide.html` - Chapter 32 tornado loads (UNIQUE)
4. `building-envelope-wind-loads-guide.html` - Wall C&C, zones 4/5
5. `roof-wind-uplift-guide.html` - Roof C&C, zones 1/2/3
6. `window-door-wind-pressure-guide.html` - DP ratings, impact glazing

### City Pages (100 total)
All in `/cities/` folder with pattern: `[city]-wind-load-requirements.html`
- Each has FAQ schema (4 questions)
- Covers wind speed, building code, exposure, special considerations

### State Pages
- Florida, Texas, Georgia, Louisiana, North Carolina, South Carolina, Virginia, New York, Hawaii, California
- Plus `other-states-wind-load-requirements.html`

### Topic Clusters
- **HVHZ:** Miami-Dade, Broward, general HVHZ guides
- **Exposure Categories:** B, C, D, transition zones, selection guide
- **Risk Categories:** 1, 2, 3, 4, selection guide
- **Topographic:** Flat, escarpment, 2D ridge, 3D hill
- **Design Methods:** ASD, LRFD, nominal, ultimate, conversions

---

## SEO Strategy

### Competitive Advantage
1. **Chapter 32 Tornado Loads** - NO competitor covers this (first in ASCE 7-22)
2. **100 City Pages** - Local SEO domination
3. **FAQ Schema** - All pages have structured data for featured snippets
4. **Comprehensive Pillar Content** - Deeper than any competitor

### Schema Markup Used
- FAQPage (all city pages, pillar pages)
- Article (pillar pages)
- BreadcrumbList (pillar pages)

### Internal Linking Strategy
- City pages link to state pages
- State pages link to pillar content
- Pillar pages cross-link related topics
- All pages have CTA to windloadcalc.com

---

## Technical Standards

### CRITICAL: Engineering Accuracy
**All technical content must be accurate per ASCE 7-22.**
- No fake or assumed values
- Wind speeds must match ASCE 7 maps
- Zone definitions must be code-accurate
- This is professional engineering content

### Code Standards
- ASCE 7-16 (previous edition, still referenced)
- ASCE 7-22 (current edition)
- Florida Building Code (HVHZ requirements)
- IBC (International Building Code)

### Design Patterns
- Consistent color themes per topic area
- Purple = Tornado content
- Blue = Building envelope
- Red = Roof/uplift
- Cyan = Windows/doors
- Mobile-responsive design
- Font Awesome icons throughout

---

## Development Notes

### Environment
- Windows system
- Python NOT available (Windows Store alias issue)
- Use Node.js for batch processing scripts
- Git Bash for command line

### Git History
- History was reset on 2025-11-25 due to 2.6GB bloat
- If push fails with HTTP 500, check `.git` folder size
- See `.claude/memory.md` for reset instructions

### Common Tasks
```bash
# Deploy changes
git add -A && git commit -m "message" && git push

# Check status
git status

# View recent commits
git log --oneline -5
```

---

## Naming Conventions

### File Names
- Pillar pages: `[topic]-guide.html`
- City pages: `cities/[city]-wind-load-requirements.html`
- State pages: `[state]-wind-load-requirements.html`

### URLs (in sitemap)
- No `.html` extension in sitemap URLs
- Use hyphens, not underscores
- Lowercase only

---

## Future Opportunities

### Content Expansion
- More city pages for high-wind regions
- Additional state-specific HVHZ content
- Solar panel wind load guide
- Sign/billboard wind load guide

### Technical Improvements
- Add pillar pages to articles.html navigation cards
- Increase internal linking density
- Add more FAQ questions to existing pages
- Create topic-specific landing pages

---

## Key Contacts / Resources

- ASCE 7-22 Standard (purchase required for full text)
- ASCE Hazard Tool: https://asce7hazardtool.online/
- Florida Building Code: https://floridabuilding.org/
- ICC 500 (Storm Shelters): Referenced in tornado content

---

## Session History Summary

### 2025-11-30
- Created Chapter 32 tornado pillar page
- Added FAQ schema to all 100 city pages
- Created 3 pillar pages (envelope, roof, windows)
- All committed and pushed

### 2025-11-29
- Created city pages batch
- Added FAQ schema to initial 32 cities
- Navigation improvements

### 2025-11-25
- Git history reset (was 2.6GB)
- Initial pillar content created

---

*Last updated: 2025-11-30*
