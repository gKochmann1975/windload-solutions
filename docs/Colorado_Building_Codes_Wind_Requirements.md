# Colorado Building Codes & Wind Load Requirements
## Comprehensive Guide for Wind Load Analysis

*Prepared by WindLoad.Solutions*
*Last Updated: December 2025*

---

## Table of Contents
1. [Overview - Colorado Code Adoption](#overview---colorado-code-adoption)
2. [Current Publications (2021 IBC / ASCE 7-16)](#current-publications-2021-ibc--asce-7-16)
3. [Future Publications (2024 IBC / ASCE 7-22)](#future-publications-2024-ibc--asce-7-22)
4. [Windows, Doors & Fenestration Requirements](#windows-doors--fenestration-requirements)
5. [Roofing Requirements & Standards](#roofing-requirements--standards)
6. [Key Differences: ASCE 7-16 vs ASCE 7-22](#key-differences-asce-7-16-vs-asce-7-22)
7. [Colorado-Specific Considerations](#colorado-specific-considerations)
8. [Reference Standards Summary](#reference-standards-summary)

---

## Overview - Colorado Code Adoption

### Home Rule State
Colorado is a **home rule state**, meaning building codes are adopted at the **local jurisdiction level** rather than statewide. Each city, county, and municipality determines which edition of the International Building Code (IBC) and associated standards to adopt.

### Key Jurisdictions

| Jurisdiction | Current IBC | ASCE 7 Reference | Notes |
|--------------|-------------|------------------|-------|
| **Aurora** | 2021 IBC | ASCE 7-16 | Revised April 2023 |
| **Denver** | 2021 IBC → 2024 IBC | ASCE 7-16 → ASCE 7-22 | Transition Dec 31, 2025 |
| **Colorado Springs** | 2021 IBC | ASCE 7-16 | Verify locally |
| **Boulder** | 2021 IBC | ASCE 7-16 | Verify locally |

> **Important:** Always verify the adopted code edition with the local building department before beginning any project.

---

## Current Publications (2021 IBC / ASCE 7-16)

### Aurora, Colorado - Currently Adopted Codes (As of 2023)

The City of Aurora has adopted the following **2021 International Codes**:

- 2021 International Building Code (IBC)
- 2021 International Residential Code (IRC)
- 2021 International Mechanical Code (IMC)
- 2021 International Fuel Gas Code (IFGC)
- 2021 International Fire Code (IFC)
- 2021 International Plumbing Code (IPC)
- 2021 International Existing Building Code (IEBC)
- 2021 International Energy Conservation Code (IECC)
- 2021 International Swimming Pool and Spa Code (ISPSC)
- 2023 National Electrical Code (NEC)
- 2017 ICC/ANSI A117.1 Accessibility Standard

### Aurora Engineering Design Criteria

| Parameter | Value |
|-----------|-------|
| **Ground Snow Load (Pg)** | 40 psf |
| **Basic Wind Speed (Risk Cat II)** | 105-110 mph |
| **Basic Wind Speed (Risk Cat III)** | 110-115 mph |
| **Basic Wind Speed (Risk Cat IV)** | 120-125 mph |
| **Default Exposure Category** | B |
| **Weathering** | Severe |
| **Minimum Frost Depth** | 36 inches |
| **Winter Design Temperature** | 1°F |
| **Ice Barrier Underlayment** | Required |
| **Mean Annual Temperature** | 50°F |

### ASCE 7-16 Wind Load Methodology

The 2021 IBC references **ASCE 7-16** (Minimum Design Loads and Associated Criteria for Buildings and Other Structures) for all wind load calculations.

#### Key Formula - Velocity Pressure
```
qz = 0.00256 × Kz × Kzt × Kd × Ke × V²
```

Where:
- **qz** = Velocity pressure at height z (psf)
- **Kz** = Velocity pressure exposure coefficient
- **Kzt** = Topographic factor (typically 1.0)
- **Kd** = Wind directionality factor (0.85 for most buildings)
- **Ke** = Ground elevation factor (critical for Colorado!)
- **V** = Basic wind speed (mph)

#### Design Wind Pressure (C&C)
```
p = qh × [(GCp) - (GCpi)]
```

Where:
- **p** = Design wind pressure (psf)
- **qh** = Velocity pressure at mean roof height
- **GCp** = External pressure coefficient
- **GCpi** = Internal pressure coefficient

---

## Future Publications (2024 IBC / ASCE 7-22)

### Denver Code Adoption Timeline

**Effective Date: December 31, 2025**

The City and County of Denver is adopting the **2025 Denver Building Code** based on the **2024 International Building Code** series, which includes:

- 2024 International Building Code (IBC)
- 2024 International Energy Conservation Code (IECC)
- 2024 International Fuel Gas Code (IFGC)
- 2024 International Mechanical Code (IMC)
- 2024 International Plumbing Code (IPC)
- 2024 International Existing Building Code (IEBC)
- 2024 International Residential Code (IRC)
- 2024 International Fire Code (IFC)

### Transition Period
- **July - December 2025**: 6-month transition period
- **December 31, 2025**: Full adoption effective date

### State Energy Code Requirements
Colorado's Model Low Energy and Carbon Code requires cities and counties with building codes to adopt the 2024 IECC (or more stringent) when adopting or updating any building code **after July 1, 2026**.

### ASCE 7-22 Adoption
The 2024 IBC references **ASCE 7-22** for structural loads, including wind loads. This represents significant changes from ASCE 7-16 (see comparison section below).

---

## Windows, Doors & Fenestration Requirements

### Wind Load Design Requirements

Per IBC Chapter 16, buildings, structures, and parts thereof shall be designed to withstand minimum wind loads. Wind loads on fenestration (windows, doors, skylights) shall be determined in accordance with **ASCE 7 Chapters 26-30**.

### Design Pressure (DP) Ratings

**Design Pressure (DP)** equals the maximum wind pressure a window or door can resist.

| DP Rating | Positive Pressure | Negative Pressure |
|-----------|------------------|-------------------|
| DP 15 | +15 psf | -15 psf |
| DP 25 | +25 psf | -25 psf |
| DP 35 | +35 psf | -35 psf |
| DP 50 | +50 psf | -50 psf |
| DP 65 | +65 psf | -65 psf |

**Selection Rule:** The product DP rating must **exceed** the calculated Component & Cladding (C&C) pressure for that location. Zone 5 corners require higher ratings than Zone 4 field areas.

### Deflection Limits for Fenestration

When framing members support glass:

| Span Length | Maximum Deflection |
|-------------|-------------------|
| Up to 13'-6" | L/175 |
| Over 13'-6" | L/240 + 1/4" |

*Applied at 0.6 times the C&C wind loads*

### NAFS Performance Standards

The **North American Fenestration Standard (NAFS)** evaluates products' ability to resist uniform loading and assigns Performance Grades based on allowable stress design. NAFS Performance Grades correlate directly with required design wind pressures per ASCE 7.

### Impact Resistance / Wind-Borne Debris

> **Colorado is NOT within a wind-borne debris region.**

Wind-borne debris regions are defined as:
- Areas within 1 mile of coastal mean high water line where V ≥ 130 mph
- Areas where V ≥ 140 mph
- Hawaii

Since Colorado is an inland state without hurricane exposure, **impact-resistant glazing and hurricane shutters are NOT required** by code. Standard wind load design provisions apply.

### Conversion Factor for IRC

When using prescriptive provisions from the IRC (which references ASCE 7-10):
```
Design Pressure (from IRC) × 0.6 = DP Rating for comparison
```

---

## Roofing Requirements & Standards

### IBC 2024 Chapter 15 - Roof Assemblies

Chapter 15 provides minimum requirements for the design and construction of roof assemblies and rooftop structures.

#### Section 1504 - Performance Requirements

**1504.1 General:**
> "Roof decks and roof coverings shall be designed for wind loads in accordance with Chapter 16 and Sections 1504.2, 1504.3, and 1504.4."

**1504.3 Wind Resistance of Non-ballasted Roofs:**
Roof coverings mechanically attached or adhered to the roof deck shall be designed to resist the **design wind load pressures for components and cladding** per Section 1609.5.2.

### Roofing Material Requirements by Type

#### Asphalt Shingles (Section 1504.2)

| Wind Speed | Required Classification |
|------------|------------------------|
| ≤ 110 mph | Class D (ASTM D7158) |
| > 110 mph to ≤ 120 mph | Class G or H |
| > 120 mph | Class H |

- Testing per **ASTM D7158**
- Standard calculations assume Exposure B or C, height ≤ 60 ft
- Additional calculations required for other conditions

#### Clay and Concrete Tile (Section 1504.3)

- Wind loads per Section 1609.6
- Testing per **SBCCI SSTD 11** or **ASTM C1568** (overturning resistance)
- Wind tunnel testing per **ASTM C1569** for tiles not meeting Chapter 16 limitations

#### Slate Shingles (Section 1504.4.4) - NEW in 2024

- Testing per **ASTM D3161** (Fan-Induced Method)
- Classification per Table 1504.2

#### Metal Edge Systems

- Design per Chapter 16
- Testing per **ANSI/SPRI ES-1** (Methods RE-1, RE-2, RE-3)

### UL 580 - Roof Uplift Resistance Standard

**UL 580** (Standard for Tests for Uplift Resistance of Roof Assemblies) classifies roof assemblies by uplift resistance:

| UL 580 Class | Uplift Pressure Rating |
|--------------|----------------------|
| Class 15 | 15 psf |
| Class 30 | 30 psf |
| Class 60 | 60 psf |
| Class 90 | 90 psf |
| Class 120 | 120 psf |

**Test Procedure:**
- 10 ft × 10 ft (100 sq ft) test specimen
- Static and dynamic (cyclic) pressure loading
- Assembly must maintain attachment integrity without excessive deflection

### TAS 125 - Florida Test Application Standard

**TAS 125** is a Florida Building Code testing standard for wind uplift resistance. While primarily used for Florida's High-Velocity Hurricane Zone (HVHZ), it provides valuable third-party verification of roof assembly performance.

**Key Points:**
- Used in conjunction with TAS 100 (general procedures) and TAS 102 (impact resistance)
- Provides Miami-Dade County product approval pathway
- Often referenced nationally for high-wind performance verification

### Tornado Load Provisions (NEW in IBC 2024 / ASCE 7-22)

**Chapter 32 of ASCE 7-22** introduces tornado load requirements:

- Design required where tornado speed (VT) > 60 mph
- Applies to Risk Category III and IV structures
- Primarily affects areas **east of the Rocky Mountains**
- Higher uplift classifications may be needed in tornado-prone regions

> **For Colorado:** Most of Colorado is west of the primary tornado corridor, but eastern Colorado (plains region) may require tornado load consideration for certain building types.

---

## Key Differences: ASCE 7-16 vs ASCE 7-22

### Summary of Major Changes

| Feature | ASCE 7-16 | ASCE 7-22 |
|---------|-----------|-----------|
| **Wind Directionality (Kd)** | In qz equation | Moved to pressure equations |
| **Tornado Loads** | Commentary only | New Chapter 32 (required) |
| **C&C Roof Zones** | Multiple zones | Reduced to 3 zones |
| **Minimum EWA** | Various | 10 sq ft minimum |
| **Simplified Methods (Part 2)** | Available | Removed |
| **Elevated Buildings** | Not addressed | New Section 27.3.1.1 |
| **Ground-Mounted Solar** | Limited guidance | New Section 29.4.5 |
| **WBDR Definition** | Ambiguous | Clarified |

### Wind Speed Map Changes

- **North Atlantic region:** Wind speeds slightly decreased (contours moved closer to coast)
- **South Texas coast:** Increased approximately 10 mph
- **Inland areas (≤130 mph):** Slightly lower wind speeds

### Component & Cladding (C&C) Changes

ASCE 7-22 simplifies C&C provisions while maintaining wind tunnel testing basis:

1. **Reduced roof zones** on gable and hip roofs (now 3 zones)
2. **Minimum EWA** of 10 sq ft (eliminates very small areas)
3. **Standardized maximum EWAs** to 100, 200, or 300 sq ft
4. **Eliminated h/B ratios** for hip roofs

**Result:** Generally produces **same or slightly lower** pressures than ASCE 7-16.

### Practical Implications

For most Colorado projects:
- Wind pressure calculations may change slightly
- Tornado loads may apply in eastern Colorado for Risk Cat III/IV
- C&C calculations are simplified
- Most fenestration and roofing products sized for ASCE 7-16 will still comply

---

## Colorado-Specific Considerations

### Ground Elevation Factor (Ke)

**Critical for Colorado projects!**

ASCE 7-16 introduced the **Ground Elevation Factor (Ke)** which adjusts velocity pressure for reduced air density at higher elevations.

| Elevation | Ke Factor | Pressure Reduction |
|-----------|-----------|-------------------|
| Sea Level | 1.00 | 0% |
| 3,000 ft | 0.94 | 6% |
| 5,280 ft (Denver) | 0.88 | 12% |
| 6,000 ft | 0.86 | 14% |
| 8,000 ft | 0.82 | 18% |
| 10,000 ft | 0.78 | 22% |

**Example - Denver (5,280 ft):**
- Ke = 0.88 (approximately)
- Results in **~12% reduction** in design wind pressures vs sea level

### Exposure Categories

| Category | Description | Typical Colorado Application |
|----------|-------------|------------------------------|
| **B** | Urban/suburban, wooded areas | Default for most Front Range cities |
| **C** | Open terrain, grasslands | Eastern plains, mountain valleys |
| **D** | Flat, unobstructed coastal areas | Not applicable in Colorado |

### High Wind Areas

Certain Colorado locations experience elevated wind speeds:
- **Mountain passes and ridges**
- **Foothill transitions** (Boulder, Golden)
- **Eastern plains** (tornado potential)

Always verify site-specific wind speeds using ASCE 7 wind speed maps or the [ASCE 7 Hazard Tool](https://asce7hazardtool.online/).

---

## Reference Standards Summary

### Building Codes
| Standard | Description | Current Edition |
|----------|-------------|-----------------|
| **IBC** | International Building Code | 2021 (current) / 2024 (future) |
| **IRC** | International Residential Code | 2021 / 2024 |
| **IECC** | International Energy Conservation Code | 2021 / 2024 |

### Structural/Wind Standards
| Standard | Description | Current Edition |
|----------|-------------|-----------------|
| **ASCE 7** | Minimum Design Loads | ASCE 7-16 (current) / ASCE 7-22 (future) |
| **ASTM D7158** | Asphalt shingle wind resistance | Current |
| **ASTM D3161** | Steep slope roofing wind resistance | Current |

### Roofing Test Standards
| Standard | Description | Application |
|----------|-------------|-------------|
| **UL 580** | Roof uplift resistance | Commercial roofing classification |
| **TAS 125** | Florida wind uplift test | High-wind verification |
| **TAS 100** | General roofing test procedures | Florida approval |
| **TAS 102** | Impact resistance testing | Wind-borne debris regions |
| **ANSI/SPRI ES-1** | Metal edge systems | Edge securement |

### Fenestration Standards
| Standard | Description | Application |
|----------|-------------|-------------|
| **NAFS** | North American Fenestration Standard | Window/door performance grades |
| **ASTM E1886** | Impact resistance glazing test | Wind-borne debris regions |
| **ASTM E1996** | Impact resistance specification | Wind-borne debris regions |

---

## Resources

### Official Sources
- [City of Aurora Building Division](https://www.auroragov.org/business_services/building_division/adopted_building_codes)
- [Denver Building Codes](https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Building-Codes-Policies-and-Guides)
- [Colorado Division of Fire Prevention and Control](https://dfpc.colorado.gov/)
- [Colorado Energy Office - Building Codes](https://energyoffice.colorado.gov/building-energy-codes-toolkit)

### Code Resources
- [UpCodes - Colorado Building Code](https://up.codes/codes/colorado)
- [ICC Digital Codes](https://codes.iccsafe.org/)
- [ASCE 7 Hazard Tool](https://asce7hazardtool.online/)

### Industry Resources
- [FEMA Wind Resistance Provisions](https://www.fema.gov/sites/default/files/2020-07/2015-ibc-compilation-wind-resistance-provisions.pdf)
- [FEMA ASCE 7-22 Wind Highlights](https://www.fema.gov/sites/default/files/documents/fema_asce-7-22-wind-highlights_fact-sheet_2022.pdf)
- [Structure Magazine - ASCE 7-22 C&C Changes](https://www.structuremag.org/article/asce-7-22-changes-to-component-and-cladding-wind-provisions/)

---

*This document is for educational and informational purposes only. Always verify requirements with the local Authority Having Jurisdiction (AHJ) and consult with a licensed design professional for project-specific applications.*

**WindLoad.Solutions** - Professional Wind Load Analysis Services
[windload.solutions](https://windload.solutions)

---
