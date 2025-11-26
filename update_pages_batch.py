import re
import os

os.chdir('c:/windload-solutions-parent')

# Page configurations
pages = {
    "wind-load-calculator-for-engineers.html": {
        "title": "Wind Load Calculator for Engineers - Professional Structural Analysis",
        "desc": "Engineering-grade wind load calculator with advanced analysis capabilities. ASCE 7 compliance, custom loading scenarios, and PE seal integration.",
        "canonical": "https://windload.solutions/wind-load-calculator-for-engineers",
        "keywords": "engineering wind calculator, structural analysis, ASCE 7 software, professional engineering tools",
        "og_title": "Wind Load Calculator for Engineers - Professional Structural Analysis",
        "gradient": "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
        "hero_title": "Wind Load Calculator for Engineers",
        "hero_subtitle": "Advanced engineering-grade calculator with comprehensive ASCE 7 analysis, custom loading scenarios, and integrated PE seal services for professional structural engineers",
        "stat1_num": "Advanced", "stat1_label": "Analysis Tools",
        "stat2_num": "Custom", "stat2_label": "Scenarios",
        "stat3_num": "PE", "stat3_label": "Integration",
        "intro_title": "Engineering-Grade Analysis Tools",
        "intro_p1": "Professional structural engineers require advanced wind load analysis capabilities beyond basic calculations. Our engineering calculator provides comprehensive ASCE 7 analysis including directional procedures, topographic effects, shielding factors, and complex loading scenarios that typical calculators cannot handle.",
        "intro_p2": "The platform supports custom wind speed maps, site-specific wind tunnel data integration, non-standard building geometries, and irregular structural configurations. Advanced features include load combination analysis, drift calculations, lateral stability verification, and foundation loading summaries.",
        "intro_p3": "Seamless integration with PE seal services means calculations can be stamped and certified for permit submittal. Export capabilities include detailed calculation sheets, loading diagrams, pressure distribution maps, and formatted reports meeting jurisdictional requirements.",
        "cta_title": "Access Engineering Calculator",
        "cta_subtitle": "Professional tools for comprehensive structural wind analysis",
        "cta_url": "https://windloadcalc.com/wind-load-calculator-for-engineers.html",
        "cta_text": "Access Engineering Calculator →"
    },
    "wind-load-calculator-for-architects.html": {
        "title": "Wind Load Calculator for Architects - Building Design Integration",
        "desc": "Architect-friendly wind load calculator for early-stage design. Visual interface, code compliance checking, and seamless CAD integration.",
        "canonical": "https://windload.solutions/wind-load-calculator-for-architects",
        "keywords": "architect wind calculator, building design tools, early stage wind analysis, CAD integration",
        "og_title": "Wind Load Calculator for Architects - Building Design Integration",
        "gradient": "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        "hero_title": "Wind Load Calculator for Architects",
        "hero_subtitle": "Architect-friendly calculator with visual interface and CAD integration. Early-stage wind analysis, code compliance verification, and conceptual design support",
        "stat1_num": "Visual", "stat1_label": "Interface",
        "stat2_num": "CAD", "stat2_label": "Integration",
        "stat3_num": "Early", "stat3_label": "Design Stage",
        "intro_title": "Design-Focused Wind Analysis",
        "intro_p1": "Architects need wind load information early in the design process to make informed decisions about building form, orientation, and envelope systems. Our architect-focused calculator provides quick conceptual wind analysis with visual feedback that integrates seamlessly into design workflows.",
        "intro_p2": "The intuitive interface requires minimal technical input while providing actionable results including pressure zones, critical loading areas, and envelope design requirements. Built-in code compliance checking ensures early design concepts meet wind load requirements before detailed engineering begins.",
        "intro_p3": "Export capabilities include CAD-compatible pressure zone diagrams, schematic loading patterns, and design recommendation summaries. When projects progress to construction documents, seamless handoff to engineering calculators ensures continuity while maintaining early design decisions.",
        "cta_title": "Start Designing with Confidence",
        "cta_subtitle": "Wind analysis tools built for architectural workflows",
        "cta_url": "https://windloadcalc.com/wind-load-calculator-for-architects.html",
        "cta_text": "Access Architect Calculator →"
    },
    "contractors-wind-load-calculator.html": {
        "title": "Wind Load Calculator for Contractors - Field-Ready Analysis Tools",
        "desc": "Contractor-focused wind load calculator for job site applications. Simple interface, mobile-friendly, instant calculations for bids and permits.",
        "canonical": "https://windload.solutions/contractors-wind-load-calculator",
        "keywords": "contractor wind calculator, job site wind analysis, bidding tools, field calculations",
        "og_title": "Wind Load Calculator for Contractors - Field-Ready Analysis Tools",
        "gradient": "linear-gradient(135deg, #f77062 0%, #fe5196 100%)",
        "hero_title": "Wind Load Calculator for Contractors",
        "hero_subtitle": "Field-ready calculator designed for contractors. Mobile-friendly interface, instant results for bidding, and simplified workflows for permit applications",
        "stat1_num": "Mobile", "stat1_label": "Optimized",
        "stat2_num": "Instant", "stat2_label": "Results",
        "stat3_num": "Simple", "stat3_label": "Interface",
        "intro_title": "Built for the Job Site",
        "intro_p1": "Contractors need quick, reliable wind load calculations for bidding projects and pulling permits. Our contractor calculator provides instant results without requiring extensive technical knowledge. Simple inputs like address, building type, and dimensions generate code-compliant calculations ready for permit submittal.",
        "intro_p2": "Mobile-optimized interface works on phones and tablets at the job site. Save project data for quick revisions when plans change. Built-in cost estimating integration helps translate wind load requirements into material quantities and labor costs for accurate bidding.",
        "intro_p3": "All calculations meet local code requirements and include optional PE seal services when jurisdictions require professional stamps. Clear, contractor-friendly reports explain what materials and installation methods are needed to meet wind load standards.",
        "cta_title": "Calculate Wind Loads On-Site",
        "cta_subtitle": "Fast, simple wind calculations for contractors in the field",
        "cta_url": "https://windloadcalc.com/contractors-wind-load-calculator.html",
        "cta_text": "Access Contractor Calculator →"
    },
    "wind-loads-for-consultants.html": {
        "title": "Wind Load Solutions for Consultants - Multi-Project Efficiency",
        "desc": "Consulting-focused wind load platform with batch processing, client reporting, and multi-project management. Streamline your consulting practice.",
        "canonical": "https://windload.solutions/wind-loads-for-consultants",
        "keywords": "consulting wind loads, batch processing, multi-project management, client reporting",
        "og_title": "Wind Load Solutions for Consultants - Multi-Project Efficiency",
        "gradient": "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        "hero_title": "Wind Load Solutions for Consultants",
        "hero_subtitle": "Consulting platform with batch processing, custom client reporting, and multi-project management tools. Maximize efficiency across your entire practice",
        "stat1_num": "Batch", "stat1_label": "Processing",
        "stat2_num": "Multi", "stat2_label": "Project",
        "stat3_num": "Custom", "stat3_label": "Reporting",
        "intro_title": "Maximize Consulting Efficiency",
        "intro_p1": "Engineering consultants managing multiple wind load projects need efficient workflows and consistent deliverables. Our consulting platform provides batch processing capabilities, standardized reporting templates, and multi-project dashboards that streamline practice management and client service.",
        "intro_p2": "Process multiple buildings simultaneously with batch calculation features. Create custom report templates with your branding that automatically populate with calculation results. Client portal access allows stakeholders to review progress and access completed calculations without email exchanges.",
        "intro_p3": "Integrated project management tracks calculation status, revision history, and PE seal requirements across your entire project portfolio. Automated quality checks ensure consistency and code compliance before client delivery. Subscription pricing scales with practice size for cost-effective professional tools.",
        "cta_title": "Streamline Your Practice",
        "cta_subtitle": "Professional consulting tools for efficient wind load services",
        "cta_url": "https://windloadcalc.com/wind-loads-for-consultants.html",
        "cta_text": "Access Consultant Platform →"
    }
}

