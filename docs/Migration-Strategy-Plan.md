# Wind Load Solutions - Customer Migration Strategy
## Migrating 85 Customers from Microsoft/SharePoint to windloadcalc.com

**Date:** January 2025
**Status:** Planning Phase
**Total Customers:** 85 active subscriptions
**Annual Value:** $32,725 ($385/year per customer)

---

## 📋 Table of Contents
1. [Executive Summary](#executive-summary)
2. [Current vs. New Setup](#current-vs-new-setup)
3. [Migration Timeline](#migration-timeline)
4. [Customer Incentive Options](#customer-incentive-options)
5. [Communication Plan](#communication-plan)
6. [Technical Implementation](#technical-implementation)
7. [Financial Impact](#financial-impact)
8. [Risk Mitigation](#risk-mitigation)

---

## Executive Summary

### The Situation
- **85 customers** currently paying $385/year through WordPress/WooCommerce (Bank of America merchant)
- Customers receive **Microsoft 365 licenses** and access calculators via SharePoint
- Manual provisioning process (time-consuming)
- High ongoing cost: **$6,120/year in Microsoft licenses**

### The Goal
- Migrate all 85 customers to **windloadcalc.com** (web-based calculators)
- Eliminate Microsoft license costs
- Automate provisioning (instant access)
- Improve customer experience
- Shut down WordPress/Bank of America/GoDaddy hosting

### The Strategy
- **Grace period:** 3-4 months of dual access (old SharePoint + new web platform)
- **Firm deadline:** Microsoft licenses canceled after grace period
- **Customer choice:** Migrate to new platform OR forfeit remaining subscription
- **Incentives:** Offer compelling reasons to migrate early

---

## Current vs. New Setup

### Current Setup (windload.solutions - WordPress)

**Customer Journey:**
1. Customer pays $385/year via WordPress/WooCommerce
2. Payment processed through Bank of America merchant account
3. **Manual step:** Admin creates Microsoft 365 license
4. **Manual step:** Admin uploads calculator files to SharePoint
5. **Manual step:** Admin sends customer their Microsoft login
6. Customer accesses calculator via SharePoint (not website)

**Problems:**
- ❌ Manual provisioning (time-consuming)
- ❌ Microsoft license cost: $72/year per customer ($6,120/year total)
- ❌ GoDaddy hosting cost: ~$200/year
- ❌ Bank of America merchant fees: ~2% ($650/year)
- ❌ Poor customer experience (Microsoft login required)
- ❌ Not scalable

**Total Cost:** ~$6,970/year

---

### New Setup (windloadcalc.com - Railway/Stripe)

**Customer Journey:**
1. Customer pays $385/year via Stripe
2. Payment processed automatically
3. **Automated:** Account created instantly
4. **Automated:** Access granted immediately
5. Customer logs into windloadcalc.com (web-based calculator)
6. Instant access, no Microsoft, no SharePoint

**Benefits:**
- ✅ Instant provisioning (automated)
- ✅ No Microsoft license costs ($6,120/year saved!)
- ✅ Railway hosting: ~$60-240/year
- ✅ Stripe fees: ~2.9% ($900/year)
- ✅ Better customer experience (web-based, any device)
- ✅ Scalable to thousands of customers

**Total Cost:** ~$960-1,140/year

**Net Savings:** ~$5,830/year

---

## Migration Timeline

### Phase 1: Pre-Launch (Weeks 1-2)

#### Week 1: Site Deployment
- [ ] Deploy windload.solutions to Vercel (educational site)
- [ ] Verify windloadcalc.com is fully functional
- [ ] Test complete subscription flow (signup → payment → access)
- [ ] Test user login and calculator access
- [ ] Verify all CTAs on windload.solutions point correctly

#### Week 2: Migration Preparation
- [ ] Export 85 customer records from WordPress
  - Names
  - Emails
  - Current subscription end dates
  - Payment history
- [ ] Decide on customer incentive (see options below)
- [ ] Finalize email templates
- [ ] Set grace period deadline date (3-4 months out)
- [ ] Prepare customer support resources

---

### Phase 2: Migration Launch (Week 3)

#### Day 1: Bulk Account Creation
- [ ] Create 85 user accounts on windloadcalc.com
- [ ] Set subscription expiration dates to match current subscriptions
- [ ] Generate temporary passwords for each account
- [ ] Test 5-10 accounts to verify everything works

#### Day 2: Initial Announcement
- [ ] Send Email #1: Migration announcement to all 85 customers
- [ ] Explain the upgrade and timeline
- [ ] Emphasize benefits of new platform

#### Day 3-4: Login Credentials
- [ ] Send Email #2: Individual login credentials to each customer
- [ ] Include welcome guide and tutorial links
- [ ] Monitor support inbox for questions

---

### Phase 3: Dual Access Period (Months 1-3)

#### During Grace Period:
- [ ] Monitor login activity (who's using new platform)
- [ ] Track migration progress (dashboard/spreadsheet)
- [ ] Provide customer support for transition questions
- [ ] Send periodic reminder emails
- [ ] Offer early migration incentives (optional)

#### Month 1:
- [ ] Monitor initial adoption rate
- [ ] Expected: 20-30% of customers log in and try new platform

#### Month 2:
- [ ] Follow-up email to non-adopters
- [ ] Highlight benefits and success stories
- [ ] Expected: Another 20-30% adopt

#### Month 3:
- [ ] Send 30-day warning email
- [ ] Emphasize approaching deadline
- [ ] Offer help/support for those struggling

---

### Phase 4: Final Transition (Month 4)

#### Week 1-3 of Month 4:
- [ ] Send 7-day final warning email
- [ ] Proactive phone calls to non-adopters (if needed)
- [ ] Last chance support

#### Deadline Day:
- [ ] Cancel all 85 Microsoft 365 licenses
- [ ] Send confirmation email: "SharePoint access has ended"
- [ ] Monitor support requests

#### Week After Deadline:
- [ ] Provide extra support for stragglers
- [ ] Manually assist anyone who missed deadline
- [ ] Consider grace extension for good customers (case-by-case)

---

### Phase 5: Cleanup (Month 5+)

- [ ] Shut down WordPress site (or keep minimal for historical records)
- [ ] Cancel Bank of America merchant account
- [ ] Cancel GoDaddy hosting (unless needed for WordPress archive)
- [ ] Archive customer data from old system
- [ ] Document lessons learned
- [ ] Celebrate success! 🎉

---

## Customer Incentive Options

### Option 1: Early Migration Bonus
**"Switch now, get 2 months free!"**

- Customers who switch in Month 1 get 2 months added to subscription
- Cost to you: ~$64/customer × 30 customers = ~$1,920
- Benefit: Faster migration, can shut down Microsoft sooner
- Message: "Be an early adopter and save!"

---

### Option 2: Loyalty Credit
**"2 months credit toward your next renewal"**

- Apply $64 credit to their next annual renewal
- Cost to you: Same as Option 1, but deferred
- Benefit: Incentivizes retention beyond migration
- Message: "Thank you for being a loyal customer"

---

### Option 3: Legacy Discount
**"Lifetime 10% discount for legacy customers"**

- All 85 customers get 10% off ($385 → $346.50) forever
- Cost to you: $38.50/year per customer = $3,272/year
- Benefit: Long-term retention, customers feel valued
- Message: "As a founding customer, you deserve special pricing"
- **Trade-off:** Ongoing cost, but still saving $2,648/year vs. Microsoft licenses

---

### Option 4: Product Bundle
**"Free access to future calculators"**

- Legacy customers get free access to next 2-3 calculators you release
- Cost to you: Minimal (digital product)
- Benefit: Creates excitement, upsell opportunity
- Message: "You get early access to all our new tools"

---

### Option 5: BIP Platform Access
**"Free Building Intelligence Platform (BIP) access"**

- Give legacy customers complimentary access to your BIP platform
- Cost to you: Depends on your BIP pricing model
- Benefit: Cross-sell to another product, increased engagement
- Message: "As a thank you, we're giving you exclusive access to BIP"

---

### Option 6: Tiered Incentives
**"The earlier you switch, the more you save"**

- **Month 1:** 3 months free + legacy discount
- **Month 2:** 2 months free
- **Month 3:** 1 month free
- **Month 4:** No incentive (just migrate or lose access)

- Cost to you: Variable, encourages urgency
- Benefit: Creates FOMO (fear of missing out)
- Message: "Limited time offers - switch now for maximum savings"

---

### Recommended Incentive: **Combination Approach**

**"Legacy Customer Appreciation Package"**

All 85 customers get:
- ✅ **2 months free** added to current subscription (immediate value)
- ✅ **10% lifetime discount** on renewals (long-term value)
- ✅ **Early access** to next 3 calculators released (future value)
- ✅ **Free BIP access** (Tier 1 or Basic) for 1 year (cross-sell value)

**Total Cost:**
- 2 months free: ~$64 × 85 = $5,440 (one-time)
- 10% lifetime discount: ~$38.50 × 85 = $3,272/year (ongoing)
- Future calculators: $0 (digital product)
- BIP access: Minimal cost (your platform)

**Total First Year Cost:** ~$8,712

**Savings vs. Microsoft Licenses:**
- Microsoft costs: $6,120/year
- Your savings: Still breaking even first year
- Year 2+: Saving ~$2,848/year (after discounts)
- Plus: Higher retention, happier customers

---

## Communication Plan

### Email Sequence

#### Email 1: Migration Announcement (Day 1)
**Subject:** 🎉 Exciting Upgrade: Your Wind Load Calculator is Moving to a Better Platform!

**Key Points:**
- Announce the new web-based platform
- Explain benefits (faster, easier, no Microsoft)
- Introduce the timeline and grace period
- Emphasize: Their subscription continues (already paid)
- Mention: Login credentials coming within 24-48 hours

**Tone:** Exciting, positive, reassuring

---

#### Email 2: Login Credentials (Day 2-3)
**Subject:** 🔑 Your New Wind Load Calculator Login - Get Started Now!

**Key Points:**
- Provide login credentials
- Link to tutorial videos
- Highlight key features of new platform
- Remind: They can still use SharePoint during transition
- Support contact info

**Tone:** Helpful, welcoming, supportive

---

#### Email 3: 30-Day Check-in (Week 4)
**Subject:** How's the New Wind Load Calculator Working for You?

**Key Points:**
- Ask for feedback
- Highlight success stories (if any)
- Offer help if they haven't logged in yet
- Reminder: Dual access period
- Support resources

**Tone:** Friendly, customer-focused

---

#### Email 4: 60-Day Progress Update (Week 8)
**Subject:** You're Halfway Through the Transition Period

**Key Points:**
- Timeline update (2 months left)
- Encourage full adoption of new platform
- Showcase new features or improvements
- Reminder: SharePoint access ending on [DATE]
- Support offer

**Tone:** Encouraging, helpful

---

#### Email 5: 30-Day Warning (Week 12)
**Subject:** ⚠️ REMINDER: 30 Days Until SharePoint Access Ends

**Key Points:**
- Clear deadline date
- Action required if not logged in yet
- Step-by-step migration instructions
- Support contact (phone/email)
- FAQ link

**Tone:** Urgent but helpful, not threatening

---

#### Email 6: 7-Day Final Warning (Week 15)
**Subject:** 🚨 FINAL NOTICE: SharePoint Access Ends in 7 Days

**Key Points:**
- Very clear deadline
- Consequences of not migrating
- Last chance support offer
- Reassure: Subscription remains active on new platform
- Bold call-to-action

**Tone:** Urgent, clear, supportive

---

#### Email 7: Post-Deadline Confirmation (Week 16+)
**Subject:** SharePoint Access Has Ended - Use windloadcalc.com

**Key Points:**
- Confirm SharePoint is now off
- Reiterate new platform login
- Support for anyone struggling
- Thank them for making transition

**Tone:** Matter-of-fact, supportive

---

### Support Resources Needed

1. **FAQ Page** (windloadcalc.com/migration-faq)
   - Why are we migrating?
   - How do I log in?
   - What happens to my SharePoint access?
   - Will my subscription cost change?
   - What if I don't want to migrate?
   - How do I reset my password?
   - Who do I contact for help?

2. **Tutorial Videos**
   - Getting started with the new platform
   - Navigating the web calculator
   - Key differences from SharePoint version
   - Tips and tricks

3. **Knowledge Base**
   - Step-by-step guides
   - Screenshots and walkthroughs
   - Troubleshooting common issues

4. **Support Contact**
   - Dedicated email: support@windloadcalc.com
   - Phone support: [your number]
   - Response time commitment (24-48 hours)

---

## Technical Implementation

### Step 1: Export Customer Data from WordPress

**What to Export:**
```csv
customer_id,email,first_name,last_name,subscription_start,subscription_end,last_payment_date,total_paid
1,john@example.com,John,Smith,2024-01-15,2025-01-14,2024-01-15,385
2,jane@example.com,Jane,Doe,2023-06-01,2025-06-01,2024-06-01,770
...
```

**How to Export:**
1. WordPress Admin → WooCommerce → Customers
2. Use export function or plugin: "WooCommerce Customer/Order CSV Export"
3. Include: Names, emails, subscription dates, payment history
4. Clean data: Remove duplicates, verify emails

---

### Step 2: Bulk Create Accounts on windloadcalc.com

**Option A: Manual Creation (Small Scale)**
- For each customer, manually create WooCommerce account
- Set subscription product: Annual Wind Load Calculator
- Set expiration date to match current subscription
- Generate password
- Mark as "Active"

**Option B: Automated Import (Recommended for 85 customers)**

**Import Script Approach:**

```javascript
// Node.js script to bulk import customers
const axios = require('axios');
const fs = require('fs');
const csv = require('csv-parser');

const WINDLOADCALC_API = 'https://windloadcalc.com/wp-json/wc/v3';
const CONSUMER_KEY = 'your_consumer_key';
const CONSUMER_SECRET = 'your_consumer_secret';

// Read customer CSV
const customers = [];
fs.createReadStream('customers.csv')
  .pipe(csv())
  .on('data', (row) => customers.push(row))
  .on('end', async () => {
    console.log(`Found ${customers.length} customers to import`);

    for (const customer of customers) {
      try {
        // 1. Create WordPress user
        const userResponse = await axios.post(
          `${WINDLOADCALC_API}/customers`,
          {
            email: customer.email,
            first_name: customer.first_name,
            last_name: customer.last_name,
            username: customer.email,
            password: generatePassword(), // Random strong password
            billing: {
              first_name: customer.first_name,
              last_name: customer.last_name,
              email: customer.email
            }
          },
          {
            auth: {
              username: CONSUMER_KEY,
              password: CONSUMER_SECRET
            }
          }
        );

        const userId = userResponse.data.id;
        console.log(`✓ Created user: ${customer.email} (ID: ${userId})`);

        // 2. Create subscription
        const subscriptionResponse = await axios.post(
          `${WINDLOADCALC_API}/subscriptions`,
          {
            customer_id: userId,
            billing: {
              first_name: customer.first_name,
              last_name: customer.last_name,
              email: customer.email
            },
            line_items: [
              {
                product_id: 123, // Your annual calculator product ID
                quantity: 1
              }
            ],
            status: 'active',
            billing_period: 'year',
            billing_interval: 1,
            start_date: customer.subscription_start,
            next_payment_date: customer.subscription_end,
            total: '385.00'
          },
          {
            auth: {
              username: CONSUMER_KEY,
              password: CONSUMER_SECRET
            }
          }
        );

        console.log(`✓ Created subscription for ${customer.email}`);

        // 3. Send welcome email with credentials
        await sendWelcomeEmail(customer.email, customer.first_name, password);

      } catch (error) {
        console.error(`✗ Error importing ${customer.email}:`, error.message);
      }
    }

    console.log('\\n=== Import Complete ===');
  });

function generatePassword() {
  // Generate random secure password
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
  let password = '';
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

async function sendWelcomeEmail(email, name, password) {
  // Send email with credentials using your email service
  // (SendGrid, Mailgun, AWS SES, etc.)
}
```

**Prerequisites:**
1. WooCommerce REST API enabled
2. API credentials (Consumer Key & Secret)
3. Node.js installed
4. Customer CSV exported from WordPress

**Execution:**
```bash
npm install axios csv-parser
node import-customers.js
```

---

### Step 3: Verify Imports

**Checklist:**
- [ ] All 85 customers imported successfully
- [ ] Each has active subscription
- [ ] Subscription end dates match original subscriptions
- [ ] All have valid login credentials
- [ ] Test login with 5-10 accounts
- [ ] Verify calculator access works

---

### Step 4: Email Automation Setup

**Option A: WooCommerce Emails**
- Use WooCommerce's built-in email system
- Customize templates for migration emails
- Schedule using plugin: "WooCommerce Email Customizer"

**Option B: Dedicated Email Service**
- Use Mailchimp, SendGrid, or similar
- Import customer list
- Create email sequence/automation
- Better tracking and analytics

**Option C: Manual Sending**
- Use mail merge in Gmail/Outlook
- More control, but more work
- Good for small batches

**Recommendation:** Option B (Email service) for best tracking and automation

---

## Financial Impact

### One-Time Migration Costs

| Item | Cost |
|------|------|
| Customer incentives (2 months free × 85) | $5,440 |
| Temporary WordPress hosting (4 months) | $20 |
| Email service (Mailchimp/SendGrid) | $50-100 |
| Time/labor (customer support) | Variable |
| **Total One-Time Cost** | **~$5,510-5,560** |

---

### Ongoing Annual Costs - BEFORE Migration

| Item | Cost/Year |
|------|-----------|
| Microsoft 365 licenses (85 × $72) | $6,120 |
| GoDaddy hosting | $200 |
| Bank of America merchant fees (2%) | $650 |
| **Total Annual Cost** | **$6,970** |

---

### Ongoing Annual Costs - AFTER Migration

| Item | Cost/Year |
|------|-----------|
| Railway hosting (windloadcalc.com) | $60-240 |
| Stripe fees (2.9% + 30¢) | $900 |
| Legacy discount (10% × 85 × $385) | $3,272 |
| **Total Annual Cost** | **$4,232-4,412** |

---

### Net Financial Impact

**First Year:**
- Migration cost: $5,510
- Savings: $6,970 - $4,412 = $2,558
- **Net First Year: -$2,952 (loss)**

**Year 2+:**
- No migration costs
- Ongoing savings: $2,558/year
- **ROI: 13.8 months**

**5-Year Projection:**
- Total savings: $2,558 × 5 = $12,790
- Minus first year loss: $2,952
- **Net 5-year savings: $9,838**

---

### If You Don't Offer 10% Lifetime Discount

**Ongoing Annual Costs (No Discount):**
| Item | Cost/Year |
|------|-----------|
| Railway hosting | $60-240 |
| Stripe fees (2.9% + 30¢) | $900 |
| **Total Annual Cost** | **$960-1,140** |

**Savings:**
- Annual: $6,970 - $1,140 = $5,830
- 5-Year: $29,150
- **Much better financially!**

**Trade-off:** Lower customer retention, less goodwill

---

## Risk Mitigation

### Risk 1: Customers Refuse to Migrate
**Likelihood:** Medium (10-20% of customers)
**Impact:** High (lost revenue)

**Mitigation:**
- Make new platform significantly better (easier to use)
- Offer compelling incentives
- Provide excellent support during transition
- Give ample notice (4 months)
- Personal outreach to high-value customers

**Contingency:**
- Extend deadline for good customers (case-by-case)
- Offer prorated refunds if absolutely necessary (last resort)
- Accept 5-10% churn as acceptable loss

---

### Risk 2: Technical Issues During Migration
**Likelihood:** Medium
**Impact:** High (customer frustration, support burden)

**Mitigation:**
- Thoroughly test import process with small batch first
- Test subscription flow end-to-end before launch
- Have staging environment for testing
- Prepare detailed troubleshooting guides
- Dedicate time for customer support

**Contingency:**
- Have rollback plan (keep WordPress running longer if needed)
- Extend deadline if major technical issues arise
- Offer extra incentives to affected customers

---

### Risk 3: Revenue Loss from Non-Renewals
**Likelihood:** Low-Medium
**Impact:** High

**Mitigation:**
- Emphasize: Their subscription continues (already paid)
- Make new platform compelling
- Offer legacy customer perks (lifetime discount)
- Strong customer service during transition

**Contingency:**
- Track renewal rates closely
- Proactive outreach to customers approaching renewal
- Win-back campaigns for lapsed customers

---

### Risk 4: Support Overload
**Likelihood:** High (during first 2 weeks)
**Impact:** Medium (time-consuming, but manageable)

**Mitigation:**
- Prepare comprehensive FAQ and knowledge base
- Create tutorial videos
- Stagger email sends (don't send all 85 at once)
- Set clear support hours and response time expectations
- Consider hiring temp support help

**Contingency:**
- Extend grace period if support overwhelmed
- Prioritize critical issues (can't log in, payment issues)
- Phone support for urgent issues, email for general questions

---

## Success Metrics

### Week 1-2 (After Email #1 & #2)
- [ ] 80%+ customers receive and open emails
- [ ] 40-50% customers log in to new platform
- [ ] <10 support tickets requiring immediate attention

### Month 1
- [ ] 60-70% customers have logged in at least once
- [ ] 30-40% customers actively using new platform
- [ ] <5 angry/frustrated customer emails

### Month 2
- [ ] 80%+ customers have logged in
- [ ] 60%+ customers regularly using new platform
- [ ] Positive customer feedback

### Month 3 (30-day warning)
- [ ] 90%+ customers aware of deadline
- [ ] 80%+ customers have transitioned fully
- [ ] Few stragglers needing extra support

### Deadline Day
- [ ] 95%+ customers migrated successfully
- [ ] <5% churn/refund requests
- [ ] All Microsoft licenses canceled

### 6 Months Post-Migration
- [ ] Renewal rate: 85%+ (acceptable churn)
- [ ] Customer satisfaction: Positive
- [ ] Microsoft license costs: $0
- [ ] WordPress/GoDaddy: Shut down

---

## Next Steps - Pre-Launch Checklist

### Before Sending Any Emails:

#### Technical Readiness
- [ ] windload.solutions deployed to Vercel
- [ ] windloadcalc.com fully functional (Railway)
- [ ] Stripe payment processing tested and working
- [ ] User registration and login tested
- [ ] Calculator access verified for logged-in users
- [ ] Subscription management working (renewals, cancellations)

#### Content Readiness
- [ ] Migration FAQ page created
- [ ] Tutorial videos recorded (or planned)
- [ ] Email templates finalized
- [ ] Support resources prepared
- [ ] Customer service scripts written

#### Data Readiness
- [ ] Customer list exported from WordPress (85 records)
- [ ] Data cleaned and verified
- [ ] Import script tested with 5-10 customers
- [ ] Full import ready to execute

#### Decision Points
- [ ] Deadline date set (3-4 months out)
- [ ] Customer incentive finalized
- [ ] Support plan in place
- [ ] Budget approved

#### Communication Readiness
- [ ] Email service configured (Mailchimp/SendGrid)
- [ ] Email templates loaded and tested
- [ ] Support email (support@windloadcalc.com) set up
- [ ] Phone support line ready (if offering)

---

## Migration Launch Checklist

### Day Before Launch:
- [ ] Final test of import script
- [ ] Verify email templates one last time
- [ ] Brief any team members on support plan
- [ ] Set up tracking dashboard (who's migrated, who hasn't)

### Launch Day:
- [ ] Execute bulk import (create 85 accounts)
- [ ] Verify all accounts created successfully
- [ ] Send Email #1 (announcement) to all customers
- [ ] Monitor email open rates

### Day 2:
- [ ] Send Email #2 (credentials) to all customers
- [ ] Monitor support inbox closely
- [ ] Respond to questions within 24 hours

### Week 1:
- [ ] Daily check of support inbox
- [ ] Track login activity
- [ ] Note any technical issues
- [ ] Adjust plan if needed

---

## Conclusion

This migration is a significant undertaking, but the benefits are substantial:

**Benefits:**
- 💰 Save $5,830/year (without discount) or $2,558/year (with 10% discount)
- 🚀 Better customer experience (web-based, instant access)
- ⚡ Automated provisioning (no manual work)
- 📈 Scalable platform (can grow to thousands of customers)
- 🎯 Modern tech stack (Stripe, Railway, Vercel)
- 🔧 Easier to manage and maintain

**Keys to Success:**
1. Thoroughly test everything before launch
2. Communicate clearly and frequently
3. Provide excellent support during transition
4. Make new platform genuinely better
5. Give customers compelling incentives
6. Be patient and understanding

**Timeline:**
- Week 1-2: Deploy and prepare
- Week 3: Launch migration
- Months 1-4: Dual access period
- Month 4: Hard cutover
- Month 5+: Cleanup and celebration!

---

**Document Version:** 1.0
**Last Updated:** January 23, 2025
**Status:** Planning - Awaiting Site Deployment

---

## Appendix: Email Templates

### Email Template #1: Migration Announcement

**Subject:** 🎉 Exciting Upgrade: Your Wind Load Calculator is Moving to a Better Platform!

**Body:**
```
Hi [First Name],

We have exciting news! We're upgrading to a brand-new web-based wind load calculator platform that's faster, easier to use, and accessible from any device.

🎉 WHAT'S BETTER ABOUT THE NEW PLATFORM:

✅ Access from any browser - no Microsoft login needed
✅ Faster, more intuitive interface
✅ Automatic updates - always the latest features
✅ Works on any device (PC, Mac, tablet)
✅ Better support and documentation
✅ More calculators coming soon!

💰 YOUR SUBSCRIPTION:

Your current subscription continues - no additional charge! You've already paid for your annual subscription, and it will continue on the new platform with the same expiration date.

🔄 TRANSITION TIMELINE:

• TODAY: We're creating your account on the new platform
• WITHIN 48 HOURS: You'll receive login credentials
• NEXT 4 MONTHS: You can use BOTH old (SharePoint) and new (web) calculators
• [DEADLINE DATE]: Old Microsoft/SharePoint access will be discontinued
• After [DEADLINE]: Only the new web platform will be available

📝 WHAT YOU NEED TO DO:

1. Watch for your login credentials email (coming within 24-48 hours)
2. Try out the new calculator at https://windloadcalc.com
3. Start transitioning your projects to the new platform
4. Contact us if you need any help: support@windloadcalc.com or [phone]

⚠️ IMPORTANT DEADLINE:

On [DATE - 4 months from now], all Microsoft/SharePoint access will be shut down. Please ensure you've moved to the new platform by then.

🎁 SPECIAL THANK YOU:

As a valued customer who's been with us since [year], you're automatically enrolled in our Legacy Customer Appreciation Program:

• 2 months FREE added to your current subscription
• 10% lifetime discount on all future renewals
• Early access to all new calculators we release
• Free 1-year access to our Building Intelligence Platform (BIP)

We're excited to bring you this upgrade! The new platform is significantly better, and we think you'll love it.

Questions? We're here to help!

Email: support@windloadcalc.com
Phone: [your phone]

Thank you for being a valued customer since 2002!

Best regards,

[Your Name]
[Your Title]
Wind Load Solutions Team

P.S. - Check out our new educational site at windload.solutions for free wind load resources and guides!
```

---

### Email Template #2: Login Credentials

**Subject:** 🔑 Your New Wind Load Calculator Login - Get Started Now!

**Body:**
```
Hi [First Name],

Your account on our new platform is ready!

🔑 YOUR LOGIN CREDENTIALS:

Website: https://windloadcalc.com
Username: [their email]
Temporary Password: [generated password]

(You'll be asked to change your password on first login for security)

📚 GETTING STARTED:

1. Visit windloadcalc.com
2. Click "Login" in the top right corner
3. Enter your credentials above
4. Change your password
5. Start using the calculator!

🎬 HELPFUL RESOURCES:

• Watch our 5-minute getting started video: [link]
• Browse the knowledge base: windloadcalc.com/help
• View tutorial library: windloadcalc.com/tutorials
• Check out the FAQ: windloadcalc.com/migration-faq

🎁 YOUR LEGACY CUSTOMER BENEFITS:

✅ 2 months FREE (already applied - your subscription now expires [new date])
✅ 10% lifetime discount (applied automatically at renewal)
✅ Early access to all new calculators
✅ Free BIP access (login with same credentials at [BIP URL])

🆘 NEED HELP?

We're here to support you!

• Email: support@windloadcalc.com (Response within 24 hours)
• Phone: [your phone] (Mon-Fri, 9am-5pm EST)
• Live chat: Available on windloadcalc.com

⏰ REMEMBER:

• You can still use your SharePoint/Microsoft access until [DEADLINE DATE]
• We recommend starting to use the new platform now to get comfortable with it
• Your subscription and all settings transfer automatically - no data loss!

Welcome to the new platform! We're excited to have you here.

Best regards,

[Your Name]
Wind Load Solutions Team

---

Having trouble logging in? Reply to this email and we'll help you right away!
```

---

### Email Template #3: 30-Day Warning

**Subject:** ⚠️ REMINDER: 30 Days Until SharePoint Access Ends

**Body:**
```
Hi [First Name],

This is a friendly reminder that your Microsoft SharePoint access will be discontinued in 30 days.

📅 IMPORTANT DATE: [EXACT DEADLINE DATE]

After this date, you'll ONLY be able to access your wind load calculator through our new web platform at windloadcalc.com.

✅ HAVE YOU LOGGED IN YET?

We noticed you haven't logged into the new platform yet. If you've been busy, no worries - but please make sure to log in and test it out before the deadline!

🔑 YOUR LOGIN:

Website: https://windloadcalc.com
Username: [their email]
Forgot password? Click "Reset Password" on the login page

🆘 NEED HELP TRANSITIONING?

We're here to help! Contact us:

• Email: support@windloadcalc.com
• Phone: [your phone]
• Schedule a 15-min onboarding call: [calendly link]

We can walk you through the new platform and answer any questions.

⚠️ WHAT HAPPENS ON [DEADLINE]:

• SharePoint/Microsoft access will be shut off
• You'll need to use windloadcalc.com to access your subscription
• Your subscription remains active - just the platform changes
• No data loss - everything transfers automatically

🎁 YOUR BENEFITS ARE WAITING:

Remember, you have:
• 2 months FREE already added to your subscription
• 10% lifetime discount on renewals
• Early access to new calculators
• Free BIP platform access

Don't miss out - log in today!

👉 Log in now: https://windloadcalc.com

Questions? Just reply to this email.

Thank you,

[Your Name]
Wind Load Solutions Team

P.S. - The new platform is much easier to use than SharePoint. Most customers tell us they prefer it after just one use!
```

---

### Email Template #4: 7-Day Final Warning

**Subject:** 🚨 FINAL NOTICE: SharePoint Access Ends in 7 Days

**Body:**
```
Hi [First Name],

This is your FINAL REMINDER that Microsoft SharePoint access ends in 7 DAYS.

🚨 DEADLINE: [EXACT DATE - 7 days from now]

After this date:
❌ Your SharePoint/Microsoft access will be permanently disabled
✅ Your subscription continues on the new platform (windloadcalc.com)

⚠️ ACTION REQUIRED:

If you have NOT logged into the new platform yet, you MUST do so before [DEADLINE DATE] or you will lose access to your subscription.

This is your last warning.

🔑 LOG IN NOW:

Website: https://windloadcalc.com
Username: [their email]
Forgot password? Click "Reset Password"

👉 LOG IN HERE: https://windloadcalc.com/login

🆘 URGENT HELP NEEDED?

If you're having trouble, contact us IMMEDIATELY:

📞 Call us NOW: [your phone]
📧 Email: support@windloadcalc.com (we'll respond within 2 hours)

We can help you get set up right away.

⏰ TIMELINE:

• TODAY (Day 0): You receive this email
• Day 1-6: Last chance to log in and test platform
• Day 7 ([DEADLINE DATE]): SharePoint access ENDS
• Day 8+: Only web platform (windloadcalc.com) works

⚠️ IF YOU DON'T MIGRATE:

• You will lose access to your wind load calculator
• Your subscription payment is non-refundable
• You will need to re-purchase if you want access later

We don't want you to lose access! Please log in today.

👉 TAKE ACTION NOW: https://windloadcalc.com/login

This is your last chance.

Urgently,

[Your Name]
Wind Load Solutions Team

---

HAVING TROUBLE? Call [phone] right now - we're standing by to help!
```

---

### Email Template #5: Post-Deadline Confirmation

**Subject:** SharePoint Access Has Ended - Use windloadcalc.com

**Body:**
```
Hi [First Name],

As of [YESTERDAY'S DATE], Microsoft SharePoint access has been discontinued.

✅ YOUR SUBSCRIPTION IS STILL ACTIVE

You can access your wind load calculator at:
👉 https://windloadcalc.com

🔑 LOGIN INSTRUCTIONS:

Website: https://windloadcalc.com
Username: [their email]
Forgot password? Click "Reset Password" on the login page

👉 LOG IN HERE: https://windloadcalc.com/login

📚 NEW PLATFORM RESOURCES:

• Getting started guide: windloadcalc.com/help
• Tutorial videos: windloadcalc.com/tutorials
• FAQ: windloadcalc.com/faq

🆘 HAVING TROUBLE LOGGING IN?

We're here to help!

• Email: support@windloadcalc.com
• Phone: [your phone]

We'll get you up and running right away.

🎁 YOUR LEGACY BENEFITS:

Don't forget - you have:
• 10% lifetime discount on renewals
• Early access to all new calculators
• Free BIP platform access

Thank you for making the transition to our new platform!

We're confident you'll find it easier and more powerful than the old SharePoint system.

Best regards,

[Your Name]
Wind Load Solutions Team

---

Need help? Just reply to this email or call [phone]!
```

---

**End of Migration Strategy Document**
