# SendGrid Email Automation Setup
## Automated Migration Email Sequence for 85 Customers

**Purpose:** Automatically send 7 emails over 4 months to migrate customers from SharePoint/Microsoft to windloadcalc.com

---

## Step 1: Create SendGrid Account

1. Go to https://sendgrid.com
2. Click "Start for Free"
3. Sign up (use your business email)
4. **Choose Plan:**
   - **Free Plan:** 100 emails/day (works for 85 customers if you send slowly)
   - **Essentials Plan:** $19.95/month for 50,000 emails **(RECOMMENDED)**
     - Better deliverability
     - More features
     - Customer support

---

## Step 2: Verify Your Domain

**Why:** Emails from verified domains have better deliverability (won't go to spam)

1. SendGrid Dashboard → Settings → Sender Authentication
2. Click "Authenticate Your Domain"
3. Choose: `windload.solutions` (or `windloadcalc.com`)
4. Follow instructions to add DNS records:
   - CNAME records (3-4 of them)
   - Add these to your domain registrar (GoDaddy, Namecheap, etc.)
5. Verify (takes 24-48 hours for DNS to propagate)

---

## Step 3: Create Contact List

1. Go to Marketing → Contacts
2. Click "Create a New List"
3. Name: `Legacy Customers - Migration 2025`
4. Click "Upload CSV"

**CSV Format:**
```csv
email,first_name,last_name,subscription_end,temp_password
john@example.com,John,Smith,2025-12-31,TempPass123!
jane@example.com,Jane,Doe,2026-01-15,SecurePass456!
...
```

**Custom Fields to Create:**
- `subscription_end` (Date) - When their current subscription expires
- `temp_password` (Text) - Temporary password for new platform
- `old_payment_date` (Date) - When they last paid (optional)

5. Upload your 85 customers
6. Map columns: email → Email, first_name → First Name, etc.
7. Click "Upload"

---

## Step 4: Create Email Templates

### Template 1: Migration Announcement

1. Go to Marketing → Dynamic Templates
2. Click "Create a Dynamic Template"
3. Name: `Migration - 01 - Announcement`
4. Click "Add Version"
5. Choose editor: "Design Editor" (visual) or "Code Editor" (HTML)

**Subject Line:**
```
🎉 Exciting Upgrade: Your Wind Load Calculator is Moving to a Better Platform!
```

**Email Body:**
(Use the full email template from Migration-Strategy-Plan.md, Email #1)

**Personalization Tags:**
- `{{first_name}}` - Customer's first name
- `{{subscription_end}}` - Their subscription expiration date

**Example:**
```html
Hi {{first_name}},

We have exciting news! We're upgrading to a brand-new web-based wind load calculator platform...

Your current subscription continues - it expires on {{subscription_end}}.

...
```

6. Save template
7. **Test Send** to your own email to verify

---

### Template 2: Login Credentials

1. Create another Dynamic Template
2. Name: `Migration - 02 - Login Credentials`

**Subject Line:**
```
🔑 Your New Wind Load Calculator Login - Get Started Now!
```

**Email Body:**
```html
Hi {{first_name}},

Your account on our new platform is ready!

🔑 YOUR LOGIN CREDENTIALS:

Website: https://windloadcalc.com
Username: {{email}}
Temporary Password: {{temp_password}}

...
```

**Personalization Tags:**
- `{{first_name}}`
- `{{email}}`
- `{{temp_password}}`

---

### Templates 3-7: Follow-up Emails

Create templates for:
- **Template 3:** 30-day check-in
- **Template 4:** 60-day progress
- **Template 5:** 30-day warning
- **Template 6:** 7-day final warning
- **Template 7:** Post-deadline

(Use email templates from Migration-Strategy-Plan.md)

---

## Step 5: Create Automation

**NOTE:** SendGrid's "Automation" feature is in Marketing Campaigns (paid feature - $20/month minimum)

### Option A: Use SendGrid Automation (Recommended)

1. Go to Marketing → Automation
2. Click "Create an Automation"
3. Name: `Customer Migration - 4 Month Sequence`

**Trigger:**
- "When contact is added to list: Legacy Customers - Migration 2025"

**Email Sequence:**

```
Trigger: Contact added to list
    ↓
Step 1: Send Email #1 (Migration Announcement)
    Wait: 1 day
    ↓
Step 2: Send Email #2 (Login Credentials)
    Wait: 30 days
    ↓
Step 3: Send Email #3 (30-day Check-in)
    Wait: 30 days
    ↓
Step 4: Send Email #4 (60-day Progress)
    Wait: 30 days
    ↓
Step 5: Send Email #5 (30-day Warning)
    Wait: 23 days
    ↓
Step 6: Send Email #6 (7-day Final Warning)
    Wait: 7 days
    ↓
Step 7: Send Email #7 (Post-Deadline)
    ↓
End
```

**To Set Up:**

1. Click "Add Entry Criteria" → Select "List: Legacy Customers - Migration 2025"
2. Click "Add Email"
   - Select Template: Migration - 01 - Announcement
   - From Name: Wind Load Solutions
   - From Email: noreply@windload.solutions
   - Reply-to: support@windloadcalc.com
3. Click "Add Wait"
   - Duration: 1 day
4. Click "Add Email"
   - Select Template: Migration - 02 - Login Credentials
5. Continue building sequence...
6. **Save as Draft** (don't activate yet!)

---

### Option B: Manual Scheduled Sends (Free Alternative)

If you don't want to pay for Automation:

1. Use "Single Sends" feature (free)
2. Schedule each email manually

**How:**
1. Marketing → Single Sends
2. Click "Create a Single Send"
3. Select Template: Migration - 01 - Announcement
4. Select Recipients: Legacy Customers - Migration 2025
5. Schedule: Choose date/time (e.g., "Send on March 1, 2025 at 9:00 AM")
6. Save and Schedule

**Repeat for each of 7 emails, scheduling them at appropriate intervals:**
- Email #1: March 1, 9am
- Email #2: March 2, 9am (1 day later)
- Email #3: March 31, 9am (30 days later)
- Email #4: April 30, 9am (30 days later)
- Email #5: May 30, 9am (30 days later)
- Email #6: June 22, 9am (23 days later)
- Email #7: June 29, 9am (7 days later)

**Pros:** Free
**Cons:** Manual work, less flexible, no dynamic triggers

---

## Step 6: Test the Automation

**BEFORE activating for all 85 customers:**

1. Create a test contact list: "Test - Migration"
2. Add 3-5 test emails (your email, colleague emails)
3. Run automation on test list
4. Verify:
   - Emails arrive on schedule
   - Personalization works ({{first_name}}, etc.)
   - Links work
   - Formatting looks good
5. Check spam folders

**To Speed Up Testing:**
- Change wait times to 5 minutes instead of days
- Example: Email #1 → Wait 5 min → Email #2 → Wait 5 min → etc.
- Test entire sequence in 30 minutes

---

## Step 7: Activate for Real Customers

**Once testing is complete:**

1. Go to Automation: Customer Migration - 4 Month Sequence
2. Review all settings
3. **FINAL CHECK:**
   - [ ] All 7 email templates finalized
   - [ ] Personalization tags working
   - [ ] Wait times correct (1 day, 30 days, etc.)
   - [ ] From/Reply-to emails correct
   - [ ] 85 customers uploaded to list
   - [ ] All customer accounts created on windloadcalc.com
   - [ ] Temp passwords generated and in CSV

4. Click "Activate Automation"

**What happens:**
- Immediately: All 85 customers receive Email #1
- 24 hours later: All 85 receive Email #2
- Over next 4 months: Emails send automatically

---

## Step 8: Monitor & Manage

### Daily Monitoring (First Week):

1. Go to Marketing → Automation → [Your Automation]
2. View "Activity" tab
3. Check:
   - **Sent:** How many emails sent
   - **Delivered:** How many actually delivered
   - **Opens:** How many customers opened email
   - **Clicks:** How many clicked links
   - **Bounces:** Emails that failed to deliver
   - **Spam Reports:** Customers who marked as spam

### Handle Bounces:

**Hard Bounce:** Email address doesn't exist
- Action: Contact customer through other means (phone, old email)

**Soft Bounce:** Temporary issue (full inbox, etc.)
- Action: SendGrid will retry automatically

### Handle Unsubscribes:

If customer clicks "Unsubscribe":
- They're removed from list automatically
- Action: Contact them directly to ensure they know about migration

---

## Step 9: Manual Interventions

**For Customers Who Need Extra Help:**

1. Go to Contacts → Legacy Customers - Migration 2025
2. Find customer
3. Click "Actions" → "Remove from Automation"
4. Contact them personally (phone/email)
5. Manually assist with migration

---

## Advanced Features

### Segmentation

Create sub-segments based on behavior:

**Segment 1: "Engaged" (opened emails, clicked links)**
- Send positive reinforcement email
- No extra warnings needed

**Segment 2: "Not Engaged" (haven't opened emails)**
- Send extra reminder before deadline
- Phone call outreach

**How:**
1. Contacts → Create Segment
2. Criteria: "Has opened email" = No
3. Send targeted campaign to this segment

---

### A/B Testing

Test different subject lines to improve open rates:

1. Create 2 versions of Email #1:
   - Version A: "🎉 Exciting Upgrade..."
   - Version B: "Important: Your Wind Load Calculator is Moving"
2. SendGrid tests both on 10% of list
3. Winner sent to remaining 90%

---

### Tracking Links

SendGrid automatically tracks link clicks. View:

1. Marketing → Single Sends → [Email Name]
2. Stats → Click Tracking
3. See which links customers clicked most

**Useful for:**
- How many logged into new platform
- How many viewed tutorials
- How many visited FAQ

---

## Troubleshooting

### Issue: Emails Going to Spam

**Solutions:**
- Verify domain authentication
- Avoid spam trigger words ("FREE!", "ACT NOW!", etc.)
- Keep text-to-image ratio high (more text, fewer images)
- Don't use all caps or excessive punctuation!!!

### Issue: Low Open Rates

**Solutions:**
- Improve subject lines (A/B test)
- Send at optimal time (Tuesday-Thursday, 9-11am)
- Use personalization in subject: "{{first_name}}, your login is ready"

### Issue: Customers Not Receiving Emails

**Solutions:**
- Check Bounces report
- Verify email addresses correct
- Ask customers to check spam folder
- Add `noreply@windload.solutions` to safe sender list

---

## Cost Summary

### SendGrid Pricing:

| Plan | Cost | Emails/Month | Features |
|------|------|--------------|----------|
| Free | $0 | 100/day (3,000/month) | Basic features |
| Essentials | $19.95/mo | 50,000 | Automation, support |
| Pro | $89.95/mo | 100,000 | Advanced features |

**Recommendation for 85 customers:**
- **Essentials ($19.95/month)** for 4-6 months
- Total cost: ~$100-120 for entire migration
- Cancel after migration complete

---

## Alternative: Use WordPress Email Automation

**If you don't want to pay for SendGrid:**

Use WordPress plugins on windloadcalc.com:

1. Install: "AutomateWoo" plugin (WooCommerce automation)
2. Create automation workflow
3. Trigger: "Customer account created"
4. Actions: Send series of emails

**Pros:** Free (one-time plugin cost ~$99)
**Cons:** More complex setup, less user-friendly

---

## Summary Checklist

**Before Launch:**
- [ ] SendGrid account created
- [ ] Domain verified
- [ ] Contact list uploaded (85 customers)
- [ ] 7 email templates created and tested
- [ ] Automation sequence built
- [ ] Test automation with 5 test emails
- [ ] All personalization working
- [ ] All links working
- [ ] 85 user accounts created on windloadcalc.com
- [ ] Temp passwords generated

**Launch Day:**
- [ ] Final review of automation
- [ ] Activate automation
- [ ] Monitor first sends

**Ongoing (4 months):**
- [ ] Check SendGrid dashboard weekly
- [ ] Respond to customer questions
- [ ] Track migration progress
- [ ] Handle bounces/issues

---

**Document Version:** 1.0
**Last Updated:** January 23, 2025
**Estimated Setup Time:** 4-6 hours
**Estimated Cost:** $20/month for 4-6 months = $80-120 total
