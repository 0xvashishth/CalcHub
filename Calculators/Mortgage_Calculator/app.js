//text imputs

const totalCost = document.getElementById('total-cost');
const anInitialFee = document.getElementById('an-initial-fee');
const creditTerm = document.getElementById('credit-term');

//range inputs

const totalCostRange = document.getElementById('total-cost-range');
const anInitialFeeRange = document.getElementById('an-initial-fee-range');
const creditTermRange = document.getElementById('credit-term-range');

// calculated

const totalAmountOfCredit = document.getElementById('amount-of-credit');
const totalMonthlyPayment = document.getElementById('monthly-payment');
const totalRecommendedIncome = document.getElementById('recommended-income');

// total ranges

const inputsRange = document.querySelectorAll('.input-range');

// total banks %

const bankBtns = document.querySelectorAll('.bank');

if (totalCostRange.value < 0) {
  totalAmountOfCredit.innerHTML = '0';
  totalMonthlyPayment.innerHTML = '0';
  totalRecommendedIncome.innerHTML = '0';
}

const assignValue = () => {
  totalCost.value = totalCostRange.value;
  anInitialFee.value = anInitialFeeRange.value;
  creditTerm.value = creditTermRange.value;
};

assignValue();

const banks = [{
    name: 'Sate-Bank-Of-India',
    percent: 8.7
  },
  {
    name: 'Axis-Bank',
    percent: 8.4
  },
  {
    name: 'ICICI-Bank',
    percent: 7.9
  },
  {
    name: 'Bank-Of-India',
    percent: 9.2
  }
];

let currentPercent = banks[0].percent;

for (const bank of bankBtns) {
  bank.addEventListener('click', () => {
    for (const item of bankBtns) {
      item.classList.remove('active');
    }
    bank.classList.add('active');
    takeActiveBank(bank);
  });
}

const takeActiveBank = (currentActive) => {
  const dataAttrValue = currentActive.dataset.name;
  const currentBank = banks.find(bank => bank.name == dataAttrValue);
  currentPercent = currentBank.percent;
  calculation(totalCost.value, anInitialFee.value, creditTerm.value);
};

for (const input of inputsRange) {
  input.addEventListener('input', () => {
    assignValue();
    calculation(totalCost.value, anInitialFee.value, creditTerm.value);
  });
}

const calculation = (totalCost = 0, anInitialFee = 100000, creditTerm = 1) => {


  let monthlyPayent;
  let lounAmout = totalCost - anInitialFee; 
  let interestRate = currentPercent; 
  let numberOfYears = creditTerm; 
  let numberOfMonths = 12 * numberOfYears; 

  monthlyPayent = (lounAmout + (((lounAmout / 100) * interestRate) / 12) * numberOfMonths) / numberOfMonths;
  const monthlyPayentArounded = Math.round(monthlyPayent);
  if (monthlyPayentArounded < 0) {
    return false;
  } else {
    totalAmountOfCredit.innerHTML = `${lounAmout} $`;
    totalMonthlyPayment.innerHTML = `${monthlyPayentArounded} $`;
    totalRecommendedIncome.innerHTML = `${monthlyPayentArounded + ((monthlyPayentArounded / 100) * 35)} $`;
  }
};
