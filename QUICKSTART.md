# CleanStore Pro - Quick Reference

## 🚀 Quick Start Commands

```bash
# Navigate to theme folder
cd "E:\Shopify Templates\First Tamplet\cleanstore"

# Start local development server
npm run dev

# Check theme for errors
npx shopify theme check

# Pull theme from Shopify
npm run pull

# Push theme to Shopify
npm run push

# Create theme package (zip)
npm run zip
```

---

## 📁 File Structure Quick Reference

```
cleanstore/
├── layout/
│   └── theme.liquid              # Main layout
├── templates/
│   ├── index.json                # Homepage (uses hero-slider)
│   ├── product.json              # Product page
│   ├── collection.json           # Collection page
│   ├── cart.json                 # Cart page
│   ├── search.json               # Search results
│   └── page.contact.json         # Contact page
├── sections/
│   ├── header.liquid             # Sticky header with mega menu
│   ├── footer.liquid             # Footer with newsletter
│   ├── hero-slider.liquid        # ⭐ Advanced hero slider
│   ├── featured-collection.liquid # Product showcase
│   ├── testimonials.liquid       # ⭐ Customer reviews carousel
│   ├── newsletter.liquid         # Email signup
│   ├── newsletter-popup.liquid   # ⭐ Timed popup
│   ├── quick-view.liquid         # ⭐ Product quick view modal
│   ├── cart-drawer.liquid        # ⭐ Sliding cart panel
│   ├── promo-bar.liquid          # Announcement bar
│   ├── product.liquid            # Product page content
│   ├── collection.liquid         # Collection page content
│   └── product-grid.liquid       # Reusable product grid
├── snippets/
│   ├── product-card.liquid       # Product card with badges
│   ├── mega-menu.liquid          # ⭐ Multi-level navigation
│   ├── review-stars.liquid       # ⭐ Star rating display
│   ├── social-links.liquid       # Social media icons
│   ├── modal.liquid              # Base modal component
│   └── currency-switcher.liquid  # Currency selector
├── assets/
│   ├── base.css                  # Design system & utilities
│   ├── theme.css                 # Theme-specific styles
│   ├── main.js                   # Core functionality
│   ├── slider.js                 # Base carousel
│   ├── hero-slider.js            # ⭐ Hero slider controls
│   ├── product-carousel.js       # ⭐ Product carousel
│   └── quick-view.js             # ⭐ Quick view logic
├── config/
│   └── settings_schema.json     # Theme customization options
├── locales/
│   └── en.default.json          # English translations
├── package.json                  # npm configuration
├── README.md                     # Setup & documentation
├── FEATURES.md                   # ⭐ Detailed feature list
└── CHECKLIST.md                  # ⭐ Development checklist

⭐ = New in CleanStore Pro
```

---

## 🎨 Theme Settings Reference

### Access Settings
Shopify Admin → Online Store → Themes → Customize → Theme Settings

### Available Settings Groups

1. **Colors**
   - Primary color
   - Secondary color
   - Accent color
   - Text color
   - Background color

2. **Typography**
   - Heading font
   - Body font

3. **Layout**
   - Container width (1000-1600px)

4. **Social Media**
   - Facebook URL
   - Instagram URL
   - Twitter URL
   - Pinterest URL
   - YouTube URL

5. **Product Cards**
   - Show vendor
   - Enable quick add
   - Image aspect ratio

6. **Cart**
   - Cart type (page/drawer)
   - Enable cart notes

7. **Favicon**
   - Site icon upload

---

## 🔧 Common Customization Tasks

### Change Hero Slider Settings
1. Go to homepage in theme editor
2. Click on "Hero Slider" section
3. Adjust:
   - Enable/disable autoplay
   - Autoplay speed
   - Desktop height
   - Mobile height
4. Add/edit slides via blocks

### Add Testimonials
1. Go to homepage in theme editor
2. Click on "Testimonials" section
3. Add blocks for each testimonial
4. Set:
   - Author name
   - Rating (0-5)
   - Review text
   - Optional photo

