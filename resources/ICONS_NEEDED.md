# Icons Needed

## Platform Logos Required

### 1. HackTheBox Logo
**Filename**: `hackthebox-logo.png`
**Specifications**:
- Format: PNG with transparency
- Recommended size: 128x128px or higher
- Aspect ratio: 1:1 (square)
- Background: Transparent
- Color: Official HTB green (#9FEF00) preferred

**Where to get it**:
- Official website: https://www.hackthebox.com/
- Press kit: https://www.hackthebox.com/press
- Or screenshot from HTB profile/website

**Current status**: ⏳ Using placeholder path
**Priority**: HIGH

---

### 2. TryHackMe Logo
**Filename**: `tryhackme-logo.png`
**Specifications**:
- Format: PNG with transparency
- Recommended size: 128x128px or higher
- Aspect ratio: 1:1 (square)
- Background: Transparent
- Colors: Official THM red/white (#212C42 background)

**Where to get it**:
- Official website: https://tryhackme.com/
- Brand assets: https://tryhackme.com/about
- Or screenshot from THM profile/website

**Current status**: ⏳ Using placeholder path
**Priority**: HIGH

---

## How to Add Logos

1. **Download/Save the logo images**

2. **Place in this folder**:
   ```
   resources/
   ├── hackthebox-logo.png
   └── tryhackme-logo.png
   ```

3. **Verify the files**:
   ```bash
   ls -lh resources/*.png
   ```

4. **Commit to git**:
   ```bash
   git add resources/
   git commit -m "Add HTB and THM official logos"
   git push
   ```

---

## Alternative: SVG Format

If you prefer SVG (scalable, smaller file size):

**Filenames**:
- `hackthebox-logo.svg`
- `tryhackme-logo.svg`

**Update HTML**: Change extension in `index.html`:
```html
<img src="resources/hackthebox-logo.svg" alt="HackTheBox" class="platform-logo">
<img src="resources/tryhackme-logo.svg" alt="TryHackMe" class="platform-logo">
```

---

## Quick Screenshot Method

If official logos aren't available:

1. **Go to platform website**
2. **Open browser DevTools** (F12)
3. **Find logo image** in Elements tab
4. **Right-click → Copy image** or **Save image as...**
5. **Crop if needed** (remove extra whitespace)
6. **Save with correct filename** in `resources/`

---

## Image Optimization (Optional)

Before committing, optionally optimize:

**For PNG**:
- Use TinyPNG: https://tinypng.com/
- Or ImageOptim (Mac)
- Or pngquant (CLI)

**For SVG**:
- Use SVGOMG: https://jakearchibald.github.io/svgomg/
- Or svgo (CLI)

**Goal**: Keep file size < 50KB per logo

---

## Fallback Plan

If you can't find official logos, I can:
1. Create simple SVG versions based on the inline SVGs
2. Use icon font alternatives
3. Keep current inline SVG (not ideal but functional)

**Just let me know what you prefer!**
