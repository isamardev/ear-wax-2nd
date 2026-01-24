# Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React 18.3
- React DOM 18.3
- Vite 5.4 (build tool)
- Tailwind CSS 3.4
- PostCSS & Autoprefixer

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

Build output will be in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
ilovemyears-landing-page/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Locations.jsx
│   │   ├── Reviews.jsx
│   │   ├── FAQ.jsx
│   │   ├── DetailedInfo.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles + Tailwind
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── README.md             # Main documentation
├── COMPONENTS.md         # Component documentation
└── SETUP.md             # This file
```

---

## Configuration Files

### `vite.config.js`
Basic Vite configuration with React plugin.

### `tailwind.config.js`
Custom Tailwind configuration including:
- Custom teal and purple colors
- Inter font family
- Extended letter spacing

### `postcss.config.js`
PostCSS configuration for Tailwind CSS processing.

---

## Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  teal: {
    400: '#YOUR_COLOR',  // Primary teal
    500: '#YOUR_COLOR',
  },
  purple: {
    400: '#YOUR_COLOR',  // Primary purple
    700: '#YOUR_COLOR',
    900: '#YOUR_COLOR',
  },
}
```

### Changing Content

1. **Services**: Edit arrays in `src/components/Services.jsx`
2. **Reviews**: Edit `reviews` array in `src/components/Reviews.jsx`
3. **FAQ**: Edit `faqData` array in `src/components/FAQ.jsx`
4. **Locations**: Edit `locations` object in `src/components/Locations.jsx`

### Adding Images

#### Option 1: Use Unsplash (current method)
Already implemented with placeholder images from Unsplash.

#### Option 2: Local Images
1. Add images to `public/images/` folder
2. Reference as `/images/filename.jpg` in components

#### Option 3: Import Images
```javascript
import heroImage from './assets/hero.jpg';
<img src={heroImage} alt="Hero" />
```

### Changing Typography

Edit `src/index.css` to change the font:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@200;300;400;500;600&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YOUR_FONT', 'system-ui', 'sans-serif'],
}
```

---

## Development Tips

### Hot Module Replacement (HMR)
Vite provides instant HMR. Changes appear immediately without full page reload.

### Component Development
Work on components in isolation by temporarily rendering only that component in `App.jsx`:

```javascript
function App() {
  return <Hero />; // Test single component
}
```

### Responsive Testing
1. Use browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at different breakpoints: 375px, 768px, 1024px, 1440px

### Debugging
- Use React DevTools browser extension
- Add `console.log()` statements
- Check browser console for errors

---

## Common Issues & Solutions

### Issue: npm install fails
**Solution**: 
- Check Node.js version (need 16+)
- Delete `node_modules` and `package-lock.json`, try again
- Clear npm cache: `npm cache clean --force`

### Issue: Port 5173 already in use
**Solution**: 
- Kill process using port: `npx kill-port 5173`
- Or change port in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 }
})
```

### Issue: Tailwind classes not working
**Solution**:
- Ensure file is listed in `tailwind.config.js` content array
- Restart dev server
- Check for typos in class names

### Issue: Images not loading
**Solution**:
- Check image URL is valid
- For local images, ensure they're in `public/` folder
- Check browser console for 404 errors

---

## Adding New Features

### Add a New Section

1. **Create component file**: `src/components/NewSection.jsx`

```javascript
import React from 'react';

const NewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          New Section
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Import in App.jsx**:

```javascript
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ... other components ... */}
      <NewSection />
      {/* ... other components ... */}
    </div>
  );
}
```

### Add Animation Library (Framer Motion)

1. **Install**:
```bash
npm install framer-motion
```

2. **Use in component**:
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Add Form Handling

For contact forms, booking forms, etc.:

1. **Install React Hook Form** (optional but recommended):
```bash
npm install react-hook-form
```

2. **Create form component**:
```javascript
import { useForm } from 'react-hook-form';

const BookingForm = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Send to backend
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Add Routing (React Router)

If you need multiple pages:

1. **Install**:
```bash
npm install react-router-dom
```

2. **Setup routes**:
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Or connect GitHub repo** to Vercel dashboard for auto-deployment

### Deploy to Netlify

1. **Build project**:
```bash
npm run build
```

2. **Install Netlify CLI**:
```bash
npm i -g netlify-cli
```

3. **Deploy**:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

4. **Deploy**:
```bash
npm run deploy
```

---

## Testing

### Manual Testing Checklist

- [ ] All links work
- [ ] Images load correctly
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1440px)
- [ ] Buttons have hover states
- [ ] FAQ accordion works
- [ ] Review carousel navigates
- [ ] Location selector updates
- [ ] No console errors
- [ ] Fast page load

### Add Automated Tests (Optional)

**Install Vitest**:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

**Create test file** `src/components/__tests__/Header.test.jsx`:
```javascript
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders logo', () => {
  render(<Header />);
  expect(screen.getByText('ILoveMyEars')).toBeInTheDocument();
});
```

---

## Performance Optimization

### Image Optimization
1. Use WebP format for better compression
2. Lazy load images below the fold
3. Use responsive images with `srcset`

### Code Splitting
Import components lazily:
```javascript
const FAQ = lazy(() => import('./components/FAQ'));
```

### Bundle Analysis
```bash
npm install --save-dev rollup-plugin-visualizer
```

Add to vite.config.js:
```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer()],
})
```

---

## Getting Help

### Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

### Common Commands Reference

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## License

This project is for demonstration purposes. I Love My Ears branding and content belong to their respective owners.

