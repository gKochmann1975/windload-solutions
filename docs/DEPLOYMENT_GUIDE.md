# Deploying windload.solutions to Vercel

## Overview

This guide will walk you through migrating **windload.solutions** from GoDaddy to Vercel for hosting, while keeping your domain registered with GoDaddy.

---

## What You Need

### Required Services
1. **Vercel Account** (Free tier is sufficient)
   - Sign up at: https://vercel.com/signup
   - Use GitHub, GitLab, or Bitbucket to sign in (recommended)

2. **GoDaddy Account** (You already have this)
   - You'll keep your domain registered here
   - You'll only change the DNS settings

3. **Git Repository** (Recommended but optional)
   - GitHub, GitLab, or Bitbucket
   - Makes updates easier with automatic deployments

### Optional Services
- **Google Search Console** - Submit your new sitemap
- **Google Analytics** - Track traffic (if not already set up)

---

## Step-by-Step Deployment Process

### Step 1: Prepare Your Files

**Current Location:** `C:\windload-solutions-parent\`

**Files to Deploy:**
```
windload-solutions-parent/
├── index.html
├── about.html
├── contact.html
├── resources.html
├── articles.html
├── asce-7-standards.html
├── (... all 63+ HTML files)
├── sitemap.xml
├── videos/
│   ├── index-homepage.mp4
│   └── index-homepage.webm
├── topographic-*.html (animation files)
└── states/
    └── (state requirement pages)
```

**Remove these files before deploying** (not needed for production):
- `pages_data.json`
- `generatePages.js`
- `generate_pages.py`
- `update_topo_pages.py`
- `docs/` folder
- `NEW_PAGES_SUMMARY.md`
- Any `.sh` or test files

---

### Step 2: Set Up Git Repository (Recommended)

#### Option A: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop**
   - https://desktop.github.com/

2. **Create Repository**
   - Open GitHub Desktop
   - File → New Repository
   - Name: `windload-solutions`
   - Local Path: `C:\windload-solutions-parent`
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository" button
   - Choose "Private" if you want it private (recommended)
   - Click "Publish repository"

#### Option B: Using Git Command Line

```bash
cd C:\windload-solutions-parent

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - windload.solutions site"

# Create GitHub repo (you'll need GitHub CLI installed)
# Or create manually at github.com/new

# Add remote and push
git remote add origin https://github.com/YOUR-USERNAME/windload-solutions.git
git branch -M main
git push -u origin main
```

---

### Step 3: Deploy to Vercel

#### Option A: Deploy via GitHub (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com/new
   - Sign in with GitHub

2. **Import Repository**
   - Click "Import Project"
   - Select your `windload-solutions` repository
   - Click "Import"

3. **Configure Project**
   - **Project Name:** `windload-solutions`
   - **Framework Preset:** Other (static site)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** Leave empty
   - **Output Directory:** `./` (leave as is)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will deploy your site in ~30-60 seconds
   - You'll get a temporary URL like: `windload-solutions-xyz.vercel.app`

#### Option B: Deploy via Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd C:\windload-solutions-parent

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: windload-solutions
# - Directory: ./ (just press Enter)
# - Override settings: No

# After successful deployment, you'll get a URL
```

---

### Step 4: Add Custom Domain (windload.solutions)

#### In Vercel Dashboard:

1. **Go to Project Settings**
   - Open your `windload-solutions` project in Vercel
   - Click "Settings" tab
   - Click "Domains" in sidebar

2. **Add Domain**
   - Enter: `windload.solutions`
   - Click "Add"
   - Also add: `www.windload.solutions`
   - Click "Add"

3. **Copy DNS Records**
   - Vercel will show you the DNS records you need
   - **For apex domain (windload.solutions):**
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21`

   - **For www subdomain:**
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`

---

### Step 5: Update DNS in GoDaddy

#### In GoDaddy Dashboard:

1. **Login to GoDaddy**
   - Go to: https://dcc.godaddy.com/domains
   - Find `windload.solutions`
   - Click "DNS" or "Manage DNS"

2. **Update/Add A Record**
   - Find the existing `A` record for `@` (if exists)
   - **Edit** or **Add** A record:
     - Type: `A`
     - Host: `@`
     - Points to: `76.76.21.21`
     - TTL: `600` seconds (10 minutes)
   - Save

3. **Update/Add CNAME Record for www**
   - Find existing `CNAME` for `www` (if exists)
   - **Edit** or **Add** CNAME record:
     - Type: `CNAME`
     - Host: `www`
     - Points to: `cname.vercel-dns.com`
     - TTL: `1 Hour`
   - Save

4. **Remove Old Records** (Important!)
   - If you have old A records pointing to GoDaddy's hosting, delete them
   - Keep only the new Vercel A record

5. **Wait for DNS Propagation**
   - Can take 5 minutes to 48 hours
   - Usually takes 10-30 minutes
   - Check status: https://dnschecker.org

---

### Step 6: Verify SSL Certificate

