# Portfolio Architecture

## 📐 Project Structure

```
gugeldots-site/
│
├── index.html                          # Main HTML document
│
├── css/
│   └── styles.css                      # All styles (4KB, organized by sections)
│       ├── Variables & Reset
│       ├── Background Animation
│       ├── Layout Structure
│       ├── Navigation Dots
│       ├── Hero Section
│       ├── About Section
│       ├── Roadmap Section
│       ├── Projects Section
│       ├── Contact Section
│       ├── Sidebar Modal
│       ├── Search Box
│       ├── CV Modal
│       ├── Responsive Design
│       └── Scrollbar Styling
│
├── js/
│   ├── app.js                          # Main initialization (entry point)
│   ├── navigation.js                   # Horizontal scroll & keyboard nav
│   ├── sidebar.js                      # Sidebar modal & content data
│   ├── search.js                       # Search functionality
│   ├── cv-modal.js                     # CV viewer controls
│   └── particles.js                    # Background particle animation
│
├── assets/                             # Future: images, icons, fonts
│
├── CV Rodrigo Palomo ENG.pdf          # Resume PDF
├── TFG-GISI-PalomoCuenca-Rodrigo-spanish.pdf
├── TFM.pdf
│
├── README.md                           # User documentation
├── ARCHITECTURE.md                     # This file - Architecture overview
└── .gitignore                          # Git ignore rules
```

## 🔄 Data Flow

```
User Action
    ↓
Event Listener (in respective JS module)
    ↓
Function Call
    ↓
DOM Manipulation / Style Update
    ↓
Visual Feedback
```

### Example: Section Navigation

```
User scrolls mouse wheel
    ↓
navigation.js: wheel event listener
    ↓
scrollToSection(index) function
    ↓
Transform CSS applied to .scroll-container
    ↓
Horizontal scroll animation (0.8s)
    ↓
updateNavDots() highlights active dot
```

### Example: Sidebar Opening

```
User clicks skill card
    ↓
onclick="openSidebar('penetration')"
    ↓
sidebar.js: openSidebar(key) function
    ↓
Fetch content from sidebarData object
    ↓
Inject HTML into #sidebarContent
    ↓
Add .active class to sidebar
    ↓
Add .sidebar-open class to main wrapper
    ↓
CSS transitions animate sidebar in + shift main content
```

## 🎨 CSS Architecture

### Variables (Design Tokens)
All colors defined in `:root` for easy theming:
- Background colors (primary, secondary, tertiary)
- Purple shades (deep, accent, muted)
- Text colors (primary, secondary)

### Naming Convention
- **BEM-inspired** for component classes
- **Semantic names** for layout (`.main-wrapper`, `.scroll-container`)
- **State classes** (`.active`, `.sidebar-open`)

### Responsive Strategy
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Grid adjustments for different screen sizes

## 🧩 JavaScript Modules

### Module Responsibilities

| Module | Responsibility | Size |
|--------|---------------|------|
| `app.js` | Initialize all modules on DOMContentLoaded | ~10 lines |
| `navigation.js` | Horizontal scrolling, nav dots, keyboard/wheel events | ~70 lines |
| `sidebar.js` | Sidebar content data + open/close controls | ~200 lines |
| `search.js` | Search index + filtering logic | ~60 lines |
| `cv-modal.js` | CV modal open/close | ~10 lines |
| `particles.js` | Generate floating background particles | ~15 lines |

### Global Functions
These functions are accessible globally for inline `onclick` attributes:
- `scrollToSection(index)`
- `openSidebar(key)`
- `closeSidebar()`
- `openCVModal()`
- `closeCVModal()`
- `handleSearchResult(section)`

### Event Listeners
- **Keyboard**: Arrow Left/Right, Escape
- **Mouse**: Wheel scroll, Click (nav dots, cards, outside sidebar)
- **Input**: Search box input/blur

## 🎯 Performance Considerations

### Loading Strategy
1. **No build step**: Direct file loading (fast initial load)
2. **Modular JS**: Separate files but small total size (~1.5KB total)
3. **CSS in single file**: One HTTP request, well-commented
4. **No external dependencies**: No CDN latency

### Animation Performance
- **CSS transforms** (GPU-accelerated) for scrolling
- **Cubic-bezier easing** for smooth transitions
- **Particle count limited** to 30 for performance

### Optimization Opportunities
- [ ] Minify CSS/JS for production
- [ ] Lazy load sidebar content
- [ ] Add loading skeleton for CV iframe
- [ ] Implement service worker for offline access

## 🔧 Extending the Portfolio

### Adding a New Section

1. **HTML** (`index.html`):
```html
<section class="section">
    <div class="your-section-container">
        <!-- Content here -->
    </div>
</section>
```

2. **CSS** (`css/styles.css`):
```css
/* Add after existing sections */
.your-section-container {
    /* Styles */
}
```

3. **Navigation** (`js/navigation.js`):
- Update `totalSections` constant
- Add nav dot in HTML

### Adding Sidebar Content

Edit `sidebarData` object in `js/sidebar.js`:

```javascript
newKey: {
    title: 'Section Title',
    content: `
        <h3>Subsection</h3>
        <p>Content here</p>
    `
}
```

### Adding Search Terms

Edit `searchableContent` array in `js/search.js`:

```javascript
{ term: 'New Term', section: 3, desc: 'Description' }
```

## 🎨 Design Principles

1. **Dark-first**: Black background with subtle purple accents
2. **Non-intrusive**: Sidebar slides in without covering content
3. **Horizontal flow**: Unique navigation pattern for modern feel
4. **Minimalist**: Focus on content, not decoration
5. **Accessible**: Clear hierarchy, readable text, keyboard navigation

## 🔒 Security Considerations

- **No inline scripts**: All JS in external files
- **No external dependencies**: No supply chain risk
- **Sanitized content**: All sidebar content is static strings
- **Iframe sandbox**: CV viewer from trusted Google Drive source

## 📊 Browser Compatibility

### Fully Supported
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Graceful Degradation
- Older browsers: Basic layout without fancy animations
- No JavaScript: Content still readable, navigation via anchor links (if added)

## 🚀 Deployment Checklist

- [x] HTML validates
- [x] CSS organized and commented
- [x] JS modules load in correct order
- [x] All links functional
- [x] Responsive on mobile/tablet/desktop
- [x] Cross-browser tested
- [x] Accessibility basics (semantic HTML, keyboard nav)
- [ ] SEO meta tags (consider adding)
- [ ] Analytics integration (optional)
- [ ] Custom domain (optional)

## 📝 Maintenance

### Code Organization Rules
1. **One concern per file**: Navigation logic separate from sidebar logic
2. **Comments for sections**: CSS has clear section markers
3. **Consistent naming**: camelCase for JS, kebab-case for CSS
4. **Self-documenting code**: Function names explain purpose

### Update Workflow
1. Edit content in appropriate file
2. Test locally (open index.html)
3. Commit with descriptive message
4. Push to main branch
5. GitHub Pages auto-deploys

---

**Last Updated**: 2026-06-16  
**Version**: 1.0.0  
**Maintainer**: Rodrigo Palomo Cuenca (gugeldot23@gmail.com)
