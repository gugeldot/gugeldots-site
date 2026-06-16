# 🗺️ Interactive Roadmap Guide

## Overview

The roadmap displays your certification and academic journey as an interactive sinuous path with checkpoints. Each checkpoint represents a milestone (certification, degree, etc.) with three possible states:

- **✓ Completed** (Green) - Already achieved
- **⟳ In Progress** (Orange/Yellow) - Currently working on
- **○ Planned** (Purple) - Future goals

## Adding a New Checkpoint

### Step 1: Edit roadmap.js

Open `js/roadmap.js` and add a new entry to the `roadmapData` array:

```javascript
{
    id: 9,  // Increment from last ID
    title: 'Full Certification Name',
    shortTitle: 'Short Name',  // Displayed on checkpoint
    date: 'Expected Date',
    status: 'completed' | 'in-progress' | 'planned',
    type: 'certification' | 'degree',
    description: 'Brief description for tooltip',
    key: 'sidebar-key'  // Key for sidebar content (optional)
}
```

### Step 2: Add Sidebar Content (Optional)

If you want detailed information to appear in the sidebar when clicking the checkpoint, add an entry to `js/sidebar.js`:

```javascript
'sidebar-key': {
    title: 'Full Title',
    content: `
        <h3>Section Heading</h3>
        <p>Your content here...</p>
    `
}
```

### Step 3: Add to Search (Optional)

To make it searchable, add to `js/search.js`:

```javascript
{ term: 'Certification Name', section: 2, desc: 'Description' }
```

## Example: Adding CISSP

### In roadmap.js:
```javascript
{
    id: 9,
    title: 'CISSP - Certified Information Systems Security Professional',
    shortTitle: 'CISSP',
    date: '2029',
    status: 'planned',
    type: 'certification',
    description: 'Advanced security management certification',
    key: 'cissp'
}
```

### In sidebar.js:
```javascript
cissp: {
    title: 'CISSP Certification',
    content: `
        <h3>Certified Information Systems Security Professional</h3>
        <p><strong>Timeline:</strong> 2029<br><strong>Status:</strong> Planned</p>
        <h3>About</h3>
        <p>Advanced-level certification for security management and leadership.</p>
        <h3>Coverage</h3>
        <p>• Security and Risk Management<br>• Asset Security<br>• Security Architecture<br>• Communication and Network Security<br>• Identity and Access Management<br>• Security Assessment and Testing<br>• Security Operations<br>• Software Development Security</p>
    `
}
```

### In search.js:
```javascript
{ term: 'CISSP', section: 2, desc: 'Security management certification' }
```

## Roadmap Status Values

### completed
- **Color**: Green
- **Icon**: ✓
- **Shadow**: Green glow
- **Use when**: Certification/degree already obtained

### in-progress
- **Color**: Orange/Yellow
- **Icon**: ⟳ (rotating)
- **Shadow**: Pulsing animation
- **Use when**: Currently studying or in the process

### planned
- **Color**: Purple (muted)
- **Icon**: ○
- **Shadow**: Subtle purple glow
- **Use when**: Future goal not yet started

## Updating Existing Checkpoints

To change the status of a checkpoint (e.g., from "in-progress" to "completed"):

1. Open `js/roadmap.js`
2. Find the checkpoint by its `id` or `title`
3. Change the `status` field
4. Save the file

Example:
```javascript
// Before
{
    id: 3,
    title: 'eCPPT',
    status: 'in-progress',
    // ...
}

// After completing it
{
    id: 3,
    title: 'eCPPT',
    status: 'completed',
    // ...
}
```

## Roadmap Path Algorithm

The sinuous path is automatically generated using a sine wave function:

```javascript
y = containerHeight / 2 + Math.sin(index * 0.8) * 80
```

- Creates smooth curves between checkpoints
- Adapts to any number of checkpoints
- Uses cubic Bézier curves for smoothness

## Customization

### Change Path Colors

Edit the gradient in `index.html`:

```html
<linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:#4caf50;stop-opacity:0.8" />   <!-- Completed section -->
    <stop offset="30%" style="stop-color:#ffc107;stop-opacity:0.8" />  <!-- In-progress section -->
    <stop offset="60%" style="stop-color:#7209b7;stop-opacity:0.6" />  <!-- Planned section -->
    <stop offset="100%" style="stop-color:#5a189a;stop-opacity:0.4" /> <!-- Future section -->
</linearGradient>
```

### Change Checkpoint Size

Edit in `css/styles.css`:

```css
.checkpoint-marker {
    width: 50px;  /* Change size */
    height: 50px;
    font-size: 1.5rem;  /* Icon size */
}
```

### Change Wave Amplitude

Edit in `js/roadmap.js`:

```javascript
const y = containerHeight / 2 + Math.sin(index * 0.8) * 80;
//                                                        ^^ Change this number
// Larger = more vertical movement
// Smaller = flatter path
```

## Tooltip Positioning

Tooltips appear above checkpoints by default. If a checkpoint is at the top of the path and the tooltip is cut off, it will automatically reposition (handled by CSS).

## Dynamic Addition (Advanced)

To add checkpoints programmatically at runtime:

```javascript
// Call this function with new checkpoint data
addCheckpoint({
    id: roadmapData.length + 1,
    title: 'New Certification',
    shortTitle: 'NEWCERT',
    date: '2030',
    status: 'planned',
    type: 'certification',
    description: 'Description here',
    key: 'newcert'
});
```

This will re-render the entire roadmap with the new checkpoint included.

## Current Roadmap (as of 2026-06-16)

1. **Systems Information Engineering** (2026) - ✓ Completed
2. **eJPTv2** (2025) - ✓ Completed
3. **eCPPT** (Summer 2026) - ⟳ In Progress
4. **Master's in Cybersecurity** (2027) - ⟳ In Progress
5. **Cloud Fundamentals** (2027) - ○ Planned
6. **ISO 27001 Internal Auditor** (2027) - ○ Planned
7. **eWPTx** (Summer 2027) - ○ Planned
8. **OSCP** (2028-2029) - ○ Planned

---

**Note**: After editing any JavaScript files, clear your browser cache or do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R) to see changes immediately.
