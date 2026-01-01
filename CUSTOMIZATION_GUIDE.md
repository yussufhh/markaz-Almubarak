# 🎨 Bushra Hotel Website - Quick Customization Guide

## ⚡ Quick Start Checklist

### 1. Replace Placeholder Images (Priority: HIGH)

Replace all placeholder images with actual Bushra Hotel photos:

#### Hero Section
```javascript
// File: src/components/Home.jsx
// Line: ~260

// Current:
src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop"

// Replace with your hotel's main exterior/interior photo
src="/path/to/your/hero-image.jpg"
```

#### Room Images
```javascript
// Lines: ~90-135

const rooms = [
  {
    name: "Standard Room",
    image: "/images/standard-room.jpg", // Your actual room photo
    // ... rest of config
  },
  // ... update all 4 room images
]
```

#### Gallery Images
```javascript
// Lines: ~180-189

const galleryImages = [
  { url: "/images/hotel-exterior.jpg", title: "Hotel Exterior" },
  { url: "/images/lobby.jpg", title: "Lobby Area" },
  { url: "/images/deluxe-room.jpg", title: "Deluxe Room" },
  { url: "/images/restaurant.jpg", title: "Restaurant" },
  { url: "/images/pool.jpg", title: "Swimming Pool" },
  { url: "/images/conference.jpg", title: "Conference Room" }
];
```

**How to add images:**
1. Create `public/images/` folder in your project
2. Add your hotel photos there
3. Reference them as `/images/photo-name.jpg`

---

### 2. Update Contact Information (Priority: HIGH)

#### Phone Number
```javascript
// Multiple locations in file - Search and replace ALL instances:

// Current:
+254 712 345 678

// Replace with:
YOUR_ACTUAL_PHONE_NUMBER

// Locations to update:
// - Line ~260 (Hero CTA)
// - Line ~815 (Contact section)
// - Line ~900 (Footer)
```

#### Email Address
```javascript
// Search and replace:

// Current:
info@bushrahotel.com

// Replace with:
YOUR_ACTUAL_EMAIL@domain.com
```

#### Physical Address
```javascript
// Line ~800-810

<p className="text-gray-600">
  Your Actual Address Line 1,
  Your Actual Address Line 2,
  Garissa, Kenya
</p>
```

---

### 3. Update Google Maps (Priority: HIGH)

```javascript
// Line: ~870

// Get your Google Maps embed code:
// 1. Go to https://www.google.com/maps
// 2. Search for "Bushra Hotel Garissa"
// 3. Click "Share" → "Embed a map"
// 4. Copy the iframe src URL
// 5. Replace the current src value

<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  // ... rest stays the same
/>
```

---

### 4. Update Room Prices (Priority: MEDIUM)

```javascript
// Line: ~90-135

const rooms = [
  {
    name: "Standard Room",
    price: "2,500", // ← Update this (in KSh)
    // ...
  },
  {
    name: "Deluxe Room",
    price: "4,000", // ← Update this
    // ...
  },
  {
    name: "Executive Suite",
    price: "6,500", // ← Update this
    // ...
  },
  {
    name: "Family Suite",
    price: "7,500", // ← Update this
    // ...
  }
];
```

---

### 5. Customize Room Details (Priority: MEDIUM)

```javascript
// Update room descriptions and features

{
  name: "Standard Room",
  description: "Write your actual room description here",
  price: "2,500",
  features: [
    "List actual amenities",
    "For your standard room",
    "Be specific and honest",
    "Add or remove items as needed"
  ],
  image: "/images/standard-room.jpg"
}
```

---

### 6. Update Testimonials (Priority: MEDIUM)

```javascript
// Line: ~145-175

const testimonials = [
  {
    text: "Replace with actual guest review from Google, TripAdvisor, or direct feedback",
    guest: "Actual Guest Name (or Anonymous Guest)",
    location: "Guest's City, Country",
    rating: 5 // 1-5 stars
  },
  // Add 3-4 real testimonials
];
```

**Where to get testimonials:**
- Google Business Reviews
- TripAdvisor
- Booking.com
- Direct guest feedback
- Email testimonials

---

### 7. Update Social Media Links (Priority: MEDIUM)

