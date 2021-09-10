let gridContainer = document.querySelector(".grid-container")
let addition = document.querySelector("#item17");
let subtraction = document.querySelector("#item13");
let multiplication = document.querySelector("#item9");
let division = document.querySelector("#item5");



addition.addEventListener("click", operator === "+")
subtraction.addEventListener("click", operator === "-")
multiplication.addEventListener("click", operator === "*")
division.addEventListener("click", operator === "/")

function add(a, b) {
  let sum = a + b;
  return sum;
}

function subtract(a, b) {
  let diff = a - b;
  return diff;
}

function multiply(a, b) {
  let mult = a * b;
  return mult;
}

function divide(a, b) {
  let quot = a / b;
  return quot;
}

function operate(operator, a, b) {
  a = x;
  b = y;
  if ((operator = "+")) {
    return add(a, b);
  } else if ((operator = "-")) {
    return subtract(a, b);
  } else if ((operator = "*")) {
    return multiply(a, b);
  } else if ((operator = "/")) {
    return divide(a, b);
  }
}


