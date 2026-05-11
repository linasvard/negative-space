export function initPreorder() {
const preorderBtn = document.querySelector('#preorderBtn');
const preorderPopup = document.querySelector('#preorderPopupWrapper');
const closePreorderBtn = document.querySelector('#closePreorderInFormBtn, #closePreorderIconBtn');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-ZåäöÅÄÖ][a-zA-ZåäöÅÄÖ\s-]*$/;
const emailInput = document.querySelector('#preorderemail');
const nameInput = document.querySelector('#preordername');
const submitPreorderBtn = document.querySelector('#submitPreorderBtn');
const emailErrorMessage = document.querySelector('#emailError');
const nameErrorMessage = document.querySelector('#nameError');

submitPreorderBtn.ariaDisabled = 'true';
preorderBtn.addEventListener('click', () => {
  preorderPopup.classList.add('open');
  preorderPopup.setAttribute('aria-hidden', 'false');
})

closePreorderBtn.addEventListener('click', () => {
  preorderPopup.classList.remove('open');
  preorderPopup.setAttribute('aria-hidden', 'true');  
})

function validateName(value) {
  return nameRegex.test(value) && value.trim().length >= 2;
}

function validateEmail(value) {
  return emailRegex.test(value);
}

function checkAndValidateForm() {
  const isNameValid = validateName(nameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  submitPreorderBtn.ariaDisabled = !(isNameValid && isEmailValid);
}

nameInput.addEventListener('blur', () => {
  if (nameInput.value.trim().length === 0) {
    nameErrorMessage.classList.add('hidden');
  } else if (!validateName(nameInput.value)) {
    nameErrorMessage.classList.remove('hidden');
  } else {
    nameErrorMessage.classList.add('hidden');
  }
checkAndValidateForm();
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim().length === 0) {
    emailErrorMessage.classList.add('hidden');
  } else if (!validateEmail(emailInput.value)) {
    emailErrorMessage.classList.remove('hidden');
  } else {
    emailErrorMessage.classList.add('hidden');
  }
checkAndValidateForm();
});

}