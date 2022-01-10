let numberBtns = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
let firstNumber = "";
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    screen.innerText = screen.innerText + numberBtn.innerText;
    firstNumber = screen.innerText;
  });
});
