 function calc(){
        var num1 = document.getElementById("a").value;
        var num2 = document.getElementById("b").value;
        var num3 = document.getElementById("c").value;
        var amount = num1*(Math.pow(1+num3/100,num2));
        var calc = amount-num1;
        document.getElementById("res").innerHTML = "Amount : "+amount.toFixed(2)+"<br> Compound Interest : "+calc.toFixed(2);
}
                
