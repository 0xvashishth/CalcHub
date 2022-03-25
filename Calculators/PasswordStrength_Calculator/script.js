// function time() {
//     var wakeHours = Number(document.getElementById("hour").value);
//     var wakeMinutes = Number(document.getElementById("minute").value);
//     var wakeMeridian = document.getElementById("meridian").value;
//     var totalWakeMinutes = wakeHours * 60 + wakeMinutes;

//     const sleep = [
//       (totalWakeMinutes - 90 * 6-15) / 60,
//       (totalWakeMinutes - 90 * 5-15) / 60,
//       (totalWakeMinutes - 90 * 4-15) / 60,

//       (totalWakeMinutes - 90 * 3-15) / 60,
//       (totalWakeMinutes - 90 * 2-15) / 60,
//       (totalWakeMinutes - 90 * 1-15) / 60,
//     ];
//     const newSleep = sleep.map((hour) => {
//       if (hour < 1) {
//         if (wakeMeridian === "am") {
//           return Math.floor(hour+12)+":"+ (((hour + 12)-Math.floor(hour + 12))*60 === 0 ? '00' : ((hour + 12)-Math.floor(hour + 12))*60) + "pm";
//         } else if (wakeMeridian === "pm") {
//           return Math.floor(hour+12)+":"+ (((hour + 12)-Math.floor(hour + 12))*60 === 0 ? '00' : ((hour + 12)-Math.floor(hour + 12))*60) + "am";
//         }
//       } else {
//         if (wakeMeridian === "am") {
//           return Math.floor(hour)+":"+ (((hour)-Math.floor(hour))*60 === 0 ? '00' : ((hour)-Math.floor(hour))*60) + "am";
//         } else if (wakeMeridian === "pm") {
//           return Math.floor(hour)+":"+ (((hour)-Math.floor(hour))*60 === 0 ? '00' : ((hour)-Math.floor(hour))*60) + "pm";
//         }
//       }
//     });

//     document.getElementById('sleepTime').innerHTML="Suggested Bed Time --> "+newSleep[0]+" or "+newSleep[1];
//     document.getElementById('otherSleepTime').innerHTML=newSleep[2]+","+newSleep[3]+","+newSleep[4]+","+  newSleep[5] + " are the timings in which you can also sleep.";
//     document.getElementById('sleep').innerHTML="If you wake up at one of these times, you’ll rise in between 90-minute sleep cycles. A good night’s sleep consists of 5-6 complete sleep cycles.";
//   }
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
  // console.log((upperCase+lowerCase+number+special+len)*20);
  var strengthPercent = (upperCase + lowerCase + number + special + len) * 20;
  document.getElementById(
    "strength"
  ).innerHTML = `Strength of your password is ${strengthPercent}%`;
  document.getElementById("strength").style.color =
    strengthPercent === 100 ? "green" : "red";
  if (upperCase === 0) {
    document.getElementById("uppercase").innerHTML =
      "Your password must include an uppercase character";
  }
 
  if (lowerCase === 0) {
    document.getElementById("lowercase").innerHTML =
      "Your password must include a lowercase character";
  }
  if (special === 0) {
    document.getElementById("special").innerHTML =
      "Your password must include a special character";
  }
  if (number === 0) {
    document.getElementById("number").innerHTML =
      "Your password must include a number ";
  }
  if (len === 0) {
    document.getElementById("length").innerHTML =
      "Your password must be atleast 12 characters long ";
  }
}
