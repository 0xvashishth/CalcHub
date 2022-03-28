function pass() {
  var p = document.getElementById("password").value;
  var upperCase = 0;
  var lowerCase = 0;
  var number = 0;
  var special = 0;
  var len = 0;
  if (p.length >= 12) {
    len = 1;
  }
  console.log(p);

  for (var i = 0; i < p.length; i++) {
    var ch = p.charCodeAt(i);

    if (ch >= 65 && ch <= 90) {
      upperCase = 1;
    } else if (ch >= 97 && ch <= 122) {
      lowerCase = 1;
    } else if (ch >= 48 && ch <= 57) {
      number = 1;
    } else {
      special = 1;
    }
  }
  var arr = [upperCase, lowerCase, special, number];
  var arr1 = ["uppercase", "lowercase", "special", "numeric"];
  var strengthPercent = (upperCase + lowerCase + number + special + len) * 20;
  document.getElementById(
    "strength"
  ).innerHTML = `Strength of your password is ${strengthPercent}%`;
  document.getElementById("strength").style.color =
    strengthPercent === 100 ? "green" : "red";

  for (var i = 0; i < 4; i++) {
    if (arr[i] == 0) {
      document.getElementById(
        arr1[i]
      ).innerHTML = `Your password must include an ${arr1[i]} character`;
    }
  }

  if (len === 0) {
    document.getElementById("length").innerHTML =
      "Your password must be atleast 12 characters long ";
  }
}
