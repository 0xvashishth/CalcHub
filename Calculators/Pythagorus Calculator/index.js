let result=0;
let temp=0;
let btn=document.getElementById("calculate");
btn.addEventListener("click",function(){
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;
    let input1=document.getElementById("units1").value;
    let input2=document.getElementById("units2").value;
    if(input1!="hypotenuse" && input2!="hypotenuse"){
        result=Math.sqrt(Math.pow(val1,2)+Math.pow(val2,2));
        temp=1;
    }
    else if(input1=="hypotenuse" && (input2=="height" || input2=="base")){
        result=Math.sqrt(Math.pow(val1,2)-Math.pow(val2,2));
    }
    else if(input2=="hypotenuse" && (input1=="height" || input1=="base")){
        result=Math.sqrt(Math.pow(val2,2)-Math.pow(val1,2));
    }

    if((input1=="height" || input2=="height") && (input1=="hypotenuse" || input2=="hypotenuse"))
        temp=2;
    if((input1=="base" || input2=="base") && (input1=="hypotenuse" || input2=="hypotenuse"))
        temp=3;    

    switch(temp){
        case 1:
            document.getElementById("res").innerHTML="Hypotenuse is :"+result;
            break;
        case 2:
            document.getElementById("res").innerHTML="Base is :"+result;
            break;
        case 3:
            document.getElementById("res").innerHTML="Height is :"+result;
            break;   
        default:
            document.getElementById("res").innerHTML="Invalid Input";
            break;
    };
});

