(function() {
  const html = document.documentElement;
  const storageKey = 'theme-preference';

  // Get saved preference if user has explicitly chosen one.
  const getSavedTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  // Resolve initial theme: saved choice -> browser preference -> dark fallback.
  const getInitialTheme = () => {
    const savedTheme = getSavedTheme();
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return 'dark';
  };

  // Apply theme and optionally persist to localStorage.
  const setTheme = (theme, persist = true) => {
    html.setAttribute('data-theme', theme);

    if (!persist) return;

    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Ignore storage errors (private mode / blocked storage).
    }
  };

  // Initialize theme on page load.
  const initTheme = () => {
    setTheme(getInitialTheme(), false);
    attachClickListeners();
  };

  // Attach click listeners to all toggle buttons.
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