# Process each file
for filename, config in pages.items():
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update title and meta
        content = re.sub(r'<title>.*?</title>', f'<title>{config["title"]}</title>', content)
        content = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{config["desc"]}">', content)
        content = re.sub(r'<link rel="canonical" href=".*?">', f'<link rel="canonical" href="{config["canonical"]}">', content)
        content = re.sub(r'<meta name="keywords" content=".*?">', f'<meta name="keywords" content="{config["keywords"]}">', content)

        # Update OG tags
        content = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{config["og_title"]}">', content)
        content = re.sub(r'<meta property="og:description" content=".*?">', f'<meta property="og:description" content="{config["desc"]}">', content)
        content = re.sub(r'<meta property="og:url" content=".*?">', f'<meta property="og:url" content="{config["canonical"]}">', content)

        # Update schema
        content = re.sub(r'"name": ".*?",\s*"description": ".*?",\s*"url": ".*?"',
                        f'"name": "{config["title"].split(" - ")[0]}",\\n        "description": "{config["desc"]}",\\n        "url": "{config["canonical"]}"', content)

        # Update gradient
        content = re.sub(r'background: linear-gradient\([^)]+\);', f'background: {config["gradient"]};', content, count=1)

        # Update hero section
        content = re.sub(r'<h1 class="hero-title">.*?</h1>', f'<h1 class="hero-title">{config["hero_title"]}</h1>', content)
        content = re.sub(r'<p class="hero-subtitle">.*?</p>', f'<p class="hero-subtitle">{config["hero_subtitle"]}</p>', content, count=1)

        # Update hero stats
        pattern = r'(<div class="hero-stats">.*?<div class="stat-number">).*?(</div>\s*<div class="stat-label">).*?(</div>)'
        content = re.sub(pattern, f'\\1{config["stat1_num"]}\\2{config["stat1_label"]}\\3', content, count=1, flags=re.DOTALL)
        content = re.sub(pattern, f'\\1{config["stat2_num"]}\\2{config["stat2_label"]}\\3', content, count=1, flags=re.DOTALL)
        content = re.sub(pattern, f'\\1{config["stat3_num"]}\\2{config["stat3_label"]}\\3', content, count=1, flags=re.DOTALL)

        # Update intro section
        content = re.sub(r'(<section class="intro-section">.*?<h2>).*?(</h2>)', f'\\1{config["intro_title"]}\\2', content, flags=re.DOTALL)

        # Replace all three paragraphs in intro section
        pattern = r'(<div class="intro-content">.*?<h2>.*?</h2>\s*)<p>.*?</p>\s*<p>.*?</p>\s*<p>.*?</p>'
        replacement = f'\\1<p>{config["intro_p1"]}</p>\\n\\n                <p>{config["intro_p2"]}</p>\\n\\n                <p>{config["intro_p3"]}</p>'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)

        # Update CTA section
        content = re.sub(r'(<section class="cta-section">.*?<h2>).*?(</h2>)', f'\\1{config["cta_title"]}\\2', content, flags=re.DOTALL)
        content = re.sub(r'(<section class="cta-section">.*?<p>).*?(</p>)', f'\\1{config["cta_subtitle"]}\\2', content, flags=re.DOTALL)
        content = re.sub(r'<a href=".*?" class="cta-button".*?>.*?</a>', f'<a href="{config["cta_url"]}" class="cta-button" target="_blank" rel="noopener">{config["cta_text"]}</a>', content, count=1)

        # Write updated content
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"Updated {filename}")
    except Exception as e:
        print(f"Error updating {filename}: {str(e)}")

print("All pages updated successfully!")
