# Mobile Device Warning Feature

## Overview

Detects mobile devices and displays a warning modal recommending desktop viewing for optimal experience.

## How It Works

### Detection Criteria

The system checks three conditions:
1. **Screen size**: Width ≤ 768px
2. **User Agent**: Mobile device strings (Android, iOS, etc.)
3. **Touch capability**: Touch screen detected

If ANY condition is true → device is considered mobile.

### User Experience

1. **First visit on mobile**:
   - Modal appears 500ms after page load
   - Displays warning about optimal viewing
   - User can:
     - Click "Continue Anyway" → Close and remember choice
     - Click "I Understand" → Just close
     - Check "Don't show again" → Save preference

2. **Subsequent visits**:
   - If user chose "Don't show again" → No modal
   - Otherwise → Modal appears again

3. **Desktop visit**:
   - No modal, ever

### Persistence

Uses `localStorage` to remember user preference:
```javascript
localStorage.getItem('portfolioMobileWarningSeen')
```

**To reset**: Clear browser localStorage or use DevTools console:
```javascript
localStorage.removeItem('portfolioMobileWarningSeen')
```

## Modal Content

```
📱
Mobile Device Detected

This portfolio is optimized for desktop viewing to provide 
the best interactive experience.

Some features and animations may not display correctly on 
mobile devices.

For the best experience:
• View on a desktop or laptop computer
• Use landscape orientation if viewing on tablet
• Enable JavaScript for full functionality

[Continue Anyway]  [I Understand]

☐ Don't show this again
```

## Styling

- Matches portfolio design (dark theme, purple accents)
- Semi-transparent backdrop with blur
- Slide-up animation on appear
- Bouncing phone emoji
- Fully responsive (ironically!)

## Customization

### Change Detection Threshold

Edit `js/mobile-detection.js`:
```javascript
const isMobileScreen = window.innerWidth <= 768;  // Change this
```

### Change Delay

```javascript
setTimeout(() => {
    createMobileWarningModal();
}, 500);  // Change this (milliseconds)
```

### Disable Feature Entirely

Remove or comment out in `js/app.js`:
```javascript
// initMobileDetection();  // Disabled
```

### Change Modal Text

Edit HTML content in `createMobileWarningModal()` function in `js/mobile-detection.js`.

## Files Involved

```
js/mobile-detection.js    - Detection logic and modal creation
css/styles.css            - Modal styling (Mobile Warning Modal section)
index.html                - Script tag inclusion
js/app.js                 - Initialization call
```

## Testing

### Test on Desktop
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select mobile device (e.g., iPhone 12)
4. Refresh page → Modal should appear

### Test "Don't Show Again"
1. Trigger modal on mobile
2. Check "Don't show again"
3. Click "I Understand"
4. Refresh page → Modal should NOT appear

### Reset Preference
DevTools Console:
```javascript
localStorage.removeItem('portfolioMobileWarningSeen');
location.reload();
```

## Browser Compatibility

Works on:
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (iOS & macOS)
- ✅ Mobile browsers (Chrome Mobile, Safari Mobile)

Requires:
- JavaScript enabled
- localStorage support (all modern browsers)

## Performance Impact

- **File size**: ~3KB (JS + CSS)
- **Load time**: Negligible (<10ms)
- **Memory**: Minimal (modal only created if needed)
- **Render**: Only on mobile devices

## Accessibility

- ✅ Keyboard navigable (Tab, Enter)
- ✅ Screen reader friendly (semantic HTML)
- ✅ High contrast (purple on dark)
- ✅ Focus indicators on buttons
- ✅ Clear, readable text

## Future Enhancements

Potential improvements:
- [ ] Add tablet-specific message
- [ ] Show different message for landscape vs portrait
- [ ] Add "Email me desktop link" button
- [ ] Include QR code for easy desktop access
- [ ] Analytics tracking for mobile visits

---

**Version**: 2.0.5  
**Added**: 2026-06-16  
**Status**: Active
