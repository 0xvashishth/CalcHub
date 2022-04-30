

function rec(){
  var d=document.querySelector(".len").value;
var e=document.querySelector(".brea").value;
  document.querySelector(".recans").innerHTML="Area of rectangle is " + d*e +"m^2";
}
function cir(){
  
var f=document.querySelector(".rad").value;
  document.querySelector(".cirans").innerHTML="Area of circle is " + 3.14*f*f+"m^2";
}
function sq(){
  
  var o=document.querySelector(".side").value;
    document.querySelector(".sqans").innerHTML="Area of square is " + o*o+"m^2";
  }