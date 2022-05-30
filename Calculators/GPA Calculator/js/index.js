const add_btn = document.getElementById("btn_add");
var index = 1;

add_btn.addEventListener("click", ()=>{
    const c_name = document.getElementById("input_name").value;
    const c_hour = document.getElementById("input_hour").value;
    const c_grade = document.getElementById("input_grade").value;
    const courses = document.getElementById("courses");
    const string = `<tr class = "course" id ="${index}">
    <th class = "c_name">${c_name}</th>
    <th class = "c_hour" id = "${c_hour}">${c_hour}</th>
    <th class = "c_grade" id = "${c_grade}">${c_grade}</th>
    <th><button class = "close_btn"><img src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" class = "close" id = "${index}"/></button><th>
    </tr>`
    index +=1;
    courses.insertAdjacentHTML("beforeend", string);
})

const courses = document.getElementById("courses");
courses.addEventListener("click", ()=>{
    const close_btns = document.getElementsByClassName("close_btn");
    for (var i = 0; i < close_btns.length; i++) {
        close_btns[i].addEventListener("click", (e) =>{
            var d = document.getElementById(e.target.id);
            d.remove();
        });
    }
})

const calc_btn = document.getElementById("calc");

calc_btn.addEventListener("click", ()=>{
    const num_courses = document.getElementsByClassName("course");
    const hours = document.getElementsByClassName("c_hour");
    const grades = document.getElementsByClassName("c_grade");
    let total_hours = 0, denominator = 0, numerator = 0;
    for (var i = 0; i < num_courses.length; i++) {
        total_hours += parseInt(hours[i].id);
        denominator += parseInt(hours[i].id);
        if(grades[i].id == "A+"){
            numerator += 4*parseInt(hours[i].id);
        }else if(grades[i].id == "A"){
            numerator += 3.7*parseInt(hours[i].id);
        }else if(grades[i].id == "B+"){
            numerator += 3.3*parseInt(hours[i].id);
        }else if(grades[i].id == "B"){
            numerator += 3*parseInt(hours[i].id);
        }else if(grades[i].id == "C+"){
            numerator += 2.7*parseInt(hours[i].id);
        }else if(grades[i].id == "C"){
            numerator += 2.4*parseInt(hours[i].id);
        }else if(grades[i].id == "D+"){
            numerator += 2.2*parseInt(hours[i].id);
        }else if(grades[i].id == "D"){
            numerator += 2*parseInt(hours[i].id);
        }else if(grades[i].id == "F"){
            numerator += 0*parseInt(hours[i].id);
        }
    }
    var GPA = numerator/denominator;
    const result = document.getElementById("result");
    const string = `
        <strong> GPA = </strong> <span> ${GPA.toPrecision(3)}</span><br>
        <strong> Total hours = </strong> <span>${total_hours}</span>`
    result.innerHTML = string;
})

const reset_btn = document.getElementById("reset");

reset_btn.addEventListener("click", ()=>{
    const table = document.getElementById("courses");
    table.innerHTML = `<tr class = "h_course">
    <th class = "h_c_name">Course name:</th>
    <th class = "h_c_hour">Course hours:</th>
    <th class = "h_c_grade">Course Grade:</th>
    </tr>`
    const result = document.getElementById("result");
    result.innerHTML = "";
})