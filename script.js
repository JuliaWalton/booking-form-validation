const serviceSelect = document.getElementById('service'); 
const serviceSpecifySelect = document.getElementById('service-specify');

// should we change event to a select event or a change event? 
serviceSelect.addEventListener('change', (e) => {
    // console.log(e.target.value);
    let val = e.target.value;
    switch (val) {
        case "item1":
            serviceSpecifySelect.innerHTML = 
                `<option value="">--specify a type--</option>
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





const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];
// console.log(formSteps)
let currentStep = formSteps.findIndex((step, index) => {
        return step.classList.contains('active');
    })

    // console.log(currentStep);

    if (currentStep < 0) {
        currentStep = 0;
        // formSteps[currentStep].classList.add('active');
        showCurrentStep();
    }

    // console.log(currentStep); 
    
    
    function showCurrentStep() {
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep)
        })
    }




const inputs = [...formSteps[currentStep].querySelectorAll('input')];
const selects = [...formSteps[currentStep].querySelectorAll('select')];
// console.log(inputs)
// console.log(selects)


// inputs.forEach((input) => {
//     if(input.hasAttribute('required')) {

//     }
// })


const guestInput = document.getElementById('guests');
// const serviceSelect = document.getElementById('service'); 
// const serviceSpecifySelect = document.getElementById('service-specify');
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');


console.log(dateInput.getAttribute('min'))
let today = new Date().toISOString().slice(0, 10);
dateInput.setAttribute('min', today);
// let dd = today.getDate();
// let mm = today.getMonth();
// let yyyy = today.getFullYear();

// console.log(today)
// console.log(dd)
// console.log(mm + 1)
// console.log(yyyy)

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const password2Input = document.getElementById('password2')










        

    multiStepForm.addEventListener('click', (e) => {
        let incrementor; 
        if (e.target.matches('[data-next]')) {
            incrementor = 1;
        } else if (e.target.matches('[data-previous]')) {
            incrementor = -1;
        } else if (e.target.matches('[data-submit]')) {
            console.log('hhh')
            e.preventDefault();
            checkLength(passwordInput, 3, 20);
            
        } 

        if (incrementor === undefined) {
            return
        }

        const allSelectsValid = selects.every(select => select.reportValidity());
        const allInputsValid = inputs.every(input => input.reportValidity());
        
        console.log(inputs);
        console.log(allInputsValid)
        console.log(allSelectsValid)
        if(allInputsValid && allSelectsValid) {
            currentStep += incrementor;
            showCurrentStep();
            // checkEmail(emailInput);
            checkLength(passwordInput, 3, 20);
            // checkPasswordmatch(passwordInput, password2Input);
        }


        // if (formSteps[1]) {
        //     checkEmail(emailInput);
        // }



    })



const form = document.querySelector('.form')


// function checkEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     console.log(re.test(email.value.trim()))
//     if (re.test(email.value.trim())) {
//         console.log('success')
//     } else {
//         console.log('email is invalid')
//     }
// }


function checkLength(password, min, max) {
    if (password.value.length < min) {
        password.setAttribute('oninvalid', `this.setCustomValidity('Password must be at least ${min} characters')`);
    } else if (password.value.length > max) {
        password.setAttribute('oninvalid', `this.setCustomValidity('Password cannot exceed ${max} characters')`);
    } else {
        return;
    }
}




// form.addEventListener('submit', (e) => {
//     console.log('wtrf')
// //     // const allSelectsValid = selects.every(select => select.reportValidity());
// //     // const allInputsValid = inputs.every(input => input.reportValidity());
// //     // console.log(inputs);
// //     //     console.log(allInputsValid)
// //     //     console.log(allSelectsValid)
// //     // if(allInputsValid && allSelectsValid) {
// //         checkLength(passwordInput, 3, 20);
// //         checkPasswordmatch(passwordInput, password2Input);
// //     // }
// //     // e.preventDefault();
//     checkLength(passwordInput, 3, 20);
//     checkPasswordmatch(passwordInput, password2Input)
// })