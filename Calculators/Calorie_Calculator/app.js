document.getElementById("mbutton").addEventListener("click", () => {
    mAge = document.getElementById("mAge")
    mWeight = document.getElementById("mWeight")
    mHeight = document.getElementById("mHeight")
    if (validate(mAge.value) || validate(mWeight.value) || validate(mHeight.value))
        return;
    answer = 0 - 5 * +mAge.value + 10 * +mWeight.value + 6.25 * +mHeight.value
    if (document.getElementById('mMale').checked)
        answer += 5
    else
        answer -= 161
    document.getElementById("mResult").innerHTML = "Your Basic Metabolic Rate = " + answer + " Calories"
});
// document.getElementById("ubutton").addEventListener("click", () => {
//     uAge = document.getElementById("uAge")
//     uWeight = document.getElementById("uWeight")
//     uHeight = document.getElementById("uHeight")
//     answer = 0 - 5 * +mAge.value + 10 * +mWeight.value + 6.25 * +mHeight.value
//     if (document.getElementById('mMale').checked)
//         answer += 5
//     else
//         answer -= 161
//     document.getElementById("uResult").innerHTML = "Your Basic Metabolic Rate =" + answer + " Calories"
// });
function validate(value) {
    return value==="";
}