function calculate(){
    const formid = document.getElementById('Form');
    const principal = formid['princi'].value;
    const rate = formid['rate'].value;
    const tenure = formid['tenure'].value;

    principal_float = parseFloat(principal);
    rate_float = parseFloat(rate);
    tenure_float = parseFloat(tenure);

    rate_month = rate_float/12*100;
    nr = 1;
    for(let i=1; i<=tenure_float; i++)
    nr*=(1+rate_month);

    res = (principal * rate_month * nr)/(nr - 1);
    //alert(res);

    document.getElementById('res').innerHTML = res;

}

