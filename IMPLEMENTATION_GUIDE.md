# Complete Multilingual Implementation Guide

## Current Status
✅ Basic multilingual infrastructure set up
✅ Navigation, Hero, Features, Testimonials, Events, and Stats translated
✅ Language selector component created and working
⚠️ Additional sections in Home.jsx need translation implementation

## Sections Still Requiring Translation

### 1. Trust Metrics Section
- Badge: "OUR ACHIEVEMENTS"
- Heading and feature highlights

### 2. Programs Section  
- All 9 program descriptions
- Program filters
- Features lists for each program

### 3. Why Choose Us Section
- 6 reasons with descriptions
- Registration form
- Video tour section

### 4. Success Stories Section
- Achievement cards
- Statistics
- Testimonials heading

### 5. Call to Action Section
- CTA heading and description
- Contact methods
- Benefits list

### 6. Footer Section
- Quick links
- Programs list
- Contact info
- Newsletter

## Quick Implementation Steps

Since there's extensive content, here's the recommended approach:

### Option 1: Incremental Translation (Recommended)
Translate sections one at a time as you refine the content:

1. **Start with the most visible sections** (Programs, Why Choose Us)
2. **Add translations gradually** to other translation files
3. **Update Home.jsx** to use the translation keys

### Option 2: Full Translation at Once
Complete all translations for all 4 languages immediately (time-intensive but thorough)

## How to Add Translations

### Step 1: Update Translation Files
Add new translation keys to all 4 language files:
- `/src/locales/en.json`
- `/src/locales/so.json` (Somali)
- `/src/locales/ar.json` (Arabic)
- `/src/locales/sw.json` (Kiswahili)

### Step 2: Update Home.jsx
Replace hardcoded strings with `t('key.path')`:

```jsx
// Before:
<h2>Our Programs</h2>

// After:
<h2>{t('programs.heading')}</h2>
```

## Translation Structure Already Added

I've updated `en.json` with comprehensive translations for:
- ✅ Trust Metrics
- ✅ Programs (all 9 programs with features)
- ✅ Why Choose Us (6 reasons + registration form)
- ✅ Success Stories
- ✅ CTA Section
- ✅ Footer

## Next Steps for Full Implementation

### 1. Copy English structure to other languages

The English file now has all the keys. You need to:

1. **Somali (so.json)** - Translate all new entries
2. **Arabic (ar.json)** - Translate all new entries  
3. **Kiswahili (sw.json)** - Translate all new entries

### 2. Update Home.jsx systematically

Go through Home.jsx and replace hardcoded text with translation keys.

Example sections to update:
```jsx
// Trust Metrics Section
<h2>{t('trustMetrics.heading')} <span>{t('trustMetrics.headingHighlight')}</span></h2>
<p>{t('trustMetrics.description')}</p>

// Programs Section
{program.features.map((feature, i) => (
  <span>{t(`programs.${programKey}.features.${i}`)}</span>
))}
```

## Professional Translation Services

For production use, consider:
1. **Native speakers** for Somali and Kiswahili
2. **Islamic scholars** for proper terminology in Arabic
3. **Community review** for cultural appropriateness

## Testing

Test each language:
1. Switch to language using selector
2. Verify all sections display correctly
3. Check RTL layout for Arabic
4. Ensure no broken translation keys appear

## Current Working Features

✅ Language selector (desktop & mobile)
✅ RTL support for Arabic
✅ LocalStorage persistence
✅ Smooth language switching
✅ Country flag indicators

The basic infrastructure is complete - now it's a matter of adding the remaining translations!
