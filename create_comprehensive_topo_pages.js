const fs = require('fs');

// Read index.html for template
const indexHTML = fs.readFileSync('index.html', 'utf8');

// Extract base CSS and JavaScript from index
const baseCSSMatch = indexHTML.match(/<style>([\s\S]*?)<\/style>/);
const baseCSS = baseCSSMatch ? baseCSSMatch[1] : '';

const scriptMatches = indexHTML.match(/<script>([\s\S]*?)<\/script>/g);
const mainScript = scriptMatches ? scriptMatches[scriptMatches.length - 1].replace(/<\/?script>/g, '') : '';

// Extract header
const headerMatch = indexHTML.match(/(<header class="main-header">[\s\S]*?<\/header>)/);
const headerHTML = headerMatch ? headerMatch[1] : '';

// Extract navigation
const navMatch = indexHTML.match(/(<!-- Navigation Overlay -->[\s\S]*?<\/nav>)/);
const navHTML = navMatch ? navMatch[1] : '';

// Extract footer
const footerMatch = indexHTML.match(/(<!-- Footer -->[\s\S]*?<\/footer>)/);
const footerHTML = footerMatch ? footerMatch[1] : '';

// Define comprehensive educational content for each terrain type
const terrainContent = {
  'flat': {
    intro: `When wind flows over level terrain without significant topographic features, the wind speed remains relatively uniform at a given height above ground. This scenario, commonly referred to as flat terrain, represents the baseline condition for wind load calculations where the topographic factor Kzt equals 1.0. Understanding flat terrain wind loads is fundamental to structural engineering, as it serves as the reference point from which topographic amplification effects are measured. Most building sites fall into this category, making it the most frequently encountered condition in wind load analysis.`,

    whatIs: `<h2>What is Flat Terrain?</h2>
<p>Flat terrain, in the context of ASCE 7 wind load calculations, refers to any site where topographic features do not create significant wind speed-up effects. According to ASCE 7, flat terrain exists when the site does not meet the criteria for topographic amplification—specifically, when there are no hills, ridges, or escarpments that would cause wind acceleration.</p>

<p>The key characteristic of flat terrain is that wind flows over the surface without being accelerated by changes in elevation. This doesn't necessarily mean the land is perfectly level—minor undulations, gentle slopes, and gradual elevation changes still qualify as flat terrain if they don't create significant speed-up zones.</p>

<h3>Defining Characteristics</h3>
<p>Flat terrain is defined by what it lacks rather than what it contains. Sites are considered flat when:</p>
<ul style="font-size: 1.1rem; line-height: 2; margin: 1.5rem 0 1.5rem 2rem;">
  <li><strong>No significant topographic features</strong> - Absence of hills, ridges, escarpments, or valleys that would alter wind flow patterns</li>
  <li><strong>Gradual elevation changes</strong> - Any slopes present are gradual enough that they don't create wind acceleration zones</li>
  <li><strong>Uniform wind exposure</strong> - Wind approaching from any direction encounters similar terrain conditions</li>
  <li><strong>Height-to-distance ratios below threshold</strong> - Terrain features don't meet the ASCE 7 criteria for topographic effects (H/Lh < 0.2 or similar thresholds)</li>
</ul>`,

    asceRequirements: `<h2>ASCE 7 Requirements for Flat Terrain</h2>
<p>ASCE 7 Section 26.8 addresses topographic effects and establishes when the topographic factor Kzt can be taken as 1.0. For flat terrain, engineers can confidently use Kzt = 1.0 without performing detailed topographic analysis, simplifying the wind load calculation process.</p>

<h3>When Kzt = 1.0 Applies</h3>
<p>According to ASCE 7, the topographic factor Kzt shall be taken as 1.0 when the site conditions do not meet all of the following conditions simultaneously:</p>

<div style="background: #f8fafc; padding: 2rem; border-radius: 12px; border-left: 4px solid #06b6d4; margin: 2rem 0;">
  <h4 style="color: #06b6d4; margin-top: 0;">ASCE 7 Topographic Factor Criteria</h4>
  <p><strong>The topographic factor Kzt = 1.0 when ANY of these conditions are NOT met:</strong></p>
  <ol style="font-size: 1.05rem; line-height: 1.8;">
    <li>The hill, ridge, or escarpment is isolated and unobstructed by other similar topographic features for a distance from the crest of 100 times the height of the topographic feature (100H) or 2 miles (3.22 km), whichever is less</li>
    <li>The topographic feature protrudes above the height of upwind terrain features within a 2-mile (3.22 km) radius by a factor of two or more</li>
    <li>The structure is located in the speed-up region as defined in Figure 26.8-1</li>
    <li>H/Lh ≥ 0.2 for hills and ridges, where H is the height and Lh is the distance upwind of crest to where the ground surface is half the height of the hill</li>
  </ol>
  <p style="margin-bottom: 0;"><em>When these conditions are NOT all satisfied, use Kzt = 1.0 (flat terrain)</em></p>
</div>`,

    calculations: `<h2>Wind Load Calculations for Flat Terrain</h2>
<p>Calculating wind loads on flat terrain is straightforward because the topographic factor simplifies to 1.0, eliminating the need for complex topographic analysis. This simplification reduces calculation time and potential errors while maintaining safety.</p>

<h3>Basic Wind Pressure Formula</h3>
<p>For flat terrain sites, the velocity pressure qz is calculated using:</p>

<div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">
  <p style="font-size: 1.3rem; font-weight: 600; margin: 0 0 1rem 0; opacity: 0.9;">Velocity Pressure (Flat Terrain)</p>
  <p style="font-size: 1.5rem; font-weight: 700; margin: 0; font-family: 'Courier New', monospace;">qz = 0.00256 Kz Kzt Kd V²</p>
  <p style="margin: 1.5rem 0 0 0; opacity: 0.95; font-size: 1.05rem;">Where <strong>Kzt = 1.0</strong> for flat terrain</p>
</div>

<h3>Calculation Steps</h3>
<ol style="font-size: 1.1rem; line-height: 2; margin: 1.5rem 0 1.5rem 2rem;">
  <li><strong>Verify flat terrain conditions</strong> - Confirm site doesn't meet all ASCE 7 topographic criteria</li>
  <li><strong>Set Kzt = 1.0</strong> - Use unity topographic factor throughout calculations</li>
  <li><strong>Determine exposure category</strong> - Establish Kz values based on surface roughness (B, C, or D)</li>
  <li><strong>Apply directionality factor</strong> - Use appropriate Kd for structure type</li>
  <li><strong>Calculate velocity pressure</strong> - Compute qz at each height of interest</li>
  <li><strong>Determine pressure coefficients</strong> - Apply GCp or Cp values for components or MWFRS</li>
  <li><strong>Calculate design pressures</strong> - Multiply velocity pressure by appropriate coefficients</li>
</ol>`,

    whenToApply: `<h2>When to Apply Flat Terrain Analysis</h2>
<p>Determining whether a site qualifies as flat terrain is the first critical step in wind load analysis. Most building sites in developed areas qualify as flat terrain, but engineers must carefully evaluate site conditions to ensure this assumption is valid.</p>

<h3>Typical Flat Terrain Scenarios</h3>
<ul style="font-size: 1.1rem; line-height: 2; margin: 1.5rem 0 1.5rem 2rem;">
  <li><strong>Urban and suburban development</strong> - Most commercial and residential areas in cities and suburbs</li>
  <li><strong>Agricultural flatlands</strong> - Prairie, plains, and farmland without significant terrain features</li>
  <li><strong>Coastal areas away from dunes</strong> - Flat coastal regions where dunes don't create speed-up effects</li>
  <li><strong>Valley floors</strong> - Wide valley bottoms where surrounding features are distant or gradual</li>
  <li><strong>Plateaus and mesas</strong> - Level elevated terrain far from edges</li>
</ul>

<p><strong>Professional Tip:</strong> When in doubt about whether topographic effects exist, a conservative approach is to perform the topographic analysis. However, for most sites, a site visit and review of topographic maps will clearly indicate flat terrain conditions.</p>`,

    examples: `<h2>Common Examples</h2>
<p>Real-world applications help illustrate when flat terrain assumptions are appropriate:</p>

<div style="display: grid; gap: 1.5rem; margin: 2rem 0;">
  <div style="background: white; padding: 1.5rem; border-radius: 12px; border: 2px solid #e5e7eb; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    <h4 style="color: #06b6d4; margin-top: 0;">✓ Example 1: Suburban Office Building</h4>
    <p style="margin-bottom: 0;">A three-story office building in a suburban business park surrounded by similar-height structures and gently rolling terrain. The nearest significant hill is 3 miles away. <strong>Kzt = 1.0 applies.</strong></p>
  </div>

  <div style="background: white; padding: 1.5rem; border-radius: 12px; border: 2px solid #e5e7eb; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    <h4 style="color: #06b6d4; margin-top: 0;">✓ Example 2: Agricultural Warehouse</h4>
    <p style="margin-bottom: 0;">A large warehouse on farmland in the Midwest plains. Terrain is level with minor undulations over long distances. No nearby topographic features. <strong>Kzt = 1.0 applies.</strong></p>
  </div>

  <div style="background: white; padding: 1.5rem; border-radius: 12px; border: 2px solid #e5e7eb; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    <h4 style="color: #06b6d4; margin-top: 0;">✓ Example 3: Coastal Retail Center</h4>
    <p style="margin-bottom: 0;">A shopping center 1 mile inland from the coast on flat terrain. While exposure D may apply due to proximity to water, no topographic speed-up effects exist. <strong>Kzt = 1.0 applies.</strong></p>
  </div>
</div>`,

    bestPractices: `<h2>Best Practices and Professional Guidance</h2>
<p>Even when flat terrain conditions clearly exist, engineers should follow these best practices to ensure accurate and defensible wind load calculations:</p>

<div style="background: linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0;">
  <h3 style="color: #1f2937; margin-top: 0;">Engineering Best Practices</h3>

  <h4 style="color: #06b6d4;">Documentation</h4>
  <ul style="line-height: 1.8;">
    <li>Document site visit observations confirming flat terrain</li>
    <li>Include topographic maps or aerial imagery in project files</li>
    <li>Note distance to nearest significant topographic features</li>
    <li>Photograph site from multiple angles showing terrain context</li>
  </ul>

  <h4 style="color: #06b6d4;">Conservative Approach</h4>
  <ul style="line-height: 1.8;">
    <li>If terrain conditions are marginal, perform topographic analysis</li>
    <li>Consider cumulative effects of multiple minor terrain features</li>
    <li>Review historical wind data for evidence of channeling or speed-up</li>
    <li>Consult with local building officials about known topographic issues</li>
  </ul>

  <h4 style="color: #06b6d4;">Peer Review Considerations</h4>
  <ul style="line-height: 1.8; margin-bottom: 0;">
    <li>Clearly state assumption of Kzt = 1.0 in calculations</li>
    <li>Provide justification for flat terrain determination</li>
    <li>Include references to ASCE 7 Section 26.8 criteria</li>
    <li>Be prepared to defend assumptions with site-specific evidence</li>
  </ul>
</div>

<p><strong>Remember:</strong> Assuming flat terrain when topographic effects exist will result in unconservative (unsafe) designs. When in doubt, perform the topographic analysis or consult with a professional engineer experienced in wind engineering.</p>`
  },

  // Additional terrain types will be added below...
};

console.log('Creating comprehensive topographic educational pages with SEO content...\n');

// This is a work-in-progress script that will be completed with all 4 terrain types
// Next: Add escarpment, 2D ridge, and 3D hill content

console.log('✅ Flat terrain content structure created');
console.log('⏳ Script will be completed with remaining terrain types...');
