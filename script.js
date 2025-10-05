const linkEl = document.getElementById('themeStylesheet');
const btn = document.getElementById('toggleThemeBtn');

function isModern() {
  return linkEl.getAttribute('href') === 'modern.css';
}

btn.addEventListener('click', () => {
  if (isModern()) {
    linkEl.setAttribute('href', 'retro.css');
    btn.textContent = '現在: レトロ (モダンに切替)';
    btn.setAttribute('aria-pressed', 'true');
  } else {
    linkEl.setAttribute('href', 'modern.css');
    btn.textContent = '現在: モダン (レトロに切替)';
    btn.setAttribute('aria-pressed', 'false');
  }
});
