# State Wind Load Requirements Page Creation Checklist

**USE THIS CHECKLIST FOR EVERY NEW STATE PAGE**

## Pre-Creation Checklist

- [ ] Read `docs/STATE_REQUIREMENTS_RESEARCH.md` for accurate state data
- [ ] Read `docs/CSS_COLOR_STANDARDS.md` for color scheme requirements
- [ ] Read `docs/BUSINESS_STRATEGY_SEO.md` for SEO and CTA requirements
- [ ] Review Florida and Texas pages as templates

## Page Creation Steps

### 1. File Naming
- [ ] Use format: `{state-name}-wind-load-requirements.html` (all lowercase, hyphens)
- [ ] Examples: `louisiana-wind-load-requirements.html`, `california-wind-load-requirements.html`

### 2. Content Requirements (800-1200 words minimum)

#### Hero Section
- [ ] State-specific gradient colors (reference Florida/Texas)
- [ ] Hero padding: `10rem 2rem 5rem` (to clear fixed header)
- [ ] State name as H1
- [ ] Brief subtitle with building code and ASCE version

#### Main Content Sections
- [ ] **Building Code Overview** (H2) - Current code edition, effective date
- [ ] **ASCE 7 Version** (H2) - Specific version used
- [ ] **Wind Speed Requirements** (H2) - Risk categories, wind speeds by zone
- [ ] **Components & Cladding (C&C)** (H2) - If applicable for this state
- [ ] **Professional Engineer (PE) Requirements** (H2) - Seal requirements
- [ ] **Special Requirements** (H2) - HVHZ, coastal zones, county-specific (if applicable)
- [ ] **Product Approval Systems** (H2) - FL Numbers, NOA, TDI (if applicable)
- [ ] **Key Takeaways** (H2) - Bulleted summary

#### Visual Elements
- [ ] Gradient info boxes for important callouts
- [ ] Tables for wind speed by risk category
- [ ] Icons/badges for special zones (HVHZ, coastal, etc.)
- [ ] Consistent color scheme matching state theme

### 3. Header Structure (CRITICAL - ALWAYS INCLUDE)

```html
<!-- Header -->
<header class="main-header">
    <div class="header-container">
        <div class="logo-hamburger-row">
            <a href="index.html" class="logo">
                <img src="images/windloadsolutions-logo.svg" alt="Wind Load Solutions" class="logo-image">
            </a>
        </div>
        <div class="header-right">
            <a href="state-requirements.html" class="header-cta">State Requirements</a>
            <a href="asce-7-standards.html" class="header-cta">ASCE 7</a>
            <a href="resources.html" class="header-cta">Resources</a>
            <button class="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<!-- Navigation Overlay -->
<div class="nav-overlay"></div>

<!-- Navigation Menu -->
<nav class="nav-links">
    <a href="index.html">Home</a>
    <a href="state-requirements.html">State Requirements</a>
    <a href="asce-7-standards.html">ASCE 7 Standards</a>
    <!-- ... full nav menu ... -->
</nav>
```

### 4. CSS Requirements

- [ ] Include full header CSS from index.html (lines 66-314 from fix_state_page_headers.js)
- [ ] State-specific hero gradient
- [ ] Responsive design (mobile-first)
- [ ] WCAG AA contrast ratios (4.5:1 minimum)
- [ ] Glassmorphism effects where appropriate

### 5. JavaScript Requirements

- [ ] Header scroll effect
- [ ] Hamburger menu toggle
- [ ] Navigation overlay
- [ ] Sub-menu toggle functionality
- [ ] Font Awesome CDN link

### 6. SEO Requirements

- [ ] Meta title: "{State} Wind Load Requirements - ASCE 7 Standards & Building Code | Wind Load Solutions"
- [ ] Meta description: 150-160 characters with state-specific keywords
- [ ] Keywords: state name, wind load, ASCE 7 version, building code
- [ ] Open Graph tags
- [ ] Schema markup
- [ ] Internal links to other state pages
- [ ] Internal links to resources, ASCE 7 standards, calculators

### 7. CTA Requirements

- [ ] WindLoadCalc.com promo section before footer
- [ ] "Professional ASCE 7 wind load calculator software" mention
- [ ] Link to BIP (Building Intelligence Platform)
- [ ] "24+ Years of Excellence" in footer

### 8. Post-Creation Steps

