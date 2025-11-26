# COMPLETE TODO LIST - EVERY SINGLE TASK

---

## PHASE 1: SETUP & PREPARATION

### 1.1 Initialize Git Repository
- [ ] Run `git init` in windload-solutions-parent folder
- [ ] Create .gitignore file
- [ ] Add initial commit with all current files

### 1.2 Create Backup System
- [ ] Create `backups/` directory
- [ ] Create timestamped backup of ALL current HTML files
- [ ] Create backup script: `auto_backup.sh`
- [ ] Test backup script works

### 1.3 Extract Template Components from state-requirements.html
- [ ] Extract complete `<style>` section (all CSS)
- [ ] Extract `<header>` element (header HTML)
- [ ] Extract `<div class="nav-overlay"></div>`
- [ ] Extract `<nav class="nav-links">` (full navigation menu)
- [ ] Extract `<script>` section (all JavaScript)
- [ ] Save these as separate template files for reference

---

## PHASE 2: TOPOGRAPHIC PAGES (9 PAGES)

### 2.1 Topographic Animation Pages (4 pages)

#### Page 1: topographic-flat-terrain-animation.html
- [ ] Backup current file
- [ ] Read topographic_flat_terrain.html from `/c/windload-solutions/webapp/assets/`
- [ ] Extract the animation code (SVG, JavaScript)
- [ ] Extract title: "ASCE 7 WIND LOAD - FLAT TERRAIN"
- [ ] Combine: state-requirements.html template + animation content
- [ ] Verify video header works
- [ ] Verify animation works
- [ ] Verify hamburger menu works
- [ ] Git commit

#### Page 2: topographic-escarpment-animation.html
- [ ] Backup current file
- [ ] Read topographic_escarpment.html from `/c/windload-solutions/webapp/assets/`
- [ ] Extract the animation code
- [ ] Extract title
- [ ] Combine: template + animation content
- [ ] Test all features work
- [ ] Git commit

#### Page 3: topographic-2d-ridge-animation.html
- [ ] Backup current file
- [ ] Read topographic_2d_ridge.html from `/c/windload-solutions/webapp/assets/`
- [ ] Extract the animation code
- [ ] Extract title
- [ ] Combine: template + animation content
- [ ] Test all features work
- [ ] Git commit

#### Page 4: topographic-3d-hill-animation.html
- [ ] Backup current file
- [ ] Read topographic_3d_hill.html from `/c/windload-solutions/webapp/assets/`
- [ ] Extract the animation code
- [ ] Extract title
- [ ] Combine: template + animation content
- [ ] Test all features work
- [ ] Git commit

### 2.2 Topographic Educational Pages (5 pages)

#### Page 5: topographic-flat-terrain.html
- [ ] Backup current file
- [ ] Create content about flat terrain (Kzt = 1.0)
- [ ] Explain when topographic factor doesn't apply
- [ ] Add ASCE 7 references
- [ ] Combine: template + educational content
- [ ] Test features
- [ ] Git commit

#### Page 6: topographic-escarpment.html
- [ ] Backup current file
- [ ] Create content about escarpments
- [ ] Explain Kzt calculation for escarpments
- [ ] Add ASCE 7 Figure 26.8-1 reference
- [ ] Add design examples
- [ ] Combine: template + content
- [ ] Test features
- [ ] Git commit

#### Page 7: topographic-2d-ridge.html
- [ ] Backup current file
- [ ] Create content about 2D ridges
- [ ] Explain Kzt calculation for ridges
- [ ] Add ASCE 7 provisions
- [ ] Add design examples
- [ ] Combine: template + content
- [ ] Test features
- [ ] Git commit

#### Page 8: topographic-3d-hill.html
- [ ] Backup current file
- [ ] Create content about 3D hills
- [ ] Explain Kzt calculation for hills
- [ ] Add ASCE 7 provisions
- [ ] Add design examples
- [ ] Combine: template + content
- [ ] Test features
- [ ] Git commit

#### Page 9: topographic-effects-wind-loads.html
- [ ] Backup current file
- [ ] Create overview content
- [ ] Explain what topographic factor is
- [ ] Link to all 4 terrain types
- [ ] Add when Kzt applies vs when it doesn't
- [ ] Combine: template + content
- [ ] Test features
- [ ] Git commit

---

## PHASE 3: STATE PAGES (11 PAGES)

### 3.1 Florida (states/florida-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 8-28
- [ ] Create content sections:
  - [ ] FBC 8th Edition (2023)
  - [ ] ASCE 7-22 adoption
  - [ ] Miami-Dade County: 175 mph requirements
  - [ ] Broward County: 170 mph requirements
  - [ ] FL Number/NOA system
  - [ ] TAS 201, 202, 203 testing
  - [ ] HVHZ requirements
  - [ ] PE seal requirements
