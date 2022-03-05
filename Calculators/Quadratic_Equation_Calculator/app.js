//declaring variables
var a,
  b,
  c,
  d = 0,
  displayString = "",
  root1 = 0,
  root2 = 0;

// function to point out not-valid cases
function quadraticValue() {
  a = document.getElementById("a").value;
  b = document.getElementById("b").value;
  c = document.getElementById("c").value;

  //box not filled
  if (a === "" || b === "" || c === "")
    document.getElementById("e-text").innerHTML = "❌ Fill All 3 Boxes";
  else {
    //value of a is 0
    if (a == 0)
      document.getElementById("e-text").innerHTML =
        "❌ Error coefficient of x<sup>2</sup> should be >0";
    //no errors
    else calculateRoot();
  }
}

//function to display the determinant nature
function determinantValue() {
  if (d > 0) {
    displayString = "Both roots are Real & Distinct";
  } else if (d < 0) {
    displayString = "Both roots are Distinct & Imaginary";
  } else if (d == 0) {
    displayString = "Both roots are Real & Equal";
  }
  displayDet();

  function displayDet() {
    document.getElementById("e-text").innerHTML = displayString;
  }
}

//function to calculate roots
function calculateRoot() {
  d = b * b - 4 * a * c;
  determinantValue();

  //condition for real and different roots
  if (d > 0) {
    root1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
    root2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);

    // result
    displayRoot();
  }

  // condition for real and equal roots
  else if (d == 0) {
    root1 = root2 = (-b / (2 * a)).toFixed(2);

    // result
    displayRoot();
  }

  // if roots are not real
  else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);

    // result
    root1 = `${realPart} + ${imagPart}i`;
    root2 = `${realPart} - ${imagPart}i`;

    displayRoot();
  }
}

//function to display the roots value
function displayRoot() {
  document.getElementById("x1").innerHTML = root1;
  document.getElementById("x2").innerHTML = root2;
}
