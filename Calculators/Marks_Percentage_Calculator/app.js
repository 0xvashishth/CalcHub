const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");
const sub4 = document.getElementById("sub4");
const sub5 = document.getElementById("sub5");

document.getElementById("submit").addEventListener("click", result);

// Function to calculate

function result() {
  const val1 = parseInt(sub1.value);
  const val2 = parseInt(sub2.value);
  const val3 = parseInt(sub3.value);
  const val4 = parseInt(sub4.value);
  const val5 = parseInt(sub5.value);

  // Percentage Calculation Formula

  const res = ((val1 + val2 + val3 + val4 + val5) / 500) * 100;

  // To print the output

  const print = "You have secured " + res + " %";

  // Validate the inputs


  // Success and Error message

  if (isNaN(res) === true) {
    document.getElementById("result").innerHTML = "Please enter your marks correctly!";
  } else {
    document.getElementById("result").innerHTML = print;
  }
}