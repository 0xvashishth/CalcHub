const form=document.querySelector(".form-container")
const submitBtn=document.querySelector(".submit")
form.addEventListener("submit",calculate);

function calculate(e){ 
    e.preventDefault();
    let a=document.querySelector(".num1").value;
    let b=document.querySelector(".num2").value;
    let res=gcd(a,b);
    const results=document.querySelector(".results");
    const gcdVal=document.querySelector(".gcd");
    const num1=document.querySelector(".n1");
    const num2=document.querySelector(".n2");
    gcdVal.innerText=res;
    num1.innerText=a;
    num2.innerText=b;
    results.classList.add("show");
}
function gcd(a,b){
    var r;
    while((a%b)>0){
        r=a%b
        a=b
        b=r
    }
    return b
}
