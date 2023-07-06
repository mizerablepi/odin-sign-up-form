let passwordAlert = document.getElementById('wrng-p');
let submit = document.getElementById('submit')

function alertWrongPassword() {
  passwordAlert.textContent = "* Passwords do not match";
  passwordAlert.style.paddingBottom = 0;
}

