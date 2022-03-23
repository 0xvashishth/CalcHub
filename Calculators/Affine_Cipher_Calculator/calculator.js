var alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function encipherMessage(a, b, word) {
  a = parseInt(a);
  b = parseInt(b);

  for (var i = 0; i < word.length; i++) {
    var alphaIndex = alpha.indexOf(word[i]);

    var troublesome = (a * alphaIndex + b) % alpha.length;

    word = word.substring(0, i) + alpha[troublesome] + word.substring(i + 1);
  }
  return word;
}

function decipherMessage(a, b, word) {
  a = parseInt(a);
  b = parseInt(b);

  for (var i = 0; i < word.length; i++) {
    a %= alpha.length;

    //Bruteforce the modular invert of the a

    for (var j = 1; j < alpha.length; j++) {
      if ((a * j) % alpha.length == 1) var invert = j;
    }

    var alphaIndex = alpha.indexOf(word[i]);

    var troublesome = (invert * (alphaIndex - b)) % alpha.length;
    if (troublesome < 0) troublesome += alpha.length;
    word = word.substring(0, i) + alpha[troublesome] + word.substring(i + 1);
  }
  return word;
}
function affine() {
  plaintext = $("#plaintext")
    .val()
    .toLowerCase()
    .replace(/\W/g, "")
    .replace(/[0-9]/g, "");
  a1 = $("#key").val();
  b1 = $("#key1").val();
  ciphertext = encipherMessage(a1, b1, plaintext);
  $("#output").val(ciphertext);
}

function deaffine() {
  ciphertext = $("#ciphertext")
    .val()
    .toLowerCase()
    .replace(/\W/g, "")
    .replace(/[0-9]/g, "");
  a2 = parseInt(document.getElementById("keycipher").value);
  b2 = parseInt(document.getElementById("keycipher1").value);
  plaintext = decipherMessage(a2, b2, ciphertext);
  $("#deoutput").val(plaintext);
}
