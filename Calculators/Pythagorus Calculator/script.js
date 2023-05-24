function calculateThirdSide() {
    let side1 = parseFloat(document.getElementById('side1').value);
    let side2 = parseFloat(document.getElementById('side2').value);

    if (isNaN(side1) || isNaN(side2)) {
        alert("Please enter valid numbers for both sides.");
        return;
    }

    let thirdSide = Math.sqrt(side1 * side1 + side2 * side2);

    document.getElementById('result').innerHTML = "The length of the third side is: " + thirdSide.toFixed(2);
}