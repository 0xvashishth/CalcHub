
function time() {
  var wakeHours = Number(document.getElementById("hour").value);
  var wakeMinutes = Number(document.getElementById("minute").value);
  var wakeMeridian = document.getElementById("meridian").value;
  var totalWakeMinutes = wakeHours * 60 + wakeMinutes;

  const sleep = [
    (totalWakeMinutes - 90 * 6-15) / 60,
    (totalWakeMinutes - 90 * 5-15) / 60,
    (totalWakeMinutes - 90 * 4-15) / 60,

    (totalWakeMinutes - 90 * 3-15) / 60,
    (totalWakeMinutes - 90 * 2-15) / 60,
    (totalWakeMinutes - 90 * 1-15) / 60,
  ];
  const newSleep = sleep.map((hour) => {
    if (hour < 1) {
      if (wakeMeridian === "am") {
        return Math.floor(hour+12)+":"+ (((hour + 12)-Math.floor(hour + 12))*60 === 0 ? '00' : ((hour + 12)-Math.floor(hour + 12))*60) + "pm";
      } else if (wakeMeridian === "pm") {
        return Math.floor(hour+12)+":"+ (((hour + 12)-Math.floor(hour + 12))*60 === 0 ? '00' : ((hour + 12)-Math.floor(hour + 12))*60) + "am";
      }
    } else {
      if (wakeMeridian === "am") {
        return Math.floor(hour)+":"+ (((hour)-Math.floor(hour))*60 === 0 ? '00' : ((hour)-Math.floor(hour))*60) + "am";
      } else if (wakeMeridian === "pm") {
        return Math.floor(hour)+":"+ (((hour)-Math.floor(hour))*60 === 0 ? '00' : ((hour)-Math.floor(hour))*60) + "pm";
      }
    }
  });

  

  document.getElementById('sleepTime').innerHTML="Suggested Bed Time --> "+newSleep[0]+" or "+newSleep[1];
  document.getElementById('otherSleepTime').innerHTML=newSleep[2]+","+newSleep[3]+","+newSleep[4]+","+  newSleep[5] + " are the timings in which you can also sleep.";
  document.getElementById('sleep').innerHTML="If you wake up at one of these times, you’ll rise in between 90-minute sleep cycles. A good night’s sleep consists of 5-6 complete sleep cycles.";
}
