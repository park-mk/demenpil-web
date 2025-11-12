# Deployment Guide

This document provides step-by-step instructions for deploying the Demenpil website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Replaced placeholder images in `/public`:
  - `og-image.png` (1200x630px for social media)
  - Optional: Add `mock-fundus.png` and `mock-heatmap.png` for Technology page
- [ ] Updated contact email in `src/utils/constants.ts` (currently `hello@demenpil.com`)
- [ ] Reviewed and customized content in `src/utils/constants.ts`
- [ ] Tested locally with `npm run dev` and `npm run build`
- [ ] Verified all links work correctly
- [ ] Tested responsive design on mobile devices

## 🚀 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

**Why Cloudflare Pages?**
- Free SSL certificate
- Global CDN with excellent performance
- Automatic deployments from Git
- DDoS protection included
- Analytics available

**Steps:**

1. **Prepare your repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" > "Create application" > "Pages"
   - Connect to your Git provider (GitHub/GitLab)
   - Select your repository
   - Configure build settings:
     - **Production branch:** `main`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Environment variables:** None required
   - Click "Save and Deploy"

3. **Custom domain (optional):**
   - Go to your Pages project > "Custom domains"
   - Add your domain and follow DNS configuration instructions

**Deployment time:** ~2-3 minutes for first deploy

---

### Option 2: Netlify

**Why Netlify?**
- Simple deployment process
- Built-in form handling (useful for future contact forms)
- Easy redirects and headers management
- Generous free tier

**Steps:**

#### Via Netlify CLI:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

3. **Follow prompts:**
   - Create & configure a new site
   - Set publish directory to `dist`

#### Via Netlify Dashboard:

1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Connect repository:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Connect to Git provider
   - Select repository

3. **Configure build:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

**Deployment time:** ~2-3 minutes

---

### Option 3: Vercel

**Why Vercel?**
- Made by the creators of Next.js
- Excellent performance and global CDN
- Simple deployment process
- Good analytics

**Steps:**

#### Via Vercel CLI:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **For production:**
   ```bash
   vercel --prod
   ```

#### Via Vercel Dashboard:

1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Import project:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Import your Git repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

**Deployment time:** ~1-2 minutes

---

### Option 4: GitHub Pages

**Note:** GitHub Pages requires some additional configuration for SPAs.

**Steps:**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://<username>.github.io/<repo-name>"
   }
   ```

3. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/<repo-name>/',
     plugins: [react()],
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` > `/root`
   - Save

**Deployment time:** ~3-5 minutes

---

### Option 5: Traditional Web Host (cPanel, FTP)

For any traditional hosting with file upload:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload all contents of `dist/` folder to your web root (usually `public_html/` or `www/`)
   - Ensure `.htaccess` or server config handles SPA routing

3. **Apache .htaccess example:**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Nginx config example:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

## 🔧 Environment-Specific Configuration

### Custom Domain Setup

After deploying, to use a custom domain:

1. **Update DNS records:**
   - Add A record or CNAME pointing to your host
   - For Cloudflare/Netlify/Vercel, follow their specific DNS instructions

2. **SSL Certificate:**
   - Most modern hosts (Cloudflare, Netlify, Vercel) provide automatic SSL
   - For others, use Let's Encrypt (free)

### Analytics Integration

To add analytics:

1. **Google Analytics:**
   - Create a GA4 property
   - Add tracking code to `index.html` before `</head>`

2. **Cloudflare Web Analytics:**
   - Enable in Cloudflare Dashboard (privacy-friendly, no cookies)

3. **Plausible/Fathom:**
   - Add script tag to `index.html`

---

## 🧪 Testing Deployed Site

After deployment, verify:

- [ ] All pages load correctly (/, /about, /technology)
- [ ] Navigation works
- [ ] Links open correctly (especially mailto: links)
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Meta tags render correctly (view page source)
- [ ] Social sharing preview looks good (use [OpenGraph.xyz](https://www.opengraph.xyz/))

---

## 🔄 Continuous Deployment

All major platforms (Cloudflare, Netlify, Vercel) support automatic deployment on Git push:

1. **Connect repository** (done during initial setup)
2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **Automatic build and deploy** triggers within seconds

---

## 📊 Performance Optimization (Post-Deployment)

### Check Performance:
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ score on all metrics

### Improvements:
1. **Enable compression** (gzip/brotli) - usually automatic on modern hosts
2. **Set cache headers** for static assets
3. **Use CDN** (automatic with Cloudflare/Netlify/Vercel)
4. **Optimize images:**
   - Convert to WebP format
   - Use responsive images with `srcset`

---

## 🆘 Troubleshooting

### Issue: 404 on page refresh
**Solution:** Ensure SPA routing is configured (redirects/rewrites)
- Cloudflare: Automatic
- Netlify: `_redirects` file included
- Vercel: `vercel.json` included
- Others: Add server config (see Traditional Web Host section)

### Issue: Broken images
**Solution:** Check that image paths don't include build-specific hash changes
- Use `/image.png` not `./image.png`
- Ensure images are in `/public` folder

### Issue: Build fails
**Solution:** 
- Check Node version (18+ required)
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for specific errors

---

## 📞 Support

For deployment issues, contact: hello@demenpil.com

---

**Ready to deploy? Choose your platform above and follow the steps!** 🚀
