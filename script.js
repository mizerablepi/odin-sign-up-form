let passwordAlert = document.getElementById('wrng-p');
let password = document.getElementById('password');
let passwordConfirmation = document.getElementById('password-c');

password.addEventListener('input', checkPassword);
passwordConfirmation.addEventListener('input', checkPassword);

function checkPassword() {
  if (passwordConfirmation.value !== '') {
    setAlert(password.value === passwordConfirmation.value);
  }
}

function setAlert(passwordSame) {
  passwordAlert.textContent = passwordSame ? '' : "* Passwords do not match";
  passwordAlert.style.paddingBottom = passwordSame ? '0.94rem' : 0;
  password.style.borderColor = passwordSame ? 'green' : 'red';
  passwordConfirmation.style.borderColor = passwordSame ? 'green': 'red';
}

function setBorder(passwordSame) {
  
}