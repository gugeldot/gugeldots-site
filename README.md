# Rodrigo Palomo Cuenca - Portfolio

Professional cybersecurity portfolio specializing in OT/ICS Security, Penetration Testing, and DevSecOps.

## 🎨 Features

- **Dark theme** with deep purple accents
- **Horizontal scrolling** navigation between sections
- **Non-invasive sidebar** for detailed information
- **Search functionality** to find specific content
- **Integrated CV viewer** via Google Drive
- **Responsive design** for all devices
- **Particle animations** for visual depth
- **Modular architecture** for easy maintenance

## 📁 Project Structure

```
gugeldots-site/
├── index.html                 # Main HTML structure
├── css/
│   └── styles.css            # All styles with section comments
├── js/
│   ├── app.js                # Main initialization
│   ├── navigation.js         # Horizontal scroll & nav dots
│   ├── sidebar.js            # Sidebar modal content & controls
│   ├── search.js             # Search functionality
│   ├── cv-modal.js           # CV viewer modal
│   └── particles.js          # Background animation
├── assets/                   # (Future: images, icons, etc.)
├── CV Rodrigo Palomo ENG.pdf
├── TFG-GISI-PalomoCuenca-Rodrigo-spanish.pdf
├── TFM.pdf
└── README.md
```

## 🚀 Deployment on GitHub Pages

1. Navigate to **Settings** → **Pages**
2. Select **Source**: `main` branch, `/ (root)` folder
3. Save changes
4. Your site will be available at: `https://[username].github.io/gugeldots-site/`

## 🎯 Sections

### 1. **Home**
Hero section with name, nickname (GUGELDOT), title, and CTA buttons

### 2. **About**
Four skill cards with icons:
- 🎯 Penetration Testing
- 🔧 Hardware Security
- 🏭 OT/ICS Security
- ⚙️ DevSecOps

### 3. **Roadmap**
Certification timeline:
- eCPPT (Summer 2026) - In Progress
- Master's Degree (2027) - In Progress
- Cloud Fundamentals (2027) - Planned
- ISO 27001 (2027) - Planned
- eWPTx (Summer 2027) - Planned
- OSCP (2028-2029) - Planned

### 4. **Projects**
Four main projects:
- Bachelor's Thesis: BadUSB Analysis
- Master's Thesis: AI-Assisted DevSecOps
- SLYS: File Fragmentator
- PROJECT IRONGATE: Industrial Protocol Fuzzer

### 5. **Contact**
Email, GitHub, and LinkedIn links

## 🔧 Customization

### Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-tertiary: #1a1a1a;
    --purple-deep: #5a189a;
    --purple-accent: #7209b7;
    --purple-muted: #3c096c;
    --text-primary: #e0e0e0;
    --text-secondary: #999999;
}
```

### Content
- **Sidebar content**: Edit `sidebarData` object in `js/sidebar.js`
- **Search terms**: Edit `searchableContent` array in `js/search.js`
- **Sections**: Modify HTML sections in `index.html`

## 🎮 Navigation

- **Arrow keys**: ← → to navigate between sections
- **Mouse wheel**: Scroll up/down to move left/right
- **Navigation dots**: Click dots on the right side
- **Search**: Type to search and click results to navigate
- **Keyboard shortcuts**:
  - `Escape`: Close sidebar/CV modal
  - `Arrow Left/Right`: Navigate sections

## 🔍 Search

The search box at the bottom center indexes:
- Project names (BadUSB, DevSecOps, SLYS, IRONGATE)
- Certifications (eCPPT, OSCP, eWPTx)
- Technologies (Rust, Python, Modbus, S7comm)
- Expertise areas (Penetration Testing, OT/ICS, etc.)

## 📄 CV Integration

Click "View CV" to open an embedded Google Drive viewer showing your resume directly in the portfolio.

## 🛠️ Development

### Local Development
Simply open `index.html` in a browser. No build process required.

### File Organization

- **CSS**: Single file with clearly commented sections
- **JavaScript**: Modular files by functionality
  - `app.js`: Main entry point
  - `navigation.js`: Section scrolling logic
  - `sidebar.js`: Modal content and controls
  - `search.js`: Search functionality
  - `cv-modal.js`: CV viewer
  - `particles.js`: Background animation

### Adding New Content

**New skill card:**
1. Add HTML in About section
2. Add corresponding entry in `sidebarData` (sidebar.js)

**New project:**
1. Add project card in Projects section
2. Add sidebar content in `sidebarData`

**New searchable term:**
1. Add entry to `searchableContent` array in `search.js`

## 📱 Responsive Breakpoints

- **Desktop**: Full experience (> 1024px)
- **Tablet**: Adjusted grid layouts (768px - 1024px)
- **Mobile**: Single column, full-width sidebar (< 768px)

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📜 License

© 2026 Rodrigo Palomo Cuenca. All rights reserved.

---

**Contact**: gugeldot23@gmail.com  
**GitHub**: https://github.com/gugeldot  
**Portfolio**: https://gugeldot.github.io/gugeldots-site/
