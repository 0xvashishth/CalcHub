function age() {  
    var d1 = document.getElementById('date').value;  
    var m1 = document.getElementById('month').value;  
    var y1 = document.getElementById('year').value;  
    var date = new Date();  
    var d2 = date.getDate();  
    var m2 = 1 + date.getMonth();  
    var y2 = date.getFullYear();  
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
    if(d1 > d2){  
     d2 = d2 + month[m2 - 1];  
     m2 = m2 - 1;  
    }  
    if(m1 > m2){  
     m2 = m2 + 12;  
     y2 = y2 - 1;  
    }  
    var d = d2 - d1;  
    var m = m2 - m1;  
    var y = y2 - y1;  
    var sleep="";
    if(y==0 && (m>=0 && m<=3) ){
        sleep="14 to 17 hours";
    }
    else if(y==0 && (m>3 && m<=11)){
        sleep="12 to 16 hours";
    }
    else if(y>=1 && y<=2){
        sleep="11 to 14 hours";
    }
    else if(y>=3 && y<=5){
        sleep="10 to 13 hours";
    }
    else if(y>=6 && y<=12){
        sleep="9 to 12 hours";
    }
    else if(y>=13 && y<=18){
        sleep="8 to 10 hours";
    }
    else if(y>18 && y<=64){
        sleep="7 to 9 hours";
    }
    else if(y>=65){
        sleep="7 to 8 hours";
    }
    document.getElementById('age').innerHTML = 'You are '+y+' years old'+' and you need ' + sleep +' hours of sleep everyday.';  

      
   }  