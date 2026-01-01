# 🏨 Bushra Hotel - Official Website

A modern, professional website for **Bushra Hotel** located in Garissa, Kenya, near Garissa University.

## 🌟 Features

### Complete Website Sections

1. **Hero Section**
   - Full-screen hero with hotel imagery
   - Professional tagline: "Experience Comfort and Elegance in Garissa"
   - Dual CTA buttons (Book Now / View Rooms)
   - Quick amenity icons display
   - Smooth scroll navigation

2. **About Section**
   - Hotel introduction and location highlights
   - Proximity to Garissa University emphasized
   - Key benefits with icons (Location, Hospitality, Quality Service)
   - Years of service badge

3. **Rooms & Suites Section**
   - 4 room categories:
     - Standard Room (KSh 2,500/night)
     - Deluxe Room (KSh 4,000/night)
     - Executive Suite (KSh 6,500/night)
     - Family Suite (KSh 7,500/night)
   - Feature lists for each room
   - Direct booking CTAs
   - Responsive grid layout

4. **Facilities Section**
   - 8 key amenities with icons:
     - Free Wi-Fi
     - Air Conditioning
     - Free Parking
     - Restaurant
     - Breakfast Included
     - Swimming Pool
     - 24/7 Security
     - 24-Hour Reception
   - Hover animations

5. **Photo Gallery**
   - 6 high-quality hotel images
   - Hover zoom effects
   - Lightbox modal for viewing
   - Categories: Exterior, Lobby, Rooms, Restaurant, Pool, Conference

6. **Testimonials**
   - Auto-rotating carousel
   - 4 guest reviews with ratings
   - Guest location display
   - Manual navigation controls
   - Grid view of all testimonials

7. **Call-to-Action Banner**
   - Prominent booking encouragement
   - Quick stats (500+ guests, 50+ rooms, 24/7 support, 15+ years)
   - Dual CTA (Book Room / Call Now)
   - Gradient background with pattern overlay

8. **Contact Section**
   - Contact form (Name, Email, Message)
   - Contact information cards
   - Embedded Google Maps
   - Contact details:
     - **Location:** Near Garissa University, Garissa, Kenya
     - **Phone:** +254 712 345 678
     - **Email:** info@bushrahotel.com

9. **Footer**
   - Hotel branding
   - Quick links navigation
   - Services list
   - Social media links (Facebook, Instagram, WhatsApp)
   - Copyright and legal links

### Design & UX Features

✅ **Mobile-First Responsive Design**
- Works on all devices (320px - 4K displays)
- Optimized breakpoints for mobile, tablet, desktop
- Touch-friendly buttons and navigation

✅ **Modern Animations**
- Framer Motion powered animations
- Fade-in, slide-in, scale effects
- Smooth page transitions
- Auto-rotating testimonial carousel

✅ **Professional Color Scheme**
- Primary: `#1F2937` (Dark Slate Gray)
- Accent: `#F59E0B` (Warm Amber/Gold)
- Clean neutrals for readability

✅ **Smooth User Experience**
- Smooth scroll navigation
- Scroll-to-top button
- Mobile hamburger menu
- Sticky navigation bar
- Hover effects on all interactive elements

✅ **Accessibility & SEO**
- Semantic HTML structure
- Alt text for all images
- ARIA labels for buttons
- Keyboard navigation support
- Proper heading hierarchy

## 🚀 Technology Stack

- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Fast build tool
- **TailwindCSS 4.1.18** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Animation library
- **Lucide React 0.562.0** - Beautiful icon library

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd markaz-Almubarak

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization Guide

### Update Hotel Information

Edit [Home.jsx](src/components/Home.jsx):

**Contact Details:**
```javascript
// Line ~815-825
<a href="tel:+254712345678">+254 712 345 678</a>
<a href="mailto:info@bushrahotel.com">info@bushrahotel.com</a>
```

**Room Prices:**
```javascript
// Line ~90-135 (rooms array)
price: "2,500", // Update prices in KSh
```

**Google Maps:**
```javascript
// Line ~870
src="https://www.google.com/maps/embed?pb=..." // Replace with actual coordinates
```

### Change Images

Replace placeholder images with actual hotel photos:

```javascript
// Hero Section (Line ~260)
src="YOUR_HERO_IMAGE_URL"

// Rooms (Line ~90-135)
image: "YOUR_ROOM_IMAGE_URL"

// Gallery (Line ~180-189)
{ url: "YOUR_GALLERY_IMAGE_URL", title: "..." }
```

### Modify Colors

The component uses Tailwind's color system. Primary colors:

- `amber-500`, `amber-600` - Gold/Amber accents
- `gray-800`, `gray-900` - Dark backgrounds
- `white`, `gray-50` - Light backgrounds

To change the color scheme, find and replace color classes throughout the file.

### Add New Rooms

Add to the `rooms` array (Line ~90):

```javascript
{
  name: "Your Room Name",
  description: "Room description",
  price: "3,500",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  image: "image-url"
}
```

### Update Testimonials

Edit the `testimonials` array (Line ~145):

```javascript
{
  text: "Guest review text",
  guest: "Guest Name",
  location: "City, Country",
  rating: 5
}
```

## 📱 Features Breakdown

### Navigation
- Sticky header with scroll effect
- Mobile hamburger menu
- Smooth scroll to sections
- Logo click returns to top

### Interactive Elements
- Hover effects on all cards
- Gallery lightbox modal
- Form validation
- Auto-rotating testimonials
- Scroll-to-top button (appears after 300px scroll)

### Responsive Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🎯 SEO Optimization

The website is optimized for search engines:

- Semantic HTML5 structure
- Proper heading hierarchy (H1, H2, H3)
- Meta-friendly content
- Image alt attributes
- Fast loading times with Vite
- Mobile-friendly design

## 📞 Support & Contact

For customization requests or technical support:
- **Email:** info@bushrahotel.com
- **Phone:** +254 712 345 678

## 📄 License

© 2026 Bushra Hotel. All rights reserved.

## 🙏 Credits

- **Design & Development:** Modern React + TailwindCSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Images:** Unsplash (placeholder images - replace with actual hotel photos)

---

**🌐 Live Preview:** [http://localhost:5173](http://localhost:5173)

**Built with ❤️ for Bushra Hotel, Garissa, Kenya**
