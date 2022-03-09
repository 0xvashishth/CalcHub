const select=document.querySelectorAll(".currency");
const btn=document.getElementById("btn");
const input=document.getElementById("in")
const output=document.getElementById("out")

fetch(`https://api.frankfurter.app/currencies`)
.then((data) => data.json())
.then((data) =>{
    display(data);
});

function display(data){
    const entries=Object.entries(data);
    for (var x=0; x < entries.length; x++){
        select[0].innerHTML+=`<option value="${entries[x][0]}">${entries[x][0]}</option>`;
        select[1].innerHTML+=`<option value="${entries[x][0]}">${entries[x][0]}</option>`;
    }
}

btn.addEventListener("click",() =>{
    let curr1=select[0].value
    let curr2=select[1].value
    let innum=input.value
    if (curr1!=curr2){
        convert(curr1,curr2,innum);
    }
    else{
        output.value=input.value
    }
});

function convert(curr1,curr2,innum){
    const liveval="api.frankfurter.app";
    fetch(
    `https://${liveval}/latest?amount=${innum}&from=${curr1}&to=${curr2}`
    )
    .then((val) => val.json())
    .then((val) =>{
        console.log(Object.values(val.rates)[0]);
        output.value=Object.values(val.rates)[0];
    });
}

