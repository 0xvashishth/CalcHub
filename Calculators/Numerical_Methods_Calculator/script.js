
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var m = document.getElementById(`method`).value;
  console.log(m)
  if (m == "Euler Method") {
    solveEuler();
  }
  else if (m == "Improved Euler Method") {
    solveImprovedEuler();
  }
  else if (m == "R-K Method") {
    solveRK();
  }
});


function solveEuler() {
  const myFunction = document.getElementById("functionInput").value;
  const x0 = parseFloat(document.getElementById("x0Input").value);
  const y0 = parseFloat(document.getElementById("y0Input").value);
  const h = parseFloat(document.getElementById("stepHeightInput").value);
  const n = parseFloat(document.getElementById("nInput").value);

  // Define the derivative function (dy/dx)
  function derivative(x, y) {
    if (myFunction.includes("sqrt")) {
      const func = new Function("x", "y", `return Math.sqrt(y)`);
      return func(x, y);
    } else if (myFunction.includes("log")) {
      const func = new Function("x", "y", `return Math.log(y)`);
      return func(x, y);
    } else {
      const func = new Function("x", "y", `return (${myFunction})`);
      return func(x, y);
    }
  }

  // Euler's method for solving the initial value problem
  function eulerMethod(h, x0, y0, xTarget) {
    let x = x0;
    let y = y0;

    let results = "";

    while (x <= xTarget) {
      const slope = derivative(x, y);
      results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
      y += h * slope;
      x += h;
      x = parseFloat(x.toFixed(10)); // Handle floating-point precision error
    }

    return results;
  }

  const xTarget = n;

  const results = eulerMethod(h, x0, y0, xTarget);
  document.getElementById("output").innerHTML = results;
}







function solveImprovedEuler() {
  const myFunction = document.getElementById("functionInput").value;
  const x0 = parseFloat(document.getElementById("x0Input").value);
  const y0 = parseFloat(document.getElementById("y0Input").value);
  const h = parseFloat(document.getElementById("stepHeightInput").value);
  const n = parseFloat(document.getElementById("nInput").value);

  // Define the derivative function (dy/dx)
  function derivative(x, y) {
    if (myFunction.includes("sqrt")) {
      const func = new Function("x", "y", `return Math.sqrt(y)`);
      return func(x, y);
    } else if (myFunction.includes("log")) {
      const func = new Function("x", "y", `return Math.log(y)`);
      return func(x, y);
    } else {
      const func = new Function("x", "y", `return (${myFunction})`);
      return func(x, y);
    }
  }

  function improvedEulerMethod(h, x0, y0, xTarget) {
    let x = x0;
    let y = y0;

    let results = "";

    while (x <= xTarget) {
      const slope = derivative(x, y);
      results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
      const predictor = y + h * slope;
      const correctedSlope = derivative(x + h, predictor);
      y += (h / 2) * (slope + correctedSlope);
      x += h;
      x = parseFloat(x.toFixed(100)); // Handle floating-point precision error
    }

    return results;
  }

  const xTarget = n;

  const results = improvedEulerMethod(h, x0, y0, xTarget);
  document.getElementById("output").innerHTML = results;
}






// Runge-Kutta Method
function solveRK() {
  const myFunction = document.getElementById("functionInput").value;
  const x0 = parseFloat(document.getElementById("x0Input").value);
  const y0 = parseFloat(document.getElementById("y0Input").value);
  const h = parseFloat(document.getElementById("stepHeightInput").value);
  const n = parseFloat(document.getElementById("nInput").value);

  // Define the derivative function (dy/dx)
  function derivative(x, y) {
    if (myFunction.includes("sqrt")) {
      const func = new Function("x", "y", `return Math.sqrt(y)`);
      return func(x, y);
    } else if (myFunction.includes("log")) {
      const func = new Function("x", "y", `return Math.log(y)`);
      return func(x, y);
    } else {
      const func = new Function("x", "y", `return (${myFunction})`);
      return func(x, y);
    }
  }

  function rkMethod(h, x0, y0, xTarget) {
    let x = x0;
    let y = y0;

    let results = "";

    while (x <= xTarget) {
      const k1 = h * derivative(x, y);
      const k2 = h * derivative(x + h / 2, y + k1 / 2);
      const k3 = h * derivative(x + h / 2, y + k2 / 2);
      const k4 = h * derivative(x + h, y + k3);

      const k = (k1 + 2 * k2 + 2 * k3 + k4) / 6;

      results += `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}<br>`;
      y += k;
      x += h;
      x = parseFloat(x.toFixed(100)); // Handle floating-point precision error
    }

    return results;
  }

  const xTarget = n;

  const results = rkMethod(h, x0, y0, xTarget);
  document.getElementById("output").innerHTML = results;
}

