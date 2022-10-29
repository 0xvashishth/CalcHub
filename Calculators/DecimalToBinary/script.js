function resetInput() {
    document.getElementById("decimalNum").value = "";
    document.getElementById("output").innerText = "";
}

function decimalToBinary() {
    console.log("called");
    let decimal = document.getElementById("decimalNum").value;
    if (0 > decimal) {
        document.getElementById("output").innerText = "";
        document.getElementById("errorMsg").setAttribute("class", "alert alert-warning");
        document.getElementById("errorMsg").innerText = "Please Enter Positive Number";
        return;
    }
    document.getElementById("errorMsg").innerText = "";
    document.getElementById("errorMsg").removeAttribute("class", "alert alert-danger");
    let binary = '';
    if (0 == decimal) {
        binary = '0';
    } else {
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }
    }

    document.getElementById("output").innerText = binary;
    //return binary;
};