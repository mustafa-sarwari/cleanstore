<div align="center">

# 🛍️ CleanStore Pro

### Premium Shopify Theme with Enterprise-Grade Features

[![Shopify](https://img.shields.io/badge/Shopify-7AB55C?style=for-the-badge&logo=shopify&logoColor=white)](https://shopify.com)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Theme Check](https://github.com/mustafa-sarwari/cleanstore/actions/workflows/theme-check.yml/badge.svg)](https://github.com/mustafa-sarwari/cleanstore/actions/workflows/theme-check.yml)

*A high-end, feature-rich Shopify theme with advanced functionality comparable to Apple and Amazon stores.*

[🚀 Quick Start](#-quick-start) • [✨ Features](#-features) • [📦 Installation](#-installation) • [🎨 Customization](#-customization) • [📖 Documentation](#-documentation)

---

</div>

## 📖 Overview

**CleanStore Pro** is a premium Shopify theme designed for modern e-commerce businesses. Built with performance, accessibility, and conversion optimization in mind, it provides everything you need to create a stunning online store.

### 🎯 Key Highlights

| Feature | Description |
|---------|-------------|
| **🚀 Lightning Fast** | Optimized assets and lazy loading for superior performance |
| **📱 Fully Responsive** | Seamless experience across all devices and screen sizes |
| **♿ WCAG Compliant** | Full accessibility support with keyboard navigation |
| **🔍 SEO Optimized** | Built with search engine best practices |
| **🌍 Multi-Language** | 30+ language translations included |
| **🎨 Highly Customizable** | Extensive theme settings and CSS variables |

---

## ✨ Features

### Core Features

- **🖼️ Advanced Hero Slider** - Multi-slide hero with autoplay, navigation, and smooth transitions
- **📁 Mega Menu** - Multi-level dropdown navigation with featured images
- **🎠 Product Carousels** - Horizontal scrolling product showcases
- **👁️ Quick View Modal** - AJAX-powered product quick view with variant selection
- **📌 Sticky Header** - Smart header that hides on scroll down, shows on scroll up
- **🛒 Cart Drawer** - Sliding cart panel with quantity updates
- **📧 Newsletter Popup** - Timed popup with "don't show again" functionality
- **⭐ Testimonials Carousel** - Customer reviews with star ratings
- **🌟 Review Stars** - Dynamic star rating system with half-star support

### Premium Features

- 🔽 Multi-level navigation with hover dropdowns
- 🏷️ Product badges (Sale, Sold Out, New)
- ⚡ Quick add to cart from product cards
- 🔢 Live cart count updates
- 💱 Currency switcher for international stores
- 📱 Social media integration
- 🎨 Customizable color schemes
- ✍️ Multiple typography options
- 📷 Lazy loading images
- 🌙 Dark mode support

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.0.0 or higher
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) installed
- A Shopify Partner account or development store

### Installation

```bash
# Clone the repository
git clone https://github.com/mustafa-sarwari/cleanstore.git

# Navigate to the project directory
cd cleanstore

# Install dependencies
npm install

# Login to Shopify (first time only)
shopify auth login

# Start development server
npm run dev
```

---

## 📦 Installation

### Method 1: Shopify CLI (Recommended)

1. **Install Shopify CLI** (if not already installed):
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Clone and navigate to the theme**:
   ```bash
   git clone https://github.com/mustafa-sarwari/cleanstore.git
   cd cleanstore
   npm install
   ```

3. **Connect to your store**:
   ```bash
   shopify auth login
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Deploy to your store**:
   ```bash
   npm run push
   ```

### Method 2: Manual Upload

1. Download the latest release from the [Releases](https://github.com/mustafa-sarwari/cleanstore/releases) page
2. Go to **Shopify Admin** → **Online Store** → **Themes**
3. Click **Add theme** → **Upload zip file**
4. Upload the downloaded `.zip` file
5. Click **Publish** when ready

---

## 📁 Project Structure

```
cleanstore/
├── 📂 assets/           # CSS, JavaScript, images, and fonts
├── 📂 blocks/           # Theme blocks
├── 📂 config/           # Theme settings and configuration
├── 📂 layout/           # Theme layouts (theme.liquid)
├── 📂 locales/          # Language translations (30+ languages)
├── 📂 sections/         # Reusable theme sections
├── 📂 snippets/         # Reusable code snippets
├── 📂 templates/        # Page templates (JSON format)
├── 📄 package.json      # NPM dependencies and scripts
└── 📄 README.md         # This file
```

---

## 🛠️ NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server with hot reload |
| `npm run push` | Deploy theme to connected Shopify store |
| `npm run pull` | Pull latest theme changes from Shopify |
| `npm run check` | Run Shopify Theme Check for errors and best practices |
| `npm run zip` | Create a theme ZIP file for distribution |

---

## 🎨 Customization

### Theme Settings

Access the theme editor from Shopify Admin:

1. Navigate to **Online Store** → **Themes**
2. Click **Customize** on CleanStore Pro
3. Explore settings for:
   - 🎨 Colors and gradients
   - ✍️ Typography and fonts
   - 📐 Layout and spacing
   - 📱 Social media links
   - 🛒 Cart and product settings

### Custom CSS

Add custom styles in:
- `assets/theme.css` - Theme-specific styles
- Theme Editor → **Theme settings** → **Custom CSS**

### Custom JavaScript

Add custom scripts in:
- `assets/luxemarket.js` - Theme-specific JavaScript functionality
- New files in the `assets/` directory (reference in `theme.liquid`)

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Target Devices |
|------------|-------------|----------------|
| **Mobile** | < 768px | Smartphones |
| **Tablet** | 768px - 1024px | Tablets, small laptops |
| **Desktop** | > 1024px | Desktops, large screens |

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| ![Chrome](https://img.shields.io/badge/Chrome-Latest-4285F4?logo=google-chrome&logoColor=white) | Latest |
| ![Firefox](https://img.shields.io/badge/Firefox-Latest-FF7139?logo=firefox&logoColor=white) | Latest |
| ![Safari](https://img.shields.io/badge/Safari-Latest-000000?logo=safari&logoColor=white) | 14+ |
| ![Edge](https://img.shields.io/badge/Edge-Latest-0078D7?logo=microsoft-edge&logoColor=white) | Latest |
| ![iOS Safari](https://img.shields.io/badge/iOS_Safari-13+-000000?logo=safari&logoColor=white) | iOS 13+ |
| ![Android Chrome](https://img.shields.io/badge/Android_Chrome-8+-4285F4?logo=google-chrome&logoColor=white) | Android 8+ |

---

## 📖 Documentation

### Included Guides

- [`00_START_HERE.md`](00_START_HERE.md) - Getting started guide
- [`FEATURES.md`](FEATURES.md) - Complete feature documentation
- [`DESIGN_SYSTEM_REFERENCE.md`](DESIGN_SYSTEM_REFERENCE.md) - Design system reference
- [`LUXURY_MINIMALIST_GUIDE.md`](LUXURY_MINIMALIST_GUIDE.md) - Design philosophy
- [`PROFESSIONAL_IMPROVEMENTS.md`](PROFESSIONAL_IMPROVEMENTS.md) - Professional enhancements

### Helpful Resources

- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Liquid Template Language](https://shopify.dev/docs/api/liquid)
- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)

---

## 🔄 Changelog

### v1.0.0 (Initial Release)

- ✅ Complete theme structure with all core sections
- ✅ Advanced hero slider with autoplay
- ✅ Mega menu navigation system
- ✅ Quick view modal for products
- ✅ Cart drawer with AJAX updates
- ✅ Testimonials carousel
- ✅ Newsletter popup with persistence
- ✅ Professional design system
- ✅ 30+ language translations
- ✅ Mobile-responsive design
- ✅ WCAG accessibility compliance
- ✅ SEO optimizations

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This theme is proprietary software. Usage is licensed for deployment on Shopify stores only. Redistribution or resale is prohibited without explicit permission.

---

## 🆘 Support

Need help? We're here for you!

- 📧 **Email**: [support@gmsarwari.com](mailto:support@gmsarwari.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/mustafa-sarwari/cleanstore/issues)
- 📖 **Docs**: [Documentation](./00_START_HERE.md)

---

<div align="center">

### Built with ❤️ for Shopify

**CleanStore Pro** | Version 1.0.0

[![Made with Shopify CLI](https://img.shields.io/badge/Made%20with-Shopify%20CLI-7AB55C?style=flat-square&logo=shopify&logoColor=white)](https://shopify.dev/docs/themes/tools/cli)

</div>
