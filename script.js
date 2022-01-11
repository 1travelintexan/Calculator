let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equals");
let clearBtn = document.querySelector(".clear");

let screen = document.querySelector("#screen");
let firstNumber = "";
let secondNumber = "";
let operator = "";

//listener for all number buttons
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    screen.innerText = screen.innerText + numberBtn.innerText;
    if (operator == "") {
      firstNumber = screen.innerText;
      console.log("first", firstNumber);
    } else {
      secondNumber = screen.innerText;
      console.log("second", secondNumber);
    }
  });
});

//listener for all operator buttons
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    screen.innerText = "";
    operator = operatorBtn.innerText;
  });
});

//listener for the equal button
equalBtn.addEventListener("click", () => {
  let answer = operate(Number(firstNumber), Number(secondNumber), operator);
  screen.innerText = answer.toString();
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

//clear button listener
clearBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  screen.innerText = "";
});

//function to perform all of the math
function operate(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  }
  if (operator == "-") {
    return num1 - num2;
  }
  if (operator == "/") {
    return num1 / num2;
  }
  if (operator == "*") {
    return num1 * num2;
  }
}