1. **In Vercel Dashboard**
   - Go to Settings → Domains
   - Check that both domains show "Valid Configuration"
   - SSL certificate should auto-provision within 24 hours

2. **Force HTTPS** (Optional but recommended)
   - In Vercel: Settings → General
   - Enable "Force HTTPS Redirect"

---

### Step 7: Submit Sitemap to Google

1. **Google Search Console**
   - Go to: https://search.google.com/search-console
   - Add property: `windload.solutions`
   - Verify ownership (use DNS verification or HTML file)

2. **Submit Sitemap**
   - In Search Console, go to Sitemaps
   - Enter: `https://windload.solutions/sitemap.xml`
   - Click "Submit"

---

## Post-Deployment Checklist

### Test Your Site

- [ ] Visit `https://windload.solutions` - Homepage loads
- [ ] Visit `https://www.windload.solutions` - Redirects to non-www
- [ ] Test navigation menu - All links work
- [ ] Test hamburger menu - Opens and closes
- [ ] Click through new pages - All 39+ pages load correctly
- [ ] Test video playback - Homepage video plays
- [ ] Test topography animations - 4 animation pages work
- [ ] Test mobile responsive - Check on phone/tablet
- [ ] Verify SSL - Green padlock in browser
- [ ] Test search - Submit sitemap to Google

### Update Internal Links

If you have any hardcoded links to your old GoDaddy URL, update them to:
- `https://windload.solutions/` (no .html extension if possible)

### Set Up Analytics (Optional)

If you want to track visitors:

1. **Google Analytics**
   - Create GA4 property
   - Add tracking code to all pages
   - Or use Vercel Analytics (built-in, easier)

2. **Vercel Analytics** (Recommended - Easier)
   - In Vercel Dashboard: Analytics tab
   - Click "Enable Analytics"
   - Free for up to 100k events/month

---

## Updating Your Site in the Future

### Via GitHub (Automatic Deployment)

1. Make changes to your local files in `C:\windload-solutions-parent\`
2. Open GitHub Desktop
3. See your changes in left panel
4. Write commit message
5. Click "Commit to main"
6. Click "Push origin"
7. **Vercel automatically deploys** in 30-60 seconds!

### Via Vercel CLI (Manual)

```bash
cd C:\windload-solutions-parent

# Make your changes to files

# Deploy
vercel --prod

# Done!
```

---

## Costs

### Vercel
- **Free Tier:** Unlimited sites, 100GB bandwidth/month
- **Pro Tier ($20/month):** More bandwidth, more features
- **For your site:** Free tier is more than sufficient

### GoDaddy
- **Keep:** Domain registration (~$15-20/year)
- **Cancel:** Web hosting (you won't need it anymore)
  - Go to: https://account.godaddy.com/products
  - Find "Web Hosting"
  - Cancel/Don't renew
  - **Wait until after DNS migration is complete!**

### Total Cost
- **Current:** ~$15-20/year (domain only)
- **Savings:** ~$100-200/year (no hosting fees)

---

## Troubleshooting

### Site Not Loading After DNS Change

**Problem:** Domain still pointing to old site
**Solution:**
- Wait 1-2 hours for DNS propagation
- Clear browser cache (Ctrl + Shift + Delete)
- Check DNS: https://dnschecker.org

### SSL Certificate Not Working

**Problem:** "Not Secure" warning in browser
**Solution:**
- Wait 24 hours for auto-provisioning
- In Vercel: Domains → Refresh SSL certificate

### Video Not Playing

**Problem:** Video files not loading
**Solution:**
- Check file paths are correct (relative paths)
- Verify video files uploaded to GitHub/Vercel
- Check file sizes (max 100MB per file on GitHub)

### 404 Errors on Pages

**Problem:** New pages showing 404
**Solution:**
- Verify files uploaded to repository
- Check file names match exactly (case-sensitive)
- Re-deploy: `vercel --prod`

---

## Rollback Plan (If Needed)

If something goes wrong:

1. **In GoDaddy DNS:**
   - Change A record back to old IP address
   - Save and wait 10-30 minutes

2. **Contact Support:**
   - GoDaddy: 1-480-505-8877
   - Vercel: https://vercel.com/support

---

## Need Help?

### Resources
- **Vercel Docs:** https://vercel.com/docs
- **Vercel Discord:** https://vercel.com/discord
- **GitHub Docs:** https://docs.github.com

### Support
- **Vercel Support:** https://vercel.com/support
- **GoDaddy Support:** 1-480-505-8877

---

## Summary

1. ✅ Create Vercel account
2. ✅ Push code to GitHub
3. ✅ Connect GitHub to Vercel
4. ✅ Deploy to Vercel (automatic)
5. ✅ Add custom domain in Vercel
6. ✅ Update DNS in GoDaddy
7. ✅ Wait for DNS propagation (10-30 min)
8. ✅ Verify site works
9. ✅ Submit sitemap to Google
10. ✅ Cancel GoDaddy hosting (after verification)

**Total Time:** 30-60 minutes (plus DNS wait time)

---

**Built with Claude Code** - Migration guide for windload.solutions
