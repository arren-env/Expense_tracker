# Deployment Guide

This guide covers different ways to deploy your Expense Tracker application to various hosting platforms.

## 🚀 Build for Production

Before deploying, always build the project for production:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📦 Deployment Options

### 1. Netlify (Recommended for beginners)

Netlify offers free hosting with automatic deployments from GitHub.

#### Option A: Drag and Drop
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deployment area

#### Option B: Git Integration
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy automatically on every push

### 2. Vercel

Vercel provides excellent React support with zero configuration.

#### Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

#### Using GitHub Integration
1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel automatically detects Vite configuration
4. Deploy with one click

### 3. GitHub Pages

Deploy directly from your GitHub repository.

#### Setup
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Add homepage to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/expense-tracker"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

Google Firebase offers fast global CDN hosting.

#### Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Select or create a Firebase project
# Set public directory to: dist
# Configure as single-page app: Yes
# Set up automatic builds: No (optional)
```

#### Deploy
```bash
# Build the project
npm run build

# Deploy
firebase deploy
```

### 5. Surge.sh

Simple static hosting with custom domains.

```bash
# Install Surge
npm install -g surge

# Build the project
npm run build

# Deploy
cd dist
surge

# Follow the prompts for domain setup
```

## 🔧 Configuration for Different Platforms

### Vite Configuration for Subdirectory Deployment

If deploying to a subdirectory (like GitHub Pages), update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/expense-tracker/', // Replace with your repository name
})
```

### Environment Variables

For different environments, create `.env` files:

```bash
# .env.production
VITE_API_URL=https://api.production.com

# .env.development  
VITE_API_URL=https://api.development.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🛠️ Custom Domain Setup

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed

### GitHub Pages
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider

## 📊 Performance Optimization

Before deploying, optimize your build:

1. **Analyze bundle size**:
   ```bash
   npm run build
   npx vite-bundle-analyzer dist/stats.html
   ```

2. **Enable gzip compression** (most hosts do this automatically)

3. **Optimize images** (consider using WebP format)

4. **Implement code splitting** for larger applications

## 🔍 Monitoring and Analytics

### Add Google Analytics
1. Add tracking code to `index.html`
2. Or use react-ga4 for React integration

### Error Monitoring
Consider adding error monitoring with:
- Sentry
- LogRocket
- Bugsnag

## 🚀 Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './dist'
          production-branch: main
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📋 Pre-deployment Checklist

- [ ] Run `npm run lint` and fix any issues
- [ ] Run `npm run build` successfully
- [ ] Test the production build locally with `npm run preview`
- [ ] Ensure all environment variables are set
- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Create a Git tag for the release
- [ ] Test the deployed application thoroughly

## 🆘 Troubleshooting

### Common Issues

1. **404 errors on refresh**: Configure your hosting provider for SPA routing
2. **Assets not loading**: Check the `base` configuration in vite.config.js
3. **Environment variables not working**: Ensure they start with `VITE_`
4. **Build fails**: Check Node.js version compatibility

### Getting Help

- Check hosting provider documentation
- Search GitHub issues
- Ask in the project discussions
- Check Vite deployment documentation

---

Choose the deployment method that best fits your needs and budget. For simple projects, Netlify and Vercel offer excellent free tiers with great developer experience.
