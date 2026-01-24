# Component Documentation

## Overview
This project is a complete recreation of the I Love My Ears website, built with React and Tailwind CSS.

---

## Components

### 1. Header (`Header.jsx`)
**Purpose**: Fixed navigation bar at the top of the page

**Features**:
- Logo with icon
- Two CTA buttons (Get Wax Removed, Help With Hearing)
- Hamburger menu
- Fixed positioning with backdrop
- Responsive: Hides buttons on mobile

**Colors**:
- Purple button: `bg-purple-200` with `text-purple-900`
- Teal button: `bg-teal-400` with `text-white`

---

### 2. Hero (`Hero.jsx`)
**Purpose**: Main landing section with headline and hero image

**Features**:
- Large headline with "Hearing Aid Specialists" in teal
- Feature checklist with teal checkmarks
- Two CTA buttons
- Hero image with rounded corners
- Floating review badge (5.0 rating)
- Decorative elements (stars, circles)

**Layout**: Two-column grid (text left, image right)

---

### 3. About (`About.jsx`)
**Purpose**: Company introduction and mission

**Features**:
- Light purple background (`bg-purple-50`)
- Company description and values
- Location information (Greater Manchester)
- Image gallery (2-column grid with offset)
- Yellow CTA button

**Layout**: Two-column grid (text left, images right)

---

### 4. Services (`Services.jsx`)
**Purpose**: Display two main service offerings

**Features**:
- **Wax Removal Service** (£65)
  - Feature list with checkmarks
  - Price display
  - Service image with overlay button
  - 3 feature cards with gradient backgrounds
  
- **Help With Hearing Service** (£3,000-£5,000)
  - Feature list with checkmarks
  - Price range display
  - Service image with overlay button
  - 3 feature cards with gradient backgrounds

**Feature Card Gradients**:
- Pink to Orange: `from-pink-50 to-orange-50`
- Blue to Cyan: `from-blue-50 to-cyan-50`
- Green to Emerald: `from-green-50 to-emerald-50`
- Yellow to Amber: `from-yellow-50 to-amber-50`
- Purple to Pink: `from-purple-50 to-pink-50`

---

### 5. Locations (`Locations.jsx`)
**Purpose**: Show clinic locations with interactive selector

**Features**:
- "Locations Near You" heading (gray + purple)
- 5 location buttons (Manchester, Bolton, Oldham, Sale, Bury)
- Active state: Purple background (`bg-purple-400`)
- Map placeholder with decorative pins
- Network description text

**Layout**: Two-column grid (selector left, map right)

---

### 6. Reviews (`Reviews.jsx`)
**Purpose**: Customer testimonials carousel

**Features**:
- Review carousel with navigation arrows
- Customer avatar (circular)
- Review text
- Customer name and date
- 5-star rating display
- Dot indicators for navigation
- Auto-rotating capability (optional)

**Data Structure**:
```javascript
{
  id, name, date, rating, text, avatar
}
```

---

### 7. FAQ (`FAQ.jsx`)
**Purpose**: Frequently asked questions with accordion

**Features**:
- Two categories: "Wax Removal" and "Hearing"
- Category tabs (purple when active)
- Accordion-style questions
- Smooth expand/collapse animation
- Chevron icon rotation on expand

**Interaction**: Click question to expand/collapse answer

---

### 8. DetailedInfo (`DetailedInfo.jsx`)
**Purpose**: Rich information cards with visuals

**Features**:
- 3 cards in a row
- **Card 1**: 30-Day Money-Back Guarantee
  - Purple gradient background
  - Badge icon (30 DAYS)
  - White text
  
- **Card 2**: NHS vs Private Hearing Aids
  - Background image with overlay
  - Text overlay at bottom
  
- **Card 3**: Open Day Invitation
  - Background image with overlay
  - Text overlay at bottom

**Background**: Purple gradient (`from-purple-900 to-purple-700`)

