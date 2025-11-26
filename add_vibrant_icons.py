#!/usr/bin/env python3
"""Add vibrant icons and colorful design to Why Choose Us page"""

# Read the file
with open('wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Font Awesome CDN after the favicon link
content = content.replace(
    '<link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">',
    '''<link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">'''
)

# Add hero icon section - find the hero content and add icon
hero_icon = '''                <div class="hero-icon">
                    <i class="fas fa-trophy"></i>
                </div>
'''
content = content.replace(
    '<h1>Why Choose Wind Load Solutions</h1>',
    hero_icon + '                <h1>Why Choose Wind Load Solutions</h1>'
)

# Add icon styles to CSS - insert before /* Hero Section */
icon_styles = '''
        .hero-icon {
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            font-size: 3rem;
            color: white;
            backdrop-filter: blur(10px);
            border: 3px solid rgba(255, 255, 255, 0.3);
        }

        .timeline-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            position: absolute;
            left: -2.8rem;
            top: 0;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }

        .feature-card:nth-child(1) .feature-icon {
            background: linear-gradient(135deg, #06b6d4, #0891b2);
        }

        .feature-card:nth-child(2) .feature-icon {
            background: linear-gradient(135deg, #f97316, #ea580c);
        }

        .feature-card:nth-child(3) .feature-icon {
            background: linear-gradient(135deg, #a855f7, #9333ea);
        }

        .feature-card:nth-child(4) .feature-icon {
            background: linear-gradient(135deg, #10b981, #059669);
        }

        .feature-card:nth-child(5) .feature-icon {
            background: linear-gradient(135deg, #ec4899, #db2777);
        }

        .feature-card:nth-child(6) .feature-icon {
            background: linear-gradient(135deg, #eab308, #ca8a04);
        }

        '''

content = content.replace('        /* Hero Section - Purple/Indigo Gradient for "Why Choose Us" */', icon_styles + '        /* Hero Section - Purple/Indigo Gradient for "Why Choose Us" */')

# Write the updated file
with open('wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Added Font Awesome CDN")
print("✓ Added hero icon (trophy)")
print("✓ Added icon styles for timeline and features")
print("Done!")
