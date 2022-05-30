const form = document.querySelector(".form-container")
const submitBtn = document.querySelector(".submit")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let n = parseInt(document.querySelector(".num").value);
    const result = document.querySelector(".result");
    const answer =document.querySelector("#answer");
    answer.innerHTML = `The ${n} Catalan Number is ${catalanNum(n)}`;
    result.classList.add("show");
});

// Calculates the catalan number using Dynamic Programming
var catalanNum = (n) => {
    if(n < 2) return n;
    let dp = Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
        for(let j = 1; j <= i; j++){
            dp[i] = dp[i] + (dp[i - j] * dp[j - 1]);
        }
    }
    return dp[n];
};