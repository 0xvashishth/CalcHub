const valueCelsius = document.getElementById("celsius");
const valueKelvin = document.getElementById("kelvin");
const valueFahrenheit = document.getElementById("fahrenheit");
const valueRankine = document.getElementById("rankine");

const temp = document.getElementsByClassName("value");

for (let i = 0; i < temp.length; i++) {
  let input = temp[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    if (e.target.name == "celsius") {
      valueFahrenheit.value = value * 1.8 + 32;
      valueKelvin.value = value + 273.15;
      valueRankine.value = (value * (9/5)) + 491.67;
    } else if (e.target.name == "fahrenheit") {
      valueCelsius.value = (value - 32) / 1.8;
      valueKelvin.value = (value - 32) / 1.8 + 273.15;
      valueRankine.value = value - 459.67;
    } else if (e.target.name == "kelvin"){
      valueCelsius.value = value - 273.15;
      valueFahrenheit.value = (value - 273.15) * 1.8 + 32;
      valueRankine.value = value * (9/5);
    } else if (e.target.name == "rankine"){
      valueFahrenheit.value = value + 459.67;
      valueCelsius.value = (value - 491.67) * (5/9);
      valueKelvin.value = value * (5/9);
    }
  });
}