---

### 9. Footer (`Footer.jsx`)
**Purpose**: Site footer with navigation and contact info

**Features**:
- Logo and phone number (0161 513 9011)
- Social media icons
- Trust badges (HCPC, NHS)
- **4-column layout**:
  1. Current Locations (all 6 locations with service links)
  2. Coming Soon (5 cities)
  3. Important Links (6 policy links)
- Copyright notice
- Dark background (`bg-gray-900`)

---

## Color Palette

### Primary Colors
- **Teal**: `#4FD1C5` (teal-400) - Main CTA color
- **Purple**: `#A78BFA` (purple-400) - Secondary accent

### Background Colors
- White: Main background
- `gray-50`: Light gray sections
- `purple-50`: Light purple sections
- `gray-900`: Footer

### Text Colors
- `gray-900`: Primary text
- `gray-700`: Secondary text
- `gray-600`: Tertiary text
- `gray-400`: Muted text

---

## Typography

### Font Family
- **Inter** - Clean, modern sans-serif
- Imported from Google Fonts
- Weights used: 200, 300, 400, 500, 600

### Text Sizes
- **Hero Headline**: `text-4xl sm:text-5xl lg:text-6xl`
- **Section Headers**: `text-4xl`
- **Service Titles**: `text-4xl`
- **Card Titles**: `text-2xl`
- **Body Text**: `text-base` or `text-sm`
- **Small Text**: `text-xs`

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Key Responsive Patterns
1. **Header**: Show/hide buttons at `md` breakpoint
2. **Two-column layouts**: Stack at `lg` breakpoint
3. **Grid layouts**: Collapse to single column on mobile
4. **Text sizes**: Scale down on smaller screens

---

## Interactions & Animations

### Hover States
- **Buttons**: Background color change + shadow
- **Cards**: Shadow increase
- **Links**: Text color change

### Transitions
- Most transitions: `transition-colors` or `transition-all`
- Duration: Default (150-200ms) for snappy feel

### Special Effects
- **Hero decorative elements**: Positioned absolutely
- **Review carousel**: Smooth slide transition
- **FAQ accordion**: Height animation with chevron rotation
- **Pulse animation**: Location map pins

---

## Data Management

### Static Data Arrays
1. **Services** - in `Services.jsx`
2. **Reviews** - in `Reviews.jsx`
3. **FAQ** - in `FAQ.jsx`
4. **Locations** - in `Locations.jsx` and `Footer.jsx`

### State Management
- Simple `useState` for:
  - Menu open/close
  - Active location
  - Current review
  - Open FAQ question

No complex state management needed (Redux, Context, etc.)

---

## Future Enhancements

### Potential Additions
1. **Real Map Integration**: Replace placeholder with Google Maps
2. **Form Integration**: Add booking forms
3. **Animation Library**: Add Framer Motion for smoother animations
4. **Image Optimization**: Use Next.js Image or similar
5. **CMS Integration**: Connect to Contentful/Sanity for dynamic content
6. **Analytics**: Add Google Analytics or similar
7. **A11y Improvements**: Enhanced keyboard navigation and screen reader support

---

## Performance Considerations

### Current Implementation
- ✅ Minimal JavaScript
- ✅ Static components
- ✅ Lazy loading ready
- ✅ Tailwind JIT for small CSS bundle

### Optimization Opportunities
- Add image lazy loading
- Implement code splitting
- Use image CDN for external images
- Add caching headers

---

## Accessibility

### Current Features
- Semantic HTML elements
- Keyboard navigation support
- Focus states on interactive elements
- Alt text placeholders for images

### Recommended Additions
- ARIA labels for interactive elements
- Skip to content link
- Screen reader announcements for carousel
- Focus trap in modals (if added)
- Color contrast verification

---

## Browser Support

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Requires modern browser with:
- ES6+ support
- CSS Grid
- Flexbox
- CSS Custom Properties

