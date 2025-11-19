# PickuUp
Ride-sharing website for WEDE5020_POE
# PickuUp 

A ride-sharing web app built for the WEDE5020 assignment.

## Features
- Promo offers and vouchers
- Ride tracker animation
- Leaflet map integration
- Responsive dashboard

## Technologies
HTML, CSS, JavaScript, Leaflet.js
### SEO & Indexing
- Added `robots.txt` and `sitemap.xml` in the root directory.
- Verified accessibility at:
  - `https://yourdomain.com/robots.txt`
  - `https://yourdomain.com/sitemap.xml`

### PageSpeed Optimization
- Achieved 93/100 Mobile and 100/100 Desktop scores on Google PageSpeed Insights.
- Optimizations included:
  - Image compression and lazy loading
  - Minified & deferred CSS/JS
  - HTTP caching
  - Preconnect for external resources
- Screenshots captured for lecturer and portfolio evidence.

### Security Setup
- Enforced HTTPS via GitHub Pages.
- Configured `robots.txt` to block private directories.
- Added form validation to prevent malicious input.
- Tested headers via [SecurityHeaders.com](https://securityheaders.com).

### Form Functionality
- **Enquiry Form (`enquiry.html`):**
  - Fields: name, email, service, distance
  - JavaScript calculates cost estimate dynamically
  - Success message displayed on submission

- **Contact Form (`contact.html`):**
  - Fields: name, email, subject, message
  - JavaScript validation ensures proper input
  - Success message displayed after submission

- **Shared `script.js`:**
  - Handles both enquiry and contact forms
  - Provides validation, error handling, and success feedback

### Branding (`auth.css`)
- Consistent black & yellow theme across all forms
- Features:
  - Bold yellow headings
  - Black form containers with glowing yellow borders
  - Yellow buttons with hover glow effects
  - Error messages in red, success messages in yellow panels

---

## Project Structure

---

## Case Study Evidence
- SEO: robots.txt + sitemap.xml verified live  
- Performance: PageSpeed Insights screenshots (93 mobile, 100 desktop)  
- Security: HTTPS padlock + SecurityHeaders.com test results  
- Forms: Screenshots of validation errors, enquiry estimate, and contact success message  
- Branding: Black/yellow theme applied consistently across pages  

---

## Deployment
Hosted on GitHub Pages with enforced HTTPS.  
Accessible at: `https://yourusername.github.io/pickuup/`

---

## Portfolio Note
This project is documented as a mini case study showcasing:
- Technical SEO setup
- PageSpeed optimization
- Security implementation
- Form functionality
- Branding consistency

## Author
Zazi Simelane

## Submission
This repository is submitted as part of the I.T. WEDE_5020 coursework.
