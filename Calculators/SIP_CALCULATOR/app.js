
function calculate(){
    var principal = parseFloat(document.getElementById("MIA").value);
	var period = parseFloat(document.getElementById("IP").value);
//  var freq = parseFloat(document.getElementById("frequency").value);
	var freq = 1
	var rateofreturn = parseFloat(document.getElementById("EAR").value);	
	if (isNaN(principal)) {
		alert("Please enter Amount Invested in each Installment");
	} else if (isNaN(period)) {
		alert("Please enter No of Years");
	}else if (isNaN(rateofreturn)) {
		alert("Please enter Rate of Return");
	} else {
		var ia = principal;
		var totalcompper = (12/freq)*period;
		var int_rate_per_period = rateofreturn/(12/freq)/100;	
		var totalamount = period*ia*12;
		var ans =  ia*((Math.pow(1+int_rate_per_period, totalcompper)-1)/int_rate_per_period)*(1+int_rate_per_period);
        document.getElementById("ans").innerText =  ans;	
	}
}

	


