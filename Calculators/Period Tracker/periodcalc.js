$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]
let getDaysInMonth = function (month, year) {
    console.log(month, year)
    return new Date(year, month, 0).getDate();
};

function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    } else {
        currentMonth += 1;
    }
    myFunction();
}

function prevMonth() {
    console.log("df")
    clearCal();
    let d = new Date($("#datepicker").val());
    var m = d.getMonth();
    var pm = m - 3;
    var pDays = 28;

    while (d.getMonth() > pm || d.getDate() - pDays >= 1) {
        d.setDate(d.getDate() - pDays);

    }

    console.log(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear())
    generateCal(d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear());

    $("#datepicker").datepicker('update', new Date(d))

}

const todayDate = new Date();
const actualCurrentMonth = todayDate.getMonth();
const actualCurrentYear = todayDate.getFullYear();
const actualCurrentDay = todayDate.getDate();
let currentMonth = todayDate.getMonth();
let currentYear = todayDate.getFullYear();
let monthOneDays = [];
let monthTwoDays = [];
let monthThreeDays = [];

function myFunction() {

    let monthOneTable = document.getElementById("month1");
    let monthTwoTable = document.getElementById("month2");
    let monthThreeTable = document.getElementById("month3");
    monthOneTable.innerHTML = "";
    monthTwoTable.innerHTML = "";
    monthThreeTable.innerHTML = "";
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;

    //select the current day in the first week
    let weekDay = new Date(currentYear, currentMonth, 1).getDay();
    let weekDay1 = new Date(currentYear, currentMonth + 1, 1).getDay();
    let weekDay2 = new Date(currentYear, currentMonth + 2, 1).getDay();
    for (let weekDaySelect = 0; weekDaySelect < weekDay; weekDaySelect++) monthOneDays.unshift({
        date: ""
    })
    for (let weekDaySelect = 0; weekDaySelect < weekDay1; weekDaySelect++) monthTwoDays.unshift({
        date: ""
    })
    for (let weekDaySelect = 0; weekDaySelect < weekDay2; weekDaySelect++) monthThreeDays.unshift({
        date: ""
    })


    for (i = 0; i < monthOneDays.length / 7; i++) {
        let row = monthOneTable.insertRow(i);
        for (j = 0; j < 7; j++) {
            if (monthOneDays[i + j + b1] != undefined) {
                let cell1 = row.insertCell(j);
                cell1.className = monthOneDays[i + j + b1].class;
                let x = document.createElement("span");
                x.innerHTML = monthOneDays[i + j + b1].date;
                cell1.append(x);
            }
        }
        b1 += 6;
    }
    for (i = 0; i < monthTwoDays.length / 7; i++) {
        let row = monthTwoTable.insertRow(i);
        for (j = 0; j < 7; j++) {
            if (monthTwoDays[i + j + b2] != undefined) {
                let cell1 = row.insertCell(j);
                cell1.className = monthTwoDays[i + j + b2].class;
                let x = document.createElement("span");
                x.innerHTML = monthTwoDays[i + j + b2].date;
                cell1.append(x);
            }
        }
        b2 += 6;
    }
    for (i = 0; i < monthThreeDays.length / 7; i++) {
        let row = monthThreeTable.insertRow(i);
        for (j = 0; j < 7; j++) {
            if (monthThreeDays[i + j + b3] != undefined) {
                let cell1 = row.insertCell(j);
                cell1.className = monthThreeDays[i + j + b3].class;
                let x = document.createElement("span");
                x.innerHTML = monthThreeDays[i + j + b3].date;
                cell1.append(x);
            }
        }
        b3 += 6;
    }

    let rowm1 = monthOneTable.insertRow(0);
    let rowm2 = monthTwoTable.insertRow(0);
    let rowm3 = monthThreeTable.insertRow(0);
    for (i = 0; i < 7; i++) {
        let cell1 = rowm1.insertCell(i);
        cell1.className = "week-head";
        let x1 = document.createElement("span");
        x1.innerHTML = weekNames[i];
        cell1.append(x1);

        let cell2 = rowm2.insertCell(i);
        cell2.className = "week-head";
        let x2 = document.createElement("span");
        x2.innerHTML = weekNames[i];
        cell2.append(x2);

        let cell3 = rowm3.insertCell(i);
        cell3.className = "week-head";
        let x3 = document.createElement("span");
        x3.innerHTML = weekNames[i];
        cell3.append(x3);
    }
}

function clearCal() {
    $("#month1").innerHTML = "";
    $("#month2").innerHTML = "";
    $("#month3").innerHTML = "";
}

function generate() {
    clearCal();
    let selectedDate = $("#datepicker").val();
    generateCal(selectedDate);
}


