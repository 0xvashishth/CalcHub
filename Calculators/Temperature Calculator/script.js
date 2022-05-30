const valueCelsius = document.getElementById("celsius");
const valueKelvin = document.getElementById("kelvin");
const valueFahrenheit = document.getElementById("fahrenheit");

const temp = document.getElementsByClassName("value");

for (let i = 0; i < temp.length; i++) {
  let input = temp[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    if (e.target.name == "celsius") {
      valueFahrenheit.value = value * 1.8 + 32;
      valueKelvin.value = value + 273.15;
    } else if (e.target.name == "fahrenheit") {
      valueCelsius.value = (value - 32) / 1.8;
      valueKelvin.value = (value - 32) / 1.8 + 273.15;
    } else {
      valueCelsius.value = value - 273.15;
      valueFahrenheit.value = (value - 273.15) * 1.8 + 32;
    }
  });
}
