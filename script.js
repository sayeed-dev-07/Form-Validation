const form = document.getElementById("form");
const email = document.querySelector('#email')
const country = document.getElementById("country");
const code = document.getElementById("code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.querySelector("button");

const emailSpan = document.querySelector('.emailName')
const countrySpan = document.querySelector('.countryName')
const codeSpan = document.querySelector('.codeName')
const passwordSpan = document.querySelector('.passwordName')

const details = document.querySelector('.details')

function validateEmail(){
    email.setCustomValidity('');
    if(email.value.trim() === ''){
        email.setCustomValidity('Email Name cant be Empty__33')
    }else if(email.validity.typeMismatch){
        email.setCustomValidity('Im expecting an email address__33')
    }else if(email.validity.tooShort){
        email.setCustomValidity(`Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`)
    }
    email.reportValidity();
}

function validateCountry(){
    country.setCustomValidity('');
    if(country.value.trim() === ''){
        country.setCustomValidity('Country Name cant be Empty__33')
    }else if(country.validity.typeMismatch){
        country.setCustomValidity('Im expecting an country Name__33')
    }else if(country.validity.tooShort){
        country.setCustomValidity(`Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`)
    }else if(country.validity.tooLong){
        country.setCustomValidity(`Country should be ${country.maxLength} characters; you entered ${country.value.length}.`)
    }
    country.reportValidity();
}
function validateCode(){
    code.setCustomValidity('');
    if(code.value.trim() === ''){
        code.setCustomValidity('code cant be Empty__33')
    }else if(code.validity.typeMismatch){
        code.setCustomValidity('Im expecting an code')
    }else if(code.validity.rangeUnderflow){
        code.setCustomValidity(`code should be at least ${code.min} ; you entered ${code.value}.`)
    }else if(code.validity.rangeOverflow){
        code.setCustomValidity(`code should be under ${code.max}; you entered ${code.value}.`)
    }
    code.reportValidity();
}


function validatepassword(){
    password.setCustomValidity('');
    if(password.value.trim() === ''){
        password.setCustomValidity('password cant be Empty__33')
    }else if(password.validity.tooShort){
        password.setCustomValidity(`password should be at least ${password.minLength} characters; you entered ${password.value.length}.`)
    }
    password.reportValidity();
}

function validateConfirmPassword(){
    confirmPassword.setCustomValidity('');
    if(password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity(`confirm password didn't match password __! `)
    }
    confirmPassword.reportValidity();
}




email.addEventListener('input', validateEmail)
country.addEventListener('input', validateCountry)
code.addEventListener('input', validateCode)
password.addEventListener('input', validatepassword)
confirmPassword.addEventListener('input', validateConfirmPassword)


form.addEventListener("submit", (event) => {
    validateCode()
    validateEmail()
    validateCountry()
    validatepassword()
    validateConfirmPassword()
    if (!form.checkValidity()) {
        form.reportValidity();
        event.preventDefault();
        return;
    }

    // Show details and update spans
    event.preventDefault();
    details.classList.remove("hidden");
    emailSpan.textContent = `${email.value}`;
    codeSpan.textContent = `${code.value}`;
    countrySpan.textContent = `${country.value}`;
    passwordSpan.textContent = `${password.value}`;
    clearForm()

    
});

function clearForm() {
    form.reset();
}