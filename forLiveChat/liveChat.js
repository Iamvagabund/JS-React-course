window.addEventListener('DOMContentLoaded', () => {
  const quickNotes = document.querySelector('.css-1mlvwic'),
        onMainQuickNotes = document.querySelector('.css-nsbdrk');

  quickNotes.remove();
  onMainQuickNotes.append(quickNotes);
});