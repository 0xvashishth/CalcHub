

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
  function cylinder(){
    var d=document.querySelector(".height").value;
  var e=document.querySelector(".rad").value;
    document.querySelector(".cylans").innerHTML="Area of Cylinder is " + 2*3.14*e*(e+ d) +"m^2";
  }
  function cone(){
    var d=document.querySelector(".rad").value;
  var e=document.querySelector(".height").value;
    document.querySelector(".coneans").innerHTML="Area of cone is " + 3.14*d*(d + e) +"m^2";
  }
  function cube(){
    var d=document.querySelector(".len").value;
  
    document.querySelector(".cubeans").innerHTML="Area of cube is " + 6*d*d+"m^2";
  }
  function ellipse(){
    var d=document.querySelector(".len").value;
  var e=document.querySelector(".brea").value;
    document.querySelector(".ellipseans").innerHTML="Area of ellipse is " + 3.14*d*e +"m^2";
  }
  function hemisphere(){
var f=document.querySelector(".rad").value;
    
    document.querySelector(".hemians").innerHTML="Area of Hemisphere is " + 3*3.14*f*f +"m^2";
  }
  function parallelogram(){
    var d=document.querySelector(".height").value;
  var e=document.querySelector(".base").value;
    document.querySelector(".paraans").innerHTML="Area of parallelogram is " + d*e +"m^2";
  }
  function rectangularprism(){
    var d=document.querySelector(".len").value;
  var e=document.querySelector(".brea").value;

  var f=document.querySelector(".height").value;
    document.querySelector(".recprians").innerHTML="Area of rectangularprism is " +2*( d*e +e*f+ f*d) +"m^2";
  }
  function sphere(){
    var f=document.querySelector(".rad").value;
    
    document.querySelector(".sphans").innerHTML="Area of sphere is " + 4*3.14*f*f +"m^2";
  }
  function trapezium(){
    var dt=document.querySelector(".lena").value;
    var et=document.querySelector(".lenb").value;
    var ft=document.querySelector(".heightt").value;
  var iy=(dt+et)
      document.querySelector(".trapans").innerHTML="Area of trapezium is " + (0.5*iy*ft) +"m^2";
  }
  function triangle(){
    var d=document.querySelector(".height").value;
  var e=document.querySelector(".base").value;
    document.querySelector(".trians").innerHTML="Area of trianglris " + 0.5*d*e +"m^2";
  }