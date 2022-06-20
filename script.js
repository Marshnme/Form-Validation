const form = document.querySelector('form')

const emailInput = document.getElementById('email')
const emailError = document.querySelector('#email + span.error ')

const countryInput = document.getElementById('country')
const countryError = document.querySelector('#country + span.error ')

const zipInput = document.getElementById('zip')
const zipError = document.querySelector('#zip + span.error ')
const passInput = document.getElementById('pass')
const passError = document.querySelector('#pass + span.error ')

const passConfirmInput = document.getElementById('pass-confirm')
const passConfirmError = document.querySelector('#pass-Confirm + span.error ')

emailInput.addEventListener('input', function(){
    if(emailInput.validity.valid){
        emailError.textContent = ''
        emailError.className = 'error'
    }else{
        showError()
    }
});

form.addEventListener('submit', function(e){
    if(!emailInput.validity.valid){
        showError()
        e.preventDefault()
    }
})

function showError(){
    if(emailInput.validity.valueMissing){
        emailError.textContent = 'Email Required'
    }else if(emailInput.validity.typeMismatch){
        emailError.textContent = 'Incorrect Email Format'
    }
}
