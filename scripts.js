// Addition Function
function add(num1, num2) {
  return num1 + num2;
}

// Substraction Function
function substract(num1, num2) {
  return num1 - num2;
}

// Multiply Function
function multiply(num1, num2) {
  return num1 * num2;
}

// Divide Function
function divide(num1, num2) {
  return num1 / num2;
}

const num1 = 5;
const num2 = 5;
const operator = "+";

function operate(num1, operator, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return substract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return "Wrong Syntax";
  }
}

console.log(operate(num1, operator, num2));

// Define the display and clear btns
let clearBtn = document.getElementById("clearBtn");
let inputDisplay = document.getElementById("inputDisplay");
let ansDisplay = document.getElementById("ansDisplay");

clearBtn.addEventListener("click", () => {
  inputDisplay.innerHTML = "";
  ansDisplay.innerHTML = "";
});

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});
