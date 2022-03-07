let a = document.getElementById("base");

let base = 0;
a.addEventListener('input',function(){
    base = a.value;
});
let valu = 0;

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
})