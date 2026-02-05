# Joeventure Tours - Setup Guide

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your API keys (see below for where to get them)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🔑 Getting API Keys & Credentials

### 1. PayPal (Payment Processing)
- **Sign up**: https://developer.paypal.com/
- **Get Sandbox Client ID**: Dashboard → My Apps & Credentials → Sandbox
- **For production**: Switch to Live and get production client ID
- **Add to `.env`**: `PUBLIC_PAYPAL_CLIENT_ID=your_client_id`

### 2. Tawk.to (Live Chat)
- **Sign up**: https://www.tawk.to/ (FREE forever)
- **Get IDs**: Dashboard → Administration → Property Settings
- **Copy Property ID and Widget ID**
- **Uncomment** the Tawk.to script in `src/layouts/Layout.astro` and add your IDs

### 3. Formspree (Contact Forms)
- **Sign up**: https://formspree.io/ (FREE tier: 50 submissions/month)
- **Create a form** and get the form endpoint
- **Add to `.env`**: `PUBLIC_FORMSPREE_FORM_ID=your_form_id`

### 4. EmailJS (Email Notifications)
- **Sign up**: https://www.emailjs.com/ (FREE tier: 200 emails/month)
- **Create email service** and template
- **Get credentials**: Service ID, Template ID, Public Key
- **Add to `.env`**: All three EmailJS variables

### 5. Google Analytics (Website Analytics)
- **Sign up**: https://analytics.google.com/ (FREE)
- **Create property** and get Measurement ID (starts with G-)
- **Uncomment** GA script in `src/layouts/Layout.astro` and add your ID

### 6. M-Pesa (Optional - Kenya Only)
- **Sign up**: https://developer.safaricom.co.ke/
- **Create app** and get credentials
- **Note**: Requires business registration in Kenya
- **Add to `.env`**: All M-Pesa variables

---

## 📁 Project Structure

```
joeventure-tours/
├── public/
│   └── images/          # Optimized WebP images (27MB total)
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx   # Navigation with logo
│   │   ├── Footer.tsx   # Footer with logo
│   │   ├── PayPalButton.tsx
│   │   ├── MpesaPayment.tsx
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro # Main layout
│   ├── pages/           # All pages
│   │   ├── index.astro  # Homepage
│   │   ├── about.astro
│   │   ├── packages.astro
│   │   ├── destinations.astro
│   │   ├── gallery.astro
│   │   ├── contact.astro
│   │   ├── success.astro
│   │   ├── cancel.astro
│   │   └── booking/
│   │       └── [id].astro
│   └── styles/
│       └── global.css
├── .env.example         # Environment variables template
└── astro.config.mjs     # Astro configuration
```

---

## 🎨 Features Implemented

### ✅ Multi-Page Platform
- Homepage with hero and overview
- About Us page
- Safari Packages page
- Destinations page
- Photo Gallery (65 optimized images)
- Contact page with FAQ

### ✅ Payment Integration
- PayPal payment button (sandbox ready)
- M-Pesa payment interface (placeholder)
- Booking flow for each package
- Success and cancellation pages

### ✅ Logo Integration
- Professional logo in header
- Logo in footer
- Responsive sizing

### ✅ Performance
- All images optimized to WebP (82.5% size reduction)
- Fast loading times
- Mobile responsive

### 🔄 Ready to Add (Need Credentials)
- Tawk.to live chat
- Formspree contact forms
- EmailJS email notifications
- Google Analytics tracking

---

## 🚢 Deployment

### Cloudflare Pages (Current)
- **Auto-deploys** on push to `main` branch
- **Live URL**: https://joeventurecloud.pages.dev/
- **Custom domain**: Can be configured in Cloudflare dashboard

### Environment Variables in Cloudflare
1. Go to Cloudflare Pages dashboard
2. Select your project
3. Settings → Environment variables
4. Add all variables from `.env` (without `PUBLIC_` prefix for build-time vars)

---

## 📝 Next Steps

### Immediate (Need User Input)
1. **Get PayPal Client ID** and add to `.env`
2. **Sign up for Tawk.to** and add credentials
3. **Create Formspree account** and get form ID
4. **Set up EmailJS** for booking confirmations

### Future Enhancements
- **Client Portal**: User dashboard with Firebase
- **Blog System**: Content marketing with Astro Content Collections
- **Reviews Page**: Integration with Google Reviews API
- **Advanced Gallery**: Lightbox and categories

---

## 🆘 Support

**Contact**: info@joetours.co.ke  
**Phone**: +254 705 924974  
**WhatsApp**: https://wa.me/254705924974

---

## 📄 License

© 2024 Joeventure Tours. All rights reserved.