- [ ] Combine: template + FL content
- [ ] Test features
- [ ] Git commit

### 3.2 Texas (states/texas-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 31-43
- [ ] Create content sections:
  - [ ] 2021 IBC with amendments
  - [ ] ASCE 7-16
  - [ ] TDI product evaluations
  - [ ] WPI-8 certification
  - [ ] TWIA coastal requirements
  - [ ] PE seal requirements
- [ ] Combine: template + TX content
- [ ] Test features
- [ ] Git commit

### 3.3 Louisiana (states/louisiana-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 46-54
- [ ] Create content sections:
  - [ ] IRC with amendments
  - [ ] ASCE 7-10/7-16
  - [ ] Wind Zone III coastal parishes
  - [ ] List of 8 coastal parishes
  - [ ] PE seal requirements
- [ ] Combine: template + LA content
- [ ] Test features
- [ ] Git commit

### 3.4 North Carolina (states/north-carolina-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 57-66
- [ ] Create content sections:
  - [ ] 2018 NC Residential Code
  - [ ] ASCE 7-16
  - [ ] ICC 600 compliance
  - [ ] High wind counties
  - [ ] PE seal requirements
- [ ] Combine: template + NC content
- [ ] Test features
- [ ] Git commit

### 3.5 South Carolina (states/south-carolina-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 69-76
- [ ] Create content sections:
  - [ ] 2021 SC Building Code
  - [ ] ASCE 7-10/7-16
  - [ ] County-specific wind maps
  - [ ] PE seal requirements
- [ ] Combine: template + SC content
- [ ] Test features
- [ ] Git commit

### 3.6 Georgia (states/georgia-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 78-86
- [ ] Create content sections:
  - [ ] 2020 IBC with amendments
  - [ ] ASCE 7-16
  - [ ] PE/SE seal requirements
  - [ ] When SE required
- [ ] Combine: template + GA content
- [ ] Test features
- [ ] Git commit

### 3.7 Hawaii (states/hawaii-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 88-99
- [ ] Create content sections:
  - [ ] 2018 Hawaii Building Code
  - [ ] ASCE 7-16 with Appendix W
  - [ ] Wind Design Geodatabase
  - [ ] Corrosion requirements
  - [ ] PE seal requirements
- [ ] Combine: template + HI content
- [ ] Test features
- [ ] Git commit

### 3.8 New York (states/new-york-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 101-107
- [ ] Create content sections:
  - [ ] 2020 NY State Building Code
  - [ ] ASCE 7-16
  - [ ] PE/RA seal requirements
- [ ] Combine: template + NY content
- [ ] Test features
- [ ] Git commit

### 3.9 Virginia (states/virginia-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 110-117
- [ ] Create content sections:
  - [ ] 2021 VA Building Code
  - [ ] ASCE 7-16
  - [ ] Coastal requirements
  - [ ] PE/Architect seal
- [ ] Combine: template + VA content
- [ ] Test features
- [ ] Git commit

### 3.10 California (states/california-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 119-136
- [ ] Create content sections:
  - [ ] 2022 CBC (ASCE 7-16)
  - [ ] 2025 CBC (ASCE 7-22) coming
  - [ ] Seismic interaction
  - [ ] PE/SE seal requirements
  - [ ] Upcoming changes
- [ ] Combine: template + CA content
- [ ] Test features
- [ ] Git commit

### 3.11 Other States (states/other-states-wind-load-requirements.html)
- [ ] Backup current file
- [ ] Extract data from STATE_REQUIREMENTS_RESEARCH.md lines 138-158
- [ ] Create content sections:
  - [ ] IBC/IRC adoption pattern
  - [ ] ASCE 7 versions by IBC edition table
  - [ ] Standard PE requirements
  - [ ] List all 40 states alphabetically
- [ ] Combine: template + content
- [ ] Test features
- [ ] Git commit

---

## PHASE 4: FIX STATE-REQUIREMENTS.HTML PAGE

### 4.1 Fix Filter Buttons
- [ ] Backup state-requirements.html
- [ ] Add JavaScript for "All States" filter button
- [ ] Add JavaScript for "High-Wind" filter button
- [ ] Add JavaScript for "HVHZ" filter button
- [ ] Add JavaScript for "PE Required" filter button
- [ ] Add JavaScript for "Nominal Allowed" filter button
- [ ] Test each button filters correct state cards
- [ ] Git commit

