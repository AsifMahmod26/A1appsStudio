(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const saved = localStorage.getItem('a1-theme');
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  const updateThemeLabel = () => {
    if (!toggle) return;
    const light = root.dataset.theme === 'light';
    toggle.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
    toggle.title = `Switch to ${light ? 'dark' : 'light'} mode`;
  };
  updateThemeLabel();
  toggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('a1-theme', root.dataset.theme);
    updateThemeLabel();
  });
  menu?.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('open', !expanded);
  });
  document.querySelectorAll('[data-year]').forEach(node => node.textContent = String(new Date().getFullYear()));
})();
