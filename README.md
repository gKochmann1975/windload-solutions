# Wind Load Solutions Website

> Professional wind load calculations and engineering services - Migrated from WordPress to modern HTML/CSS/JS

## Overview

This is the **windload.solutions** website - the parent company and content/marketing site for Wind Load Solutions. This site has been migrated from WordPress to a modern, static HTML/CSS/JS architecture for better performance, lower costs, and easier deployment.

### Key Features

- **SEO-Optimized**: All URLs preserved from WordPress for seamless migration
- **Modern Design**: Glass-morphism effects, smooth animations, responsive layout
- **Fast Loading**: Static HTML with optimized assets
- **Schema Markup**: Rich snippets for better search rankings
- **Mobile-First**: Fully responsive design
- **No Database**: Pure static site - deploy anywhere

## Site Structure

### 12 Pages (All URLs Preserved from WordPress)

1. **Homepage** - `/index.html`
   - Company overview since 2002
   - Value propositions
   - Service offerings

2. **Free Calculator** - `/free-online-wind-load-calculators-demos-free-excel-wind-load-calculator.html`
   - Free wind load calculator demo
   - ASCE 7 compliance information

3. **ASCE 7 Calculator** - `/asce-7-wind-load-calculator.html`
   - Product catalog with pricing
   - ASCE 7-22, 7-16, 7-10 versions

4. **Velocity Finder** - `/asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html`
   - Interactive wind speed lookup tool
   - ASCE 7 Hazard Tool integration

5. **Instructional Videos** - `/instructional-videos-asce-7-wind-load-calculator-wind-load-pressure-software-components-cladding-wind-load-pressures-asce-7.html`
   - Video library
   - Tutorial sections

6. **About Us** - `/wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html`
   - Company history
   - Notable projects (Empire State Building)
   - Timeline since 2002

7. **Contact** - `/contact-us-wind-load-calculators-for-components-and-cladding-cc-wind-load-pressures-per-the-asce-7-16-and-asce-7-22-publication-windloads-made-easy.html`
   - Contact form
   - Phone: (833) 272-3946
   - Email: info@windload.solutions

8. **FAQ** - `/faqfor-wind-load-calculator-software-for-wind-load-pressures-per-asce-7.html`
   - 20+ FAQs with search functionality
   - Accordion interface

9. **Ultimate vs Nominal** - `/ultimate-nominal-asce-7-wind-load-pressure-calculator.html`
   - Educational content
   - LRFD vs ASD comparison

10. **Components & Cladding** - `/components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html`
    - Technical guide
    - Pressure formulas

11. **MWFRS** - `/mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html`
    - Main Wind Force Resisting Systems
    - Structural analysis

12. **Window Selection** - `/wind-load-pressure-asd-lrfd-hvhz-proper-window-selection.html`
    - HVHZ window guide
    - ASD/LRFD selection criteria

13. **PE Sign & Seal** - `/professional-engineer-sign-seal-wind-load-pressures.html`
    - Professional engineering services
    - Certification information

## Assets

- **Images**: `/images/` - Logos, icons, photos (from windloadcalc.com)
- **Videos**: `/videos/` - MP4 and WebM videos for backgrounds and content
- **CSS**: `/css/` - Stylesheets
- **JS**: `/js/` - JavaScript for interactivity

## SEO Files

- `sitemap.xml` - Complete sitemap for search engines
- `robots.txt` - Search engine crawler directives

## Local Development

### Option 1: Python Server (Recommended)

```bash
cd c:\windload-solutions-parent
python server.py
```

Then open: `http://localhost:8000/index.html`

### Option 2: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Any HTTP Server

```bash
# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd c:\windload-solutions-parent
   vercel
   ```

3. Follow prompts and connect your domain `windload.solutions`

### Option 2: GitHub Pages

1. Create GitHub repository
2. Push files to `main` branch
3. Enable GitHub Pages in repo settings
4. Set custom domain to `windload.solutions`

### Option 3: Netlify

1. Drag and drop the `windload-solutions-parent` folder to netlify.com
2. Configure custom domain

### Option 4: Traditional Hosting (cPanel, etc.)

1. Upload all files via FTP/SFTP to your web root
2. Ensure `.htaccess` redirects are configured (if needed)
3. Point domain to new hosting

## Domain Configuration

When you're ready to go live:

1. Update DNS A records to point to your new host
2. Add DNS verification records if required
3. Enable SSL certificate (Let's Encrypt)
4. Test all URLs to ensure SEO rankings preserved

## Migration Checklist

- [x] All 12 pages created with exact URLs
- [x] WordPress content extracted and rewritten
- [x] Modern design with animations
- [x] Assets copied (images, videos, CSS, JS)
- [x] Schema markup added
- [x] Sitemap.xml created
- [x] robots.txt created
- [ ] Test all internal links
- [ ] Update logo to windload.solutions version
- [ ] Update videos to windload.solutions version
- [ ] Set up domain DNS
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor SEO rankings

## Brand Differences

### windload.solutions (This Site)
- **Type**: Parent company / Content site
- **Focus**: Education, resources, information
- **Founded**: 2002
- **Target**: Architects, engineers, builders, consultants
- **Offerings**: Software, services, PE certifications

### windloadcalc.com (Separate Site)
- **Type**: Product site / DBA
- **Focus**: Calculator sales and Building Intelligence Platform
- **URL**: Different domain entirely

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern animations, gradients, glass-morphism
- **Vanilla JavaScript**: No frameworks needed
- **Font Awesome 6.4.0**: Icons
- **Schema.org**: SEO markup
- **Video**: MP4/WebM support

## Performance

- Fast page load times (static HTML)
- Optimized images and videos
- Lazy loading where applicable
- Mobile-first responsive design
- No database queries

## Support

- **Email**: info@windload.solutions
- **Phone**: (833) 272-3946 / (833) ASCE WIND
- **Location**: Naples, FL

## License

© 2025 Wind Load Solutions. All rights reserved.

---

**Built with Claude Code** - AI-powered website migration and development
