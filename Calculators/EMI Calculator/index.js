function calculate(){
    const formid = document.getElementById('Form');
    const principal = formid['princi'].value;
    const rate = formid['rate'].value;
    const tenure = formid['tenure'].value;

    const principal_float = parseFloat(principal);
    const rate_float = parseFloat(rate); //rate in %
    const tenure_int = parseInt(tenure); // tenure in months , eg: 2 yrs=> 240 months 

    const rate_month = rate_float/ (12 * 100); //rate per moth => if rate is 10%, rate per month = 10/12 = 0.833%
    var nr = 1;
    for(var i=1; i<=tenure_int; i++)
    nr*=(1+rate_month);
    //alert(nr);

    var res = (principal * rate_month * nr)/(nr - 1);
    res_final = res.toFixed(2);
    //alert(res);
    
   /*const interest = principal_float * rate_float * tenure_float / 100 ;
   const amt = interest +  principal_float;
   const res = amt / tenure_float;*/

    document.getElementById('res').innerHTML = res_final;

}