### Configure Newsletter Popup
1. In theme editor, find "Newsletter Popup"
2. Set:
   - Display delay (seconds)
   - Heading
   - Description
   - Discount code
   - Featured image

### Setup Mega Menu
1. Go to Navigation settings
2. Create multi-level menu structure
3. Mega menu automatically appears on desktop
4. Max 3 levels supported

### Customize Colors
1. Theme Settings → Colors
2. Use color pickers for:
   - Primary (main brand color)
   - Secondary (buttons, links)
   - Accent (highlights)

---

## 💡 Code Snippets

### Use Review Stars
```liquid
{% render 'review-stars', rating: 4.5 %}
```

### Use Social Links
```liquid
{% render 'social-links' %}
```

### Use Product Card
```liquid
{% render 'product-card', product: product %}
```

### Open Cart Drawer (JavaScript)
```javascript
document.querySelector('.cart-link').click();
```

### Trigger Quick View (HTML)
```html
<button data-quick-view="{{ product.handle }}">Quick View</button>
```

### Make Section a Carousel
```html
<div class="featured-collection" data-product-carousel>
  <div class="product-grid">
    <!-- Products here -->
  </div>
</div>
```

---

## 🎯 Section Schema Examples

### Adding a New Slide to Hero Slider
In theme editor:
1. Click "Hero Slider"
2. Click "Add slide"
3. Configure:
   - Heading
   - Subheading
   - Button text/link
   - Background image
   - Text alignment

### Creating Custom Section Settings
```json
{
  "name": "Section Name",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Default heading"
    },
    {
      "type": "checkbox",
      "id": "enable_feature",
      "label": "Enable feature",
      "default": true
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Hero Slider Not Working
- Check `hero-slider.js` is loaded in theme.liquid
- Verify section has `data-hero-slider` attribute
- Check browser console for errors

### Quick View Not Opening
- Ensure `quick-view.js` is loaded
- Check product handle is correct
- Verify QuickViewModal is initialized

### Cart Drawer Not Sliding
- Check `cart-drawer` section is in layout
- Verify cart link has click handler
- Check for JavaScript errors

### Newsletter Popup Not Showing
- Check delay setting (might be too high)
- Clear localStorage: `localStorage.removeItem('newsletter-popup-hidden')`
- Verify section is enabled

### Mega Menu Not Appearing
- Desktop only (min-width: 769px)
- Requires linklist with child items
- Check navigation structure

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) { }  /* Tablet */
@media (min-width: 1024px) { } /* Desktop */
@media (min-width: 1280px) { } /* Large Desktop */
```

---

## 🎨 CSS Variables Reference

```css
/* Colors */
--color-primary
--color-secondary
--color-accent
--color-text
--color-bg
--color-bg-light
--color-border

/* Typography */
--font-heading
--font-body
--font-size-base

/* Spacing */
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 40px
--spacing-xl: 60px

/* Border Radius */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
```

---

## 🚀 Performance Tips

1. **Optimize Images**: Use Shopify's image filters
   ```liquid
   {{ product.featured_image | img_url: '800x' }}
   ```

2. **Lazy Load**: Add `loading="lazy"` to images
   ```html
   <img src="..." loading="lazy">
   ```

3. **Minify for Production**: Use build tools for CSS/JS

4. **Enable Caching**: Shopify handles this automatically

5. **Limit Animations**: Use `prefers-reduced-motion`

---

## 📞 Need Help?

- **Documentation**: Check README.md and FEATURES.md
- **Code Comments**: All files have inline documentation
- **Shopify Docs**: https://shopify.dev/themes
- **Liquid Reference**: https://shopify.dev/api/liquid

---

## ✨ Pro Tips

1. **Test in Theme Editor**: Preview changes before publishing
2. **Use Sections Everywhere**: Maximize flexibility
3. **Keep Backups**: Download theme regularly
4. **Version Control**: Use Git for tracking changes
5. **Mobile First**: Always test mobile experience
6. **Accessibility**: Use semantic HTML and ARIA labels
7. **Performance**: Monitor with Lighthouse
8. **Customize Don't Hack**: Use theme settings when possible

---

*Happy theming! 🎉*
