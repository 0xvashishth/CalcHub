$( "button" ).click(function() {
    var a = $("#11").val();
    var b = $("#12").val();
    var c = $("#13").val();
    var d = $("#21").val();
    var e = $("#22").val();
    var f = $("#23").val();
    var g = $("#31").val();
    var h = $("#32").val();
    var i = $("#33").val();
  
    console.log("In function");
    //find determinant
    var det = (a*e*i)+(b*f*g)+(c*d*h)-(g*e*c)-(h*f*a)-(i*d*b);
    $( "#det" ).text( "Determinant : " + det );
  
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
  
    $("#adj").text("Adjoint : ")
    $( "#a1" ).text( a11 );
    $( "#a2" ).text( a12 );
    $( "#a3" ).text( a13 );
    $( "#a4" ).text( a21 );
    $( "#a5" ).text( a22 );
    $( "#a6" ).text( a23 );
    $( "#a7" ).text( a31 );
    $( "#a8" ).text( a32 );
    $( "#a9" ).text( a33 );
      
    $("#inv").text("Inverse : ")  
    $( "#1" ).text( ina11 );
    $( "#2" ).text( ina21 );
    $( "#3" ).text( ina31 );
    $( "#4" ).text( ina12 );
    $( "#5" ).text( ina22 );
    $( "#6" ).text( ina32 );
    $( "#7" ).text( ina13 );
    $( "#8" ).text( ina23 );
    $( "#9" ).text( ina33 );
    });


    
