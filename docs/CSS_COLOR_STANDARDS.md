# CSS COLOR STANDARDS - CRITICAL ACCESSIBILITY RULES

## ⚠️ ABSOLUTE RULES - NO EXCEPTIONS

### Rule 1: Text Contrast Requirements
**WCAG AA Standard: Minimum 4.5:1 contrast ratio for normal text**

#### NEVER DO THIS:
- ❌ White text on light backgrounds
- ❌ Light gray text on white backgrounds
- ❌ Dark text on dark backgrounds
- ❌ Low-contrast color combinations

#### ALWAYS DO THIS:
- ✅ Dark text (#1f2937, #111827) on light backgrounds (#ffffff, #f8fafc, #f3f4f6)
- ✅ White text (#ffffff) on dark backgrounds (#1f2937, #111827, #0f172a)
- ✅ High-contrast combinations for all body text

---

## COLOR PALETTE WITH PROPER USAGE

### Primary Brand Colors

#### Blue Gradient (Primary CTA)
```css
background: linear-gradient(135deg, #0018ff 0%, #181E57 100%);
color: white; /* ✅ ALWAYS white text on these dark blues */
```

#### Terrain-Specific Colors

**Flat Terrain - Cyan (#06b6d4)**
```css
/* ✅ CORRECT USAGE */
.flat-terrain-heading {
  color: #06b6d4; /* Cyan text on WHITE background */
}

.flat-terrain-cta {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  color: white; /* ✅ White text on dark cyan */
}

/* ❌ NEVER DO THIS */
.wrong {
  background: #e0f2fe; /* Light cyan background */
  color: #06b6d4; /* Light cyan text - TOO LOW CONTRAST */
}
```

**Escarpment - Orange (#f97316)**
```css
/* ✅ CORRECT USAGE */
.escarpment-heading {
  color: #f97316; /* Orange text on WHITE background */
}

.escarpment-cta {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white; /* ✅ White text on orange */
}

/* ❌ NEVER DO THIS */
.wrong {
  background: #ffedd5; /* Light orange background */
  color: #f97316; /* Orange text - TOO LOW CONTRAST */
}
```

**2D Ridge - Purple (#a855f7)**
```css
/* ✅ CORRECT USAGE */
.ridge-heading {
  color: #a855f7; /* Purple text on WHITE background */
}

.ridge-cta {
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
  color: white; /* ✅ White text on purple */
}

/* ❌ NEVER DO THIS */
.wrong {
  background: #faf5ff; /* Light purple background */
  color: #a855f7; /* Purple text - TOO LOW CONTRAST */
}
```

**3D Hill - Green (#10b981)**
```css
/* ✅ CORRECT USAGE */
.hill-heading {
  color: #10b981; /* Green text on WHITE background */
}

.hill-cta {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white; /* ✅ White text on green */
}

/* ❌ NEVER DO THIS */
.wrong {
  background: #f0fdf4; /* Light green background */
  color: #10b981; /* Green text - TOO LOW CONTRAST */
}
```

---

## CORRECT COLOR COMBINATIONS

### Body Text
```css
/* ✅ CORRECT - Dark text on white/light backgrounds */
.body-text {
  color: #4b5563; /* Gray-600 */
  background: white;
}

.body-text-alt {
  color: #1f2937; /* Gray-800 for stronger contrast */
  background: #f8fafc; /* Very light gray */
}
```

### Headings
```css
/* ✅ CORRECT - Very dark text on white/light backgrounds */
h1, h2, h3 {
  color: #1f2937; /* Gray-800 - very dark, high contrast */
  background: white;
}

/* ✅ CORRECT - Brand color headings on white */
.accent-heading {
  color: #0018ff; /* Primary blue */
  background: white;
}
```

### Call-to-Action Sections
```css
/* ✅ CORRECT - White text on dark/vibrant backgrounds */
.cta-section {
  background: linear-gradient(135deg, #0018ff 0%, #181E57 100%);
  color: white; /* High contrast */
}

.cta-section h2 {
  color: white; /* NOT a light color! */
}

.cta-section p {
  color: rgba(255, 255, 255, 0.95); /* Slightly transparent white for secondary text */
}
```

### Buttons
```css
/* ✅ CORRECT - High contrast button on dark background */
.btn-on-dark-bg {
  background: white;
  color: #0018ff; /* Dark text on white button */
  border: 2px solid white;
}

/* ✅ CORRECT - High contrast button on light background */
.btn-on-light-bg {
  background: #0018ff;
  color: white; /* White text on dark button */
  border: 2px solid #0018ff;
}
```

### Info Boxes / Callouts
```css
/* ✅ CORRECT - Light background with dark text */
.info-box {
  background: #f8fafc; /* Very light gray */
  color: #1f2937; /* Very dark gray */
  border-left: 4px solid #06b6d4; /* Colored accent border */
}

.info-box h4 {
  color: #06b6d4; /* Brand color heading on light background */
}
```

---

## WINDLOADCALC.COM LINK COLORS

### In Body Content (on white/light backgrounds)
```css
/* ✅ CORRECT - Colored, underlined links */
a.inline-link {
  color: #0018ff; /* Primary blue */
  text-decoration: underline;
  font-weight: 600;
}

a.inline-link:hover {
  color: #0014cc; /* Darker on hover */
}

/* For terrain-specific pages, use terrain color */
.flat-terrain a.inline-link {
  color: #06b6d4; /* Cyan */
}

.escarpment a.inline-link {
  color: #f97316; /* Orange */
}

.ridge a.inline-link {
  color: #a855f7; /* Purple */
}

.hill a.inline-link {
  color: #10b981; /* Green */
}
```

### In Dark Sections (CTA backgrounds)
```css
/* ✅ CORRECT - White/light links on dark backgrounds */
.cta-section a {
  color: white;
  text-decoration: underline;
  font-weight: 700;
}

.cta-section .btn {
  background: white;
  color: #0018ff; /* Dark text on white button */
}
```

---

## FORMULA DISPLAY BOXES

### Dark Background with White Text
```css
/* ✅ CORRECT - Formula boxes use dark backgrounds */
.formula-box {
  background: linear-gradient(135deg, #0018ff 0%, #181E57 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
}

.formula-box p {
  color: white; /* NOT light gray or rgba! */
}

.formula-box code,
.formula-box .formula {
  color: white;
  font-family: 'Courier New', monospace;
  font-weight: 700;
}
```

---

## CONTRAST CHECKING RULES

### Before Using ANY Color Combination:
1. **Check contrast ratio** - Use WebAIM Contrast Checker or browser devtools
2. **Minimum ratios:**
   - Normal text (16px): 4.5:1 minimum
   - Large text (18px+ bold or 24px+): 3:1 minimum
   - Headings: 4.5:1 minimum (treat as normal text)
3. **If in doubt, use these safe combinations:**
   - `color: #1f2937` on `background: white`
   - `color: white` on `background: #1f2937`
   - `color: #4b5563` on `background: #f8fafc`

---

## COMMON MISTAKES TO AVOID

### ❌ WRONG Examples

```css
/* BAD: Light text on light background */
.bad-example-1 {
  background: #f0fdf4; /* Light green */
  color: #10b981; /* Green text - FAIL */
}

/* BAD: White text on white background */
.bad-example-2 {
  background: white;
  color: rgba(255, 255, 255, 0.95); /* INVISIBLE */
}

/* BAD: Light gray on white */
.bad-example-3 {
  background: white;
  color: #d1d5db; /* Gray-300 - TOO LIGHT */
}

/* BAD: Dark on dark */
.bad-example-4 {
  background: #1f2937; /* Dark gray */
  color: #111827; /* Darker gray - NO CONTRAST */
}
```

### ✅ CORRECT Examples

```css
/* GOOD: Dark text on light background */
.good-example-1 {
  background: #f0fdf4; /* Light green */
  color: #1f2937; /* Dark gray text - PASS */
}

/* GOOD: White text on dark background */
.good-example-2 {
  background: #1f2937; /* Dark gray */
  color: white; /* High contrast - PASS */
}

/* GOOD: Medium gray on white */
.good-example-3 {
  background: white;
  color: #4b5563; /* Gray-600 - PASS */
}

/* GOOD: Colored heading on white */
.good-example-4 {
  background: white;
  color: #10b981; /* Green - PASS (sufficient contrast) */
}
```

---

## SESSION STARTUP CHECKLIST

Before writing ANY HTML/CSS, verify:
- [ ] Read this CSS_COLOR_STANDARDS.md file
- [ ] Read BUSINESS_STRATEGY_SEO.md for WindLoadCalc.com requirements
- [ ] Read DESIGN_SYSTEM.md for overall design patterns
- [ ] NEVER use light text on light backgrounds
- [ ] NEVER use dark text on dark backgrounds
- [ ] ALWAYS include WindLoadCalc.com CTAs
- [ ] ALWAYS check contrast ratios

---

## QUICK REFERENCE CHART

| Background | Safe Text Colors |
|------------|------------------|
| `#ffffff` (white) | `#1f2937`, `#111827`, `#4b5563`, `#0018ff`, `#06b6d4`, `#f97316`, `#a855f7`, `#10b981` |
| `#f8fafc` (light gray) | `#1f2937`, `#111827`, `#4b5563`, `#0018ff` |
| `#1f2937` (dark gray) | `white`, `#f8fafc`, `#e5e7eb` |
| `#0018ff` (blue) | `white` |
| `#181E57` (dark blue) | `white` |
| Gradients (dark) | `white` only |

---

**Last Updated**: 2025-11-21
**Mandatory Review**: Every session startup
