export function initNewsletter() {
  
  const triggerBtn = document.querySelector('#trigger-btn');
  const popupBubble = document.querySelector('.popup-bubble');
  const closeBtn = document.querySelector('.close-btn');

    if (!triggerBtn || !popupBubble || !closeBtn) return;

const openPopup = () => {
  popupBubble.style.display = 'flex';
};

setTimeout(openPopup, 10000);

    triggerBtn.addEventListener('click', openPopup);

   closeBtn.addEventListener('click', () => {
    popupBubble.style.display = 'none';
  });
}