function BMI(){
    var weight=document.getElementById('weight').value;
    var height=document.getElementById('height').value;
    var meter=height/100;
    var formula=weight/(meter*meter);
    var roundformula=Math.round(formula)
    document.getElementById('result').innerText=roundformula;
      if(roundformula<18.5){
          document.getElementById('result1').innerHTML='Under weight';
           alert('hii');
      }else if(roundformula=18.8|| roundformula<=24.9){
          document.getElementById('result1').innerText='Normal';
      }else if(roundformula=25||roundformula<=29.9){
          document.getElementById('result1').innerText='Overweight';
      }else if(roundformula=30||roundformula<=34.9){
          document.getElementById('result1').innerText='Obese';
      }else{
          document.getElementById('result1').innerText='Extremly Obese';
      }
    }