export function initNewsletter() {
  const triggerBtn = document.querySelector('#trigger-btn');
  const popupBubble = document.querySelector('.popup-bubble');
  const closeBtn = document.querySelector('.close-btn');

    if (!triggerBtn || !popupBubble || !closeBtn) return;

    triggerBtn.addEventListener('click', () => {
    popupBubble.style.display = 'block';
  });
   closeBtn.addEventListener('click', () => {
    popupBubble.style.display = 'none';
  });
}