```javascript
// Line: ~940-950

{[
  { icon: Facebook, link: "https://facebook.com/YOUR_PAGE", label: "Facebook" },
  { icon: Instagram, link: "https://instagram.com/YOUR_HANDLE", label: "Instagram" },
  { icon: MessageCircle, link: "https://wa.me/254712345678", label: "WhatsApp" }
]}

// WhatsApp link format:
// https://wa.me/COUNTRY_CODE_PHONE_NUMBER
// Example: https://wa.me/254712345678
```

---

### 8. Customize Hotel Stats (Priority: LOW)

```javascript
// Line: ~760-770

{[
  { number: "500+", label: "Happy Guests" },     // ← Update with real numbers
  { number: "50+", label: "Rooms Available" },   // ← Your actual room count
  { number: "24/7", label: "Support" },          // ← Keep as is
  { number: "15+", label: "Years Experience" }   // ← Your actual years in business
]}
```

---

### 9. Update Amenities/Facilities (Priority: LOW)

```javascript
// Line: ~155-165

const facilities = [
  { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet throughout the hotel" },
  { icon: Wind, name: "Air Conditioning", description: "Climate control in all rooms" },
  // ... add or remove facilities as needed
  
  // To add a new facility:
  { icon: YourIcon, name: "Your Facility", description: "Description here" },
];
```

**Available icons:** Check [Lucide React](https://lucide.dev/) for icon names

---

### 10. Form Submission Setup (Priority: HIGH - TECHNICAL)

The contact form currently shows an alert. For production, integrate with:

#### Option A: Email Service (Recommended)
```javascript
// Install EmailJS
npm install @emailjs/browser

// Update handleSubmit function (Line ~55)
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch(() => alert('Failed to send message. Please try again.'));
};
```

#### Option B: Backend API
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    alert('Failed to send. Please call us directly.');
  }
};
```

---

## 🎨 Advanced Customization

### Change Color Scheme

**Current Colors:**
- Primary: Amber (`amber-500`, `amber-600`)
- Dark: Gray (`gray-800`, `gray-900`)

**To change to Blue/Teal:**
1. Find and replace: `amber-500` → `blue-500`
2. Find and replace: `amber-600` → `blue-600`

**To change to Green:**
1. `amber-500` → `emerald-500`
2. `amber-600` → `emerald-600`

### Add a New Section

```javascript
// Add before the Footer section (around line ~900)

{/* ==================== YOUR NEW SECTION ==================== */}
<section id="your-section" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div {...fadeInUp} className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Your Section Title
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
    </motion.div>
    
    {/* Your content here */}
  </div>
</section>
```

### Add to Navigation
```javascript
// Line: ~215 (Desktop Menu)
{['rooms', 'amenities', 'gallery', 'your-section', 'contact'].map((item) => (
  // ... menu items
))}
```

---

## 📱 Testing Checklist

Before going live:

- [ ] Test on mobile phone (actual device)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify all images load
- [ ] Click all navigation links
- [ ] Test contact form submission
- [ ] Verify phone numbers are clickable
- [ ] Verify email links work
- [ ] Check Google Maps loads correctly
- [ ] Test social media links
- [ ] Check all room prices are correct
- [ ] Verify testimonials display properly
- [ ] Test scroll-to-top button
- [ ] Check gallery lightbox works
- [ ] Test on different browsers (Chrome, Safari, Firefox)

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Deploy Options

**Vercel (Recommended - Free):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify:**
1. Drag and drop `dist` folder to netlify.com/drop
2. Or connect GitHub repo

**Traditional Hosting:**
1. Upload `dist` folder contents to your web server
2. Point domain to the folder

---

## 🆘 Common Issues

### Images not loading
- Ensure images are in `public/images/` folder
- Use `/images/photo.jpg` (starting with `/`)
- Check file names match exactly (case-sensitive)

### Form not sending emails
- Implement EmailJS or backend API (see section 10)
- Current version only shows alert

### Maps not showing
- Update iframe src with actual Google Maps embed URL
- Ensure URL is complete and valid

### Colors look different
- Clear browser cache
- Rebuild with `npm run build`
- Check TailwindCSS classes are spelled correctly

---

## 📞 Need Help?

If you need assistance with customization:
1. Check this guide first
2. Review the main [BUSHRA_HOTEL_README.md](BUSHRA_HOTEL_README.md)
3. Contact support at info@bushrahotel.com

---

**Last Updated:** January 2026  
**Component Version:** 1.0.0
