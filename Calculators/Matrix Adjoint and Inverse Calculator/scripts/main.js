document.getElementById("bts").addEventListener( 'click' , function(){

    
    var a = document.getElementById('num11').value;
    var b = document.getElementById('num12').value;
    var c = document.getElementById('num13').value;
    var d = document.getElementById('num21').value;
    var e = document.getElementById('num22').value;
    var f = document.getElementById('num23').value;
    var g = document.getElementById('num31').value;
    var h = document.getElementById('num32').value;
    var i = document.getElementById('num33').value;


    console.log("In function");
    console.log("Working Fine");

    //find determinant
    var det = (a*e*i)+(b*f*g)+(c*d*h)-(g*e*c)-(h*f*a)-(i*d*b);
    
    document.getElementById("det").textContent =  "Determinant : " + det ;
  
    //adjoint
    var a11=(e*i)-(h*f);
    var a12=(d*i)-(g*f);
    var a13=(d*h)-(g*e);
    var a21=(b*i)-(h*c);
    var a22=(a*i)-(g*c);
    var a23=(a*h)-(g*b);
    var a31=(b*f)-(e*c);
    var a32=(a*f)-(d*c);
    var a33=(a*e)-(d*b);
  
    //inverse
    var ina11=(1/det*(a11*(1))).toFixed(2);
    var ina12=(1/det*(a12*(-1))).toFixed(2);
    var ina13=(1/det*(a13*(1))).toFixed(2);
    var ina21=(1/det*(a21*(-1))).toFixed(2);
    var ina22=(1/det*(a22*(1))).toFixed(2);
    var ina23=(1/det*(a23*(-1))).toFixed(2);
    var ina31=(1/det*(a31*(1))).toFixed(2);
    var ina32=(1/det*(a32*(-1))).toFixed(2);
    var ina33=(1/det*(a33*(1))).toFixed(2);
  
    document.getElementById("adj").textContent =  "Adjoint : ";
    document.getElementById("a1").textContent =  a11 ;
    document.getElementById("a2").textContent =  a12 ;
    document.getElementById("a3").textContent =  a13 ;
    document.getElementById("a4").textContent =  a21 ;
    document.getElementById("a5").textContent =  a22 ;
    document.getElementById("a6").textContent =  a23 ;
    document.getElementById("a7").textContent =  a31 ;
    document.getElementById("a8").textContent =  a32 ;
    document.getElementById("a9").textContent =  a33 ;
      
    document.getElementById("inv").textContent =  "Inverse : " ;
    document.getElementById("1").textContent =  ina11 ;
    document.getElementById("2").textContent =  ina21 ;
    document.getElementById("3").textContent =  ina31 ;
    document.getElementById("4").textContent =  ina12 ;
    document.getElementById("5").textContent =  ina22 ;
    document.getElementById("6").textContent =  ina32 ;
    document.getElementById("7").textContent =  ina13 ;
    document.getElementById("8").textContent =  ina23 ;
    document.getElementById("9").textContent =  ina33 ;


}
);
