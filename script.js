let operatorBtns = Array.from(document.querySelectorAll("[data-operation]")); // need to turn it into an array to map over all items
let numberBtns = Array.from(document.querySelectorAll("[data-number]"));
let clearBtn = document.querySelector("[data-clear]");
let deleteBtn = document.querySelector("[data-delete]");
let equalBtn = document.querySelector("[data-equal]");
let operator = "";
let a = "";
let b = "";

let upper = document.querySelector(".upper");
let lower = document.querySelector(".lower");

equalBtn.addEventListener("click", () => calculate(operator, a, b));

numberBtns.map((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    lower.innerText += e.target.innerText;
  });
});

operatorBtns.map((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    operator = e.target.innerText;
    if (upper.innerText == "") {
      upper.innerText = upper.innerText + lower.innerText + e.target.innerText;
      lower.innerText = "";
    } else if (upper.innerText !== "") {
      a = parseInt(upper.innerText.slice(0, -1));
      b = parseInt(lower.innerText);
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
      operator = e.target.innerText;
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
  a = parseInt(upper.innerText.slice(0, -1)); //first input without the operator
  b = parseInt(lower.innerText);

  if (operator === "+") {
    lower.innerText = add(a, b);
    upper.innerText = "";
  } else if (operator === "-") {
    lower.innerText = subtract(a, b);
    upper.innerText = "";
  } else if (operator === "×") {
    lower.innerText = multiply(a, b);
    upper.innerText = "";
  } else if (operator === "÷") {
    lower.innerText = divide(a, b);
    upper.innerText = "";
  }

  // zahlen sollen nicht an das ergebnisse angehängt werden
  //funktioniert noch nicht

  numberBtns.map((numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
      lower.innerText = e.target.innerText;
    });
  });
}

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
