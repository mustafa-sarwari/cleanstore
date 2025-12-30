/*
  Premium landing interactions
  - Sticky header state (padding tighten on scroll)
  - Mobile menu toggle (aria + hidden)
  - Scroll reveal (IntersectionObserver)
*/

(function () {
  const root = document.querySelector('[data-premium]');
  if (!root) return;

  const header = root.querySelector('[data-header]');
  const menu = root.querySelector('[data-menu]');
  const menuButton = root.querySelector('[data-menu-button]');
  const menuClose = root.querySelector('[data-menu-close]');

  function setStuck() {
    if (!header) return;
    header.setAttribute('data-stuck', window.scrollY > 4 ? 'true' : 'false');
  }

  function openMenu() {
    if (!menu || !menuButton) return;
    menu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');

    // Prevent background scroll while menu is open
    document.documentElement.style.overflow = 'hidden';

    // Focus the first menu link for keyboard users
    const firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    if (!menu || !menuButton) return;
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    menuButton.focus();
  }

  function toggleMenu() {
    if (!menu || !menuButton) return;
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else openMenu();
  }

  // Sticky header
  setStuck();
  window.addEventListener('scroll', setStuck, { passive: true });

  // Menu interactions
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  // Click outside to close
  if (menu) {
    menu.addEventListener('click', (event) => {
      if (event.target === menu) closeMenu();
    });
  }

  // Escape to close
  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!menu || menu.hidden) return;
    closeMenu();
  });

  // Scroll reveal
  const items = root.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { root: null, threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
})();
