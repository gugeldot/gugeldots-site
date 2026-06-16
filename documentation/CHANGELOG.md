# Changelog

## Version 2.0.0 - Enhanced Animations & Interactive Roadmap (2026-06-16)

### 🎨 Major Visual Enhancements

#### Background Particle System
- **Upgraded particle animation** with multiple particle types
- Added **glowing purple particles** with brightness variations
- Implemented **horizontal drift particles** for cross-screen movement
- Total particles: **65** (50 vertical + 15 horizontal drift)
- Particles now have:
  - Variable opacity for depth effect
  - Rotation animations (360° during ascent)
  - Glow effects with box-shadow
  - Staggered timing for natural flow

#### New Particle Types
1. **Standard Particles**: Vertical floating with rotation
2. **Glow Particles**: Brighter with pulsing effect
3. **Drift Particles**: Horizontal cross-screen movement

### 🗺️ Interactive Roadmap Redesign

#### From Horizontal Scroll to Sinuous Path
- **Complete redesign** of certification roadmap
- Replaced linear horizontal scroll with **dynamic sinuous path**
- Path generated using sine wave algorithm for smooth curves
- SVG-based path with gradient (green → yellow → purple)

#### Checkpoint System
- **Visual status indicators**:
  - ✓ Completed (Green with glow)
  - ⟳ In Progress (Orange with pulsing animation)
  - ○ Planned (Purple muted)
  
- **Interactive tooltips** on hover with:
  - Full certification name
  - Description
  - Status badge
  - Arrow pointer

- **Click to expand** - Opens detailed sidebar

#### New Roadmap Data Structure
Added 8 checkpoints:
1. Systems Information Engineering (2026) - ✓ Completed
2. eJPTv2 (2025) - ✓ Completed
3. eCPPT (Summer 2026) - ⟳ In Progress
4. Master's in Cybersecurity (2027) - ⟳ In Progress
5. Cloud Fundamentals (2027) - ○ Planned
6. ISO 27001 Internal Auditor (2027) - ○ Planned
7. eWPTx (Summer 2027) - ○ Planned
8. OSCP (2028-2029) - ○ Planned

### 📦 New Files

```
js/roadmap.js          (5.6KB)  - Roadmap logic and checkpoint generation
ROADMAP_GUIDE.md       (6.2KB)  - Complete guide for adding/editing checkpoints
CHANGELOG.md           (This file)
```

### 🔄 Updated Files

```
js/particles.js        - Enhanced particle generation with 3 types
js/sidebar.js          - Added eJPTv2 certification content
js/search.js           - Added eJPTv2 to search index
js/app.js              - Added roadmap initialization
css/styles.css         - Added roadmap styles, enhanced particle animations
index.html             - Updated roadmap section with SVG path
```

### ✨ Key Features

#### Dynamic Path Generation
- Automatically adapts to any number of checkpoints
- Uses cubic Bézier curves for smooth transitions
- Maintains consistent spacing

#### Easy Extension
- Add new checkpoints by editing `roadmapData` array
- No CSS or layout changes required
- See `ROADMAP_GUIDE.md` for detailed instructions

#### Animations
- **Pulse animation** for in-progress items (2s cycle)
- **Hover scale** effect on checkpoints (1.2x)
- **Tooltip slide-in** animation
- **Path gradient** shows progression timeline

### 📊 Performance Impact

- Particle count: 30 → 65 (+117%)
- File size increase: ~6KB total
- Animations: GPU-accelerated (transforms only)
- Load time: Negligible impact (<50ms)

### 🎯 User Experience Improvements

1. **Visual Feedback**: Status immediately visible via color-coding
2. **No Overflow Issues**: Tooltips positioned above checkpoints
3. **Mobile Responsive**: Adjusted checkpoint sizes and spacing
4. **Keyboard Accessible**: All checkpoints clickable
5. **Dynamic Background**: More engaging and less "static"

### 🔧 Technical Improvements

#### CSS Architecture
- Added 8 new animation keyframes
- Implemented SVG gradient definitions
- Enhanced responsive breakpoints for roadmap

#### JavaScript Modularity
- `roadmap.js` isolated roadmap logic
- Reusable `addCheckpoint()` function for dynamic updates
- Clean data structure for easy maintenance

### 📚 Documentation Updates

- Created comprehensive `ROADMAP_GUIDE.md`
- Added inline code comments
- Updated `STRUCTURE.txt` with new files

### 🐛 Fixes

- Fixed horizontal scroll overflow issues in roadmap
- Improved particle performance with variable delays
- Enhanced mobile responsiveness for checkpoints

---

## Version 1.0.0 - Initial Modular Architecture (2026-06-16)

- Separated monolithic HTML into modular architecture
- Created CSS/JS folder structure
- Implemented horizontal scrolling navigation
- Added dark theme with purple accents
- Created sidebar modal system
- Implemented search functionality
- Added CV viewer modal
- Created comprehensive documentation

---

**For detailed upgrade instructions, see ROADMAP_GUIDE.md**
