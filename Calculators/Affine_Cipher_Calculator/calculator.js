let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

function encipherMessage(a, b, word) {
  a = parseInt(a);
  b = parseInt(b);

  for (let i = 0; i < word.length; i++) {
    let alphaIndex = alpha.indexOf(word[i]);
    let troublesome = (a * alphaIndex + b) % alpha.length;

    word = word.substring(0, i) + alpha[troublesome] + word.substring(i + 1);
  }
  return word;
}

function decipherMessage(a, b, word) {
  a = parseInt(a);
  b = parseInt(b);

  for (let i = 0; i < word.length; i++) {
    a %= alpha.length;

    //Bruteforce the modular invert of the a

    let invert;

    for (let j = 1; j < alpha.length; j++) {
      if ((a * j) % alpha.length == 1) invert = j;
    }

    let alphaIndex = alpha.indexOf(word[i]);

    let troublesome = (invert * (alphaIndex - b)) % alpha.length;
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

  if (
    !a1 ||
    !b1 ||
    a1 === null ||
    b1 === null ||
    isNaN(parseInt(a1)) ||
    isNaN(parseInt(b1))
  )
    return;

  ciphertext = encipherMessage(a1, b1, plaintext);
  $("#output").val(ciphertext);
}

function deaffine() {
  ciphertext = $("#ciphertext")
    .val()
    .toLowerCase()
    .replace(/\W/g, "")
    .replace(/[0-9]/g, "");

  a2 = $("#keycipher").val();
  b2 = $("#keycipher1").val();

  if (
    !a2 ||
    !b2 ||
    a2 === null ||
    b2 === null ||
    isNaN(parseInt(a2)) ||
    isNaN(parseInt(b2))
  )
    return;

  plaintext = decipherMessage(a2, b2, ciphertext);
  $("#deoutput").val(plaintext);
}
