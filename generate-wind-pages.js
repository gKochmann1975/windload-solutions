const fs = require('fs');

// Helper to create header/nav/footer HTML (consistent across all pages)
const getHeader = () => `    <!-- Header -->
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

    <!-- Mobile Navigation -->
    <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="state-requirements.html">State Requirements</a>
        <a href="asce-7-standards.html">ASCE 7 Standards</a>
        <a href="risk-categories-wind-loads-guide.html">Risk Categories</a>
        <a href="components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html">Components & Cladding</a>
        <a href="mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html">MWFRS Guide</a>
        <a href="resources.html">Free Resources</a>
        <a href="articles.html">Articles & Guides</a>
        <a href="wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html">About Us</a>
        <a href="contact.html">Contact</a>
    </nav>`;

const getFooterHTML = () => `    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="asce-7-standards.html">ASCE 7 Standards</a>
                <a href="state-requirements.html">State Requirements</a>
                <a href="risk-categories-wind-loads-guide.html">Risk Categories</a>
                <a href="resources.html">Resources</a>
                <a href="wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
            <p>&copy; 2025 Wind Load Solutions. All rights reserved.</p>
            <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">24+ Years of Excellence in Wind Load Engineering</p>
        </div>
    </footer>

    <script>
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navOverlay = document.querySelector('.nav-overlay');
        const logo = document.querySelector('.logo');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            logo.classList.toggle('menu-active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }

        hamburger.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        // Close menu when clicking nav links
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    </script>`;

const getRelatedLinks = () => `    <!-- Related Links Section -->
    <div class="related-links">
        <div class="container">
            <h3><i class="fas fa-link"></i> Related Wind Speed Resources</h3>
            <div class="links-grid">
                <a href="asce-7-16-wind-speed-maps.html" class="link-card">
                    <div class="link-card-icon" style="background: linear-gradient(135deg, #93c5fd, #60a5fa);">
                        <i class="fas fa-map"></i>
                    </div>
                    <div class="link-card-content">
                        <h4>ASCE 7-16 Wind Speed Maps</h4>
                        <p>Design wind speeds per ASCE 7-16</p>
                    </div>
                </a>

                <a href="asce-7-22-wind-speed-maps.html" class="link-card">
                    <div class="link-card-icon" style="background: linear-gradient(135deg, #5eead4, #2dd4bf);">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <div class="link-card-content">
                        <h4>ASCE 7-22 Wind Speed Maps</h4>
                        <p>Updated design wind speeds and changes</p>
                    </div>
                </a>

                <a href="wind-speed-by-location.html" class="link-card">
                    <div class="link-card-icon" style="background: linear-gradient(135deg, #c4b5fd, #a78bfa);">
                        <i class="fas fa-location-dot"></i>
                    </div>
                    <div class="link-card-content">
                        <h4>Wind Speed by Location</h4>
                        <p>Find your site's design wind speed</p>
                    </div>
                </a>

                <a href="asce-7-wind-load-calculator.html" class="link-card">
                    <div class="link-card-icon" style="background: linear-gradient(135deg, #86efac, #4ade80);">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <div class="link-card-content">
                        <h4>ASCE 7 Wind Load Calculator</h4>
                        <p>Professional wind pressure analysis software</p>
                    </div>
                </a>

                <a href="asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html" class="link-card">
                    <div class="link-card-icon" style="background: linear-gradient(135deg, #fdba74, #fb923c);">
                        <i class="fas fa-search-location"></i>
                    </div>
                    <div class="link-card-content">
                        <h4>Wind Speed by Zip Code</h4>
                        <p>Quick lookup tool for design wind speeds</p>
                    </div>
                </a>

                <a href="basic-wind-speed-explained.html" class="link-card">
                    <div class="link-card-icon" style="background: linear-gradient(135deg, #60a5fa, #3b82f6);">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div class="link-card-content">
                        <h4>Basic Wind Speed Explained</h4>
                        <p>Understanding fundamental wind speed concepts</p>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- WindLoadCalc Promotional Section -->
    <section class="windloadcalc-promo">
        <div class="container">
            <h2>Need Professional Wind Load Calculators?</h2>
            <p>Visit our sister site <strong>WindLoadCalc.com</strong> for professional ASCE 7 wind load calculator software, automated wind speed lookup, and the Building Intelligence Platform (BIP).</p>
            <a href="https://windloadcalc.com" class="cta-button">Visit WindLoadCalc.com →</a>
        </div>
    </section>`;

console.log('Generator script created');
console.log('Ready to generate 5 comprehensive wind speed pages');
