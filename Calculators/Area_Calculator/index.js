

function rec(){
  var d1=document.querySelector(".len").value;
var e1=document.querySelector(".brea").value;
  document.querySelector(".recans").innerHTML="Area of rectangle is " + d1*e1 +"m^2";
}
function cir(){
  
var fg=document.querySelector(".radc").value;
  document.querySelector(".cirans").innerHTML="Area of circle is " + 3.14*fg*fg+"m^2";
}
function sq(){
  
  var o=document.querySelector(".side").value;
    document.querySelector(".sqans").innerHTML="Area of square is " + o*o+"m^2";
  }
  function cylinder(){
    var dy=document.querySelector(".heightcy").value;
  var ey=document.querySelector(".radcy").value;
    document.querySelector(".cylans").innerHTML="Area of Cylinder is " + 2*3.14*ey*(ey+ dy) +"m^2";
  }
  function cone(){
    var d2=document.querySelector(".radon").value;
  var e2=document.querySelector(".heighton").value;
    document.querySelector(".coneans").innerHTML="Area of cone is " + 3.14*d2*(d2 + e2) +"m^2";
  }
  function cube(){
    var dx=document.querySelector(".lencu").value;
  
    document.querySelector(".cubeans").innerHTML="Area of cube is " + 6*dx*dx+"m^2";
  }
  function ellipse(){
    var d4=document.querySelector(".lenx").value;
  var e4=document.querySelector(".breax").value;
    document.querySelector(".ellipseans").innerHTML="Area of ellipse is " + 3.14*d4*e4 +"m^2";
  }
  function hemisphere(){
var fo=document.querySelector(".radmi").value;
    
    document.querySelector(".hemians").innerHTML="Area of Hemisphere is " + 3*3.14*fo*fo +"m^2";
  }
  function parallelogram(){
    var d5=document.querySelector(".heightp").value;
  var e5=document.querySelector(".basep").value;
    document.querySelector(".paraans").innerHTML="Area of parallelogram is " + d5*e5 +"m^2";
  }
  function rectangularprism(){
    var d6=document.querySelector(".lenpri").value;
  var e6=document.querySelector(".breapri").value;

  var f6=document.querySelector(".heightpri").value;
    document.querySelector(".recprians").innerHTML="Area of rectangularprism is " +2*( d6*e6 +e6*f6+ f6*d6) +"m^2";
  }
  function sphere(){
    var fi=document.querySelector(".radsp").value;
    
    document.querySelector(".sphans").innerHTML="Area of sphere is " + 4*3.14*fi*fi +"m^2";
  }
  function trapezium(){
    var dt=document.querySelector(".lena").value;
    var et=document.querySelector(".lenb").value;
    var ft=document.querySelector(".heightt").value;
  var iy=(dt+et)
      document.querySelector(".trapans").innerHTML="Area of trapezium is " + (0.5*iy*ft) +"m^2";
  }
  function triangle(){
    var dl=document.querySelector(".heighttri").value;
  var el=document.querySelector(".basetri").value;
    document.querySelector(".trians").innerHTML="Area of trianglris " + 0.5*dl*el +"m^2";
  }