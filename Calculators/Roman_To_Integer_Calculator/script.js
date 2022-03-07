let btns = document.querySelectorAll("button");
let disp = document.getElementById("display");

let romanSymbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = (s) => {
    value = 0;
    for(let i = 0; i < s.length; i += 1){
        if(romanSymbols[s[i]] < romanSymbols[s[i + 1]]){
            value -= romanSymbols[s[i]]
        }
        else{
            value += romanSymbols[s[i]]
        }
    }
    return value
};

for(let item of btns){
    item.addEventListener("click",function(e){
        let value = e.target.innerText;

        if(value === "Clear"){
            disp.innerHTML="";
            value="";
        }
        else if(value ==="Convert"){
            let roman = disp.innerHTML;
            disp.innerHTML = Number(romanToInt(roman)).toString();
        }
        else{
           disp.innerHTML += value; 
        }
    })
}