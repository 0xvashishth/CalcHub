function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
const firstNum = document.getElementById("first");
const secondNum = document.getElementById("second");
const number = document.getElementsByClassName("value");

let fn;
let sn;

const btn = document.getElementById("calculate");
btn.addEventListener("click", function(e){
    fn = parseInt(firstNum.value);
    sn = parseInt(secondNum.value);
    let gcd = gcd_two_numbers(fn, sn);
    document.querySelector("p").innerHTML = "The Greatest Common Divisor of " + fn + " and " + sn + " is " + gcd;
    document.getElementById("result").innerHTML = "Thank You!";
});