# Update v2.0.4 - Tooltip Fix v2 & Platform Stats

## Bug Fixes

### 🐛 Roadmap Tooltip Fixed (Again)

**Problem**: Tooltips still not appearing correctly after v2.0.3

**Root Cause**: 
- Using `position: fixed` with manual positioning
- Window scroll offsets causing issues
- Complex calculations prone to errors

**New Solution**: Simplified approach
- Changed to `position: absolute`
- Let CSS handle centering with `transform: translateX(-50%)`
- Positioned relative to parent checkpoint
- Fixed width (280px) for consistent appearance

**CSS**:
```css
.checkpoint-tooltip {
    position: absolute;
    bottom: calc(100% + 15px);  /* Above checkpoint */
    left: 50%;                   /* Center horizontally */
    transform: translateX(-50%); /* Perfect centering */
    width: 280px;                /* Fixed width */
}
```

**JavaScript**: Greatly simplified
```javascript
// Just toggle visibility, CSS handles positioning
checkpoint.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
    requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
    });
});
```

**Result**: ✅ Tooltips now appear correctly above all checkpoints

---

## Platform Badges Enhancement

### 🎮 Added CTF Platform Statistics

**HackTheBox Badge**:
```
[LOGO] HackTheBox
       @gugeldot
       70+ rooted machines • "Professional" Rank
```

**TryHackMe Badge**:
```
[LOGO] TryHackMe
       @gugeldot
       Level Master • Top 3% • 180+ rooms
```

**Visual Changes**:
- Logo size increased: 32px → 48px
- Added `.platform-stats` line with accomplishments
- Purple accent color for stats
- Slightly increased padding (1rem → 1.2rem)

**CSS Added**:
```css
.platform-stats {
    font-size: 0.75rem;
    color: var(--purple-accent);
    margin-top: 0.3rem;
    display: block;
}
```

---

## Icon Requirements

### 📦 Logos Needed

**Current Status**: HTML references logo files that don't exist yet

**Required Files**:
```
resources/
├── hackthebox-logo.png   (or .svg)
└── tryhackme-logo.png    (or .svg)
```

**Specifications**:
- **Format**: PNG with transparency (or SVG)
- **Size**: 128x128px minimum (higher is better)
- **Aspect**: 1:1 square
- **Optimization**: < 50KB per file

**Where to Get**:
1. **HackTheBox**: https://www.hackthebox.com/press
2. **TryHackMe**: https://tryhackme.com/about
3. **Alternative**: Screenshot from official websites

**Instructions**: See `resources/ICONS_NEEDED.md` for detailed guide

---

## Files Modified

```
js/roadmap.js           - Simplified tooltip positioning logic
css/styles.css          - Changed tooltip to absolute, added platform-stats
index.html              - Updated badges with stats, changed to <img> tags
resources/
  └── ICONS_NEEDED.md   - New guide for adding logos
UPDATE_v2.0.4.md        - This file
```

---

## Next Steps

### To Complete:

1. **Get Logo Images**:
   - Download HTB logo from press kit
   - Download THM logo from brand assets
   - Or screenshot and crop from websites

2. **Save to Resources**:
   ```bash
   # Place in resources/ folder:
   resources/hackthebox-logo.png
   resources/tryhackme-logo.png
   ```

3. **Verify Display**:
   - Refresh page
   - Check badges show logos correctly
   - Verify hover effects work

4. **Commit**:
   ```bash
   git add resources/*.png
   git commit -m "Add HTB and THM official logos"
   git push
   ```

---

## Testing Checklist

- [x] Tooltip appears on all checkpoints
- [x] Tooltip centered above checkpoint
- [x] Tooltip hides on mouseleave
- [x] Platform stats visible on badges
- [x] Badge hover effects work
- [x] Logo placeholders in HTML
- [ ] Real logos added (waiting for images)
- [ ] Logo display verified (after images added)

---

## Fallback Options

If you can't find official logos, options:

1. **Keep inline SVG**: Simple colored versions (current fallback)
2. **Create custom SVG**: I can make clean versions
3. **Use icon fonts**: Font Awesome alternatives
4. **Screenshot method**: Capture from official sites

**Recommendation**: Try official press kits first, fallback to screenshots if needed.

---

**Version**: 2.0.4  
**Date**: 2026-06-16  
**Status**: Ready for deployment (logos pending)  
**Priority**: Add logos to complete platform badges
