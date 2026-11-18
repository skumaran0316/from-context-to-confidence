// Native dialogs retain Escape dismissal, focus containment and focus restoration.
// Only dismiss a backdrop click that both starts and ends outside the dialog.
document.querySelectorAll('dialog').forEach(dialog => {
  const isOutside = event => {
    const box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right ||
      event.clientY < box.top || event.clientY > box.bottom;
  };
  let startedOutside = false;
  dialog.addEventListener('pointerdown', event => {
    startedOutside = event.target === dialog && isOutside(event);
  });
  dialog.addEventListener('pointercancel', () => { startedOutside = false; });
  dialog.addEventListener('click', event => {
    if (startedOutside && event.target === dialog && isOutside(event) && dialog.open) {
      dialog.close();
    }
    startedOutside = false;
  });
});
