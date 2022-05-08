function calc() {
    if (document.getElementById("input").value != "") {
        var n = document.getElementById("input").value;
        var res = [];
        if (n < 0) {
            n *= -1;
        }
        for (var i = 1; i <= (n / i); i++) {
            if (n % i == 0) {
                res.push(i);
                if ((i * i) != n)
                    res.push(n / i);; // to remove any duplicates
            }
        }
        res.sort(function (a, b) {
            return a - b
        }); // Sorting result array

        document.getElementById('dNb').innerHTML = res.length;
        document.getElementById('d').innerHTML = res;
        document.getElementById('dSum').innerHTML = res.reduce((a, b) => a + b, 0); // Calculating Divisors Sum
    } else {
        alert("Please input a number before clicking on calculate button");
    }
}

function reset() {
    document.getElementById("input").value = "";
    document.getElementById('dNb').innerHTML = ".....";
    document.getElementById('d').innerHTML = ".....";
    document.getElementById('dSum').innerHTML = ".....";
}