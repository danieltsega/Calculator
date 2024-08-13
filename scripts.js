// Get elements
let num1Display = document.getElementById("num1Display");
let opDisplay = document.getElementById("opDisplay");
let num2Display = document.getElementById("num2Display");
let ansDisplay = document.getElementById("ansDisplay");

// Declare variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

// Number Button click Function
function handleNumberClick(value) {
  if (operator === "") {
    num1 += value;
    num1Display.textContent = num1;
  } else {
    num2 += value;
    num2Display.textContent = num2;
  }
}

// Function to handle operator button clicks
function handleOperatorClick(value) {
  if (num1 !== "") {
    operator = value;
    opDisplay.textContent = operator;
  }
}

function operate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let num1Float = parseFloat(num1);
    let num2Float = parseFloat(num2);

    switch (operator) {
      case "+":
        result = num1Float + num2Float;
        break;
      case "-":
        result = num1Float - num2Float;
        break;
      case "x":
        result = num1Float * num2Float;
        break;
      case "/":
        result = num2Float !== 0 ? num1Float / num2Float : "Error";
        break;
      default:
        result = "Error";
        break;
    }

    ansDisplay.textContent = result;
  }
}

// Function to clear all displays
function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  num1Display.textContent = "";
  opDisplay.textContent = "";
  num2Display.textContent = "";
  ansDisplay.textContent = "";
}

// Add event listeners to number buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    handleNumberClick(this.textContent);
  });
});

// Add event listeners to operator buttons
document.querySelectorAll(".btnOp").forEach((button) => {
  button.addEventListener("click", function () {
    handleOperatorClick(this.textContent);
  });
});

// Add event listener to equals button
document.getElementById("equalBtn").addEventListener("click", function () {
  operate();
});

// Add event listener to clear button
document.getElementById("clearBtn").addEventListener("click", function () {
  clearDisplay();
});
