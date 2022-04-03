InputButton = document.querySelector(".inputButton");
rowsElement1 = document.querySelector("select[name=rowsMultiply1]");
rowsElement2 = document.querySelector("select[name=rowsMultiply2]");
columnsElement1 = document.querySelector("select[name=columnsMultiply1]");
columnsElement2 = document.querySelector("select[name=columnsMultiply2]");
InputDiv = document.querySelector("div.inputVals");
ResultDiv = document.querySelector("div.result");
NoRows1 = 0;
NoRows2 = 0;
NoColumns1 = 0;
NoColumns2 = 0;

const changeColumnVal = (val) => {
  columnsElement1.value = val;
  rowsElement2.value = val;
};

const handleInput = () => {
  InputVals = ``;
  inputgrid = ``;
  NoRows1 = rowsElement1.value;
  NoRows2 = rowsElement2.value;
  NoColumns1 = columnsElement1.value;
  NoColumns2 = columnsElement2.value;

  inputgrid += `<div class="matrix matrix1"><p>Matrix A</p><table><tbody>`;
  inputgrid += `<tr>`;
  for(i = 0; i < NoColumns1; i++){
    inputgrid += `<th></th>`;
  }
  inputgrid += `</tr>`;
  for (i = 0; i < NoRows1; i++) {
    inputgrid += `<tr class="row row${i}">`;
    for (j = 0; j < NoColumns1; j++) {
      inputgrid += `<td><input type="number" class="input input${i}${j}" id="one_${i}_${j}"></td>`;
    }
    inputgrid += `</tr>`;
  }
  inputgrid += `</tbody></table></div>`;

  inputgrid += `<div class="matrix matrix2"><p>Matrix B</p><table><tbody>`;
  inputgrid += `<tr>`;
  for(i = 0; i < NoColumns2; i++){
    inputgrid += `<th></th>`;
  }
  inputgrid += `</tr>`;
  for (i = 0; i < NoRows2; i++) {
    inputgrid += `<tr class="row row${i}">`;
    for (j = 0; j < NoColumns2; j++) {
      inputgrid += `<td><input type="number" class="input input${i}${j}" id="two_${i}_${j}"></td>`;
    }
    inputgrid += `</tr>`;
  }
  inputgrid += `</tbody></table></div>`;

  InputVals = `<div class="inputGrid">${inputgrid}</div>`;
  InputVals += `<button class="calculateButton" onClick='handleMultiply()'>Multiply</button>`;

  InputDiv.innerHTML = InputVals;
  ResultDiv.innerHTML = ``;
};

const handleMultiply = () => {
  const array1 = [];
  for (i = 0; i < NoRows1; i++) {
    const ele = [];
    for (j = 0; j < NoColumns1; j++) {
      ele[j] = parseInt(document.querySelector(`#one_${i}_${j}`).value) || 0;
    }
    array1[i] = ele;
  }
  const array2 = [];
  for (i = 0; i < NoRows2; i++) {
    const ele = [];
    for (j = 0; j < NoColumns2; j++) {
      ele[j] = parseInt(document.querySelector(`#two_${i}_${j}`).value) || 0;
    }
    array2[i] = ele;
  }
  const mult = [];
  for (i = 0; i < NoRows1; i++) {
    const ele = [];
    for (j = 0; j < NoColumns2; j++) {
      let val = 0;
      for (k = 0; k < NoColumns1; k++) {
        val += array1[i][k] * array2[k][j];
      }
      ele[j] = val;
    }
    mult[i] = ele;
  } 

  resultgrid = ``;
  resultgrid += `<div class="matrix matrixResult"><p>Matrix A * Matrix B</p><table><tbody>`;
  resultgrid += `<tr>`;
  for(i = 0; i < NoColumns2; i++){
      resultgrid += `<th></th>`;
    }
  resultgrid += `</tr>`;

  for (i = 0; i < NoRows1; i++) {
    resultgrid += `<tr class="row row${i}">`;
    for (j = 0; j < NoColumns2; j++) {
      resultgrid += `<td><input type="number" class="result result${i}${j}" value="${mult[i][j]}" disabled></td>`;
    }
    resultgrid += `</tr>`;
  }
  resultgrid += `</tbody></table></div>`;
  ResultDiv.innerHTML = resultgrid;
};

InputButton.addEventListener("click", handleInput);
columnsElement1.addEventListener("change", () => {
  changeColumnVal(columnsElement1.value);
  console.log("event happen");
});
rowsElement2.addEventListener("change", () => {
  changeColumnVal(rowsElement2.value);
  console.log("event happen");
});

