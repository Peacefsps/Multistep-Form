const menuOne = document.querySelector('.menu-one');
const menuTwo = document.querySelector('.menu-two')
const menuThree = document.querySelector('.menu-three');
const menuFour = document.querySelector('.menu-four')
const mainBar = document.querySelector('.main-bar');
const stepTwoBox = document.querySelector('.steptwo-box')
const stepThreeBox = document.querySelector('.stepthree-box');
const stepFourBox = document.querySelector('.stepfour-box');
const form = document.querySelector('.form')
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phoneno')
const nameError = document.querySelector('#name-error')
const emailError = document.querySelector('#email-error')
const phoneError = document.querySelector('#phone-error')
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const stwoButton = document.querySelector('#stwobutton')
const bOne = document.querySelector('#bone')
const bTwo = document.querySelector('#btwo')
const bThree = document.querySelector('#bthree')
const bFour = document.querySelector('#bfour')

menuOne.addEventListener('click', function() {
    mainBar.style.display = 'block'
    stepTwoBox.style.display = "none"
    stepThreeBox.style.display = "none"
    stepFourBox.style.display = "none"
    bOne.classList.add('active')
    bTwo.classList.remove('active')
    bThree.classList.remove('active')
    bFour.classList.remove('active')
})
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (nameEl.value == "" ) {
        nameError.innerHTML = "This field is required"
        nameEl.style.borderColor = 'red'
    }
    if (emailEl.value == "") {
        emailError.innerHTML = 'This field is required'
        emailEl.style.borderColor = 'red'
    }
    if (phoneEl.value == "") {
        phoneError.innerHTML = 'This field is required'
        phoneEl.style.borderColor = 'red'
        return;
    }
    else if (!emailPattern.test(emailEl.value)) {
        emailError.innerHTML = 'Kindly enter a valid email address'
        return;
    }
    else if (!phoneEl.value.match(phonePattern)) {
        phoneError.innerHTML = 'Kindly enter a valid phone no'
        return;
    }
    stepTwoBox.style.display = "block"
    mainBar.style.display = "none"
    bTwo.classList.add('active')
    bOne.classList.remove('active')
})
form.addEventListener('input', function() {
    if (nameEl.value == "" ) {
        nameError.innerHTML = "This field is required"
    }
    else {
        nameError.innerHTML = ''
        nameEl.style.borderColor = 'hsl(243, 100%, 62%)'
    }
    if (emailEl.value == "") {
        emailError.innerHTML = 'This field is required'
    }
    else {
        emailError.innerHTML = ''
        emailEl.style.borderColor = 'hsl(243, 100%, 62%)'
    }
    if (phoneEl.value == "") {
        phoneError.innerHTML = 'This field is required'
    }
    else {
        phoneError.innerHTML = ''
        phoneEl.style.borderColor = 'hsl(243, 100%, 62%)'
    }
})
menuTwo.addEventListener('click', function() {
    mainBar.style.display = "none"
    stepTwoBox.style.display = "block"
    stepThreeBox.style.display = "none"
    stepFourBox.style.display = "none"
    bTwo.classList.add('active')
    bOne.classList.remove('active')
    bThree.classList.remove('active')
    bFour.classList.remove('active')
})
menuThree.addEventListener('click', function() {
    mainBar.style.display = "none"
    stepTwoBox.style.display = "none"
    stepThreeBox.style.display = "block"
    stepFourBox.style.display = "none"
    bThree.classList.add('active')
    bOne.classList.remove('active')
    bTwo.classList.remove('active')
    bFour.classList.remove('active')
})
menuFour.addEventListener('click', function() {
    mainBar.style.display = "none"
    stepTwoBox.style.display = "none"
    stepThreeBox.style.display = "none"
    stepFourBox.style.display = "block"
    bFour.classList.add('active')
    bTwo.classList.remove('active')
    bThree.classList.remove('active')
    bOne.classList.remove('active')
})