- [ ] **UPDATE state-requirements.html** - Change state card `href="#"` to `href="{state}-wind-load-requirements.html"`
- [ ] Test page loads correctly
- [ ] Test header navigation works
- [ ] Test hamburger menu functionality
- [ ] Test responsive design on mobile
- [ ] Verify all internal links work
- [ ] Check for typos and grammar
- [ ] Run spell check
- [ ] Git commit with proper message format

## Critical Mistakes to Avoid

❌ **DO NOT** forget to update the state card link in state-requirements.html
❌ **DO NOT** use insufficient hero padding (must be 10rem top, not 5rem)
❌ **DO NOT** forget the WindLoad.Solutions logo in header
❌ **DO NOT** forget hamburger menu navigation
❌ **DO NOT** use incorrect ASCE 7 version for the state
❌ **DO NOT** create pages under 800 words
❌ **DO NOT** forget WindLoadCalc.com CTA section
❌ **DO NOT** use poor color contrast (must meet WCAG AA)
❌ **DO NOT** forget to commit changes to git

## State-Specific Data Sources

### 10 States with C&C Certification Requirements:

1. **Florida** - FBC 8th Edition (2023), ASCE 7-22, FL Numbers, NOA, HVHZ
2. **Texas** - 2021 IBC, ASCE 7-16, TDI evaluations, WPI-8 cert
3. **Louisiana** - IRC 2015/2021, ASCE 7-10/16, coastal parishes PE required
4. **North Carolina** - 2018 NC Code, ASCE 7-16, high wind zones, ICC 600
5. **South Carolina** - 2021 SC Code, ASCE 7-10/16, coastal PE required
6. **Georgia** - 2020 IBC, ASCE 7-16, PE/SE seal
7. **Hawaii** - 2018 HI Code, ASCE 7-16 + Appendix W, corrosion-resistant hardware
8. **New York** - 2020 NY Code, ASCE 7-16, PE/RA seal
9. **Virginia** - 2021 VA Code, ASCE 7-16, coastal enhanced requirements
10. **California** - 2022 CBC, ASCE 7-16 (transitioning to ASCE 7-22 in 2025)

### Reference Documents:
- `docs/STATE_REQUIREMENTS_RESEARCH.md` - Complete state data
- `docs/CSS_COLOR_STANDARDS.md` - Color standards
- `docs/BUSINESS_STRATEGY_SEO.md` - SEO and business requirements
- `docs/SESSION_STARTUP_CHECKLIST.md` - General session requirements

## Gradient Color Themes by State

Use these as starting points (customize as needed):

- **Florida**: Orange-blue (tropical) - `#ff6b35, #ff8c42, #ffa07a, #0ea5e9, #0284c7`
- **Texas**: Burnt orange-navy - `#c2410c, #ea580c, #fb923c, #1e3a8a, #1e40af`
- **Louisiana**: Purple-gold - `#6b21a8, #7c3aed, #a78bfa, #f59e0b, #d97706`
- **North Carolina**: Carolina blue - `#0ea5e9, #0284c7, #0369a1, #1e40af, #1e3a8a`
- **South Carolina**: Garnet-navy - `#b91c1c, #dc2626, #ef4444, #1e40af, #1e3a8a`
- **Georgia**: Red-black-gold - `#dc2626, #991b1b, #1f2937, #f59e0b, #d97706`
- **Hawaii**: Tropical greens-blues - `#10b981, #14b8a6, #06b6d4, #0ea5e9, #3b82f6`
- **New York**: Navy-orange - `#1e3a8a, #1e40af, #3b82f6, #ea580c, #f97316`
- **Virginia**: Navy-red - `#1e40af, #3b82f6, #dc2626, #ef4444, #f87171`
- **California**: Gold-navy - `#f59e0b, #f97316, #fb923c, #1e40af, #3b82f6`

## Template Structure

```
1. Header (logo + navigation)
2. Hero Section (state-specific gradient)
3. Main Content Container
   - Building Code Overview
   - ASCE 7 Version
   - Wind Speed Requirements (table)
   - C&C Requirements (if applicable)
   - PE Seal Requirements
   - Special Requirements (HVHZ, coastal, etc.)
   - Key Takeaways
4. WindLoadCalc.com CTA Section
5. Footer
6. JavaScript (header scroll, menu toggle)
```

## After Creating Page - ALWAYS DO THIS:

1. Open `state-requirements.html`
2. Find the state card (search for state name)
3. Change `href="#"` to `href="{state}-wind-load-requirements.html"`
4. Test the link works
5. Commit both files together

---

**Last Updated:** 2025-01-21
**Purpose:** Ensure every state page is created consistently with all required elements and proper linking
