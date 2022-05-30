let a = document.getElementById("base");

let base = 0;
a.addEventListener('input',function(){
    base = a.value;
});
let argument = 0;

let b = document.getElementById("Argument");

b.addEventListener('input',function(){
    argument = b.value;
});

let submit = document.getElementById("submit");
submit.addEventListener('click',function(){
    let answer = 0;
    if(base==='')
    {
        answer = Math.log(argument);
    }
    else
    {
        answer = Math.log(argument)/Math.log(base);
    }
    
    
    let ans =  document.getElementById("ans");
    ans.innerText = answer;
});

let reset = document.getElementById("Reset");
reset.addEventListener('click',function(){
    document.getElementById("base").value='';
    document.getElementById("Argument").value='';
    document.getElementById("ans").innerText ="";
})

let antiBase = document.getElementById("Antibase");
let antiArgument = document.getElementById("AntiArgument");
let baseanti = 0;
let argumentanti = 0;
antiBase.addEventListener('input',function(){
    baseanti = antiBase.value;
});

antiArgument.addEventListener('input',function(){
    argumentanti = antiArgument.value;
});

let antiSubmit = document.getElementById("Antisubmit");

antiSubmit.addEventListener('click',function(){
    let antiAnswer = 0;
    if(baseanti==='')
    {
        antiAnswer = Math.exp(argumentanti);
    }
    else
    {
        antiAnswer = Math.pow(baseanti,argumentanti);
    }
    
    let ansAnti =  document.getElementById("Antians");
    ansAnti.innerText = antiAnswer;
});

let antiReset = document.getElementById("AntiReset");
antiReset.addEventListener('click',function(){
    document.getElementById("Antibase").value='';
    document.getElementById("AntiArgument").value='';
    document.getElementById("Antians").innerText ="";
})


