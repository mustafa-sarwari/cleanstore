# GM Sarwari Pro – Premium Shopify Theme

A Shopify theme project with Liquid templates, configurable sections, JavaScript interactions, and CSS styling.

## 🚀 Features

### Core Features
- **Advanced Hero Slider**: Multi-slide hero with autoplay, navigation, and smooth transitions
- **Mega Menu**: Multi-level dropdown navigation with featured images
- **Product Carousels**: Horizontal scrolling product showcases
- **Quick View Modal**: AJAX-powered product quick view with variant selection
- **Sticky Header**: Smart header that hides on scroll down, shows on scroll up
- **Cart Drawer**: Sliding cart panel with quantity updates
- **Newsletter Popup**: Timed popup with "don't show again" functionality
- **Testimonials Carousel**: Customer reviews with star ratings
- **Review Stars**: Dynamic star rating system with half-star support
- **Responsive layouts**: validate target devices before deployment
- **Performance goal**: lightweight code and optimized assets
- **SEO Optimized**: Built with best practices for search engines
- **Accessibility goal**: keyboard navigation support; formal WCAG conformance has not been established

### Premium Features
- Multi-level navigation with hover dropdowns
- Product badges (Sale, Sold Out)
- Quick add to cart from product cards
- Live cart count updates
- Currency switcher for international stores
- Social media integration
- Customizable color schemes
- Multiple typography options
- Lazy loading images
- Dark mode support

## 📦 What's Included

### Layout
- `theme.liquid` - Main theme layout with all scripts and global sections

### Templates
- `index.json` - Homepage with hero slider, featured products, testimonials, newsletter
- `product.json` - Product page with gallery and add-to-cart
- `collection.json` - Collection page with filtering and sorting
- `cart.json` - Shopping cart page
- `search.json` - Search results page
- `page.contact.json` - Contact page template

### Sections
- `header.liquid` - Sticky header with logo, mega menu, search, and cart
- `footer.liquid` - Footer with links, newsletter, and social media
- `hero-slider.liquid` - **NEW** Advanced multi-slide hero with autoplay
- `featured-collection.liquid` - Showcase featured products
- `newsletter.liquid` - Email signup form
- `newsletter-popup.liquid` - **NEW** Timed popup with persistence
- `testimonials.liquid` - **NEW** Customer review carousel
- `promo-bar.liquid` - Promotional announcement bar
- `product-grid.liquid` - Reusable product grid
- `product.liquid` - Full product page with variants
- `collection.liquid` - Collection page with sorting
- `quick-view.liquid` - **NEW** Product quick view modal
- `cart-drawer.liquid` - **NEW** Sliding cart panel

### Snippets
- `product-card.liquid` - Product card with badges and quick-add
- `mega-menu.liquid` - **NEW** Multi-level dropdown navigation
- `review-stars.liquid` - **NEW** Star rating display
- `social-links.liquid` - Social media icon links
- `modal.liquid` - Reusable modal component
- `currency-switcher.liquid` - Multi-currency support

### Assets
- `base.css` - Core design system with CSS variables
- `theme.css` - Theme-specific styles and animations
- `main.js` - Core functionality (mobile menu, cart, search, sticky header)
- `slider.js` - Carousel/slider base functionality
- `hero-slider.js` - **NEW** Advanced hero slider controls
- `product-carousel.js` - **NEW** Product carousel functionality
- `quick-view.js` - **NEW** Quick view modal logic

### Config
- `settings_schema.json` - Theme customization options:
  - Colors
  - Typography
  - Layout
  - Social Media
  - Product Cards
  - Cart Settings

## 🛠️ Installation

### Method 1: Shopify CLI (Recommended)

1. **Install Shopify CLI** (if not already installed):
   ```bash
   npm install
   ```

2. **Navigate to theme directory**:
   ```bash
   cd cleanstore
   ```

3. **Login to Shopify**:
   ```bash
   npm run dev -- --store your-store.myshopify.com
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Push to your store**:
   ```bash
   npm run push
   ```

### Method 2: Manual Upload

1. Create a ZIP file of the `cleanstore` directory
2. Go to Shopify Admin → Online Store → Themes
3. Click "Upload theme" and select your ZIP file
4. Publish the theme when ready

## 🎨 Customization

### Theme Settings

Access theme settings from Shopify Admin:
1. Go to **Online Store** → **Themes**
2. Click **Customize** on CleanStore theme
3. Customize colors, fonts, layout, and more

### Adding Sections

Sections can be added to any template:
1. In theme editor, click **Add section**
2. Choose from available sections
3. Configure section settings
4. Save changes

### Menu Setup

1. Go to **Online Store** → **Navigation**
2. Edit "Main menu" for header navigation
3. Edit "Footer menu" for footer links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Project Structure
```
cleanstore/
├── layout/          # Theme layouts
├── sections/        # Reusable sections
├── templates/       # Page templates (JSON)
├── snippets/        # Reusable snippets
├── assets/          # CSS, JS, images
├── config/          # Theme settings
├── locales/         # Translations
└── package.json     # NPM dependencies
```

### NPM Scripts

```bash
npm run dev          # Start local development server
npm run pull         # Pull theme from Shopify
npm run push         # Push theme to Shopify
npm run check        # Check theme for errors
npm run zip          # Create theme ZIP file
```

### Adding Custom CSS

Add custom styles to `assets/theme.css` or use the Custom CSS section in theme settings.

### Adding Custom JavaScript

Add custom scripts to `assets/main.js` or create new JS files in the assets folder.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📄 License

This theme is licensed for use on Shopify stores. Do not redistribute without permission.

## 🤝 Support

For support and questions:
- [Repository issues](https://github.com/mustafa-sarwari/cleanstore/issues)
- [Setup documentation](QUICKSTART.md)
- [Project owner](https://github.com/mustafa-sarwari)

## 🔄 Changelog

### Version 1.0.0 (Initial Release)
- Complete theme structure
- Homepage with hero and featured products
- Product and collection pages
- Cart functionality
- Mobile-responsive design
- Theme customization options

## 👏 Credits

- Icons: Custom SVG icons
- Fonts: System fonts for optimal performance
- Built with ❤️ for Shopify

---

**Made with Shopify CLI** | **Version 1.0.0**

## Portfolio status

This is a theme development project. Feature descriptions should be validated against the target Shopify store. No measured performance scores or formal accessibility certification are claimed here. The root package defines development, theme-check, pull, push, and archive scripts.

## Theme validation and packaging

Run `npm install`, then `npm run check` for Shopify Theme Check. Run `npm run zip` with Python 3 to create a real ZIP containing only the eight supported theme directories; documentation and development files are excluded. The theme check currently has no errors but retains inherited warnings. A development store is needed to verify store-specific behavior; this repository is a theme, with Shopify providing its backend.
