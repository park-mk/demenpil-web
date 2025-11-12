# Demenpil - Retina-Based Cognitive Screening

A fully static, production-ready marketing website built with React, Vite, TypeScript, and Tailwind CSS.

## 🎯 Overview

**Demenpil** is an AI Software as a Medical Device (SaMD) concept that estimates dementia/MCI risk from standard fundus images. This website showcases the technology, mission, and team behind the project.

**Tech Stack:**
- React 18 + TypeScript
- Vite (fast build tooling)
- Tailwind CSS (utility-first styling)
- React Router DOM (client-side routing)

**Key Features:**
- 📱 Fully responsive design
- ♿ Accessibility-focused (semantic HTML, ARIA labels, focus states)
- 🎨 Premium medical-tech aesthetic with custom color palette
- ⚡ Optimized performance (Lighthouse 90+ score target)
- 🔒 Static export (no server required)
- 🚀 Deploy-ready for Cloudflare Pages, Netlify, or Vercel

## 🎨 Design System

### Color Palette
```css
--color-navy: #0D1B2A    /* Primary background, header/nav */
--color-deep: #1B263B    /* Cards, buttons */
--color-slate: #415A77   /* Icons, borders, dividers */
--color-mint: #78D6C6    /* Accent: CTA, hovers, success */
--color-pale: #E0E1DD    /* Primary text on dark, inputs */
```

### Typography
- **Headings:** Space Grotesk (500-600 weight)
- **Body:** Inter (400-500 weight)

### Components
- Rounded corners (rounded-2xl)
- Soft shadows with subtle glow effects
- Grid layouts for content organization
- Smooth transitions and micro-animations

## 📂 Project Structure

```
demenpil-website/
├── public/                  # Static assets
│   ├── favicon.svg
│   ├── logo.svg
│   ├── hero-bg.svg
│   ├── og-image.png        # Replace with actual 1200x630 image
│   ├── mock-fundus.png     # TODO: Add real fundus image
│   └── mock-heatmap.png    # TODO: Add heatmap overlay
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Feature.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── PageHero.tsx
│   │   ├── Section.tsx
│   │   └── Stat.tsx
│   ├── layout/
│   │   └── RootLayout.tsx  # Main layout with header/footer
│   ├── pages/              # Route pages
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # Mission, team, values
│   │   └── Technology.tsx  # Technical details, pipeline
│   ├── styles/
│   │   └── tailwind.css    # Global styles
│   ├── utils/
│   │   ├── constants.ts    # App-wide constants
│   │   └── seo.ts          # SEO utilities
│   └── main.tsx            # App entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📋 Pages

### Home (/)
- Hero section with tagline and CTAs
- Problem/Solution statement
- Key benefits (6 cards)
- How It Works (5-step process)
- Evidence teaser
- Contact CTA

### About Us (/about)
- Mission statement
- What We Do (SaMD concept overview)
- Core values (4 principles)
- Team & advisors (placeholder roles)
- Contact information
- Legal disclaimer

### Technology (/technology)
- Page hero
- Retina-brain axis explanation
- Core biomarkers (grid list)
- AI pipeline (5-stage process)
- Mock visualization demo (with heatmap toggle)
- Academic references
- Medical disclaimer

## 🎨 Customization

### Adding Real Images

Replace placeholder images in `/public`:

1. **Fundus image:** `mock-fundus.png` (suggested: 800x800px)
2. **Heatmap overlay:** `mock-heatmap.png` (same dimensions as fundus)
3. **OG image:** `og-image.png` (1200x630px for social sharing)

Update the Technology page to use actual images:
```tsx
// In Technology.tsx, replace placeholder div with:
<img src="/mock-fundus.png" alt="Fundus photograph" />
{showHeatmap && <img src="/mock-heatmap.png" className="absolute inset-0" />}
```

### Updating Content

All content constants are centralized in `src/utils/constants.ts`:
- Company information
- Navigation items
- Benefits, features, biomarkers
- Team roles
- References

### Styling

The design system is defined in `tailwind.config.js`. To modify:
- Colors: Update `extend.colors`
- Fonts: Update `extend.fontFamily` (and Google Fonts link in `index.html`)
- Animations: Add to `extend.animation` and `extend.keyframes`

## 📧 Contact Form Integration

Currently, the Contact button uses `mailto:hello@demenpil.com`. To add a proper form:

### Option 1: Formspree (recommended for static sites)
```tsx
// In Button.tsx or create ContactForm.tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: Netlify Forms
Add `netlify` attribute to form (auto-detected on Netlify):
```tsx
<form name="contact" method="POST" data-netlify="true">
  {/* form fields */}
</form>
```

### Option 3: Serverless Function
Deploy a serverless function on Vercel/Netlify/Cloudflare to handle submissions.

## 🚀 Deployment

### Cloudflare Pages

1. Push code to GitHub/GitLab
2. Connect repository in Cloudflare Pages dashboard
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node version:** 18+

### Netlify

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository in Netlify dashboard
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

Or connect GitHub repository in Vercel dashboard.

### Static Host (any provider)

Build the site and upload the `dist/` folder to any static host:
```bash
npm run build
# Upload dist/ contents to your host
```

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA compliant)
- Focus states on all interactive elements
- Alt text for images (add to real images when replacing placeholders)

## ⚡ Performance Optimization

### Current Optimizations
- Code splitting (React vendor bundle)
- Lazy loading animations (CSS-based)
- Optimized fonts (Google Fonts with preconnect)
- Minimal dependencies

### Further Improvements
1. **Image optimization:**
   - Use WebP format with fallbacks
   - Add responsive `srcset` for different screen sizes
   - Lazy load below-the-fold images

2. **Code splitting:**
   - Implement route-based code splitting with React.lazy()
   - Split large components

3. **Caching:**
   - Add service worker for offline support
   - Configure CDN caching headers

## 🔒 Security

- No sensitive data in client code
- All forms should validate input
- Use HTTPS in production
- Implement CSP headers on your host

## 📄 License

© 2024 Demenpil. All rights reserved.

**Important:** This site is for demonstration and informational purposes only and does not provide medical diagnosis.

## 🤝 Contributing

For internal development:
1. Create feature branch from `main`
2. Make changes and test locally
3. Submit pull request with description
4. Get review approval before merging

## 📞 Support

For questions or issues, contact: hello@demenpil.com

---

**Built with ❤️ for accessible, early cognitive screening**
