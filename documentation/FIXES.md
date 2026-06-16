# Fixes Applied - v2.0.1

## Bug Fixes

### 1. ✅ SVG Path Not Visible
**Problem**: El camino que conecta los nodos no aparecía en el roadmap.

**Solution**:
- Movido el gradiente SVG del HTML al JavaScript
- El gradiente ahora se define dinámicamente en `roadmap.js`
- Aumentado `stroke-width` de 3 a 4 para mejor visibilidad
- Añadidos `stroke-linecap` y `stroke-linejoin` para esquinas suaves

**Files changed**:
- `js/roadmap.js` - Añadida definición de gradiente en `initRoadmap()`
- `index.html` - Eliminado gradiente duplicado

### 2. ✅ Tooltip Positioning Issue
**Problem**: Los tooltips aparecían desplazados respecto al nodo al hacer hover.

**Solution**:
- Cambiado posicionamiento de `absolute` a `fixed`
- Implementado cálculo dinámico de posición usando `getBoundingClientRect()`
- El tooltip ahora se centra correctamente sobre el checkpoint
- Añadidos event listeners `mouseenter` y `mouseleave` para control preciso

**Files changed**:
- `js/roadmap.js` - Añadida lógica de posicionamiento en `createCheckpoint()`
- `css/styles.css` - Cambiado `.checkpoint-tooltip` a `position: fixed`

### 3. ✅ Particle Intensity Too Low
**Problem**: El fondo parecía "desangelado" con pocas partículas.

**Solution**:
- Partículas verticales: 50 → **100** (+100%)
- Partículas drift: 15 → **30** (+100%)
- Total partículas: 65 → **130** (+100%)
- Aumentada opacidad base: 0.2-0.6 → 0.3-0.9
- Más partículas con efecto glow: 40% → 60%
- Tamaños aumentados: 2-8px → 2-10px

**Files changed**:
- `js/particles.js` - Loops de creación actualizados

### 4. ✅ Missing Purple Glow from Bottom
**Problem**: Faltaba un glow morado desde abajo para dar más atmósfera.

**Solution**:
- Añadido `body::before` con gradiente radial
- Glow cubre 40% de altura desde abajo
- Colores: rgba(114, 9, 183, 0.3) → transparent
- Z-index 0 para estar detrás de todo

**Files changed**:
- `css/styles.css` - Añadido pseudo-elemento `body::before`

## Visual Enhancements

### Particle Effects Enhanced
- **Box-shadow intensified**:
  - Standard: `0 0 12px` + `0 0 20px` (doble capa)
  - Glow: `0 0 20px` + `0 0 35px` + `0 0 50px` (triple capa)
  - Drift: `0 0 15px` + `0 0 25px` (doble capa)

### Bottom Glow Details
```css
background: radial-gradient(
    ellipse at bottom,
    rgba(114, 9, 183, 0.3) 0%,
    rgba(90, 24, 154, 0.15) 30%,
    transparent 70%
);
```

## Performance Impact

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Total Particles | 65 | 130 | +100% |
| Glow Particles | 26 | 60 | +131% |
| Opacity Range | 0.2-0.6 | 0.3-0.9 | +50% |
| Shadow Layers | 1-2 | 2-3 | +50% |

**Estimated FPS impact**: -5 to -10 FPS on lower-end devices
**Recommended**: Still performs well on modern hardware (GPU-accelerated)

## Testing Checklist

- [x] SVG path renders correctly
- [x] Gradient flows from green → yellow → purple
- [x] Tooltips appear centered above checkpoints
- [x] Tooltips hide on mouse leave
- [x] Particles visible and animating smoothly
- [x] Bottom glow visible and atmospheric
- [x] Mobile responsive (tooltips adjust)
- [x] No console errors

## Known Limitations

1. **Tooltip on screen edges**: If checkpoint is at viewport edge, tooltip may be partially cut off
2. **Performance on old devices**: 130 particles may slow down devices older than 2018
3. **Tooltip flicker**: Rapid mouse movement may cause tooltip to flicker (acceptable trade-off)

## Recommendations

### If performance is an issue:
Reduce particles in `js/particles.js`:
```javascript
for (let i = 0; i < 70; i++) {  // Instead of 100
for (let i = 0; i < 20; i++) {  // Instead of 30
```

### To adjust glow intensity:
Edit `css/styles.css`:
```css
body::before {
    height: 30%;  /* Instead of 40% for subtler effect */
}
```

---

**Version**: 2.0.1  
**Date**: 2026-06-16  
**Status**: Ready for deployment
