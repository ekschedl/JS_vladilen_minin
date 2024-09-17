let num = 41;
let firstName = "Katja";

num = 80;
const isProgrammer = true;

/* group of comments*/

const resultElement = document.getElementById("result");
// console.log(resultElement);
// console.log(resultElement.textContent);
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

// console.log(typeof sum);

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

submitBtn.onclick = function () {
  if (action == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  }
  if (action == "-") {
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  }
};
