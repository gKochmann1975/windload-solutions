# Stripe Payment & Thank You Page Setup Guide

## Wind Load Solutions, LLC - Service Delivery Process

This guide outlines how to set up a new service product with Stripe payment and a custom thank-you page for file delivery.

---

## Overview

When a customer purchases a service:
1. They pay via Stripe payment link
2. After payment, they're redirected to a custom thank-you page
3. The thank-you page contains a link to their Google Drive folder with their files

---

## Step 1: Prepare Google Drive Folder

### Create the Customer Folder

1. Go to [Google Drive](https://drive.google.com)
2. Navigate to your services folder (or create one)
3. Create a new folder with a descriptive name:
   - Example: `Jimmy Project - PE Seal`
   - Example: `Smith Residence - Wind Load Calcs`
4. Upload all customer files to this folder

### Set Sharing Permissions

1. Right-click the folder
2. Click **Share** → **Get link**
3. Change access from "Restricted" to **"Anyone with the link"**
4. Set permission to **"Viewer"** (so they can view/download but not edit)
5. Click **Copy link**
6. Save this link - you'll need it for the thank-you page

**Example link format:**
```
https://drive.google.com/drive/folders/1BNhpzkjUi267sRsFunfZ01MHB2UUdRyR?usp=sharing
```

---

## Step 2: Request Thank-You Page

### Information Needed

Provide the following to create the thank-you page:

| Field | Description | Example |
|-------|-------------|---------|
| **Page Name** | Short identifier for the URL | `jimmy-project` |
| **Service Type** | What service was provided | `P.E. Review and Sign/Seal` |
| **Google Drive Link** | The sharing link from Step 1 | `https://drive.google.com/drive/folders/...` |

### Page Naming Convention

The thank-you page URL will be:
```
https://windload.solutions/thank-you-[page-name]
```

**Examples:**
- `thank-you-jimmy-project` → Jimmy's PE Seal project
- `thank-you-smith-residence` → Smith residence calculations
- `thank-you-pe-seal-2024-001` → Using a project numbering system

---

## Step 3: Set Up Stripe Product & Payment Link

### Create the Product (if new)

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Click **Products** in the left sidebar
3. Click **+ Add product**
4. Fill in:
   - **Name**: Service name (e.g., "P.E. Review and Sign/Seal - Jimmy Project")
   - **Description**: Brief description of what's included
   - **Price**: Set your price (one-time payment)
5. Click **Save product**

### Create the Payment Link

1. In Stripe Dashboard, click **Payment links** in the left sidebar
2. Click **+ Create payment link**
3. Select your product
4. Click the **After payment** tab
5. Select **"Don't show confirmation page"**
6. Enter your thank-you page URL:
   ```
   https://windload.solutions/thank-you-[page-name]
   ```
7. Click **Create link**

### Copy Your Payment Link

After creating, Stripe will show your payment link:
```
https://buy.stripe.com/xxxxxxxxxxxxxxx
```

This is the link you send to your customer for payment.

---

## Step 4: Send to Customer

Send the customer:
1. **Payment link** from Stripe
2. **Description** of what they're purchasing
3. **What to expect** after payment (they'll be redirected to download their files)

**Example email:**
```
Subject: Invoice for P.E. Review and Sign/Seal Service

Hi [Customer Name],

Please use the link below to complete payment for your P.E. Review and Sign/Seal service:

[Stripe Payment Link]

After successful payment, you'll be automatically redirected to download your signed and sealed documents.

Thank you for choosing Wind Load Solutions!

Best regards,
Wind Load Solutions, LLC
```

---

## Quick Reference Checklist

For each new customer service:

- [ ] Create Google Drive folder with customer files
- [ ] Set folder sharing to "Anyone with the link" → "Viewer"
- [ ] Copy the Google Drive sharing link
- [ ] Request thank-you page with: page name, service type, Google Drive link
- [ ] Create Stripe product (if new service type)
- [ ] Create Stripe payment link with thank-you page redirect
- [ ] Send payment link to customer

---

## Existing Thank-You Pages

| Page URL | Customer/Project | Service |
|----------|------------------|---------|
| `thank-you-jimmy-project` | Jimmy Project | P.E. Review and Sign/Seal |
| `thank-you-download` | (Template) | Generic - do not use |

*Update this table as new pages are created*

---

## Notes

- Thank-you pages have `noindex, nofollow` so they won't appear in search results
- Each customer gets their own unique page and folder
- The generic `thank-you-download.html` is a template - don't use it directly
- Google Drive links remain active as long as sharing is enabled

---

## Need Help?

To request a new thank-you page, provide:
1. Page name (for URL)
2. Service type description
3. Google Drive folder link

The page will be created, committed to git, and deployed to the live site.
