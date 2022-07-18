const principal = document.getElementById("initialMoney");
const rate = document.getElementById("interestRate");
const time = document.getElementById("years");
const e = document.getElementById("ddlitems").options;
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const p = document.querySelector(".error");
const answer = document.getElementById("answer");
const money = document.getElementById("money");
let amount, index;

function calculate(p, r, n, t) {
  if (index == 0) {
    n = 1;
  }
  if (index == 1) {
    n = 2;
  }
  if (index == 2) {
    n = 4;
  }
  if (index == 3) {
    n = 12;
  }
  let multiply = n * t;
  let addition = 1 + (r / 100) * n;
  let power = Math.pow(addition, multiply);
  amount = p * power;
}

calculateBtn.addEventListener("click", () => {
  let initialMoney = principal.value;
  let interestRate = rate.value;
  let years = time.value;
  index = e.selectedIndex;
  if (initialMoney == "") {
    displayError("Initial Money");
    removeError();
  } else if (interestRate == "") {
    displayError("Intrest Rate");
    removeError();
  } else if (years == "") {
    displayError("number of years");
    removeError();
  } else if (initialMoney == "" && interestRate == "" && years == "") {
    displayError("all the values");
    removeError();
  } else {
    calculate(initialMoney, interestRate, index, years);
    answer.textContent = `Total amount after ${years} years will be`;
    money.textContent = `${amount.toFixed(2)} Rs.`;
  }
});

resetBtn.addEventListener("click", () => {
  principal.value = "";
  rate.value = "";
  time.value = "";
  answer.value = "";
  answer.textContent = "";
  money.textContent = "";
});

function displayError(error) {
  p.textContent = `Please enter ${error}`;
  p.classList.remove("display");
}

function removeError() {
  setTimeout(() => {
    p.classList.add("display");
  }, 2500);
}
