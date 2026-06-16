# Update v2.0.2 - Tone Adjustment & Platform Links

## Changes Applied

### 🎨 Particle Intensity Increased (+35%)

**Before**: 130 particles total
- 100 vertical particles
- 30 drift particles

**Now**: 175 particles total (+35%)
- **135 vertical particles** (+35%)
- **40 drift particles** (+33%)

**Impact**: More dynamic, vibrant background atmosphere

---

### 📝 Tone Adjustment - Junior Profile

#### Problem
The original copy was too grandilocuent for a junior cybersecurity profile, using terms like:
- "Cybersecurity Researcher & Engineer"
- "Specialized in..."
- "Deep expertise..."
- "Proficiency in..."

#### Solution - Humbler, Learning-Focused Language

**Hero Section**:
```
BEFORE: Cybersecurity Researcher & Engineer
AFTER:  Cybersecurity Enthusiast

BEFORE: Specialized in OT/ICS Security, Penetration Testing & DevSecOps
        Bridging the gap between offensive security and industrial systems
AFTER:  Information Systems Engineer exploring OT/ICS Security and Penetration Testing
        Building skills in offensive security and industrial systems
```

**About Section**:
```
BEFORE: Currently pursuing Master's in Cybersecurity at UNIR (OT/ICS Security focus)
AFTER:  Currently pursuing Master's in Cybersecurity at UNIR, focusing on OT/ICS Security
```

**Skill Cards**:
```
BEFORE: Offensive security methodologies and exploitation techniques
AFTER:  Learning offensive security methodologies and exploitation techniques

BEFORE: BadUSB analysis and embedded device security
AFTER:  Researching BadUSB and embedded device security

BEFORE: Industrial protocols and SCADA systems
AFTER:  Exploring industrial protocols and SCADA systems

BEFORE: CI/CD security and automated testing
AFTER:  Developing CI/CD security automation skills
```

**Sidebar Content Changes**:

| Section | Before | After |
|---------|--------|-------|
| Penetration Testing | "Offensive Security Expertise" | "Offensive Security Learning Path" |
| Hardware Security | "Deep expertise in..." | "Exploring hardware-level security..." |
| OT/ICS Security | "Specialized in securing..." | "Learning about industrial security..." |
| DevSecOps | "Integrating security into..." | "Learning to integrate security..." |

**Key Terminology Shifts**:
- ✅ "Specialized" → "Exploring" / "Learning"
- ✅ "Expertise" → "Study Areas" / "Learning Focus"
- ✅ "Capabilities" → "Areas of Study"
- ✅ "Proficiency" → (removed completely)
- ✅ "Deep expertise" → "Research" / "Academic work"

---

### 🎮 Platform Badges - HackTheBox & TryHackMe

**Added**: Interactive badges linking to CTF platform profiles

**Features**:
- ✅ Custom SVG icons for HTB and THM
- ✅ Hover effects (lift + glow)
- ✅ Username display
- ✅ Opens in new tab with `rel="noopener noreferrer"`
- ✅ Positioned above projects section

**Links**:
- HackTheBox: https://app.hackthebox.com/profile/2388245
- TryHackMe: https://tryhackme.com/p/gugeldot

**Design**:
- Card-style badges with platform logo
- Platform name + username
- Grayscale filter → full color on hover
- Purple accent border on hover
- Responsive flexbox layout

---

## Files Modified

```
js/particles.js         - Increased particle counts (+35%)
index.html              - Updated hero, about, skill cards, added platform badges
css/styles.css          - Added platform badge styles
js/sidebar.js           - Adjusted all sidebar content to junior-friendly tone
```

---

## Visual Comparison

### Tone Changes Summary

**Before** (Senior/Expert tone):
> "Deep expertise in hardware-level security research, particularly USB-based attack vectors..."

**After** (Junior/Learning tone):
> "Exploring hardware-level security through academic research, focusing on USB-based attack vectors..."

**Before**:
> "Specialized in securing industrial environments and critical infrastructure..."

**After**:
> "Learning about industrial security through hands-on research projects and academic study..."

---

## SEO & Perception Impact

### Positive Changes
✅ More authentic representation of skill level
✅ Demonstrates growth mindset ("learning", "exploring", "developing")
✅ Highlights academic achievements without overstatement
✅ Shows active engagement with platforms (HTB, THM)
✅ Better alignment with actual experience level

### Maintained Strengths
✅ Academic credentials still prominent (Bachelor's + Master's in progress)
✅ Research projects showcased (TFG, TFM, IRONGATE, SLYS)
✅ Certification roadmap demonstrates commitment
✅ Technical depth preserved in project descriptions

---

## Platform Badge Styling

```css
.platform-badge {
    background: var(--bg-secondary);
    padding: 1rem 1.5rem;
    border: 1px solid var(--purple-muted);
    transition: all 0.3s;
}

.platform-badge:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(90, 24, 154, 0.3);
    border-color: var(--purple-accent);
}
```

---

## Testing Checklist

- [x] Particle count increased to 175
- [x] Hero headline updated to "Cybersecurity Enthusiast"
- [x] All skill card descriptions use learning-focused language
- [x] Sidebar content adjusted to junior tone
- [x] HTB badge links to correct profile
- [x] THM badge links to correct profile
- [x] Platform badges responsive on mobile
- [x] Hover effects work correctly
- [x] No broken links
- [x] No console errors

---

**Version**: 2.0.2
**Date**: 2026-06-16
**Focus**: Authentic junior profile representation + platform integration
