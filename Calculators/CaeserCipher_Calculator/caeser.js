var alphabet = "abcdefghijklmnopqrstuvwxyz";
//Alphabet Variable which have 26 lower alphabet of english
    var fullAlphabet = alphabet + alphabet + alphabet;
//fullAlphabet =if user provides key more then 26,for that purpose the concatentaion of alphabet is done.
    function runCipher() {
      var cipherText = $('#cypher').val();
      var cipherOffset = $('#offset').val();
      cipherOffset = (cipherOffset % alphabet.length);
      var cipherFinish = '';

      //using for loop so that every letter of string(given plaintext will be operated.
      for (i = 0; i < cipherText.length; i++) {
        var letter = cipherText[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();
         //converting the letter to lowercase using this function
        var index = alphabet.indexOf(letter);
        if (index == -1) {
          cipherFinish += letter;
          //if index=-1 then cipherFinish = cipherFinish+letter
        } else {
          index = ((index + cipherOffset) + alphabet.length);
          var nextLetter = fullAlphabet[index];
          if (upper) nextLetter = nextLetter.toUpperCase();
          cipherFinish += nextLetter;
          //just concatenate the result to get the complete cipher or encrypted text
        }
      }

      $('#finish').val(cipherFinish);
    }
//in the last form row we will get the required output which id is finish(in HTML file)
    $(document).ready(function () {
      $('#cypher').keypress(function () {
        setTimeout(function () { runCipher(); }, 20);
      });
      $('#cypher').blur(function () {
        runCipher();
      });
      $('#offset').change(function () {
        setTimeout(runCipher(), 20);
      });

    });