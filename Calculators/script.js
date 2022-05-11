function percentage_1() {
	var percent = document.getElementById("percent").value;
	var num = document.getElementById("num").value;
	document.getElementById("value1")
		.value = (num / 100) * percent;
}

function percentage_2() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	document.getElementById("value2")
		.value = (num1 * 100) / num2 + "%";
}
