const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const code = document.getElementById("code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.querySelector("button");

email.addEventListener('input', (event)=>{
    if (email.validity.valid) {
        email.setCustomValidity('')
    }else{
        showError(email)
    }
});
country.addEventListener('input', (event)=>{
    if (country.validity.valid) {
        country.setCustomValidity('')
    }else{
        showError(country)
    }
});
code.addEventListener('input', (event)=>{
    if (code.validity.valid) {
        code.setCustomValidity('')
    }else{
        showError(code)
    }
});
password.addEventListener('input', (event)=>{
    if (password.validity.valid) {
        password.setCustomValidity('')
    }else{
        showError(password)
    }
});



function showError(element){
    if (element.validity.valueMissing) {
        element.setCustomValidity(`Im expecting a  ${element} __33`);
      } else if (element.validity.typeMismatch) {
        element.setCustomValidity(`Im expecting a valid ${element} __33`);
      } else if (element.validity.tooShort) {
        element.setCustomValidity(`Minimum length is ${element.minlength} and current length is ${element.value.length}`);
      }else if(element.validity.tooLong){
        element.setCustomValidity(`Maximum length is ${element.maxlength} and current length is ${element.value.length}`);
      }

      element.reportValidity();
}

form.addEventListener("submit", (event) => {
    // if the email field is invalid
    if (!email.validity.valid) {
      // display an appropriate error message
      showError(email);
      // prevent form submission
      event.preventDefault();
    }else if(!country.validity.valid){
        showError(country);
      // prevent form submission
      event.preventDefault();
    }else if(!code.validity.valid){
        showError(code);
      // prevent form submission
      event.preventDefault();
    }else if(!password.validity.valid){
        showError(password);
      // prevent form submission
      event.preventDefault();
    }
  });