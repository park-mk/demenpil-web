# 🚀 Quick Start Guide

Get the Demenpil website running locally in 5 minutes.

## Prerequisites

- **Node.js 18+** ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version  # Should be v18 or higher
npm --version   # Should be 8 or higher
```

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages (~278 packages, ~2 minutes).

## Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

You should see:
```
VITE v5.x.x ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open your browser and navigate to http://localhost:5173

## Step 3: Make Changes

The development server has **hot module replacement (HMR)** - changes appear instantly without page refresh.

### Where to edit:

- **Content:** `src/utils/constants.ts`
- **Pages:** `src/pages/` (Home.tsx, About.tsx, Technology.tsx)
- **Components:** `src/components/`
- **Styles:** `tailwind.config.js` and component files
- **Images:** `public/` folder

## Step 4: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Step 5: Preview Production Build

```bash
npm run preview
```

This serves the production build at http://localhost:4173

---

## 📁 Project Structure Overview

```
demenpil-website/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route pages (Home, About, Technology)
│   ├── layout/        # Layout wrapper with Header/Footer
│   ├── utils/         # Constants and utilities
│   └── styles/        # Global styles
├── public/            # Static assets (images, favicon)
├── dist/              # Production build output (after npm run build)
└── package.json       # Dependencies and scripts
```

---

## 🎨 Customization Quick Guide

### 1. Update Company Information

Edit `src/utils/constants.ts`:
```typescript
export const CONTACT_EMAIL = 'your-email@example.com'
export const COMPANY_NAME = 'Your Company'
```

### 2. Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  navy: '#0D1B2A',    // Change to your brand color
  mint: '#78D6C6',    // Change accent color
  // ...
}
```

### 3. Add Real Images

Replace placeholders in `public/`:
- `og-image.png` - Social media preview (1200x630px)
- `mock-fundus.png` - Fundus photograph for Technology page
- `mock-heatmap.png` - Heatmap overlay for Technology page

### 4. Update Team Members

Edit `src/utils/constants.ts`:
```typescript
export const TEAM_ROLES = [
  { role: 'CEO', name: 'John Doe' },
  // Add your team members
]
```

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |

---

## 🚀 Next Steps

1. **Customize content** in `src/utils/constants.ts`
2. **Replace placeholder images** in `public/`
3. **Test all pages** (/, /about, /technology)
4. **Build for production** (`npm run build`)
5. **Deploy** (see DEPLOYMENT.md for options)

---

## 🆘 Common Issues

### Port 5173 already in use
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Can't find module errors
```bash
# Reinstall dependencies
npm install
```

---

## 📚 Learn More

- **React Docs:** https://react.dev/
- **Vite Docs:** https://vitejs.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Router:** https://reactrouter.com/

---

## 💡 Pro Tips

1. **Use the React DevTools** browser extension for debugging
2. **Edit `tailwind.config.js`** to extend the design system
3. **Check `src/styles/tailwind.css`** for global styles
4. **Use `<Badge>`, `<Card>`, `<Button>`** components consistently
5. **Test mobile responsive** with browser DevTools (F12 > Toggle Device Toolbar)

---

**Questions?** Check README.md or contact: hello@demenpil.com

Happy coding! 🎉
