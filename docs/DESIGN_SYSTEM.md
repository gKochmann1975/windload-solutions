# Wind Load Solutions - Design System

## Reference File
**Primary Style Reference:** `index.html`

## Theme Overview
Modern Web 3.0 design with:
- Glassmorphism effects
- Gradient backgrounds
- Colorful SVG icons
- Smooth animations
- Clean typography

## Color Palette

### Primary Colors
- **Primary Blue:** `#0018ff`
- **Dark Blue:** `#181E57`
- **Text Primary:** `#1f2937`
- **Text Secondary:** `#6b7280`
- **Background Light:** `#f8fafc`

### Accent Colors (for icons)
1. **Cyan/Blue:** `#06b6d4` → `#0891b2` (gradient)
2. **Orange:** `#f97316` → `#ea580c` (gradient)
3. **Purple:** `#a855f7` → `#9333ea` (gradient)
4. **Green:** `#10b981` → `#059669` (gradient)
5. **Pink:** `#ec4899` → `#db2777` (gradient)
6. **Yellow:** `#eab308` → `#ca8a04` (gradient)

## Typography
- **Font Family:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Hero Title:** `clamp(2.5rem, 8vw, 4.5rem)` - Weight 800
- **Section Title:** `clamp(2rem, 5vw, 3rem)` - Weight 800
- **Body Text:** `1.15-1.25rem` - Line height 1.7-1.8

## Card Components

### Resource Cards
```css
background: white;
border-radius: 20px;
padding: 2.5rem;
box-shadow: 0 4px 20px rgba(0,0,0,0.08);
border: 2px solid transparent;
transition: all 0.3s ease;

:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0,24,255,0.15);
    border-color: #0018ff;
}
```

### Card Icons
```css
width: 60px;
height: 60px;
background: linear-gradient(135deg, [color1], [color2]);
border-radius: 15px;
margin-bottom: 1.5rem;
```

## Hero Section
- Full viewport height
- Gradient background overlay
- White text with text-shadow
- Glassmorphism buttons
- Video background (optional)

## Buttons

### Primary Button
```css
background: white;
color: #0018ff;
padding: 1.2rem 2.5rem;
border-radius: 50px;
box-shadow: 0 10px 30px rgba(0,0,0,0.3);
```

### Secondary Button (Glassmorphism)
```css
background: rgba(255, 255, 255, 0.15);
color: white;
border: 2px solid rgba(255, 255, 255, 0.3);
backdrop-filter: blur(10px);
```

## Animations
- Float animation for badges
- Hover lift (translateY(-8px))
- Arrow slide on hover (translateX(5px))

## Terrain Type Color Assignments
1. **Flat Terrain:** Cyan/Blue `#06b6d4`
2. **Escarpment:** Orange `#f97316`
3. **2D Ridge:** Purple `#a855f7`
4. **3D Hill:** Green `#10b981`
