# Hosting Architecture - CRITICAL REFERENCE

**Date Created:** January 25, 2025
**Status:** ✅ Active Configuration
**Priority:** 🔴 CRITICAL - READ BEFORE ANY DEPLOYMENT WORK

---

## Overview

This document defines the hosting architecture for both Wind Load Solutions properties. **DO NOT** deviate from this architecture without explicit user approval.

---

## Architecture Summary

| Property | Hosting Platform | Reason |
|----------|-----------------|---------|
| **windload.solutions** | **Vercel** | Static educational content site - perfect for Vercel's edge network |
| **windloadcalc.com** | **GitHub + Railway** | Complex SaaS platform with webapp + website structure requiring Railway's infrastructure |

---

## 1. windload.solutions → Vercel

### Platform: Vercel
### Repository: GitHub (new repo to be created)
### Domain: windload.solutions (managed via GoDaddy DNS)

**Why Vercel:**
- ✅ Pure static HTML/CSS/JS site
- ✅ 81 educational pages with no backend
- ✅ Perfect for Vercel's global CDN and edge caching
- ✅ Automatic HTTPS and clean URL handling
- ✅ Simple deployment from GitHub
- ✅ Excellent performance for static content

**Structure:**
```
windload.solutions/
├── index.html (homepage)
├── 70 educational pages
├── 11 state requirement pages
├── 21 bridge pages (WordPress URL preservation)
├── images/
├── vercel.json (clean URLs, headers)
├── robots.txt
└── sitemap.xml
```

**Deployment Flow:**
1. GitHub repository (public or private)
2. Connect GitHub to Vercel
3. Deploy from main branch
4. Point windload.solutions DNS to Vercel
5. Vercel handles SSL automatically

---

## 2. windloadcalc.com → GitHub + Railway

### Platform: Railway (NOT Vercel)
### Repository: GitHub (already exists)
### Domain: windloadcalc.com (managed via GoDaddy DNS)

**Why Railway (NOT Vercel):**
- ✅ **Complex structure:** Website + Webapp (SaaS platform)
- ✅ **Backend requirements:** Stripe subscriptions, user authentication, database
- ✅ **Multiple services:** Web server, application server, database
- ✅ **Environment variables:** Payment processing, API keys, secrets
- ✅ **Already configured and working on Railway**

**Structure:**
```
windloadcalc.com/
├── website/ (public-facing marketing pages)
│   ├── index.html
│   ├── demo.html
│   ├── services.html
│   └── [other marketing pages]
├── webapp/ (SaaS application - requires backend)
│   ├── calculator/
│   ├── user-dashboard/
│   ├── subscription-management/
│   └── [protected routes]
├── server/ (Node.js/Python backend)
├── database/
└── railway.json
```

**Why NOT Vercel for windloadcalc.com:**
- ❌ Vercel is optimized for static sites and serverless functions
- ❌ Complex SaaS applications with persistent backends work better on Railway
- ❌ Already configured and deployed on Railway
- ❌ Migration would be complex and unnecessary

---

## Critical Rules

### ✅ DO:
- Deploy windload.solutions to Vercel
- Keep windloadcalc.com on Railway
- Use same GitHub account for both repos
- Document any infrastructure changes in this file

### ❌ DO NOT:
- **NEVER** suggest moving windloadcalc.com to Vercel
- **NEVER** suggest moving windload.solutions to Railway
- **NEVER** confuse the two platforms when discussing deployment
- **NEVER** proceed with deployment without confirming which property is being discussed

---

## DNS Configuration

Both domains use GoDaddy for DNS management:

### windload.solutions (Vercel)
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### windloadcalc.com (Railway)
```
Type: A
Name: @
Value: [Railway IP address]
```

---

## Quick Reference for New Sessions

When user mentions deployment:

1. **Ask which property:** "Are you referring to windload.solutions or windloadcalc.com?"
2. **Confirm platform:**
   - windload.solutions = Vercel
   - windloadcalc.com = Railway
3. **Check this document** before proceeding

---

## Related Documentation

- [Vercel-Deployment-Guide.md](Vercel-Deployment-Guide.md) - Specific to windload.solutions
- [WindLoadCalc-Link-Strategy.md](WindLoadCalc-Link-Strategy.md) - How the two sites link together
- [Migration-Strategy-Plan.md](Migration-Strategy-Plan.md) - Customer migration from WordPress

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-01-25 | 1.0 | Initial documentation - defined Vercel (windload.solutions) vs Railway (windloadcalc.com) architecture |

---

**Last Updated:** January 25, 2025
**Created By:** User directive - "write it down in your memory folder"
**Importance:** 🔴 CRITICAL - Reference this file before ANY hosting/deployment discussions
