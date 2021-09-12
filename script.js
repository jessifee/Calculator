let operatorBtns = Array.from(document.querySelectorAll("[data-operation]")); // need to turn it into an array to map over all items
let numberBtns = Array.from(document.querySelectorAll("[data-number]"));
let clearBtn = document.querySelector("[data-clear]");
let deleteBtn = document.querySelector("[data-delete]");
let equalBtn = document.querySelector("[data-equal]");
let dot = document.querySelector("[data-decimal");
let operator = "";
let a = "";
let b = "";
let solution = "x";

let upper = document.querySelector(".upper");
let lower = document.querySelector(".lower");

equalBtn.addEventListener("click", () => calculate(operator, a, b));

numberBtns.map((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    if (solution == lower.innerText) {
      lower.innerText = e.target.innerText;
    } else {
      lower.innerText += e.target.innerText;
    }
  });
});

operatorBtns.map((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    operator = e.target.innerText;
    if (upper.innerText == "") {
      upper.innerText += lower.innerText + e.target.innerText;
      lower.innerText = "";
    } else if (upper.innerText !== "") {
      a = parseFloat(upper.innerText.slice(0, -1));
      b = parseFloat(lower.innerText);
      operator = upper.innerText[upper.innerText.length - 1];
      if (operator === "+") {
        upper.innerText = add(a, b) + e.target.innerText;
        lower.innerText = "";
      } else if (operator === "-") {
        upper.innerText = subtract(a, b) + e.target.innerText;
        lower.innerText = "";
      } else if (operator === "×") {
        upper.innerText = multiply(a, b) + e.target.innerText;
        lower.innerText = "";
      } else if (operator === "÷") {
        upper.innerText = divide(a, b) + e.target.innerText;
        lower.innerText = "";
      }
      
    }
  });
});

clearBtn.addEventListener("click", (e) => {
  lower.innerText = "";
  upper.innerText = "";
});

deleteBtn.addEventListener("click", (e) => {
  lower.innerText = lower.innerText.slice(0, -1); //deletes last number
  if (lower.innerText === "") {
    lower.innerText = upper.innerText;
    upper.innerText = "";
    lower.innerText = lower.innerText.slice(0, -1);
  }
});

function calculate(operator, a, b) {
  a = parseFloat(upper.innerText.slice(0, -1)); //first input without the operator
  b = parseFloat(lower.innerText);

  if (operator === "+") {
    lower.innerText = add(a, b);
    upper.innerText = "";
    solution = add(a, b);
  } else if (operator === "-") {
    lower.innerText = subtract(a, b);
    upper.innerText = "";
    solution = subtract(a, b);
  } else if (operator === "×") {
    lower.innerText = multiply(a, b);
    upper.innerText = "";
    solution = multiply(a, b);
  } else if (operator === "÷" && lower.innerText === "0") {
    lower.innerText = "You can't divide by 0";
  } else if (operator === "÷") {
    lower.innerText = divide(a, b);
    upper.innerText = "";
    solution = divide(a, b);
  }
}

dot.addEventListener("click", (e) => {
  let inputArray = Array.from(lower.innerText);
  if (inputArray.includes(".") === false) {
    lower.innerText += e.target.innerText;
  }
});

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
