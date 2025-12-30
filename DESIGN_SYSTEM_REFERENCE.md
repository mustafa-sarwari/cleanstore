# Professional Design System - Quick Reference

## Color Palette

### Core Colors
- **Black**: `#000000` - Primary, buttons, text
- **White**: `#FFFFFF` - Background, clean spaces
- **Light Gray**: `#F5F5F5` - Subtle backgrounds
- **Border Gray**: `#E0E0E0` - Borders, dividers
- **Dark Gray**: `#333333` - Hover states, secondary text
- **Medium Gray**: `#666666` - Muted text, disabled states

### Accent Colors
- **Professional Red**: `#C41E3A` - Sales badges
- **Success**: `#28a745` - Success states
- **Warning**: `#ff9800` - Warning states
- **Error**: `#dc3545` - Error states
- **Info**: `#17a2b8` - Info states

---

## Typography Scale

### Font Families
- **Headings**: `var(--font-heading-family)`
- **Body**: `var(--font-paragraph-family)`

### Sizes
- **H1**: 56px (desktop) / 36px (tablet) / 28px (mobile)
- **H2**: 32px (desktop) / 24px (tablet) / 20px (mobile)
- **H3**: 24px
- **Body**: 16px
- **Small**: 14px
- **Caption**: 12px

### Font Weights
- **Bold**: 700
- **Semi-Bold**: 600
- **Regular**: 400

---

## Spacing System

### Standard Gaps
- `20px` - Small gaps
- `30px` - Medium gaps
- `40px` - Standard gaps
- `60px` - Large sections
- `100px` - Hero sections

### Padding
- Small: `12px`
- Medium: `16px`
- Large: `24px`
- XL: `30px`

---

## Component Library

### Buttons
```html
<!-- Primary Button -->
<button class="btn-standard btn-primary">
  Click Me
</button>

<!-- Secondary Button -->
<button class="btn-standard btn-secondary">
  Click Me
</button>

<!-- Tertiary Button -->
<button class="btn-standard btn-tertiary">
  Click Me
</button>
```

### Cards
```html
<div class="card-premium">
  <h3 class="typography-h3">Card Title</h3>
  <p class="typography-body">Card content here</p>
</div>
```

### Inputs
```html
<input type="text" class="input-premium" placeholder="Enter text...">
<textarea class="input-premium"></textarea>
<select class="input-premium"></select>
```

### Typography
```html
<h1 class="typography-h1">Main Heading</h1>
<h2 class="typography-h2">Section Heading</h2>
<h3 class="typography-h3">Subsection</h3>
<p class="typography-body">Regular body text</p>
<small class="typography-caption">Caption text</small>
```

### Grid
```html
<!-- Auto Grid -->
<div class="grid-premium">
  <div class="card-premium">Item 1</div>
  <div class="card-premium">Item 2</div>
  <div class="card-premium">Item 3</div>
</div>

<!-- 3-Column Grid -->
<div class="grid-premium-3">
  <div class="card-premium">Item 1</div>
  <div class="card-premium">Item 2</div>
  <div class="card-premium">Item 3</div>
</div>
```

### Alerts
```html
<div class="alert-premium success">
  Success message!
</div>

<div class="alert-premium error">
  Error message!
</div>

<div class="alert-premium warning">
  Warning message!
</div>

<div class="alert-premium info">
  Info message!
</div>
```

### Table
```html
<table class="table-premium">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

---

## Animations

### Predefined Animations
```css
/* Slide in from up */
animation: slideInUp 0.6s ease-out;

/* Slide in from down */
animation: slideInDown 0.6s ease-out;

/* Fade in */
animation: fadeIn 0.4s ease-out;

/* Custom spin */
animation: spin 1s linear infinite;
```

### Animation Utilities
```html
<div class="animate-slide-in-up">Content</div>
<div class="animate-slide-in-down">Content</div>
<div class="animate-fade-in">Content</div>
```

---

## Shadow System

### Available Shadows
```css
.shadow-sm   /* 0 1px 3px rgba(0, 0, 0, 0.04) */
.shadow-md   /* 0 4px 12px rgba(0, 0, 0, 0.08) */
.shadow-lg   /* 0 8px 24px rgba(0, 0, 0, 0.12) */
```

---

## Border Radius System

### Available Radius
```css
.rounded-sm  /* 2px */
.rounded-md  /* 4px */
.rounded-lg  /* 8px */
```

---

## Utility Classes

### Margin
```css
.mt-20, .mt-30, .mt-40, .mt-60
.mb-20, .mb-30, .mb-40, .mb-60
```

### Padding
```css
.p-20, .p-30, .p-40
```

### Text Utilities
```css
.text-center
.text-left
.text-right
.text-muted
.text-light
.text-bold
```

### Display
```css
.hide-mobile      /* Hidden on tablet and down */
.hide-small-mobile /* Hidden on mobile */
```

---

## Responsive Breakpoints

- **Desktop**: 1025px+
- **Tablet**: 769px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px

---

## Best Practices

### 1. Color Usage
✅ DO: Use black for primary text and buttons
✅ DO: Use white for backgrounds and contrast
✅ DO: Use gray for secondary text and borders
❌ DON'T: Mix multiple colors from different palettes

### 2. Typography
✅ DO: Use typography classes (h1, h2, h3, body, caption)
✅ DO: Maintain proper line-height (1.2-1.6)
✅ DO: Use letter-spacing for headlines
❌ DON'T: Use inline styles for typography

### 3. Spacing
✅ DO: Use standard spacing values (20px, 30px, 40px, 60px)
✅ DO: Use padding utilities for consistency
✅ DO: Maintain vertical rhythm
❌ DON'T: Use arbitrary pixel values

### 4. Components
✅ DO: Use pre-built component classes
✅ DO: Extend with utility classes
✅ DO: Keep DOM structure clean
❌ DON'T: Override component styles with !important

### 5. Responsiveness
✅ DO: Use mobile-first approach
✅ DO: Test on multiple breakpoints
✅ DO: Use responsive utilities
❌ DON'T: Hardcode desktop sizes

---

## File Structure

```
assets/
├── theme.css                          # Main theme styles
├── professional-design-system.css    # Extended design system
├── base.css                          # Base resets and defaults
├── overflow-list.css                 # Component styles
├── template-giftcard.css             # Template specific
└── [other components].js
```

---

## CSS Variables (Available in theme)

All colors are available as CSS variables through the theme settings:

```css
--color-background      /* #FFFFFF */
--color-foreground      /* #000000 */
--color-foreground-heading /* #000000 */
--color-primary         /* #000000 */
--color-primary-hover   /* #333333 */
--color-border          /* #E0E0E0 */
--color-shadow          /* #000000 */
```

---

## Performance Tips

1. **Use CSS Classes**: Prefer CSS classes over inline styles
2. **Lazy Loading**: Images use lazy loading by default
3. **Transitions**: Kept to 0.3s for smooth but snappy feel
4. **Animations**: Support for prefers-reduced-motion
5. **Print**: Optimized print styles included

---

## Accessibility Checklist

- ✅ Color contrast meets WCAG AA standards
- ✅ Focus states clearly visible
- ✅ Keyboard navigation supported
- ✅ ARIA attributes used properly
- ✅ Semantic HTML structure
- ✅ Readable font sizes (min 14px)
- ✅ Proper heading hierarchy

---

## Questions or Issues?

Refer to `PROFESSIONAL_IMPROVEMENTS.md` for detailed information about all changes made to the theme.

---

**Last Updated**: December 29, 2025
