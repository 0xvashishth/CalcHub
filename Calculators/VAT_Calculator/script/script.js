const netPrice = document.querySelector("#net-price");
const vatRate = document.querySelector("#vat-rate");
const vatAdded = document.querySelector("#vat-added")
const incAmount = document.querySelector("#inc-amount");
const calcBtn = document.querySelector("#calc-btn")
const resetBtn = document.querySelector("#reset-btn")

function VATInclusiveAmount(price, rate) {
	let vatAddedPrice = Number((price * (rate / 100)));
	vatAdded.value = vatAddedPrice.toFixed(2);
	let totalAmount = Number(price) + vatAddedPrice;
	return totalAmount;
}

calcBtn.addEventListener('click', function() {
	if (netPrice.value === "" || isNaN(netPrice.value)) {
		netPrice.style.border = "1px solid red";

		setTimeout(function() {
			netPrice.style.border = "1px solid transparent";
		}, 1500);

		netPrice.value = "";
	}

	if (vatRate.value === "" || isNaN(vatRate.value)) {
		vatRate.style.border = "1px solid red";

		setTimeout(function() {
			vatRate.style.border = "1px solid transparent";
		}, 1500);

		vatRate.value = "";
	}

	let finalAmount = VATInclusiveAmount((netPrice.value), (vatRate.value));
	incAmount.value = finalAmount;


})

resetBtn.addEventListener("click", function() {
	netPrice.value = "";
	vatRate.value = "";
	vatAdded.value = "";
	incAmount.value = "";
})
