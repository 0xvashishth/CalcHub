function computeResoFreq(){
    cap = document.getElementById("capacity").value;
    ind = document.getElementById("inductive").value;
    document.getElementById("freq").innerHTML = (1 /(2 * 3.1416 * Math.sqrt((cap) * (ind))));
}