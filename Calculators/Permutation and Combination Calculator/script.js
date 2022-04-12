
// calculating factorial of the number

function factorial(x) {
    if (x === 0 || x === 1) {
        return 1n;
    }
    x = BigInt(x);
    var cur = BigInt(x-1n);
    while (cur>0n) {
        x = x*cur;
        cur = cur-1n;
    }
    console.log(x);
    return x;
}

const calculate = () => {
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;

    // checking if values are number
    if (n === "" || r === "" || isNaN(n) || isNaN(r)) {
        console.log("jowijoif");
        document.getElementById("alert").innerHTML = "Please provide correct values";
    } else {
        n = Number(n);
        r = Number(r);

        // if values are integers or not
        if (!Number.isInteger(n) || !Number.isInteger(r)) {
            document.getElementById("alert").innerHTML = "Please provide integer values";
            // checking if values are positive or not
        } else if (n < 0 || r < 0) { 
            document.getElementById("alert").innerHTML = "Please provide non negative values";
        } else if (n < r) {
            document.getElementById("alert").innerHTML = "n must be greater than or equal to r";
        } else {
            document.getElementById("alert").innerHTML = "";
            let permutation = factorial(n)/factorial(n-r);
            let combination = BigInt(permutation)/factorial(r);
            console.log(permutation);
            document.getElementById("per").innerHTML = permutation;
            document.getElementById("comb").innerHTML = combination;
        }
        
    }
}