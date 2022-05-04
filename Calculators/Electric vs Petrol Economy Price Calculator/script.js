var inputCost=document.querySelector("input[name=cost]");
var labelCost=document.querySelector("label[for=cost]");
var inputMPG=document.querySelector("input[name=mpg]");
var labelMPG=document.querySelector("label[for=mpg]");
var inputMiles=document.querySelector("input[name=miles]");
var labelMiles=document.querySelector("label[for=miles]");
var inputKWH=document.querySelector("input[name=kWh]");
var labelKWH=document.querySelector("label[for=kWh]");
var inputWatts=document.querySelector("input[name=watts]");
var labelWatts=document.querySelector("label[for=watts]");
var costGas=document.querySelector(".cost-gas");
var costSavings=document.querySelector(".cost-savings");
var costDescription=document.querySelector(".cost-description");
var costElectric=document.querySelector(".cost-electric");
var graphElectric=document.querySelector(".graph-cost-electric");
var graphGas=document.querySelector(".graph-cost-gas");
var graphSavings=document.querySelector(".graph-cost-savings");
function update(){
	labelCost.textContent = "$" + Number.parseFloat(inputCost.value).toFixed(2) +" / Gallon";
	labelMPG.textContent = inputMPG.value +" MPG";
	labelMiles.textContent = formatWithCommas(inputMiles.value) + " Miles";
	labelKWH.textContent = inputKWH.value +"¢ / kWh";
	labelWatts.textContent = inputWatts.value +" Watts / Mile";
	var kilowatts=inputWatts.value/1000;
	
	var gas=Math.round((inputMiles.value/inputMPG.value)*inputCost.value);
	var electric = Math.round((inputMiles.value*kilowatts)*(inputKWH.value/100));
	
	costGas.textContent="$"+formatWithCommas(gas);
	costElectric.textContent="$"+formatWithCommas(electric);
	
	graphElectric.style.width=(electric/gas)*100+"%";
	graphGas.style.width="100%";
	graphSavings.style.width=(1-(electric/gas))*100+"%";
	
	costSavings.textContent = "$"+formatWithCommas(Math.abs(gas-electric));
	costDescription.textContent="Gas is "+(gas/electric).toFixed(1)+"× higher"
	
	if(gas < electric){
		graphElectric.style.width="100%";
		graphGas.style.width=(gas/electric)*100+"%";
		graphSavings.style.width=(1-(gas/electric))*100+"%";
		costDescription.textContent="Electric is "+(electric/gas).toFixed(1)+"× higher"
	}
	
}

function formatWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
update();