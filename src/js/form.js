const STORAGE_KEY = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[type="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', onFeedbackForm);
popupText();
feedbackForm.addEventListener('submit', checkSubmit);

function onFeedbackForm() {
  const emailValue = inputEmail.value;
  const textareaValue = inputMessage.value;
  formData.email = emailValue;
  formData.message = textareaValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function popupText() {
  const infoGet = localStorage.getItem(STORAGE_KEY);
  const info = JSON.parse(infoGet);

  if (info) {
    inputEmail.value = info.email;
    inputMessage.value = info.message;
  }
}

function checkSubmit(event) {
  event.preventDefault();

  if (!inputEmail.value || !inputMessage.value) {
    alert('All form fields must be filled in');
  } else {
    console.log({ email: inputEmail.value, message: inputMessage.value });
  }

  inputEmail.value = '';
  inputMessage.value = '';

  localStorage.removeItem(STORAGE_KEY);
}
