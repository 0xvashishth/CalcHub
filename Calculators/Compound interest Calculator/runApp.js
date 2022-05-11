function runApp() {
    //Declare shorter var names to improve readability
    let PV = document.getElementById('base-amount').value;
    let i = document.getElementById('interest-rate').value / 100;
    let n = document.getElementById('period').value;
    let A = document.getElementById('compounded').value;
    let Result = Math.round(PV * Math.pow(1 + (i / A), n * A));
    let interestValue = Result - PV;
    let res = Result.toString();
    document.getElementById('total-value').textContent = "Total Value Earned : " + res;
    document.getElementById('interest-earned').textContent = "Interest Accumulated : " + interestValue;

}
