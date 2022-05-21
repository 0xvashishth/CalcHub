let speed=0;
let result=0;
let btn=document.getElementById("calculate");
btn.addEventListener("click",function(){
    let speed=document.getElementById("speed").value;
    let recUnit=document.getElementById("units").value;
    let reqUnit=document.getElementById("reqUnits").value;
    if(recUnit=='mps'){
        if(reqUnit=='kmph'){
            result=speed*3.6;
        }
        else if(reqUnit=='mph'){
            result=speed*2.237;
        }
        else{
            result=speed;
        }
    }
    else if(recUnit=='kmph'){
        if(reqUnit=='mps'){
            result=speed/3.6;
        }
        else if(reqUnit=='mph'){
            result=speed/1.609;
        }
        else{
            result=speed;
        }
    }
    else {
        if(reqUnit=='mps'){
            result=speed/2.237;
        }
        else if(reqUnit=='kmph'){
            result=speed*1.609;
        }
        else{
            result=speed;
        }
    }
    document.getElementById("res").innerHTML="Result is :";
    document.getElementById("result").innerHTML=result+" "+reqUnit;
});
