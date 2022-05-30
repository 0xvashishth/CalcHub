function binomialCoeff() {
  let k = Number(document.getElementById("k").value);
  let n = Number(document.getElementById("n").value);
  let C = Array(n + 1)
    .fill(0)
    .map((x) => Array(k + 1).fill(0));
  let i, j;

  for (i = 0; i <= n; i++) {
    for (j = 0; j <= min(i, k); j++) {
      if (j == 0 || j == i) C[i][j] = 1;
      else C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }
  let answer = C[n][k];
  document.getElementById("result").innerHTML = answer;
  if (answer == 0) {
    document.getElementById("result").innerHTML =
      "value of k should be less than n";
  }
}
function min(a, b) {
  return a < b ? a : b;
}
