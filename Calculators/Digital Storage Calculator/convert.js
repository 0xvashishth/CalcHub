function convert(){
    var itype=document.getElementById("stin").value;
    var otype=document.getElementById("stout").value;
    var input=document.getElementById("in").value;
    var output;
    if (itype=='inb' && otype=='outb') output=input;
    if (itype=='inb' && otype=='outby') output=b2by(input) ;
    if (itype=='inb' && otype=='outk') output=b2k(input);
    if (itype=='inb' && otype=='outky') output=b2ky(input);
    if (itype=='inb' && otype=='outm') output=b2m(input);
    if (itype=='inb' && otype=='outmy') output=b2my(input);
    if (itype=='inb' && otype=='outg') output=b2g(input);
    if (itype=='inb' && otype=='outgy') output=b2gy(input);
    if (itype=='inb' && otype=='outt') output=b2t(input);
    if (itype=='inb' && otype=='outty') output=b2ty(input);

    if (itype=='inby' && otype=='outb') output=input*8;
    if (itype=='inby' && otype=='outby') output=input;
    if (itype=='inby' && otype=='outk') output=b2k(input*8);
    if (itype=='inby' && otype=='outky') output=b2ky(input*8);
    if (itype=='inby' && otype=='outm') output=b2m(input*8);
    if (itype=='inby' && otype=='outmy') output=b2my(input*8);
    if (itype=='inby' && otype=='outg') output=b2g(input*8);
    if (itype=='inby' && otype=='outgy') output=b2gy(input*8);
    if (itype=='inby' && otype=='outt') output=b2t(input*8);
    if (itype=='inby' && otype=='outty')  output=b2ty(input*8);

    if (itype=='ink' && otype=='outb') output=input*(10**3);
    if (itype=='ink' && otype=='outby') output= b2by(input*(10**3))
    if (itype=='ink' && otype=='outk') output=input;
    if (itype=='ink' && otype=='outky') output=b2ky(input*(10**3));
    if (itype=='ink' && otype=='outm') output=b2m(input*(10**3));
    if (itype=='ink' && otype=='outmy') output=b2my(input*(10**3));
    if (itype=='ink' && otype=='outg') output=b2g(input*(10**3));
    if (itype=='ink' && otype=='outgy') output=b2gy(input*(10**3));
    if (itype=='ink' && otype=='outt') output=b2t(input*(10**3));
    if (itype=='ink' && otype=='outty')  output=b2ty(input*(10**3));

    if (itype=='inky' && otype=='outb') output=input*(8*(10**3));
    if (itype=='inky' && otype=='outby') output= b2by(input*(8*(10**3)));
    if (itype=='inky' && otype=='outk') output=b2k(input*(8*(10**3)));
    if (itype=='inky' && otype=='outky') output=input;
    if (itype=='inky' && otype=='outm') output=b2m(input*(8*(10**3)));
    if (itype=='inky' && otype=='outmy') output=b2my(input*(8*(10**3)));
    if (itype=='inky' && otype=='outg') output=b2g(input*(8*(10**3)));
    if (itype=='inky' && otype=='outgy') output=b2gy(input*(8*(10**3)));
    if (itype=='inky' && otype=='outt') output=b2t(input*(8*(10**3)));
    if (itype=='inky' && otype=='outty')  output=b2ty(input*(8*(10**3)));

    if (itype=='inm' && otype=='outb') output=input*(10**6);
    if (itype=='inm' && otype=='outby') output=b2by(input*(10**6));
    if (itype=='inm' && otype=='outk') output=b2k(input*(10**6));
    if (itype=='inm' && otype=='outky') output=b2ky(input*(10**6));
    if (itype=='inm' && otype=='outm') output=input
    if (itype=='inm' && otype=='outmy') output=b2my(input*(10**6));
    if (itype=='inm' && otype=='outg') output=b2g(input*(10**6));
    if (itype=='inm' && otype=='outgy') output=b2gy(input*(10**6));
    if (itype=='inm' && otype=='outt') output=b2t(input*(10**6));
    if (itype=='inm' && otype=='outty')  output=b2ty(input*(10**6));

    if (itype=='inmy' && otype=='outb') output=input*(8*(10**3));
    if (itype=='inmy' && otype=='outby') output=b2by(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outk') output=b2k(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outky') output=b2ky(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outm') output=b2m(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outmy') output=input
    if (itype=='inmy' && otype=='outg') output=b2g(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outgy') output=b2gy(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outt') output=b2t(input*(8*(10**3)));
    if (itype=='inmy' && otype=='outty')  output=b2ty(input*(8*(10**3)));

    if (itype=='ing' && otype=='outb') output=input*(10**9);
    if (itype=='ing' && otype=='outby') output=b2by(input*(10**9));
    if (itype=='ing' && otype=='outk') output=b2k(input*(10**9));
    if (itype=='ing' && otype=='outky') output=b2ky(input*(10**9));
    if (itype=='ing' && otype=='outm') output=b2m(input*(10**9));
    if (itype=='ing' && otype=='outmy') output=b2my(input*(10**9));
    if (itype=='ing' && otype=='outg') output=input;
    if (itype=='ing' && otype=='outgy') output=b2gy(input*(10**9));
    if (itype=='ing' && otype=='outt') output=b2t(input*(10**9));
    if (itype=='ing' && otype=='outty')  output=b2ty(input*(10**9));

    if (itype=='ingy' && otype=='outb') output=input*(8*(10**9));
    if (itype=='ingy' && otype=='outby') output=b2by(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outk') output=b2k(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outky') output=b2ky(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outm') output=b2m(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outmy') output=b2my(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outg') output=b2g(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outgy')  output=input;
    if (itype=='ingy' && otype=='outt') output=b2t(input*(8*(10**9)));
    if (itype=='ingy' && otype=='outty')  output=b2ty(input*(8*(10**9)));

    if (itype=='int' && otype=='outb') output=input*(10**12);
    if (itype=='int' && otype=='outby') output=b2by(input*(10**12));
    if (itype=='int' && otype=='outk') output=b2k(input*(10**12));
    if (itype=='int' && otype=='outky') output=b2ky(input*(10**12));
    if (itype=='int' && otype=='outm') output=b2m(input*(10**12));
    if (itype=='int' && otype=='outmy') output=b2my(input*(10**12));
    if (itype=='int' && otype=='outg') output=b2g(input*(10**12));
    if (itype=='int' && otype=='outgy') output=b2gy(input*(10**12));
    if (itype=='int' && otype=='outt') output=input;
    if (itype=='int' && otype=='outty')  output=b2ty(input*(10**12));

    if (itype=='inty' && otype=='outb') output=input*(8*(10**12));
    if (itype=='inty' && otype=='outby') output=b2by(input*(8*(10**12)));
    if (itype=='inty' && otype=='outk') output=b2k(input*(8*(10**12)));
    if (itype=='inty' && otype=='outky') output=b2ky(input*(8*(10**12)));
    if (itype=='inty' && otype=='outm') output=b2m(input*(8*(10**12)));
    if (itype=='inty' && otype=='outmy') output=b2my(input*(8*(10**12)));
    if (itype=='inty' && otype=='outg') output=b2g(input*(8*(10**12)));
    if (itype=='inty' && otype=='outgy') output=b2gy(input*(8*(10**12)));
    if (itype=='inty' && otype=='outt') output=b2t(input*(8*(10**12)));
    if (itype=='inty' && otype=='outty')  output=input;

    

    document.getElementById("out").value=output
}
function b2by(input){
    output=(input/8)
    return output
}
function b2k(input){
    output=(input/(10**3));
    return output
}
function b2m(input){
    output=(input/(10**6));
    return output
}
function b2g(input){
    output=(input/(10**9));
    return output
}
function b2t(input){
    output=(input/(10**12));
    return output
}
function b2ky(input){
    output=(input/(8*(10**3)));
    return output
}
function b2my(input){
    output=(input/(8*(10**6)));
    return output
}
function b2gy(input){
    output=(input/(8*(10**9)));
    return output
}
function b2ty(input){
    output=(input/(8*(10**12)));
    return output
}