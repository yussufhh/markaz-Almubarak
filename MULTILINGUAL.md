# Multilingual Support Documentation

## Overview
Your Markaz-Almubarak website now supports 4 languages:
- 🇬🇧 English
- 🇸🇴 Somali
- 🇸🇦 Arabic (with RTL support)
- 🇰🇪 Kiswahili

## Features Implemented

### 1. Language Selector Component
- Located in the navigation bar (desktop and mobile)
- Beautiful dropdown with country flags
- Automatic RTL layout for Arabic
- Stores language preference in browser localStorage

### 2. Translation Files
All translations are stored in `/src/locales/`:
- `en.json` - English
- `so.json` - Somali
- `ar.json` - Arabic
- `sw.json` - Kiswahili

### 3. Internationalization Setup
- Uses `react-i18next` for translation management
- Automatic language detection
- Fallback to English if translation missing
- RTL support for Arabic

## How to Use

### For Users
1. Click the language selector (🌐) in the navigation bar
2. Select your preferred language from the dropdown
3. The entire website will update instantly
4. Your choice is saved and remembered for future visits

### For Developers

#### Adding New Translations
1. Open the relevant language file in `/src/locales/`
2. Add your translation key following the existing structure
3. Use the translation in your component:

```jsx
import { useTranslation } from 'react-i18next';

function YourComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('your.translation.key')}</h1>;
}
```

#### Translation Structure
Translations are organized hierarchically:
- `nav.*` - Navigation items
- `hero.*` - Hero section content
- `features.*` - Feature descriptions
- `testimonials.*` - Parent testimonials
- `events.*` - Event listings
- `stats.*` - Statistics
- `language.*` - Language selector labels

#### Changing Default Language
Edit `/src/i18n.js` and change the `lng` property:
```javascript
lng: 'en', // Change to 'so', 'ar', or 'sw'
```

## Technical Details

### Packages Installed
- `react-i18next` - React integration for i18next
- `i18next` - Internationalization framework
- `i18next-browser-languagedetector` - Automatic language detection

### RTL Support
Arabic text automatically triggers:
- `dir="rtl"` on the document
- Right-to-left layout
- Proper text alignment

### Browser Support
- Language preference stored in localStorage
- Fallback to browser language if no preference set
- Works in all modern browsers

## Translating More Content

To translate additional content not yet covered:

1. Add the English text to `/src/locales/en.json`
2. Add corresponding translations to other language files
3. Update the component to use `t('key.path')`

Example:
```json
// en.json
{
  "programs": {
    "title": "Our Programs",
    "description": "Comprehensive Islamic education"
  }
}
```

```jsx
// In component
<h2>{t('programs.title')}</h2>
<p>{t('programs.description')}</p>
```

## Notes

- Currently translated: Navigation, Hero section, Features, Testimonials, Events, and Statistics
- The remaining sections of the website can be translated following the same pattern
- Professional translations recommended for production use
- Consider getting native speakers to review translations for accuracy

## Support

For issues or questions about the multilingual implementation, check:
- [react-i18next documentation](https://react.i18next.com/)
- Translation files in `/src/locales/`
- i18n configuration in `/src/i18n.js`
