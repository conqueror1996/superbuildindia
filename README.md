# SUPERBUILD PRO - Vue.js Website

🏗️ **The God Particle** - A cutting-edge construction company website built with Vue.js

## ✨ Features Implemented

### 1. **Interactive Elements**
- ✅ **Animated Stats Counter** - Numbers count up when scrolled into view (487+ projects, 120+ cities, $50B+ value)
- ✅ **Magnetic Buttons** - Buttons that follow cursor movement with smooth animations
- ✅ **Custom Cursor** - Crosshair cursor with hover states on desktop
- ✅ **Scroll Progress Indicator** - Real-time scroll percentage tracker

### 2. **Visual Upgrades**
- ✅ **Real Project Images** - High-quality Unsplash images for all projects
- ✅ **Image Lazy Loading** - Optimized loading with `loading="lazy"` attribute
- ✅ **Grayscale to Color Transitions** - Projects reveal color on hover
- ✅ **Dynamic Backgrounds** - Services section shows background images on hover
- ✅ **Noise Overlay** - Cinematic grain texture effect

### 3. **Functional Features**
- ✅ **Contact Form** - Fully functional with validation
  - Name, Email, Phone fields
  - Project Type selector
  - Budget Range selector
  - Message textarea
  - Real-time validation
  - Submit animation with feedback
- ✅ **Testimonials Carousel** - Auto-playing client reviews with manual navigation
- ✅ **Full-Screen Menu** - Animated navigation overlay

### 4. **Advanced Animations**
- ✅ **Preloader** - Progress bar with hex ID animation
- ✅ **Marquee Scrolling** - Infinite scrolling text banners
- ✅ **Floating Geometric Shapes** - Animated Triangle & Circle elements
- ✅ **Glitch Text Effect** - On hover text distortion
- ✅ **Smooth Transitions** - Throughout all components

### 5. **Technical Features**
- ✅ **Dark/Light Mode Toggle** - Theme switcher with localStorage persistence
- ✅ **SEO Optimization**
  - Comprehensive meta tags
  - Open Graph tags for social sharing
  - Twitter Card integration
  - Semantic HTML
- ✅ **Performance Optimization**
  - Image lazy loading
  - Efficient component structure
  - CSS animations over JavaScript where possible
- ✅ **Responsive Design** - Mobile-first approach with breakpoints
- ✅ **Accessibility** - Proper ARIA labels and semantic structure

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
superbuild_pro/
├── src/
│   ├── components/
│   │   ├── Preloader.vue          # Loading animation
│   │   ├── CustomCursor.vue       # Custom crosshair cursor
│   │   ├── NoiseOverlay.vue       # Texture effect
│   │   ├── ScrollProgress.vue     # Scroll indicator
│   │   ├── ThemeToggle.vue        # Dark/Light mode
│   │   ├── SEO.vue                # Meta tags
│   │   ├── Navbar.vue             # Navigation with menu
│   │   ├── Hero.vue               # Landing section
│   │   ├── StatsCounter.vue       # Animated statistics
│   │   ├── ServicesSection.vue    # Services showcase
│   │   ├── ProjectGallery.vue     # Project cards
│   │   ├── Testimonials.vue       # Client reviews
│   │   ├── ContactForm.vue        # Contact form
│   │   ├── MagneticButton.vue     # Interactive button
│   │   ├── Marquee.vue            # Scrolling text
│   │   └── Footer.vue             # Footer with form
│   ├── App.vue                    # Main app component
│   ├── main.js                    # Vue initialization
│   ├── style.css                  # Global styles
│   └── data.js                    # Content data
├── index.html                     # HTML entry point
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── package.json                   # Dependencies

```

## 🎨 Design Features

- **Color Scheme**: Black (#050505), White (#FFFFFF), Orange (#FF4D00)
- **Typography**: 
  - Display: Syne (Bold, Black weights)
  - Mono: Space Mono (Regular, Bold)
- **Animations**: 
  - Glitch effects
  - Marquee scrolling
  - Magnetic interactions
  - Smooth transitions

## 🛠️ Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Vue Next
- **Fonts**: Google Fonts (Syne, Space Mono)

## 📊 Performance

- Image lazy loading for faster initial load
- Component-based architecture
- Optimized animations using CSS transforms
- Minimal JavaScript overhead
- Production build optimization with Vite

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Update Content
Edit `src/data.js` to modify services and projects data.

### Change Theme
Edit colors in `tailwind.config.js` and component files.

### Add Sections
Create new components in `src/components/` and import in `App.vue`.

## 🚧 Future Enhancements

- [ ] Multi-language support (i18n)
- [ ] Backend API integration for contact form
- [ ] Project filtering and search
- [ ] Team member profiles
- [ ] Blog/News section
- [ ] Video backgrounds
- [ ] 3D parallax scrolling

## 📄 License

Private - SuperBuild Inc.

---

Built with ❤️ using Vue.js
