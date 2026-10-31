# Yara Mamdouh Khfagi — Premium Personal Portfolio

A distinctive, modern, and responsive personal portfolio website engineered for **Yara Mamdouh Khfagi**, Computer Science and Artificial Intelligence student at Benha University and Software Engineer specializing in **Full Stack**, **.NET** and **Node.js**.

---

## 🎨 Design Identity & Palette

- **Dark Theme Palette:**
  - Main Background: `#101827`
  - Secondary Background: `#192438`
  - Primary Accent (Lavender): `#A78BFA`
  - Secondary Accent: `#D8CCFF`
  - Main Text: `#F8FAFC`
  - Muted Text: `#A6B0C3`
- **Typography:** Outfit (headings/brand) & Plus Jakarta Sans (body)
- **Visual Style:** Elevated glassmorphic surfaces, subtle ambient lavender glows, refined card borders, and responsive grid layouts.

---

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or the next available port).

### 3. Build for Production
```bash
npm run build
```
This generates the optimized production build in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
Yara Portfolio/
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon (YK)
│   ├── cv/
│   │   └── Yara-Khfagi-CV.pdf # Local CV PDF file for direct download
│   └── images/                # Local public assets folder
├── src/
│   ├── components/            # Modular React components
│   │   ├── Navbar.jsx         # Sticky navigation with mobile menu & active indicator
│   │   ├── Hero.jsx           # Hero banner with 1:1 portrait frame, CTAs & Download CV
│   │   ├── About.jsx          # Professional summary, highlights & languages
│   │   ├── Skills.jsx         # Categorized technical skills cards
│   │   ├── Projects.jsx       # 9 projects in prioritized order with filter
│   │   ├── ProjectCard.jsx    # Individual project card with fallback placeholders
│   │   ├── ProjectModal.jsx   # Lightbox modal for screenshots and details
│   │   ├── Certifications.jsx # DEPI, NTI, GUPCO, MTEC Academy cards
│   │   ├── CertificateCard.jsx# Redesigned card with large 1.414:1 certificate image preview
│   │   ├── CertificateModal.jsx# Lightbox for full uncropped certificate previews
│   │   ├── Experience.jsx     # Problem Solving Bootcamp timeline card
│   │   ├── Education.jsx      # Benha University CS & AI degree card (GPA 3.55)
│   │   ├── Contact.jsx        # Direct mailto, social cards & Download CV button
│   │   └── Footer.jsx         # Dynamic copyright year & Back to Top button
│   ├── data/                  # Centralized data files (Single source of truth)
│   │   ├── profile.js         # Name, title, contact, bio, portrait URL & cvUrl
│   │   ├── projects.js        # All 9 projects, metadata, images, and categories
│   │   ├── skills.js          # Categorized technical competencies
│   │   ├── certificates.js    # Training credentials, image URLs & statuses
│   │   └── experience.js      # Bootcamps, university education & languages
│   ├── styles/                # Pure CSS3 styles (No Tailwind / Bootstrap)
│   │   ├── global.css         # CSS tokens, reset, typography & utility classes
│   │   ├── navbar.css         # Header, branding & mobile drawer
│   │   ├── hero.css           # Hero grid, portrait glowing frame & placeholders
│   │   ├── sections.css       # About, skills, education, experience, contact
│   │   ├── projects.css       # Project cards grid & modal lightbox styling
│   │   ├── certificates.css   # Training cards & status badges (1.414:1 ratio)
│   │   └── responsive.css     # Clean responsive breakpoints (Desktop, Tablet, Mobile)
│   ├── App.jsx                # Main layout composition
│   └── main.jsx               # React DOM entry point
├── index.html                 # SEO meta tags, fonts & viewport configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

---

## ⚙️ How to Update Information & Image URLs

All personal details, URLs, and screenshots are organized inside `src/data/`:

### 1. Updating the Personal Portrait & CV
Open `src/data/profile.js`:
```javascript
export const profile = {
  fullName: "Yara Mamdouh Khfagi",
  title: "Software Engineer",
  subtitle: "Full Stack | .NET & Node.js",
  cvUrl: "/cv/Yara-Khfagi-CV.pdf", // Local CV path in public/
  portraitUrl: "https://res.cloudinary.com/your-cloud/image/upload/v1/portrait.jpg",
  ...
};
```
> **Note:** If `portraitUrl` is empty or the image fails to load, the site displays a custom designed SVG avatar placeholder with the monogram `YK` and technical styling.

### 2. Updating Certificate Images
Open `src/data/certificates.js`:
- Each certificate card features a dedicated landscape preview container (1.414:1 ratio, matching certificate documents).
- Set `imageUrl: "https://..."` to display the actual certificate image (using `object-fit: contain` so it is never cropped).
- Clicking the image or the "View Full Certificate" button opens the full-size modal/lightbox.
- If `imageUrl` is empty, a professional certificate placeholder is displayed and the "View Full Certificate" button is hidden.
- Set `linkedinUrl: "https://linkedin.com/..."` to display the optional LinkedIn announcement button.

### 3. Updating Project Screenshots & GitHub Links
Open `src/data/projects.js`:
- To set the main card thumbnail, update `imageUrl: "https://..."`.
- To enable the screenshot gallery modal, add image links to `screenshots: ["https://...", "https://..."]`.
- To configure GitHub repository links, update `githubUrl: "https://github.com/..."`.
- **Category Rules:**
  - `Category A (github-and-image)`: Has both GitHub link and screenshot URL.
  - `Category B (image-only)`: Only has screenshots/images (*Book Rental System* and *Java Desktop Application* have NO GitHub repository buttons rendered).

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push this project repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio: certificate images, CV download, contact update"
   git branch -M main
   git remote add origin https://github.com/Yara1mamdouh/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/).
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository.
5. Framework Preset: **Vite** (auto-detected).
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**. Your site will be live on an HTTPS domain within seconds.

### Deploying to GitHub Pages
The GitHub Actions workflow builds the Vite app and deploys the generated `dist/` directory whenever changes are pushed to `main`.

1. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**.
2. Push a commit to `main`, or run **Deploy to GitHub Pages** from the **Actions** tab.

The site uses `/My-Portfolio/` as its Vite base path, so keep that setting in `vite.config.js` for this repository.

---

## 📄 License & Attribution

Designed and developed for **Yara Mamdouh Khfagi**.
Built with React.js, Vite, and custom CSS3.
