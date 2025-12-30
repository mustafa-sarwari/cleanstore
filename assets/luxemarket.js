(() => {
  const root = document.documentElement;

  // Sticky nav shrink cue (keeps it simple and non-invasive)
  const updateScrollState = () => {
    if (window.scrollY > 8) root.classList.add('is-scrolled');
    else root.classList.remove('is-scrolled');
  };

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  // Fade/slide-in reveals
  const revealEls = Array.from(document.querySelectorAll('.luxe-reveal'));
  if (!revealEls.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    for (const el of revealEls) observer.observe(el);
  } else {
    for (const el of revealEls) el.classList.add('is-revealed');
  }
})();
