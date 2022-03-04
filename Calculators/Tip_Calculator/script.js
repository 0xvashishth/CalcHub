function myFunction(val) {
    document.getElementById('splitOutput').innerHTML = val //displays this value to the html page
      console.log(val)
    }
  
  calcbtn.addEventListener("click",function(){
    let totalamount = Number(document.getElementById("amount").value);
     var totalservices = Number(document.getElementById("services").value);
    
    var splitInput= Number(document.getElementById("splitInput").value);
    var tip =  totalamount * totalservices;
    var tipforEach = tip/splitInput;
  
    
    tipAmtPerPerson.value=tipforEach.toFixed(2);
    totalBillWithTip.value=(tipforEach+totalamount).toFixed(2);
    
    if (totalamount === "" || totalservices == 0) {
      alert("Please enter values");
      return;
    }
  
  })
  
    