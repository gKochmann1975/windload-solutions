# COMPLETE RESTORATION PLAN
## All Pages Destroyed and How to Restore Them

---

## REFERENCE FILES LOCATION

### Topographic Animation Files (Source):
- `/c/windload-solutions/webapp/assets/topographic_flat_terrain.html`
- `/c/windload-solutions/webapp/assets/topographic_escarpment.html`
- `/c/windload-solutions/webapp/assets/topographic_2d_ridge.html`
- `/c/windload-solutions/webapp/assets/topographic_3d_hill.html`

### State Requirements Research:
- `/c/windload-solutions-parent/STATE_REQUIREMENTS_RESEARCH.md`

### Working Header/Video Template:
- `state-requirements.html` (working perfectly)

---

## PAGES DESTROYED (72 Total)

### Group 1: Topographic Pages (9 pages)
**Animation Pages (4)** - Need animation from /webapp/assets/
1. `topographic-flat-terrain-animation.html` → Copy content from `topographic_flat_terrain.html`
2. `topographic-escarpment-animation.html` → Copy content from `topographic_escarpment.html`
3. `topographic-2d-ridge-animation.html` → Copy content from `topographic_2d_ridge.html`
4. `topographic-3d-hill-animation.html` → Copy content from `topographic_3d_hill.html`

**Regular Topographic Pages (5)** - Need educational content
5. `topographic-flat-terrain.html` - Educational content about flat terrain
6. `topographic-escarpment.html` - Educational content about escarpments
7. `topographic-2d-ridge.html` - Educational content about 2D ridges
8. `topographic-3d-hill.html` - Educational content about 3D hills
9. `topographic-effects-wind-loads.html` - Overview page

**Content for Regular Topo Pages:**
- Explain topographic factor Kzt
- ASCE 7 provisions for each terrain type
- When to apply topographic multiplier
- Calculation examples
- Design considerations

---

### Group 2: State Pages (11 pages)
**10 States with Specific Certification Requirements:**
1. `states/florida-wind-load-requirements.html`
   - Content: FBC 8th Edition, ASCE 7-22
   - Miami-Dade: 175 mph, NOA requirements
   - Broward: 170 mph
   - FL Number system, TAS testing

2. `states/texas-wind-load-requirements.html`
   - Content: 2021 IBC, ASCE 7-16
   - TDI evaluations, WPI-8 certification
   - TWIA coastal requirements

3. `states/louisiana-wind-load-requirements.html`
   - Content: ASCE 7-10/7-16
   - Coastal parish requirements
   - Wind Zone III designation

4. `states/north-carolina-wind-load-requirements.html`
   - Content: 2018 NC Code, ASCE 7-16
   - ICC 600 compliance
   - High wind counties

5. `states/south-carolina-wind-load-requirements.html`
   - Content: 2021 SC Code, ASCE 7-10/7-16
   - County wind maps
   - Coastal requirements

6. `states/georgia-wind-load-requirements.html`
   - Content: 2020 IBC, ASCE 7-16
   - PE/SE seal requirements

7. `states/hawaii-wind-load-requirements.html`
   - Content: 2018 HI Code, ASCE 7-16 + Appendix W
   - Wind geodatabase
   - Corrosion requirements

8. `states/new-york-wind-load-requirements.html`
   - Content: 2020 NY Code, ASCE 7-16
   - PE/RA seal requirements

9. `states/virginia-wind-load-requirements.html`
   - Content: 2021 VA Code, ASCE 7-16
   - Coastal requirements

10. `states/california-wind-load-requirements.html`
    - Content: 2022 CBC (ASCE 7-16), 2025 CBC (ASCE 7-22)
    - Seismic interaction
    - PE/SE requirements

**Generic State Page:**
11. `states/other-states-wind-load-requirements.html`
    - Content: 40 states following standard IBC/IRC
    - ASCE 7 versions by IBC edition
    - General PE requirements
    - List of all 40 states

---

### Group 3: Educational Pages (40+ pages)
**ASCE 7 Standards:**
- `asce-7-standards.html` - Complete ASCE 7 guide (7-10, 7-16, 7-22)
- `asce-7-16-wind-speed-maps.html`
- `asce-7-22-wind-speed-maps.html`
- `basic-wind-speed-explained.html`
- `3-second-gust-wind-speed.html`

**Wind Load Design Methods:**
- `asd-allowable-stress-design-wind-loads.html`
- `lrfd-load-resistance-factor-design-wind-loads.html`
- `asd-lrfd-conversion-guide.html`
- `nominal-wind-loads-explained.html`
- `ultimate-wind-loads-explained.html`
- `nominal-vs-ultimate-wind-loads.html`

**Directional Factors:**
- `directional-vs-non-directional-wind-loads.html`
- `wind-directionality-factor-guide.html`
- `kd-factor-explained.html`

**Exposure Categories:**
- `wind-exposure-categories-guide.html`
- `exposure-category-selection-guide.html`
- `exposure-b-suburban-residential-wind-loads.html`
- `exposure-c-open-terrain-wind-loads.html`
- `exposure-d-coastal-ocean-wind-loads.html`
- `exposure-transition-zones.html`