### 4.2 Update State Card Data
For EACH of the 50 state cards:
- [ ] Alabama - update ASCE 7 version, building code
- [ ] Alaska - update data
- [ ] Arizona - update data
- [ ] Arkansas - update data
- [ ] California - update with detailed requirements
- [ ] Colorado - update data
- [ ] Connecticut - update data
- [ ] Delaware - update data
- [ ] Florida - update with detailed requirements
- [ ] Georgia - update with detailed requirements
- [ ] Hawaii - update with detailed requirements
- [ ] Idaho - update data
- [ ] Illinois - update data
- [ ] Indiana - update data
- [ ] Iowa - update data
- [ ] Kansas - update data
- [ ] Kentucky - update data
- [ ] Louisiana - update with detailed requirements
- [ ] Maine - update data
- [ ] Maryland - update data
- [ ] Massachusetts - update data
- [ ] Michigan - update data
- [ ] Minnesota - update data
- [ ] Mississippi - update data
- [ ] Missouri - update data
- [ ] Montana - update data
- [ ] Nebraska - update data
- [ ] Nevada - update data
- [ ] New Hampshire - update data
- [ ] New Jersey - update data
- [ ] New Mexico - update data
- [ ] New York - update with detailed requirements
- [ ] North Carolina - update with detailed requirements
- [ ] North Dakota - update data
- [ ] Ohio - update data
- [ ] Oklahoma - update data
- [ ] Oregon - update data
- [ ] Pennsylvania - update data
- [ ] Rhode Island - update data
- [ ] South Carolina - update with detailed requirements
- [ ] South Dakota - update data
- [ ] Tennessee - update data
- [ ] Texas - update with detailed requirements
- [ ] Utah - update data
- [ ] Vermont - update data
- [ ] Virginia - update with detailed requirements
- [ ] Washington - update data
- [ ] West Virginia - update data
- [ ] Wisconsin - update data
- [ ] Wyoming - update data

### 4.3 Fix State Card Links
For EACH state card that has a dedicated page:
- [ ] Florida card - change href from "#florida" to "states/florida-wind-load-requirements.html"
- [ ] Texas card - change href to "states/texas-wind-load-requirements.html"
- [ ] Louisiana card - change href to "states/louisiana-wind-load-requirements.html"
- [ ] North Carolina card - change href to "states/north-carolina-wind-load-requirements.html"
- [ ] South Carolina card - change href to "states/south-carolina-wind-load-requirements.html"
- [ ] Georgia card - change href to "states/georgia-wind-load-requirements.html"
- [ ] Hawaii card - change href to "states/hawaii-wind-load-requirements.html"
- [ ] New York card - change href to "states/new-york-wind-load-requirements.html"
- [ ] Virginia card - change href to "states/virginia-wind-load-requirements.html"
- [ ] California card - change href to "states/california-wind-load-requirements.html"

For all other 40 states:
- [ ] Change href to "states/other-states-wind-load-requirements.html#[state-name]"

---

## PHASE 5: MAJOR CONTENT PAGES

### 5.1 Components & Cladding Page
**File:** components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html
- [ ] Backup current file
- [ ] Create section: What is Components & Cladding
- [ ] Create section: C&C vs MWFRS differences
- [ ] Create section: ASCE 7 calculation methodology
- [ ] Create section: Pressure coefficients (GCp)
- [ ] Create section: Effective wind areas
- [ ] Create section: Zone designations (4, 5, etc.)
- [ ] Create section: Design examples with calculations
- [ ] Create section: When PE certification required
- [ ] Create section: Florida C&C requirements (FL Number, NOA)
- [ ] Create section: Texas C&C requirements (TDI)
- [ ] Create section: Other state requirements
- [ ] Combine: template + C&C content
- [ ] Test features
- [ ] Git commit

### 5.2 MWFRS Page
**File:** mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html
- [ ] Backup current file
- [ ] Create section: What is MWFRS
- [ ] Create section: Structural framing elements
- [ ] Create section: MWFRS vs C&C differences
- [ ] Create section: ASCE 7 calculation methodology
- [ ] Create section: Wind pressure distribution
- [ ] Create section: Windward/leeward/side/roof pressures
- [ ] Create section: Design examples with calculations
- [ ] Create section: Structural requirements
- [ ] Combine: template + MWFRS content
- [ ] Test features
- [ ] Git commit

### 5.3 Free Resources Page
**File:** resources.html
- [ ] Backup current file
- [ ] Create section: Free Calculators
- [ ] Create section: Educational Guides
- [ ] Create section: Templates (Excel, etc.)
- [ ] Create section: ASCE Publication References
- [ ] Create section: State Code Links
- [ ] Create section: Video Tutorials
- [ ] Create section: Download Links
- [ ] Add proper links to all resources
- [ ] Combine: template + resources content
- [ ] Test features
- [ ] Git commit

