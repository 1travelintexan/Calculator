let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let equalBtn = document.querySelector("#equals");
let clearBtn = document.querySelector("#clear");
let deleteBtn = document.querySelector("#delete");

let screen = document.querySelector("#screen");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let answer = false;

//listener for all number buttons
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (answer == true) {
      answer = false;
      screen.innerText = "";
      screen.innerText = screen.innerText + numberBtn.innerText;
    } else {
      screen.innerText = screen.innerText + numberBtn.innerText;
    }
  });
});

//listener for all operator buttons
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    firstNumber = screen.innerText;
    screen.innerText = "";
    operator = operatorBtn.innerText;
  });
});

//listener for the equal button
equalBtn.addEventListener("click", () => {
  secondNumber = screen.innerText;
  let solution = operate(Number(firstNumber), Number(secondNumber), operator);
  screen.innerText = solution.toString();
  answer = true;
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

//delete button listener
deleteBtn.addEventListener("click", () => {
  console.log(screen.innerText.length);
  screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
});

//function to perform all of the math
function operate(num1, num2, operator) {
  if (operator == "+") {
    let solution = num1 + num2;
    if (solution.toString().includes(".")) {
      return solution.toFixed(4);
    } else {
      return solution;
    }
  }
  if (operator == "-") {
    let solution = num1 - num2;
    if (solution.toString().includes(".")) {
      return solution.toFixed(4);
    } else {
      return solution;
    }
  }
  if (operator == "/") {
    if (num2 == 0) {
      return "You can't divide by zero!";
    } else {
      let solution = num1 / num2;
      console.log(solution);
      if (solution.toString().includes(".")) {
        return solution.toFixed(4);
      } else {
        return solution;
      }
    }
  }
  if (operator == "*") {
    let solution = num1 * num2;
    if (solution.toString().includes(".")) {
      return solution.toFixed(4);
    } else {
      return solution;
    }
  }
}
