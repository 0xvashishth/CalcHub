function select() {
    sel = document.getElementById("toCalc").value;

    switch (sel) {
        case "1": break;
        case "2": break;
        case "3": break;

        case "4":
            showPressure();
            break;
        case "5":
            showVolume();
            break;
        case "6":
            showTemp();
            break;
        case "7":
            showInEng();
            break;

    }

}
function calc() {
    sel = document.getElementById("toCalc").value;

    switch (sel) {
        case "1":
            calcVrms();
            break;
        case "2":
            calcVavg();
            break;
        case "3": 
            calcVmp();
            break;

        case "4":
            calcPressure();
            break;
        case "5":
            calcVolume();
            break;
        case "6":
            calcTemp();
            break;
        case "7":
            calcInEng();
            break;

    }

}


function calcVrms(){
    let ans= Math.sqrt(3*8.3145*(document.getElementById("2in").value)/document.getElementById("1in").value)
    document.getElementById("result").value=ans;
}
function calcVavg(){
    let ans= Math.sqrt(8*8.3145*(document.getElementById("2in").value)/(document.getElementById("1in").value * 3.14159))
    document.getElementById("result").value=ans;
}
function calcVmp(){
    let ans= Math.sqrt(2*8.3145*(document.getElementById("2in").value)/document.getElementById("1in").value)
    document.getElementById("result").value=ans;
}
function calcPressure(){
    let ans= ((document.getElementById("1in").value)*8.3145*(document.getElementById("2in").value)/document.getElementById("3in").value)
    document.getElementById("result").value=ans;
}
function calcVolume(){
    let ans= ((document.getElementById("1in").value)*8.3145*(document.getElementById("2in").value)/document.getElementById("3in").value)
    document.getElementById("result").value=ans;
}
function calcTemp(){
    let ans= ((document.getElementById("2in").value)*document.getElementById("3in").value/((document.getElementById("1in").value)*8.3145));
    document.getElementById("result").value=ans;
}
function calcInEng(){
    let ans= (8.3145*(document.getElementById("2in").value)*document.getElementById("1in").value*document.getElementById("3in").value)/2;
    document.getElementById("result").value=ans;
}



function showPressure() {
    document.getElementById("inputValues").innerHTML = `
    
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Number of Moles</span>
    <input id="1in" placeholder="in mol" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Temperature of Gas</span>
    <input id="2in" placeholder="in Kelvin (k)" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Volume of Gas</span>
    <input id="3in" placeholder="in m^3" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
                <div class="input-group mb-3">
                    <span class="input-group-text w-auto">Universal Gas Constant</span>
                    <input style="background-color:rgb(248, 251, 255);" disabled type="text" value="8.3145 M^1 L^2 T^-2 K^-1" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
                <div class="input-group">
                    <span  class="input-group-text w-auto">Result</span>
                    <input id="result" style="background-color:rgb(248, 251, 255);" disabled type="text" value="" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
    <button type="button" class="btn btn-secondary mt-4" onclick="calc()">Calculate</button>
    `
}
function showVolume() {
    document.getElementById("inputValues").innerHTML = `
    
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Number of Moles</span>
    <input id="1in" placeholder="in mol" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Temperature of Gas</span>
    <input id="2in" placeholder="in Kelvin (k)" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Pressure of Gas</span>
    <input id="3in" placeholder="in Pa" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
                <div class="input-group mb-3">
                    <span class="input-group-text w-auto">Universal Gas Constant</span>
                    <input style="background-color:rgb(248, 251, 255);" disabled type="text" value="8.3145 M^1 L^2 T^-2 K^-1" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
                <div class="input-group">
                    <span  class="input-group-text w-auto">Result</span>
                    <input id="result" style="background-color:rgb(248, 251, 255);" disabled type="text" value="" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
    <button type="button" class="btn btn-secondary mt-4" onclick="calc()">Calculate</button>
    `
}

function showTemp() {
    document.getElementById("inputValues").innerHTML = `
    
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Number of Moles</span>
    <input id="1in" placeholder="in mol" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Volume of Gas</span>
    <input id="2in" placeholder="in m^3" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Pressure of Gas</span>
    <input id="3in" placeholder="in Pa" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
                <div class="input-group mb-3">
                    <span class="input-group-text w-auto">Universal Gas Constant</span>
                    <input style="background-color:rgb(248, 251, 255);" disabled type="text" value="8.3145 M^1 L^2 T^-2 K^-1" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
                <div class="input-group">
                    <span  class="input-group-text w-auto">Result</span>
                    <input id="result" style="background-color:rgb(248, 251, 255);" disabled type="text" value="" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
    <button type="button" class="btn btn-secondary mt-4" onclick="calc()">Calculate</button>
    `
}

function showInEng() {
    document.getElementById("inputValues").innerHTML = `
    
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Number of Moles</span>
    <input id="1in" placeholder="in mol" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Temperature of Gas</span>
    <input id="2in" placeholder="in Kelvin (k)" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
<div class="input-group mb-3">
    <span class="input-group-text w-auto">Degree of Freedom</span>
    <input id="3in" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
                <div class="input-group mb-3">
                    <span class="input-group-text w-auto">Universal Gas Constant</span>
                    <input style="background-color:rgb(248, 251, 255);" disabled type="text" value="8.3145 M^1 L^2 T^-2 K^-1" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
                <div class="input-group">
                    <span  class="input-group-text w-auto">Result</span>
                    <input id="result" style="background-color:rgb(248, 251, 255);" disabled type="text" value="" class="form-control" aria-label="Amount (to the nearest dollar)">
                </div>
    <button type="button" class="btn btn-secondary mt-4" onclick="calc()">Calculate</button>
    `
}