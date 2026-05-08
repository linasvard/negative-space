export function initPreorder() {
const preorderBtn = document.querySelector('#preorderBtn');
const preorderPopup = document.querySelector('#preorderPopupWrapper');
const closePreorderBtn = document.querySelector('#closePreorderInFormBtn, #closePreorderIconBtn');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z\s]+$/;
const emailInput = document.querySelector('#preorderemail');
const nameInput = document.querySelector('#preordername');

/*preorderBtn.addEventListener('click', () => {
  preorderPopup.classList.add('open');
  preorderPopup.setAttribute('aria-hidden', 'false');
})

closePreorderBtn.addEventListener('click', () => {
  preorderPopup.classList.remove('open');
  preorderPopup.setAttribute('aria-hidden', 'true');  
}) */

function validateEmail(email) {
  const emailInputsValid = emailRegex.test(email);
  if (!emailInputsValid) {
    ;
  }
  return emailRegex.test(email);
}

function validateName(name) {
  return nameRegex.test(name);
}
}
