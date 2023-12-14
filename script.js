// populate service options
const serviceSelect = document.getElementById('service'); 
const serviceSpecifySelect = document.getElementById('service-specify');

serviceSelect.addEventListener('change', (e) => {
    // console.log(e.target.value);
    let val = e.target.value;
    switch (val) {
        case "item1":
            serviceSpecifySelect.innerHTML = 
                `<option value="none">--specify a type--</option>
                <option value="massage1">aromatherapy massage</option>
                <option value="massage2">fire and ice massage</option>
                <option value="massage3">prenatal massage</option>
                <option value="massage4">foot massage</option>
                <option value="massage5">couples massage</option>`
            break;
        case "item2":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="skincare1">hydrating & brightening facial</option>
                <option value="skincare2">texture balance + oil control facial</option>
                <option value="skincare3">pore extraction and acne facial</option>
                <option value="skincare4">anti-aging red LED therapy</option>
                <option value="skincare5">wax treatments</option>`
            break;
        case "item3":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="haircare1">deep conditioning treatment</option>
                <option value="haircare2">simple trim + styling</option>
                <option value="haircare3">cut and color</option>
                <option value="haircare4">blowout</option>`
            break;
        case "item4":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="gentlemen1">haircut and clean shave</option>
                <option value="gentlemen2">hot wax brow and beard shaping</option>
                <option value="gentlemen3">anti-aging lymphatic massage + facial</option>
                <option value="gentlemen4">master sports massage</option>
                <option value="gentlemen5">couples massage</option>`
            break;
        case "item5":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
                <option value="package1">bridal pamper package</option>
                <option value="package2">best for mom package</option>
                <option value="package3">couples paradise package</option>
                <option value="package4">men's selfcare package</option>`
            break;
}
})







const form = document.querySelector('.form')
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const password2Input = document.getElementById('password2')
const guestInput = document.getElementById('guests');
const dateInput = document.getElementById('date');

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
    return false; 
}

// Show success 
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
    return true;
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// date input validation - enable only current date and 2 yrs beyond to be selected
let today = new Date().toISOString().slice(0, 10);
dateInput.setAttribute('min', today);
console.log(dateInput)
console.log(dateInput.getAttribute('min'))

function checkDate(dateInput) {
    let today = new Date().toISOString().slice(0, 10);
    dateInput.setAttribute('min', today);
    let oneYearFromNow = new Date().getFullYear();
    dateInput.setAttribute('max', oneYearFromNow);

    if (dateInput.value > oneYearFromNow) {
        showError(dateInput, 'You cannot book this far in advance');
    } else {
        showSuccess(dateInput)
    }
}

function checkGuests(guests, min, max) {
    if (guests.value < min) {
        showError(guests, `Must book at least ${min} guest`);
    } else if (guests.value > max) {
        showError(guests, `Cannot book more than ${max} guests`);
    } else {
        showSuccess(guests);
    }
}

function checkNames(fname, lname) {
    if (fname.value !== "") {
        showSuccess(fname);
    }
    if (lname.value !== "") {
        showSuccess(lname);
    }
}

function checkEmail(email) {
    console.log('email.test')
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(re.test(email.value.trim()))
        if (re.test(email.value.trim())) {
            showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }
    }


// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
    }

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        console.log('pass check')
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input2);
    }
    }


const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

console.log(formSteps)
let currentStep = formSteps.findIndex((step, index) => {
        return step.classList.contains('active');
    })

    // the current step will return -1 if a class does not contain active
    if (currentStep < 0) {
        currentStep = 0;
        showCurrentStep();
    }

    function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep)
    })
}


let incrementor;
let validation = true;

// validation loop & signal to go to next step
function nextStep() {
const inputs = [...formSteps[currentStep].querySelectorAll('input')];
const selects = [...formSteps[currentStep].querySelectorAll('select')];

    selects.forEach((select) => {
        const checksPass = (currentValue) => currentValue.value !== "none";

        if (select.classList.contains('required')) { 
                if (select.value === "none") {
                    select.style.backgroundColor = "pink";
                    showError(select, `Selecting a service is required`);
                    validation = false;
                }  else if (selects.every(checksPass) === true) {
                    validation = true;
                    showSuccess(select);
                    select.style.backgroundColor = "white";
                }
        } 
    })

    inputs.forEach((input) => {
        if (input.classList.contains('required')) { 
            if (input.value.trim() === "") {
                input.style.backgroundColor = "pink";
                showError(input, `${getFieldName(input)} is required`);
                validation = false;
            } else if (currentStep === 0) {
                checkDate(dateInput);
                checkGuests(guestInput, 1, 10);
                const checksPass = (currentValue) => currentValue.parentElement.classList.contains('success');
                console.log(inputs.every(checksPass))

                if (inputs.every(checksPass) == true ) {
                    validation = true;
                }
            }
            else if(currentStep === 1) {
                checkLength(passwordInput, 6, 25);
                checkEmail(emailInput);
                checkPasswordsMatch(passwordInput, password2Input);
                checkNames(fnameInput, lnameInput);

                const hasSuccess = (currentValue) => currentValue.parentElement.classList.contains('success');
                console.log(inputs.every(hasSuccess))

                if (inputs.every(hasSuccess) == true ) {
                    incrementor = 1;
                    currentStep += incrementor;
                    showCurrentStep();
                }
            } else {
                validation = true;
            }
        } else {
            validation = true;
            const formGroup = input.parentElement;
            formGroup.className = 'form-group success';
            }
    })
}

const nextBtn = document.querySelector('[data-next]');
const prevBtn = document.querySelector('[data-previous]');
const submitBtn = document.querySelector('[data-submit]');

nextBtn.addEventListener('click', (e) => {
    nextStep();
    if (validation === true) {
    incrementor = 1;
    currentStep += incrementor;
    showCurrentStep();
    }
})

prevBtn.addEventListener('click', (e) => {
    incrementor = -1;
    currentStep += incrementor;
    showCurrentStep();
})

submitBtn.addEventListener('click', (e) => {
    nextStep();
})

