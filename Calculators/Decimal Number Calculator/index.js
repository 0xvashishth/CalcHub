
const decimalNum = document.getElementById("d");
const binaryNum = document.getElementById("b");
const hexadecimalNum = document.getElementById("h");
const octalNum = document.getElementById("o");

const number = document.getElementsByClassName("value");

for (let i = 0; i < number.length; i++) {
  let input = number[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    let temp;

    if (e.target.name == "decimal") {
      binaryNum.value = value.toString(2);
      hexadecimalNum.value = value.toString(16);
      octalNum.value = value.toString(8);
    } 
    else if (e.target.name == "binary") {
        decimalNum.value = parseInt(value,2);
        hexadecimalNum.value = parseInt(value, 2).toString(16);
        octalNum.value = parseInt(value,2).toString(8);
    } 
    else if (e.target.name == "hexadecimal") {
        decimalNum.value = parseInt(value,16);
        binaryNum.value= parseInt(value,16).toString(2);
        octalNum.value = parseInt(value,16).toString(8);
    }
    else if(e.target.name == "octal"){
        binaryNum.value = parseInt(value,8).toString(2);
        hexadecimalNum.value = parseInt(value,8).toString(16);
        decimalNum.value = parseInt(value,8);
    }
  });
}