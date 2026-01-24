# I Love My Ears - Full Landing Page

A complete, pixel-perfect recreation of the [I Love My Ears](https://www.ilovemyears.co.uk/) website featuring:

- 🏥 **Complete landing page** with all sections
- 🎨 **Modern design** with teal and purple color scheme
- ✨ **Interactive components** including carousels, accordions, and maps
- 🖋️ **Clean Inter typography** for professional appearance
- 📱 **Fully responsive** design for all screen sizes
- 💎 **Premium healthcare aesthetic**

## Features

- **Fixed Header**: Sticky navigation with CTA buttons
- **Hero Section**: Eye-catching hero with image and feature list
- **About Section**: Multi-image layout with company information
- **Services**: Detailed wax removal and hearing aid services
- **Locations**: Interactive location selector with map
- **Reviews Carousel**: Customer testimonials with navigation
- **FAQ Accordion**: Categorized frequently asked questions
- **Detailed Info Cards**: Rich information cards with gradients
- **Comprehensive Footer**: Full site navigation and contact info

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Fixed navigation header
│   ├── Hero.jsx           # Hero section with image
│   ├── About.jsx          # Company information
│   ├── Services.jsx       # Service offerings
│   ├── Locations.jsx      # Location selector with map
│   ├── Reviews.jsx        # Customer reviews carousel
│   ├── FAQ.jsx            # Accordion FAQ section
│   ├── DetailedInfo.jsx   # Information cards
│   └── Footer.jsx         # Site footer
├── App.jsx                # Root application
├── main.jsx              # React entry point
└── index.css             # Global styles
```

## Customization

### Adding New Reviews

Edit the `reviews` array in `src/components/Reviews.jsx`:

```javascript
{
  id: 4,
  name: 'Customer Name',
  date: 'Month Day, Year',
  rating: 5,
  text: 'Review text here...',
  avatar: 'avatar-url'
}
```

### Adding FAQ Questions

Edit the `faqData` array in `src/components/FAQ.jsx` under the appropriate category.

### Styling

The design uses:
- **Font**: Inter for clean, modern typography
- **Colors**: Teal (#4FD1C5) and Purple (#A78BFA) as primary colors
- **Rounded Corners**: Generous border-radius (rounded-2xl, rounded-3xl)
- **Shadows**: Subtle shadows for depth
- **Gradients**: Background gradients for visual interest

## Design Philosophy

This recreation captures the I Love My Ears aesthetic:
- **Healthcare Professional**: Clean, trustworthy design
- **Friendly & Approachable**: Bright colors and rounded elements
- **Clear Information**: Easy-to-scan sections with clear hierarchy
- **Strong CTAs**: Prominent call-to-action buttons throughout

## Tech Stack

- **React 18.3** - UI framework
- **Tailwind CSS 3.4** - Utility-first styling
- **Vite 5.4** - Build tool and dev server
- **Inter Font** - Clean, modern typography

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

Built with care for premium user experiences.