---

## PHASE 6: EDUCATIONAL PAGES (40+ PAGES)

### 6.1 ASCE 7 Standards Pages
- [ ] asce-7-standards.html - Overview of 7-10, 7-16, 7-22
- [ ] asce-7-16-wind-speed-maps.html
- [ ] asce-7-22-wind-speed-maps.html
- [ ] basic-wind-speed-explained.html
- [ ] 3-second-gust-wind-speed.html

### 6.2 Wind Load Design Methods
- [ ] asd-allowable-stress-design-wind-loads.html
- [ ] lrfd-load-resistance-factor-design-wind-loads.html
- [ ] asd-lrfd-conversion-guide.html
- [ ] nominal-wind-loads-explained.html
- [ ] ultimate-wind-loads-explained.html
- [ ] nominal-vs-ultimate-wind-loads.html

### 6.3 Directional Factors
- [ ] directional-vs-non-directional-wind-loads.html
- [ ] wind-directionality-factor-guide.html
- [ ] kd-factor-explained.html

### 6.4 Exposure Categories
- [ ] wind-exposure-categories-guide.html
- [ ] exposure-category-selection-guide.html
- [ ] exposure-b-suburban-residential-wind-loads.html
- [ ] exposure-c-open-terrain-wind-loads.html
- [ ] exposure-d-coastal-ocean-wind-loads.html
- [ ] exposure-transition-zones.html

### 6.5 Risk Categories
- [ ] risk-categories-wind-loads-guide.html
- [ ] risk-category-selection-guide.html
- [ ] risk-category-1-agricultural-buildings.html
- [ ] risk-category-2-standard-occupancy.html
- [ ] risk-category-3-assembly-buildings.html
- [ ] risk-category-4-essential-facilities.html

### 6.6 HVHZ Pages
- [ ] hvhz-high-velocity-hurricane-zone-guide.html
- [ ] hvhz-florida-requirements.html
- [ ] hvhz-product-approvals.html
- [ ] hvhz-vs-standard-wind-zones.html
- [ ] miami-dade-hvhz-requirements.html
- [ ] broward-county-hvhz-requirements.html

### 6.7 Specialty Topics
- [ ] solar-wind-loads.html
- [ ] specialty-structures-wind-loads.html
- [ ] wind-speed-by-location.html
- [ ] wind-speed-zones-asce-7-guide.html

### 6.8 Site Pages
- [ ] about.html
- [ ] articles.html
- [ ] contact.html

**For EACH educational page above:**
- [ ] Backup current file
- [ ] Create educational content appropriate to topic
- [ ] Combine: template + content
- [ ] Test features
- [ ] Git commit

---

## PHASE 7: VERIFICATION & TESTING

### 7.1 Test Every Single Page
For EACH of 72 pages:
- [ ] Open page in browser
- [ ] Verify full screen video before scroll
- [ ] Scroll down and verify:
  - [ ] Logo shrinks from 100px to 70px
  - [ ] Header changes from transparent to white
  - [ ] Navigation buttons appear at top
- [ ] Click hamburger menu and verify:
  - [ ] Menu opens
  - [ ] All links present
  - [ ] TOPO submenu works
  - [ ] Menu closes when clicked
- [ ] Verify unique page content is present
- [ ] Verify no duplicate headers/logos/menus

### 7.2 Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

### 7.3 Mobile Testing
- [ ] Test on mobile viewport
- [ ] Verify hamburger menu works on mobile
- [ ] Verify video scales properly

---

## PHASE 8: FINAL STEPS

### 8.1 Create Final Backups
- [ ] Create final ZIP backup with timestamp
- [ ] Create git tag for completed work
- [ ] Push to remote repository (if applicable)

### 8.2 Documentation
- [ ] Update IMPLEMENTATION_STATUS.md with completion
- [ ] Create summary of all changes
- [ ] List any remaining issues

### 8.3 User Review
- [ ] Present completed work to user
- [ ] Get feedback on any issues
- [ ] Make final adjustments

---

## ESTIMATED TOTALS

- **Topographic Pages:** 9 pages
- **State Pages:** 11 pages
- **State Card Updates:** 50 cards
- **State Card Link Fixes:** 50 links
- **Filter Button Functions:** 5 buttons
- **Major Content Pages:** 3 pages (C&C, MWFRS, Resources)
- **Educational Pages:** 40+ pages
- **Total Pages to Restore:** 72 pages
- **Total Tasks:** ~200+ individual tasks

---

*Created: 2025-11-20*
*This is the complete list of EVERYTHING that needs to be done*
