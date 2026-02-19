(function() {
  const html = document.documentElement;
  const storageKey = 'theme-preference';

  // Get saved preference (default to dark)
  const getSavedTheme = () => {
    return localStorage.getItem(storageKey) || 'dark';
  };

  // Set theme on html and store in localStorage
  const setTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  };

  // Initialize theme on page load
  const initTheme = () => {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);
    attachClickListeners();
  };

  // Attach click listeners to all toggle buttons
  const attachClickListeners = () => {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    });
  };

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
