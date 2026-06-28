# Tejaswi Thakur — Portfolio Website

A premium, production-ready portfolio website for **Tejaswi Thakur**, Graphic Designer, Logo Designer & Brand Identity Designer.

> Dark | Luxury | Minimal | Glassmorphism | Pink Theme

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main HTML file
├── style.css               ← All styles
├── script.js               ← All interactivity
├── README.md               ← This file
└── assets/
    ├── images/
    │   ├── profile/
    │   │   └── tejaswi.png         ← Profile photo
    │   ├── logos/
    │   │   ├── logo-beanbliss.png
    │   │   ├── logo-eyeverse.png
    │   │   ├── logo-eloria.png
    │   │   ├── logo-bloomora.png
    │   │   └── logo-*.png          ← All logo designs
    │   └── mockups/
    │       ├── mockup-beanbliss.png
    │       ├── mockup-velora.png
    │       ├── mockup-karigari.png
    │       └── mockup-*.png        ← All brand mockups
    ├── icons/
    └── fonts/
```

---

## ✏️ How to Edit Content

### Change Name / Title
Open `index.html` and search for `Tejaswi Thakur`. Update wherever needed.

### Change Email
Search for `tejaswi02086@gmail.com` and replace with your new email.

### Change Instagram
Search for `https://instagram.com/t3jswii.co` and replace.

### Change Hero Text
Find the `<section class="hero">` and update:
- `hero-title` → Main headline
- `hero-sub` → Subheading paragraph

### Change Colors
Open `style.css` and update the `:root` variables at the top:
```css
:root {
  --primary:   #FF4D6D;   /* Main pink */
  --secondary: #FF758F;   /* Light pink */
  --accent:    #FFD6E0;   /* Soft accent */
  --bg:        #050505;   /* Background */
}
```

### Change Fonts
The font is loaded from Google Fonts. In `index.html`, find the `<link>` tag for Google Fonts and replace `Poppins` with your desired font. Update `--font` in `style.css`.

---

## 🖼️ How to Replace Images

### Profile Photo
Replace `assets/images/profile/tejaswi.png` with your new photo.  
Keep the filename the same, or update the `src` in `index.html`:
```html
<img src="assets/images/profile/YOUR-PHOTO.png" alt="Tejaswi Thakur" />
```

### Logo Designs
Add new logos to `assets/images/logos/`.  
In `index.html`, find `<div class="gallery-grid logos-grid">` and add a new card:
```html
<div class="gallery-card" data-reveal>
  <div class="gallery-img-wrap">
    <img src="assets/images/logos/YOUR-LOGO.png" alt="Brand Name Logo" loading="lazy" />
    <div class="gallery-overlay">
      <span>Brand Name</span>
      <p>Logo Type</p>
    </div>
  </div>
</div>
```

### Mockups
Add new mockups to `assets/images/mockups/`.  
In `index.html`, find `<div class="mockups-grid">` and add a new card:
```html
<div class="mockup-card" data-reveal>
  <div class="mockup-img-wrap">
    <img src="assets/images/mockups/YOUR-MOCKUP.png" alt="Brand Mockup" loading="lazy" />
    <div class="mockup-overlay">
      <span>Brand Name</span>
      <p>Type of Mockup</p>
    </div>
  </div>
</div>
```
To make a mockup span 2 columns (featured), add class `featured-mockup`:
```html
<div class="mockup-card featured-mockup" data-reveal>
```

---

## 🌐 How to Deploy on GitHub Pages

### Step 1 — Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New** (green button)
3. Name it `portfolio` (or `yourusername.github.io` for a user site)
4. Set it to **Public**
5. Click **Create Repository**

### Step 2 — Upload Files
**Option A — Drag & Drop (easiest):**
1. Open the repository on GitHub
2. Click **Add file → Upload files**
3. Drag the entire `portfolio/` folder contents (not the folder itself)
4. Click **Commit changes**

**Option B — Git CLI:**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings**
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 4 — Access Your Site
Your site will be live at:
```
https://YOURUSERNAME.github.io/portfolio/
```
(or `https://YOURUSERNAME.github.io` if the repo is named `YOURUSERNAME.github.io`)

It may take 1–5 minutes to go live. 🎉

---

## ✨ Features

- **Loading Screen** with animated progress bar
- **Custom Cursor** with glow ring and trail
- **Scroll Progress** bar at top
- **Sticky Navbar** that changes on scroll
- **Hero** with animated glow rings, floating shapes, and gradient blobs
- **About** with glassmorphism cards
- **Services** with hover line reveal
- **Skills** with animated progress bars
- **Logo Gallery** with hover overlays and lightbox
- **Mockup Gallery** with featured span cards and lightbox
- **Featured Projects** with colour palettes and details
- **Design Process** with step indicators
- **Testimonials** with glassmorphism cards
- **Contact** form that opens native email client
- **Footer** with navigation and social links
- **Ripple** button effects
- **Card tilt** on hover
- **Reveal animations** on scroll
- **Counter animation** for stats
- **Lightbox** for all images
- **Parallax** blob movement
- **Active nav link** highlighting
- **Fully responsive** — Desktop, Laptop, Tablet, Mobile
- **SEO** meta tags, Open Graph, Twitter Cards, semantic HTML

---

## 📬 Contact

**Tejaswi Thakur**  
📧 tejaswi02086@gmail.com  
📸 [@t3jswii.co](https://instagram.com/t3jswii.co)

---

*Built with pure HTML, CSS & JavaScript — no frameworks, no dependencies.*
