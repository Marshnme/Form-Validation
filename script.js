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
const passConfirmError = document.querySelector('#pass-confirm + span.error ')


console.log(passConfirmError)
console.log(passError)

emailInput.addEventListener('input', function(){
    if(emailInput.validity.valid){
        emailError.textContent = ''
        emailError.className = 'error'
    }else{
        showError()
    }
});

countryInput.addEventListener('input', function(){
    if(countryInput.validity.valid){
        countryError.textContent = ''
        countryError.className = 'error'
    }else{
        showError()
    }
});

zipInput.addEventListener('input', function(){
    if(zipInput.validity.valid){
        zipError.textContent = ''
        zipError.className = 'error'
    }else{
        showError()
    }
});

passInput.addEventListener('input', function(){
    if(passInput.validity.valid){
        passError.textContent = ''
        passError.className = 'error'
    }else{
        showError()
    }
});

passConfirmInput.addEventListener('input', function(){
    if(passConfirmInput.validity.valid){
        passConfirmError.textContent = ''
        passConfirmError.className = 'error'
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

    if(countryInput.validity.valueMissing){
         countryError.textContent = 'Country Required'
    }

    if(zipInput.validity.valueMissing){
         zipError.textContent = 'Zip Code Required'
    }else if(zipInput.validity.typeMismatch){
         zipError.textContent = 'Incorrect Zip Code Format'
    }

    if(passInput.validity.valueMissing){
         passError.textContent = 'Password Required'
    }else if(passInput.validity.typeMismatch){
         passError.textContent = 'Incorrect Password Format'
    }else if(passInput.validity.patternMismatch){
         passError.textContent = "Password must contain atleast one: Lower and uppercase letter,a number,symbol(#,?,!,@,$,%,^,&,*,-), and a minimun of 8 characters"
    }

    if(passConfirmInput.validity.valueMissing){
        passConfirmError.textContent = 'Password Confirmation Required'
    }else if(passConfirmInput.value !== passInput.value){
        console.log('ooooo')
        passConfirmInput.setCustomValidity('Passwords do not match')
        passConfirmError.textContent = 'Passwords do not match'
    }else{
        passConfirmInput.setCustomValidity('')
        passConfirmError.textContent = ''
    }

    emailError.className = 'error'
    countryError.className = 'error'
    zipError.className = 'error'
    passError.className = 'error'
    passConfirmError.className = 'error'
}
