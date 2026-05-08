export function initPreorder() {
const preorderBtn = document.querySelector('#preorderBtn');
const preorderPopup = document.querySelector('#preorderPopupWrapper');
const closePreorderBtn = document.querySelector('#closePreorderInFormBtn, #closePreorderIconBtn');

preorderBtn.addEventListener('click', () => {
  preorderPopup.classList.add('open');
  preorderPopup.setAttribute('aria-hidden', 'false');

})

closePreorderBtn.addEventListener('click', () => {
  preorderPopup.classList.remove('open');
  preorderPopup.setAttribute('aria-hidden', 'true');  

})

}
