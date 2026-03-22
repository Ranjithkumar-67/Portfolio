# ⚡ RANJITHKUMAR R — Portfolio

**Futuristic Personal Portfolio Website**
Structural Engineer · IT Developer · KEC Erode · Batch 2025

---

## 📁 Folder Structure

```
rk-portfolio/
├── index.html                  ← Main entry point
├── vercel.json                 ← Vercel deployment config
├── netlify.toml                ← Netlify deployment config
├── .gitignore
├── README.md
└── assets/
    ├── css/
    │   ├── tokens.css          ← Design variables (colors, fonts)
    │   ├── base.css            ← Reset + global utilities + buttons
    │   ├── nav.css             ← Navigation + theme toggle
    │   ├── hero.css            ← Hero section + terminal
    │   ├── about.css           ← About + hex photo frame
    │   ├── skills.css          ← Skills table
    │   ├── projects.css        ← Project cards + tabs
    │   ├── research.css        ← Research papers + area table
    │   ├── leadership.css      ← Timeline
    │   ├── education.css       ← Education cards + certifications
    │   ├── contact.css         ← Contact form + links
    │   ├── popup.css           ← Welcome popup + right-click popup + cursor
    │   └── footer.css          ← Footer
    ├── js/
    │   ├── data.js             ← ALL portfolio content (edit this to update)
    │   ├── theme.js            ← Dark/Light toggle
    │   ├── cursor.js           ← Custom animated cursor
    │   ├── nav.js              ← Nav scroll behavior + active states
    │   ├── hero.js             ← Typewriter + terminal + particles
    │   ├── sections.js         ← Renders: Skills, Research, Timeline, Edu, Certs
    │   ├── projects.js         ← Renders project cards + tab filter
    │   ├── reveal.js           ← Scroll reveal animations
    │   ├── protect.js          ← Source code protection
    │   ├── contact.js          ← Form handler (mailto)
    │   └── popup.js            ← Welcome popup + scroll progress + back-to-top
    └── images/
        ├── rk-photo.jpg        ← ⚠ ADD YOUR PHOTO HERE (see below)
        └── PHOTO_README.md     ← Photo instructions
```

---

## 📸 Adding Your Photo

1. Download your photo from:
   `https://ranjithkumar67.wordpress.com/wp-content/uploads/2024/07/img_9641.jpg`
2. Rename it to **`rk-photo.jpg`**
3. Place it in `assets/images/`

If photo is missing, the hexagonal "RK" fallback shows automatically.

---

## ✏️ Updating Content

All content lives in **`assets/js/data.js`** — edit this single file to update:

| Section | Variable |
|---------|----------|
| Skills | `RK.skills` |
| Projects | `RK.projects` |
| Research Papers | `RK.papers` |
| Research Areas | `RK.resAreas` |
| Timeline / Experience | `RK.timeline` |
| Education | `RK.edu` |
| Certifications | `RK.certs` |
| Contact Links | `RK.contactLinks` |

---

## 🌐 Hosting Guide — Free Options

### Option 1 — Vercel ⭐ (Recommended)

1. Push this folder to a **private GitHub repo**
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **"New Project"** → Import your repo
4. Framework: **Other / Static**
5. Root directory: `/` (or wherever index.html is)
6. Click **Deploy**
7. Your site goes live at `your-name.vercel.app` in ~30 seconds

**Custom domain (free):**
Go to Project → Settings → Domains → Add `ranjithkumar.vercel.app` or your own domain.

---

### Option 2 — Netlify

1. Push to private GitHub repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect repo → Build command: *(leave empty)* → Publish directory: `.`
4. Click **Deploy site**
5. Live at `random-name.netlify.app`

Or drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop) for instant deploy.

---

### Option 3 — GitHub Pages (public repo only)

1. Push to GitHub
2. Settings → Pages → Source: **main branch / root**
3. Live at `https://YOUR_USERNAME.github.io/rk-portfolio/`

> ⚠ GitHub Pages requires the repo to be **public** for the free plan.
> Use Vercel/Netlify for private repo hosting.

---

### Option 4 — Render

1. Push to private GitHub
2. [render.com](https://render.com) → New → Static Site
3. Connect repo → Publish directory: `.`
4. Deploy → live at `your-name.onrender.com`

---

### Option 5 — Railway

1. [railway.app](https://railway.app) → New Project → Deploy from GitHub Repo
2. Select your repo
3. Railway auto-detects static files
4. Live at `your-name.up.railway.app`

---

## 📬 Contact Form Setup

The built-in form uses `mailto:` — it opens the visitor's email client pre-filled.

**To get form submissions emailed automatically (no email client needed):**

### Using Formspree (Free — 50 submissions/month)
1. Go to [formspree.io](https://formspree.io) → Create account
2. New Form → copy your Form ID (e.g. `xpzgkwqr`)
3. In `assets/js/contact.js`, replace the `mailTo` section with:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, phone, subject, message: msg })
});
if (res.ok) showStatus('✅ Message sent!', 'ok');
```

### Using Netlify Forms (Free with Netlify hosting)
Add `netlify` attribute to your form tag:
```html
<form id="contactForm" netlify name="contact" ...>
```
Netlify auto-captures submissions and emails you.

---

## 🔒 Privacy — Private GitHub Repo

To keep source code private while hosting publicly:
1. Create repo: GitHub → New → set to **Private**
2. Connect Vercel or Netlify to the private repo (both support this for free)
3. Your site is publicly accessible, but code is private ✅

---

## 🎨 Theme Customization

Edit `assets/css/tokens.css` to change colors:

```css
--accent-c:  #00d4ff;  /* Cyan  — IT / tech accent */
--accent-o:  #ff6b35;  /* Orange — Civil / structural accent */
--accent-g:  #00ff88;  /* Green — success / available */
```

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile | ✅ Responsive |

---

## 🛠 Built With

- Pure HTML5, CSS3, Vanilla JavaScript
- No frameworks, no build tools needed
- Fonts: Orbitron + Rajdhani + JetBrains Mono (Google Fonts)
- Animations: CSS keyframes + IntersectionObserver
- Deployment: Vercel / Netlify / Render / Railway

---

**© 2025 Ranjithkumar R · Kongu Engineering College · Erode · Tamil Nadu**
