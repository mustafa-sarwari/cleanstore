/*
  Premium Apple-Inspired Landing Interactions
  ============================================
  - Sticky header state (padding tighten on scroll)
  - Mobile menu toggle (aria + hidden)
  - Scroll reveal with IntersectionObserver
  - Smooth, performant animations
*/

(function () {
  'use strict';

  const root = document.querySelector('[data-premium]');
  if (!root) return;

  const header = root.querySelector('[data-header]');
  const menu = root.querySelector('[data-menu]');
  const menuButton = root.querySelector('[data-menu-button]');
  const menuClose = root.querySelector('[data-menu-close]');

  // Sticky Header State
  function updateStickyState() {
    if (!header) return;
    const isStuck = window.scrollY > 10;
    header.setAttribute('data-stuck', isStuck ? 'true' : 'false');
  }

  // Debounce scroll for performance
  let scrollTicking = false;
  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        updateStickyState();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  // Mobile Menu Functions
  function openMenu() {
    if (!menu || !menuButton) return;
    
    menu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Focus first link after animation
    requestAnimationFrame(() => {
      const firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    });
  }

  function closeMenu() {
    if (!menu || !menuButton) return;
    
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuButton.focus();
  }

  function toggleMenu() {
    if (!menu || !menuButton) return;
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  }

  // Initialize header
  updateStickyState();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu button handlers
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  // Close menu on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu && !menu.hidden) {
      closeMenu();
    }
  });

  // Scroll Reveal Animation
  const revealElements = root.querySelectorAll('.reveal');
  
  if (!revealElements.length) return;

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Create observer with optimized settings
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  revealElements.forEach((el) => revealObserver.observe(el));

})();
