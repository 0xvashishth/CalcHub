function gentime()
{  
  var time=document.getElementById("time").value;
var speed=document.getElementById("speed").value;
 var sol=300000;
 var temp=time;
 var f=""
 if (document.getElementById("checkbox").checked == true) 
   {
       time=(time*86400*365);
       
       f="years"
   }
   else if(document.getElementById("checkbox2").checked == true)
   {
       time=time*86400;
      
       f="days"
   }
  //  var temp= (speed*speed)/(sol*sol);
    var t=time/(Math.sqrt(1-(speed*speed)/(sol*sol)));

   // var ans=t;
   // document.getElementById("time").value = ans;
   if (document.getElementById("checkbox").checked == true) 
   {
       t=(t/(365*86400));
   }
   else
   {
       t=t/(86400);
   }

   var ans1="The time dilation is :- " + t + " " + f;  
   var ans2="which means you are :- " + (t-temp) + " " + f + " small from your twins which Stay On earth "  + " ! Sound Interasting " ;
   
   var ans3=ans1 + "\n" +  "\n" + ans2;
   if(speed==0 || time==0)
   {
      alert("please enter value first");
   }
  else if( speed<300000)
   {alert(ans3);
     document.getElementById("res").innerHTML = "The time dilation is :- " + t + " " + f ;  
   document.getElementById("sub").innerHTML = " which means you are :- " + (t-temp) + " " + f + " young from your brother which is on planet earth ";
   }
  
   else{
     alert("speed can't be greater than 300000 try with less value");
   }
  //  document.write(t);
  //   return t;

}