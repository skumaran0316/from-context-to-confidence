// An optional shortcut, not a second copy of the research or a story-state change.
(() => {
  const link = document.getElementById('explore-research');
  const details = document.getElementById('optional-next');
  const hint = document.getElementById('optional-hint');
  link.addEventListener('click', event => {
    event.preventDefault();
    details.hidden = false;
    details.open = true;
    hint.hidden = true;
    details.querySelector('summary').focus({preventScroll:true});
    details.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  });
})();
