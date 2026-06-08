# SK Institute — Production Deployment Guide

## Project Type

**Full-Stack TanStack Start + React 19 + Nitro SSR**
- Frontend: React 19 with Vite
- Backend: Optional Nitro server (SSR-ready)
- Database: None (currently stateless)
- Forms: WhatsApp integration (client-side only)

---

## Pre-Deployment Checklist

- [ ] All routes verified (`/`, `/about`, `/courses`, `/academy-programs`, `/paramedical`, `/contact`, `/experience`)
- [ ] Contact form redirects to WhatsApp
- [ ] Admission form redirects to WhatsApp
- [ ] All course images load (Unsplash CDN + local fallbacks)
- [ ] Mobile responsive tested
- [ ] Build completes without errors: `npm run build`
- [ ] dist/ folder created with client + server folders
- [ ] All TypeScript types correct
- [ ] No broken links in navigation

---

## Build & Start Commands

```bash
# Install dependencies
npm install

# Development
npm run dev
# → http://localhost:5173

# Production build
npm run build
# → Output: dist/ (client + server files)

# Preview build locally
npm run preview

# Linting
npm run lint

# Code formatting
npm run format
```

---

## Deployment Platforms

### ✅ Recommended: Vercel

**Why Vercel?**
- Native TanStack Start support
- Automatic SSR handling
- Global CDN
- Free tier covers this project
- 1-click GitHub integration
- Automatic SSL/HTTPS

**Setup:**

1. **Via GitHub (Recommended)**
   ```bash
   git push origin main
   ```
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Vercel auto-detects TanStack Start
   - Click Deploy

2. **Via CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

**Configuration:** `vercel.json` (auto-created in this repo)

**Cost:** Free tier includes everything for this project

**Domain:** 
- Default: `your-project.vercel.app`
- Custom: Add in Vercel dashboard → Settings → Domains

---

### ✅ Alternative: Render

**Why Render?**
- Simple Node.js deployment
- Persistent free tier option
- Good for learning/staging
- CLI + Web dashboard

**Setup:**

1. Go to [render.com](https://render.com)
2. Click "New+" → "Web Service"
3. Connect GitHub repo
4. Configure:
   - **Name:** sk-institute
   - **Environment:** Node
   - **Node Version:** 20
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node dist/server/index.js`
   - **Plan:** Free (optional: Starter $7/mo)

**Cost:** 
- Free: Spins down after 15 minutes inactivity
- Starter: $7/month (always running)

**Domain:** 
- Default: `your-project.onrender.com`
- Custom: Add in Settings → Custom Domain

---

### ⚠️ Not Recommended: Hostinger Node.js

Why avoid?
- Higher cost ($4-10/mo minimum)
- Slower than Vercel/Render
- Complex setup
- No automatic SSL
- Manual scaling

Only use if you already have Hostinger and need tight integration.

---

### ❌ Cannot Use: GitHub Pages

Why not?
- GitHub Pages only serves **static files** (HTML, CSS, JS)
- This project has **Nitro backend** (Node.js required)
- GitHub Pages cannot execute Node.js

To use GitHub Pages, you'd need to:
- Remove Nitro entirely
- Rebuild as pure Vite (lose SSR)
- Deploy `/dist/client` only
- **Not recommended** — just use Vercel instead

---

## Environment Variables

**Current Status:** ✅ None required

The project works out-of-the-box with zero configuration.

**If you add backend services later, add:**

```bash
NODE_ENV=production
VITE_API_URL=https://api.example.com
DATABASE_URL=mongodb://...
```

See `.env.example` for full template.

---

## Output Directory

**Build Output:** `dist/` folder

Structure:
```
dist/
├── client/              # React app + static assets
│   ├── index.html      # Entry point
│   ├── assets/         # Bundled CSS, JS, images
│   └── ...
├── server/             # Nitro SSR server
│   ├── index.js        # Server entry point
│   └── chunks/         # Bundled server code
├── server.mjs          # Server handler for workers/edge
└── package.json        # Server dependencies
```

**Size:** Typically 2-5 MB (optimized gzip)

---

## Custom Domain Setup

### For Vercel:
1. Go to Vercel dashboard
2. Select project
3. Settings → Domains
4. Add your domain (e.g., `sk-institute.com`)
5. Update DNS records to point to Vercel nameservers

### For Render:
1. Go to Render dashboard
2. Select service
3. Settings → Custom Domain
4. Add domain
5. Add CNAME record to DNS: `your-app-name.onrender.com`

### DNS Configuration (Any Provider):
- **Nameservers approach** (simpler): Update registrar to use provider's nameservers
- **CNAME approach** (for subdomain): Point `www.yourdomain.com` → provider URL
- **A record approach** (for root): Point `yourdomain.com` → provider IP

---

## Post-Deployment

### After going live:

1. **Test all pages**
   - Homepage
   - All course pages
   - Contact form (WhatsApp redirect)
   - Admission form (WhatsApp redirect)
   - Mobile responsiveness

2. **Verify performance**
   ```bash
   # Use Lighthouse in Chrome DevTools
   # Or: https://pagespeed.web.dev
   ```

3. **Check SEO**
   - Meta tags present
   - Open Graph tags working
   - Structured data (JSON-LD) indexed
   - Sitemap created

4. **Monitor errors**
   - Vercel Analytics dashboard
   - Error logs in Vercel/Render console

5. **Setup SSL** (automatic on Vercel/Render)

---

## Rollback / Updates

### Deploy new version:
```bash
git commit -am "New feature"
git push origin main
# Vercel auto-deploys in ~2 minutes
```

### Rollback:
- Vercel dashboard → Deployments → Select previous version → click "Rollback"
- Render: Redeploy via GitHub or CLI

---

## Monitoring & Logging

### Vercel:
- Dashboard → Project → Analytics
- Logs → Real-time request logs
- Integrations → Connect error tracking

### Render:
- Service → Logs tab
- Events for deployments

### If something breaks:
1. Check deployment logs
2. Verify all routes load
3. Check WhatsApp integration still works
4. Look at browser console for errors
5. Test contact/admission forms

---

## Performance Tips

✅ Already configured:
- Image lazy loading
- CSS-in-JS (Tailwind) optimized
- Vite tree-shaking enabled
- Production build minification
- Gzip compression

Optional enhancements:
- Add analytics: Google Analytics, Sentry
- Enable image optimization: Vercel Image Optimization
- Add caching: Vercel Edge Caching

---

## Support & Troubleshooting

### Build fails on Vercel:
```bash
# Check locally first
npm install
npm run build
npm run lint
```

### WhatsApp links not working:
- Check WHATSAPP_NUMBER in `src/lib/whatsapp.ts`
- Ensure phone number is in E.164 format: `+919971541416`

### Images not loading:
- Unsplash CDN might be blocked in some regions
- Fallback local images in `src/assets/` will load instead

### Performance issues:
- Check Vercel Analytics
- Use DevTools Lighthouse
- Optimize course images in `src/data/courseImages.ts`

---

## Files Modified for Production

✅ Created:
- `vercel.json` — Vercel deployment config
- `.env.example` — Environment template
- `DEPLOYMENT.md` — This guide

---

## Summary

**Recommended Deployment:**
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com
# 3. Import repository
# 4. Click "Deploy"
# 5. Done! Live in ~2 minutes
```

**Cost:** $0 (free tier)
**Time:** < 5 minutes
**Downtime:** None

Questions? Check Vercel docs or contact SK Institute team.
