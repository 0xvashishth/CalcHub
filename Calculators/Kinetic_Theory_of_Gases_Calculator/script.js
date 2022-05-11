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
    stepsVrms(ans);
}
function calcVavg(){
    let ans= Math.sqrt(8*8.3145*(document.getElementById("2in").value)/(document.getElementById("1in").value * 3.14159))
    document.getElementById("result").value=ans;
    stepsVav(ans);
}
function calcVmp(){
    let ans= Math.sqrt(2*8.3145*(document.getElementById("2in").value)/document.getElementById("1in").value)
    document.getElementById("result").value=ans;
    stepsVmp(ans);
}
function calcPressure(){
    let ans= ((document.getElementById("1in").value)*8.3145*(document.getElementById("2in").value)/document.getElementById("3in").value)
    document.getElementById("result").value=ans;
    stepsPressure(ans);
}
function calcVolume(){
    let ans= ((document.getElementById("1in").value)*8.3145*(document.getElementById("2in").value)/document.getElementById("3in").value)
    document.getElementById("result").value=ans;
    stepsVolume(ans);
}
function calcTemp(){
    let ans= ((document.getElementById("2in").value)*document.getElementById("3in").value/((document.getElementById("1in").value)*8.3145));
    document.getElementById("result").value=ans;
    stepsTemp(ans);
}
function calcInEng(){
    let ans= (8.3145*(document.getElementById("2in").value)*document.getElementById("1in").value*document.getElementById("3in").value)/2;
    document.getElementById("result").value=ans;
    stepsInEnergy(ans);
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


function stepsVrms(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Molar Mass = ${document.getElementById("1in").value}</div>
            <div class="m-2">Temperature = ${document.getElementById("2in").value}</div>
            <div class="m-2">V<sub>RMS</sub>=&#8730(3*R*T/M)</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2">V<sub>RMS</sub>=&#8730(3*8.3145*${document.getElementById("1in").value}/${document.getElementById("2in").value})</div>
            <div class="m-2">V<sub>RMS</sub>=${ans} m/s</div>   
    </div>
    `
}

function stepsVav(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
    Given,
    <div class="m-2">Molar Mass = ${document.getElementById("1in").value}</div>
    <div class="m-2">Temperature = ${document.getElementById("2in").value}</div>
    <div class="m-2">V<sub>AVG</sub>=&#8730(8*R*T/(&#8508*M))</div>
    <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
    <div class="m-2">V<sub>RMS</sub>=&#8730(8*8.3145*${document.getElementById("1in").value}/(${document.getElementById("2in").value}*3.14))</div>
    <div class="m-2">V<sub>RMS</sub>=${ans} m/s</div>   
    </div>
    `
}

function stepsVmp(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Molar Mass = ${document.getElementById("1in").value}</div>
            <div class="m-2">Temperature = ${document.getElementById("2in").value}</div>
            <div class="m-2">V<sub>MP</sub>=&#8730(2*R*T/M)</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2">V<sub>MP</sub>=&#8730(2*8.3145*${document.getElementById("1in").value}/${document.getElementById("2in").value})</div>
            <div class="m-2">V<sub>MP</sub>=${ans} m/s</div>   
    </div>
    `
}

function stepsPressure(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Number of moles = ${document.getElementById("1in").value}</div>
            <div class="m-2">Temperature of Gas = ${document.getElementById("2in").value}</div>
            <div class="m-2">Volume of Gas = ${document.getElementById("3in").value}</div>
            <div class="m-2">Using Ideal Gas Law:</div>
            <div class="m-3">P*V=N*R*T</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2">P = N*R*T/V </div>
            <div class="m-2">P = ${document.getElementById("1in").value}*8.3145*${document.getElementById("2in").value}/${document.getElementById("3in").value} </div>

            <div class="m-2">Pressure =${ans} Pa</div>   
    </div>
    `
}

function stepsVolume(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Number of moles = ${document.getElementById("1in").value}</div>
            <div class="m-2">Temperature of Gas = ${document.getElementById("2in").value}</div>
            <div class="m-2">Pressure of Gas = ${document.getElementById("3in").value}</div>
            <div class="m-2">Using Ideal Gas Law:</div>
            <div class="m-3">P*V=N*R*T</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2">V = N*R*T/P </div>
            <div class="m-2">V = ${document.getElementById("1in").value}*8.3145*${document.getElementById("2in").value}/${document.getElementById("3in").value} </div>

            <div class="m-2">Volume =${ans} m<sup>3</sup></div>   
    </div>
    `
}

function stepsTemp(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Number of moles = ${document.getElementById("1in").value}</div>
            <div class="m-2">Volume of Gas = ${document.getElementById("2in").value}</div>
            <div class="m-2">Pressure of Gas = ${document.getElementById("3in").value}</div>
            <div class="m-2">Using Ideal Gas Law:</div>
            <div class="m-3">P*V=N*R*T</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2">T = (P*V)/(N*R) </div>
            <div class="m-2">T = (${document.getElementById("2in").value}*${document.getElementById("3in").value})/(${document.getElementById("1in").value}* 8.3145) </div>

            <div class="m-2">Temperature =${ans} K</div>   
    </div>
    `
}

function stepsTemp(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Number of moles = ${document.getElementById("1in").value}</div>
            <div class="m-2">Volume of Gas = ${document.getElementById("2in").value}</div>
            <div class="m-2">Pressure of Gas = ${document.getElementById("3in").value}</div>
            <div class="m-2">Using Ideal Gas Law:</div>
            <div class="m-3">P*V=N*R*T</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2">T = (P*V)/(N*R) </div>
            <div class="m-2">T = (${document.getElementById("2in").value}*${document.getElementById("3in").value})/(${document.getElementById("1in").value}* 8.3145) </div>

            <div class="m-2">Temperature =${ans} K</div>   
    </div>
    `
}

function stepsInEnergy(ans){
    document.getElementById("steps").innerHTML = `
    
    <div>
        Given,
            <div class="m-2">Number of moles = ${document.getElementById("1in").value}</div>
            <div class="m-2">Temperature of Gas = ${document.getElementById("2in").value}</div>
            <div class="m-2">Degree of freedom of Gas = ${document.getElementById("3in").value}</div>
            
            <div class="m-2">Internal Energy(U) = (Degree of Freedom(F) * N*R*T/2</div>
            <div class="m-2">Here R = 8.3145 ML<sup>2</sup>T<sup>-2</sup>k<sup>-1</sup> </div>
            <div class="m-2"> U = F*N*R*T/2 </div>
            <div class="m-2">U = ${document.getElementById("3in").value}*${document.getElementById("1in").value}*8.3145*${document.getElementById("2in").value}/2) </div>

            <div class="m-2">Internal Energy =${ans} Joules</div>   
    </div>
    `
}




