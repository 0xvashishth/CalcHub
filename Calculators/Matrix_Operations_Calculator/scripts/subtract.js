InputButton = document.querySelector(".inputButton");
rowsElement = document.querySelector("select[name=rowsSubtract]");
columnsElement = document.querySelector("select[name=columnsSubtract]");
InputDiv = document.querySelector("div.inputVals");
ResultDiv = document.querySelector("div.result");
NoRows = 0;
NoColumns = 0;

const handleInput = () => {
  InputVals = ``;
  inputgrid = ``;
  NoRows = rowsElement.value;
  NoColumns = columnsElement.value;
  inputgrid += `<div class="matrix matrix1"><p>Matrix A</p><table><tbody>`;
  inputgrid += `<tr>`;
  for(i = 0; i < NoColumns; i++){
    inputgrid += `<th></th>`;
  }
  inputgrid += `</tr>`;
  for (i = 0; i < NoRows; i++) {
    inputgrid += `<tr class="row row${i}">`;
    for (j = 0; j < NoColumns; j++) {
      inputgrid += `<td><input type="number" class="input input${i}${j}" id="one_${i}_${j}"></td>`;
    }
    inputgrid += `</tr>`;
  }
  inputgrid += `</tbody></table></div>`;

  inputgrid += `<div class="matrix matrix2"><p>Matrix B</p><table><tbody>`;
  inputgrid += `<tr>`;
  for(i = 0; i < NoColumns; i++){
    inputgrid += `<th></th>`;
  }
  inputgrid += `</tr>`;
  for (i = 0; i < NoRows; i++) {
    inputgrid += `<tr class="row row${i}">`;
    for (j = 0; j < NoColumns; j++) {
      inputgrid += `<td><input type="number" class="input input${i}${j}" id="two_${i}_${j}"></td>`;
    }
    inputgrid += `</tr>`;
  }
  inputgrid += `</tbody></table></div>`;

  InputVals = `<div class="inputGrid">${inputgrid}</div>`;
  InputVals += `<button class="calculateButton" onClick='handleSubtract()'>Subtract</button>`;

  InputDiv.innerHTML = InputVals;
  ResultDiv.innerHTML = ``;
};

const handleSubtract = () => {
  resultgrid = ``;
  resultgrid += `<div class="matrix matrixResult"><p>Matrix A - Matrix B</p><table><tbody>`;
  resultgrid += `<tr>`;
  for(i = 0; i < NoColumns; i++){
    resultgrid += `<th></th>`;
  }
  resultgrid += `</tr>`;
  for (i = 0; i < NoRows; i++) {
    resultgrid += `<tr class="row row${i}">`;
    for (j = 0; j < NoColumns; j++) {
      value1 = parseInt(document.querySelector(`#one_${i}_${j}`).value) || 0;
      value2 = parseInt(document.querySelector(`#two_${i}_${j}`).value) || 0;
      resultgrid += `<td><input class="result result${i}${j}" type="number" value="${
        value1 - value2
      }" disabled></td>`;
    }
    resultgrid += `</tr>`;
  }
  resultgrid += `</tbody></table></div>`;

  ResultDiv.innerHTML = resultgrid;
};

InputButton.addEventListener("click", handleInput);

console.log();
