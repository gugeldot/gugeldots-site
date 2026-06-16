# Resources Folder

This folder contains images, icons, and other media assets for the portfolio.

## Current Assets Needed

### Platform Logos

#### HackTheBox Logo
- **Filename**: `hackthebox-logo.png` or `hackthebox-logo.svg`
- **Recommended size**: 64x64px or higher
- **Format**: PNG with transparency or SVG
- **Usage**: Platform badge in Projects section
- **Current**: Using inline SVG placeholder

#### TryHackMe Logo
- **Filename**: `tryhackme-logo.png` or `tryhackme-logo.svg`
- **Recommended size**: 64x64px or higher
- **Format**: PNG with transparency or SVG
- **Usage**: Platform badge in Projects section
- **Current**: Using inline SVG placeholder

### How to Add Real Logos

1. **Download official logos**:
   - HackTheBox: [HTB Brand Assets](https://www.hackthebox.com/press)
   - TryHackMe: [THM Brand Assets](https://tryhackme.com/about)

2. **Save in this folder**:
   ```
   resources/
   ├── hackthebox-logo.svg (or .png)
   └── tryhackme-logo.svg (or .png)
   ```

3. **Update HTML** (`index.html`):

   Replace the inline SVG blocks with:

   **For HackTheBox**:
   ```html
   <img src="resources/hackthebox-logo.svg" alt="HackTheBox" width="32" height="32">
   ```

   **For TryHackMe**:
   ```html
   <img src="resources/tryhackme-logo.svg" alt="TryHackMe" width="32" height="32">
   ```

## Future Assets

### Potential additions:
- Profile photo/avatar
- Project screenshots
- Certification badges
- Technology stack icons
- Custom illustrations

## Organization

```
resources/
├── logos/              # Platform and tool logos
├── icons/              # Custom icons
├── images/             # Photos and screenshots
└── certificates/       # Certification badges (if public)
```

## File Naming Convention

- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Include dimensions if multiple sizes exist

Examples:
- `hackthebox-logo-64x64.png`
- `tryhackme-icon.svg`
- `profile-photo-512.jpg`

## Image Optimization

Before adding images:
1. Optimize for web (use tools like TinyPNG, ImageOptim)
2. Use appropriate formats:
   - **SVG**: Logos, icons (scalable, small size)
   - **PNG**: Images with transparency
   - **JPG**: Photos without transparency
   - **WebP**: Modern format for photos (optional)

## Git Tracking

Images in this folder **are tracked** by git (not in .gitignore).

Keep file sizes reasonable:
- Logos/icons: < 50KB
- Photos: < 500KB
- Screenshots: < 1MB

---

**Note**: Currently using inline SVG placeholders. Replace with real logos when available for better branding.