**Risk Categories:**
- `risk-categories-wind-loads-guide.html`
- `risk-category-selection-guide.html`
- `risk-category-1-agricultural-buildings.html`
- `risk-category-2-standard-occupancy.html`
- `risk-category-3-assembly-buildings.html`
- `risk-category-4-essential-facilities.html`

**HVHZ (High Velocity Hurricane Zone):**
- `hvhz-high-velocity-hurricane-zone-guide.html`
- `hvhz-florida-requirements.html`
- `hvhz-product-approvals.html`
- `hvhz-vs-standard-wind-zones.html`
- `miami-dade-hvhz-requirements.html`
- `broward-county-hvhz-requirements.html`

**Specialty Topics:**
- `solar-wind-loads.html`
- `specialty-structures-wind-loads.html`
- `wind-speed-by-location.html`
- `wind-speed-zones-asce-7-guide.html`

**Site Pages:**
- `about.html`
- `articles.html`
- `resources.html`
- `contact.html`

---

### Group 4: Calculator Pages (NOT touched - preserve if intact)
- `asce-7-wind-load-calculator.html`
- `asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html`
- `components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html`
- `mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html`
- `ultimate-nominal-asce-7-wind-load-pressure-calculator.html`
- And other long-named calculator pages

---

---

## ADDITIONAL TASKS FROM IMPLEMENTATION_STATUS.md

### Fix state-requirements.html Filter Buttons
**Current Issue:** Filter buttons don't work (All States, High-Wind, HVHZ, PE Required, Nominal Allowed)
**Solution:** Add JavaScript to filter/show state cards based on button clicked

### Update State Cards with Correct Data
Use research from STATE_REQUIREMENTS_RESEARCH.md to update each state card:
- Correct ASCE 7 version
- Building code edition
- PE seal requirements
- Special notes (HVHZ, TDI, etc.)

### Fix State Card Links
**Current Issue:** State cards jump to top of same page
**Solution:** Update href links to point to actual state pages in `/states/` folder

---

## DETAILED CONTENT REQUIREMENTS

### Components & Cladding Page
**File:** `components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html`
**Content Needed:**
- Definition of C&C (windows, doors, roofing, siding)
- How C&C differs from MWFRS
- ASCE 7 calculation methodology for C&C
- Pressure coefficients (GCp)
- Effective wind areas
- Zone designations (4, 5, etc.)
- Design examples
- When PE certification is required
- State-specific C&C requirements (FL, TX, etc.)

### MWFRS Page
**File:** `mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html`
**Content Needed:**
- Definition of MWFRS (Main Wind Force Resisting System)
- Structural framing elements
- How MWFRS differs from C&C
- ASCE 7 calculation methodology
- Wind pressure distribution
- Windward/leeward pressures
- Design examples
- Structural requirements

### Free Resources Page
**File:** `resources.html`
**Content Needed:**
- Free wind load calculation resources
- Educational guides and templates
- Links to ASCE publications
- State code references
- Free tools and calculators
- Excel templates
- Educational videos
- Download links

---

## RESTORATION PROCESS

### Phase 1: Create Reference Content Documents
1. For each topographic page, extract educational content structure
2. For each state page, create content from STATE_REQUIREMENTS_RESEARCH.md
3. For educational pages, create basic content framework

### Phase 2: Extract Components from state-requirements.html
Extract these sections ONLY:
- `<style>` ... `</style>` (all CSS)
- `<header>` ... `</header>` (header HTML)
- `<div class="nav-overlay"></div>` (navigation overlay)
- `<nav class="nav-links">` ... `</nav>` (navigation menu)
- `<script>` ... `</script>` (all JavaScript)

### Phase 3: Create Restoration Script
Script logic:
```
For each destroyed page:
1. Read original page title/description (still intact)
2. Get appropriate content based on page type:
   - Topographic animation → from /webapp/assets/
   - Topographic regular → create educational content
   - State page → from STATE_REQUIREMENTS_RESEARCH.md
   - Educational → create framework with title/description
3. Combine: header template + unique content
4. Create backup before writing
5. Write restored page
6. Verify in browser
```

### Phase 4: Test on ONE Page First
- Pick: `topographic-flat-terrain-animation.html`
- Restore with animation from /webapp/assets/
- Verify it works
- Get user approval
- Then proceed with rest

---

## BACKUP STRATEGY

Before ANY restoration:
```bash
# Create timestamped backup of current state
mkdir -p backups/before_restoration_$(date +%Y%m%d_%H%M%S)
cp *.html backups/before_restoration_$(date +%Y%m%d_%H%M%S)/
cp states/*.html backups/before_restoration_$(date +%Y%m%d_%H%M%S)/
```

After EACH successful page:
```bash
git add filename.html
git commit -m "Restored: filename.html"
```

---

## WHAT NOT TO TOUCH

### Already Working (DO NOT MODIFY):
- `index.html` - Working perfectly
- `state-requirements.html` - Working perfectly, use as template

### Preserve If Intact:
- All calculator pages (check if they still have unique content)
- Any page that still has its original content

---

*Created: 2025-11-20*
*After destroying 72 pages by copying entire page instead of just header*