function generateCal(selectedDate) {

    let selectedDateMonth = parseInt(selectedDate.split("/")[0]);
    let selectedDateDay = parseInt(selectedDate.split("/")[1]);

    let pdays_ip = $("#pdays").val(); // HOW MANY DAYS DID IT LAST? Backup
    let pdays = $("#pdays").val(); //  HOW MANY DAYS DID IT LAST?
    let plength = $("#plength").val(); // HOW LONG IS YOUR MENSTRUAL?
    let postp = 2; // Post period 2 days
    let postToPeak = 3; // Post period to peak ovul
    let peakOvul = 5; // Peak Ovulation 5 days
    let prep = 2; // Pre peroid 2 days

    let normalday = plength - pdays - postp - postToPeak - peakOvul - prep;
    console.log(normalday);
    console.log(selectedDate, pdays, plength, );
    console.log(selectedDateDay)

    let monthOne = getDaysInMonth(parseInt(selectedDateMonth), 2019);
    let monthTwo = getDaysInMonth(parseInt(selectedDateMonth) + 1, 2019);
    let monthThree = getDaysInMonth(parseInt(selectedDateMonth) + 2, 2019);
    console.log("monthOne : " + monthOne, monthTwo, monthThree);

    monthOneDays = range(1, monthOne);
    monthTwoDays = range(1, monthTwo);
    monthThreeDays = range(1, monthThree);

    document.getElementById("monthOneName").innerHTML = monthNames[selectedDateMonth - 1] + " " + currentYear;
    document.getElementById("monthTwoName").innerHTML = monthNames[selectedDateMonth] + " " + currentYear;
    document.getElementById("monthThreeName").innerHTML = monthNames[selectedDateMonth + 1] + " " + currentYear;
    let monthOneDaysObj = [];
    let allDays = monthOneDays.concat(monthTwoDays).concat(monthThreeDays);

    console.log(allDays);

    for (var i = 0; i < allDays.length; i++) {
        let d = allDays[i];
        if (pdays === 0 && postp === 0 && normalday === 0 && prep === 0) {
            pdays = pdays_ip;
            prep = 2;
            postToPeak = 3;
            peakOvul = 5;
            postp = 2;
            normalday = plength - pdays - postp - postToPeak - peakOvul - prep;
        }
        if (pdays === 0 && postp === 0 && postToPeak == 0 && peakOvul == 0 && normalday === 0 && prep > 0) {
            monthOneDaysObj.push({
                date: d,
                class: "red"
            })
            prep--;
        }
        if (pdays === 0 && postp === 0 && postToPeak == 0 && peakOvul == 0 && normalday > 0) {
            monthOneDaysObj.push({
                date: d,
                class: "normal"
            })
            normalday--;
        }
        if (pdays === 0 && postp === 0 && postToPeak == 0 && peakOvul > 0) {
            monthOneDaysObj.push({
                date: d,
                class: "cyan"
            })
            peakOvul--;
        }
        if (pdays === 0 && postp === 0 && postToPeak > 0) {
            monthOneDaysObj.push({
                date: d,
                class: "normal"
            })
            postToPeak--;
        }
        if (pdays === 0 && postp > 0) {
            monthOneDaysObj.push({
                date: d,
                class: "violet"
            })
            postp--;
        }
        if (pdays > 0 && i > selectedDateDay - 2) {
            monthOneDaysObj.push({
                date: d,
                class: "pink"
            })
            pdays--;
        }
        if (i <= selectedDateDay - 2) {
            monthOneDaysObj.push({
                date: d,
                class: "normal"
            })
        }
    }

    console.log(selectedDateDay)
    pdays = pdays_ip;
    prep = 2;
    postToPeak = 3;
    peakOvul = 5;
    postp = 2;
    normalday = plength - pdays - postp - postToPeak - peakOvul - prep;



    let monthOneDaysPrev = monthOneDaysObj.slice(0, monthOne)
    console.log(monthOneDaysPrev)

    for (var i = selectedDateDay - 2; i >= 0; i--) {
        console.log(i, prep, normalday, peakOvul)
        if (prep > 0) {
            monthOneDaysPrev[i].class = 'red';
            prep--;
            console.log("prep")
        } else if (prep === 0 && normalday > 0) {
            monthOneDaysPrev[i].class = 'normal';
            normalday--;
            console.log("normal")

        } else if (prep === 0 && normalday === 0 && peakOvul > 0) {
            monthOneDaysPrev[i].class = 'cyan';
            peakOvul--;
            console.log("cyan")
        } else if (prep === 0 && normalday === 0 && peakOvul === 0 && postToPeak > 0) {
            monthOneDaysPrev[i].class = 'normal';
            postToPeak--;
            console.log("postToPeak")
        } else if (prep === 0 && normalday === 0 && peakOvul === 0 && postToPeak === 0 && postp > 0) {
            monthOneDaysPrev[i].class = 'violet';
            postp--;
            console.log("postp")
        }

    }

    monthOneDays = [...monthOneDaysPrev];

    monthTwoDays = monthOneDaysObj.slice(monthOne, monthOne + monthTwo);
    monthThreeDays = monthOneDaysObj.slice(monthOne + monthTwo, monthOne + monthTwo + monthThree);
    myFunction();
}


function minc() {
  var m=  document.getElementById('plength');
  m.value++;
}

function mdec() {
    m=  document.getElementById('plength');
    m.value--;
}

let d = 0;

function dinc() {
    
    var d=document.getElementById('pdays');
    d.value++;
}

function ddec() {
    
   d= document.getElementById('pdays');
   d.value--;
}
let values = [];
let selectedDate;
let selectedFullDate;
let gslot;
let gcurrent;
let bookings = [];
// A $( document ).ready() block.
$(document).ready(function () {
    let d = new Date();
    let n = d.getMonth();
});
