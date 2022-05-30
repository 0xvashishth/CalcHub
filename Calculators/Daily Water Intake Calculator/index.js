function validation()
{
      if (document.infant.pounds.value=="")
      {
      alert("Enter your Weight");
      document.infant.pounds.focus();
      return false;
      }
      
   if (!infant.pounds.value.match(/^[0-9]+(\.[0-9]+)?$/))
        {
            alert("Please enter valid Weight!");
            document.infant.pounds.focus();
            return false;
        } 
  
  if (document.infant.selpounds.value==" ")
  {
    alert("Select the Unit for Weight");
    document.infant.selpounds.focus();
    return false;
  }
  
  if (document.infant.pounds.value!="")
  {
    if (document.infant.selpounds.value=="lb")
       {
      if(parseInt(document.infant.pounds.value)<66 || parseInt(document.infant.pounds.value)>551)
        {
        alert("Enter a valid weight! (>=66 and <=551)")
        document.infant.pounds.focus();
        return false;
        }
      }
     if (document.infant.selpounds.value=="kg")
     {
      if (parseInt(document.infant.pounds.value)<30 || parseInt(document.infant.pounds.value)>250)
      {
      alert("Enter valid Weight! (>=30 and <=250)")
            document.infant.pounds.focus();
            return false;
      }
    }
  }
  if (document.infant.pounds.value!="") 
    {
      weight = parseInt(document.infant.pounds.value);
    }
     
    if(document.infant.selpounds.value=="kg")
    {
    weight=weight*2.2;    
    }
  
  var act = document.infant.activity.value;
  var clim = document.infant.climate.value;
  var age = document.infant.age.value;
  var ounces = parseInt((((weight * age) / 28.3) + (act * (clim/10))));
  var litres = parseInt(0.0296 * ounces);
  var glass = parseInt((litres * 1000) / 240);
  document.getElementById("result").innerHTML = "You need to drink at least " + litres + " litres of water [" + ounces + " ounces] which is approximately " + glass + " glasses of water.";
  document.getElementById("notes").innerHTML = "Note: Remember that it is only an estimate and the amount of water required by the body also depends on several other factors that, in this case, cannot be taken into consideration.";

}
    
function unit() 
{
  var pp=document.infant.opt1.value;
  var ww = document.infant.wg.value;
  if(pp=="pounds")  
  {
    document.infant.wg.value = Math.round((ww*2.2)*100)/100;
  }
  else
  {
    document.infant.wg.value=Math.round(ww/2.2);
  }
}
