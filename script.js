const menuOne = document.querySelector('.menu-one');
const menuTwo = document.querySelector('.menu-two')
const menuThree = document.querySelector('.menu-three');
const menuFour = document.querySelector('.menu-four')
const mainBar = document.querySelector('.main-bar');
const stepTwoBox = document.querySelector('.stm-box')
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
const bOne = document.querySelector('#bone')
const bTwo = document.querySelector('#btwo')
const bThree = document.querySelector('#bthree')
const bFour = document.querySelector('#bfour')

menuOne.addEventListener('click', function() {
    mainBar.style.display = 'block'
    stepTwoBox.style.display = "none"
    styBox.style.display = 'none'
    stepThreeBox.style.display = "none"
    stepFourBox.style.display = "none"
    finalPage.style.display = 'none';
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
    styBox.style.display = 'none'
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
    sthyBox.style.display = "none"
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
    sthyBox.style.display = 'none'
    finalPage.style.display = 'none';
    stepFourBox.style.display = "block"
    bFour.classList.add('active')
    bTwo.classList.remove('active')
    bThree.classList.remove('active')
    bOne.classList.remove('active')
})

const gboBtn = document.querySelector('#gbo-btn')
const stwoButton = document.querySelector('#stwobutton')
const yearList = document.querySelector('.yearlist')
const monthList = document.querySelector('.monthlist')
const styBox = document.querySelector('.sty-box');
const gbyBtn = document.querySelector('#gby-btn');
const styBtn = document.querySelector('#sty-btn');
const sthgbmBtn = document.querySelector('#sthgbm-btn');
const sthnmBtn = document.querySelector('#sthnm-btn')
const sthyBox = document.querySelector('.sthy-box')
const sthgbyBtn = document.querySelector('#sthgby-btn')
const sthnyBtn = document.querySelector('#sthny-btn')
const stfgbmBtn = document.querySelector('#stfgbm-btn')
const stfnmBtn = document.querySelector('#stfnm-btn')
const stfyBox = document.querySelector('.stfy-box')
const stfgbyBtn = document.querySelector('#stfgby-btn')
const stfnyBtn = document.querySelector('#stfny-btn')
const finalPage = document.querySelector('.finalpage')



gboBtn.addEventListener('click', function() {
    mainBar.style.display = 'block'
    stepTwoBox.style.display = 'none'
    bOne.classList.add('active')
    bTwo.classList.remove('active')
})

stwoButton.addEventListener('click', function() {
    styBox.style.display = 'block'
    stepTwoBox.style.display = 'none'
})

gbyBtn.addEventListener('click', function() {
    styBox.style.display = 'none'
    stepTwoBox.style.display = 'block'
})

styBtn.addEventListener('click', function() {
    stepThreeBox.style.display = "block"
    styBox.style.display = 'none'
    bTwo.classList.remove('active')
    bThree.classList.add('active')
})
sthgbmBtn.addEventListener('click', function() {
    styBox.style.display = "block"
    stepThreeBox.style.display = 'none'
    bTwo.classList.add('active')
    bThree.classList.remove('active')
})
sthnmBtn.addEventListener('click', function() {
    sthyBox.style.display = "block"
    stepThreeBox.style.display = 'none'
})
sthgbyBtn.addEventListener('click', function() {
    sthyBox.style.display = "none"
    stepThreeBox.style.display = 'block'
})
sthnyBtn.addEventListener('click', function() {
    stepFourBox.style.display = "block"
    sthyBox.style.display = 'none'
    bFour.classList.add('active')
    bThree.classList.remove('active')
})
stfgbmBtn.addEventListener('click', function() {
    stepFourBox.style.display = "none"
    sthyBox.style.display = 'block'
    bFour.classList.remove('active')
    bThree.classList.add('active')
})
stfnmBtn.addEventListener('click', function() {
    stepFourBox.style.display = "none"
    stfyBox.style.display = 'block'
})
stfgbyBtn.addEventListener('click', function() {
    stepFourBox.style.display = "block"
    stfyBox.style.display = 'none'
})
stfnyBtn.addEventListener('click', function() {
    finalPage.style.display = 'flex';
    stfyBox.style.display = 'none'
})
