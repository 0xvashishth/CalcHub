function computeSpeed(){
    
    d = document.getElementById("distance").value;
    t = document.getElementById("time").value;
    document.getElementById("speed").innerHTML = d / (60 * t);

}