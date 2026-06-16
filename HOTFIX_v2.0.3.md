# Hotfix v2.0.3 - Tooltip Fix & File Organization

## Bug Fixes

### 🐛 Roadmap Tooltip Not Appearing

**Problem**: 
- First tooltip appeared in corner
- Rest of tooltips didn't show at all
- `getBoundingClientRect()` was being called before tooltip was rendered

**Root Cause**:
- Tooltip had `display: none` initially
- Trying to get dimensions of hidden element returned 0
- Position calculation failed

**Solution**:
```javascript
// Step 1: Make visible but transparent
tooltip.style.display = 'block';
tooltip.style.opacity = '0';

// Step 2: Get accurate measurements
const tooltipWidth = tooltip.offsetWidth;
const tooltipHeight = tooltip.offsetHeight;

// Step 3: Calculate position
const left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
const top = rect.top - tooltipHeight - 20;

// Step 4: Apply position and fade in
requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
});
```

**CSS Changes**:
- Changed `display: none` to be set in JS
- Increased `z-index` to 10000 (from 1000)
- Stronger shadow for better visibility
- Added `display: none` on mouseleave with timeout

**Result**: ✅ All tooltips now appear correctly centered above checkpoints

---

## File Organization

### 📁 New Folder Structure

**Created**:
```
resources/          # For images, logos, icons
docs/              # Private documents (gitignored)
```

**Moved Files**:
```
CV Rodrigo Palomo ENG.pdf                       → docs/
TFG-GISI-PalomoCuenca-Rodrigo-spanish.pdf      → docs/
TFM.pdf                                         → docs/
```

**Updated `.gitignore`**:
```gitignore
# Private documents (CVs, academic papers)
docs/
*.pdf
```

### 📂 Resources Folder

**Purpose**: Store public images and assets
- Platform logos (HTB, THM)
- Icons
- Project screenshots
- Technology badges

**Current Status**: 
- ✅ Folder created
- ✅ README with instructions
- ⏳ Logos: Using SVG placeholders (waiting for real assets)

**To Add Real Logos**:
1. Download official HTB/THM logos
2. Save as `resources/hackthebox-logo.svg` and `resources/tryhackme-logo.svg`
3. Replace inline SVG in `index.html` with:
   ```html
   <img src="resources/hackthebox-logo.svg" alt="HackTheBox" width="32" height="32">
   ```

---

## Current Project Structure

```
gugeldots-site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── cv-modal.js
│   ├── navigation.js
│   ├── particles.js
│   ├── roadmap.js
│   ├── search.js
│   └── sidebar.js
├── resources/              # NEW - Public assets
│   └── README.md          # Instructions for adding logos
├── docs/                  # NEW - Private documents (gitignored)
│   ├── CV Rodrigo Palomo ENG.pdf
│   ├── TFG-GISI-PalomoCuenca-Rodrigo-spanish.pdf
│   └── TFM.pdf
├── assets/                # Reserved for future use
├── README.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── FIXES.md
├── HOTFIX_v2.0.3.md      # This file
├── QUICK_START.md
├── ROADMAP_GUIDE.md
├── STRUCTURE.txt
├── UPDATE_v2.0.2.md
└── .gitignore            # Updated with docs/ and *.pdf
```

---

## Testing Checklist

- [x] Tooltip appears on all checkpoints
- [x] Tooltip centers correctly above each node
- [x] Tooltip hides on mouseleave
- [x] No console errors
- [x] `docs/` folder created
- [x] PDFs moved to `docs/`
- [x] `resources/` folder created
- [x] `.gitignore` updated
- [x] Documentation created

---

## Next Steps

### To Complete Platform Badges:

1. **Download Logos**:
   - HackTheBox: Get from official press kit
   - TryHackMe: Get from official brand assets

2. **Save to Resources**:
   ```bash
   # Save logos as:
   resources/hackthebox-logo.svg
   resources/tryhackme-logo.svg
   ```

3. **Update HTML**:
   - Replace inline SVG in `index.html` (lines ~137-150)
   - Use `<img src="resources/...">` instead

4. **Commit**:
   ```bash
   git add resources/
   git commit -m "Add official HTB and THM logos"
   ```

---

## Git Workflow

### Files Now Ignored:
```bash
docs/                    # Entire folder
*.pdf                    # All PDF files anywhere
```

### To Commit Changes:
```bash
git add .
git commit -m "v2.0.3: Fix tooltip positioning, organize files into docs/ and resources/"
git push origin main
```

**Note**: `docs/` folder will be created locally but not tracked by git.

---

**Version**: 2.0.3  
**Date**: 2026-06-16  
**Status**: Ready for deployment
