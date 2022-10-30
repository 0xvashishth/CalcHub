const form = document.getElementById('form');
const principal = document.getElementById('principal');
const rate = document.getElementById('rate');
const time = document.getElementById('time');
const resultInterest = document.getElementById('resultInterest');
const resultAmount = document.getElementById('resultAmount');
const resultElement = document.getElementById('result');

let p = 0;
let r = 0;
let t = 0;
let interest = 0;
let amount = 0;

function resetInputs() {
    principal.value = '';
    rate.value = '';
    time.value = '';
    resultInterest.innerText = '';
    resultAmount.innerText = '';
    resultElement.classList.add('hide');
    document.getElementById('errorMsgP').innerText = document.getElementById('errorMsgR').innerText = document.getElementById('errorMsgN').innerText = '';
    document.getElementById('errorMsgP').removeAttribute("class", "alert alert-warning");
    document.getElementById('errorMsgR').removeAttribute("class", "alert alert-warning");
    document.getElementById('errorMsgN').removeAttribute("class", "alert alert-warning");
}

function checkNumber(id, eid) {
    let p = document.getElementById(id).value;
    if (p < 0) {
        document.getElementById(eid).innerText = "Please enter a positive number";
        document.getElementById(eid).setAttribute("class", "alert alert-warning");
        return;
    } else {
        document.getElementById(eid).innerText = "";
        document.getElementById(eid).removeAttribute("class", "alert alert-warning");
    }
}

function checkNumberP() {
    checkNumber('principal', 'errorMsgP');
}
function checkNumberR() {
    checkNumber('rate', 'errorMsgR');
}
function checkNumberN() {
    checkNumber('time', 'errorMsgN');
}

principal.addEventListener('input', (e) => {
    resultElement.classList.add('hide');
})


const calculateInterest = () => {
    p = parseFloat(principal.value);
    r = parseFloat(rate.value);
    t = parseFloat(time.value);

    interest = ((p * r * t) / 100);
    resultInterest.innerText = `₹ ${interest.toFixed(2)}`;
}

const calculateAmount = () => {
    amount = (p + interest);
    resultAmount.innerText = `₹ ${amount.toFixed(2)}`;
}


console.log("form")
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (0 > parseInt(principal.value) || 0 > rate.value || 0 > time.value) {
        return;
    }
    resultElement.classList.remove('hide');
    calculateInterest();
    calculateAmount();
})