function determine(){
    var iNum=document.getElementById("inNUM").value;
    var itype=document.getElementById("select_in").value;
    var otype=document.getElementById("select_out").value;
    var oNum;
    //Binary function conversion
    if (itype=='inbin' && otype=='outoct') oNum = bintooct(iNum);
    if (itype=='inbin' && otype=='outdec') oNum = bintodec(iNum);
    if (itype=='inbin' && otype=='outhex') oNum = bintohex(iNum);
    if (itype=='inbin' && otype=='outbin') oNum = iNum;
    // Octal function conversion
    if (itype=='inoct' && otype=='outbin') oNum = octtobin(iNum);
    if (itype=='inoct' && otype=='outdec') oNum = octtodec(iNum);
    if (itype=='inoct' && otype=='outhex') oNum = octtohex(iNum);
    if (itype=='inoct' && otype=='outoct') oNum = iNum;
    //Decimal function conversion
    if (itype=='indec' && otype=='outbin') oNum = dectobin(iNum);
    if (itype=='indec' && otype=='outoct') oNum = dectooct(iNum);
    if (itype=='indec' && otype=='outhex') oNum = dectohex(iNum);
    if (itype=='indec' && otype=='outdec') oNum = iNum;
    //Hexa function conversion
    if (itype=='inhex' && otype=='outbin') oNum = hextobin(iNum);
    if (itype=='inhex' && otype=='outoct') oNum = hextooct(iNum);
    if (itype=='inhex' && otype=='outdec') oNum = hextodec(iNum);
    if (itype=='inhex' && otype=='outhex') oNum = iNum;

    document.getElementById('outNUM').value= oNum;

}
//funciton for binary to octal
function bintooct(iNum){
    return /^[01]+$/.test(iNum) ? parseInt(iNum,2).toString(8) : "Binary number has only 0 and 1";
}
//funciton for binary to decimal
function bintodec(iNum){
    return  /^[01]+$/.test(iNum) ? parseInt(iNum,2) : "Binary number has only 0 and 1";
}
//funciton for binary to hexa
function bintohex(iNum){
    return /^[01]+$/.test(iNum) ? parseInt(iNum,2).toString(16): "Binary number has only 0 and 1";
}
//funciton for octal to binary
function octtobin(iNum){
    return /^[0-7]+$/.test(iNum) ? parseInt(iNum,8).toString(2): "Octal number has digits 0 to 7 only";
}
//funciton for octal to decimal
function octtodec(iNum){
    return /^[0-7]+$/.test(iNum) ? parseInt(iNum,8): "Octal number has digits 0 to 7 only";
}
//funciton for octal to hexa
function octtohex(iNum){
    return /^[0-7]+$/.test(iNum) ? parseInt(iNum,8).toString(16): "Octal number has digits 0 to 7 only";
}
//funciton for decimal to binary
function dectobin(iNum){
    return parseInt(iNum).toString(2);
}
//funciton for decimal to octal
function dectooct(iNum){
    return parseInt(iNum).toString(8);
}
//funciton for decimal to hexa
function dectohex(iNum){
    return parseInt(iNum).toString(16);
}
//funciton for hexa to binary
function hextobin(iNum){
    return parseInt(iNum,16).toString(2);
}
//funciton for hexa to octal
function hextooct(iNum){
    return parseInt(iNum,16).toString(8);
}
//funciton for hexa to dec
function hextodec(iNum){
    return parseInt(iNum,16);
}
