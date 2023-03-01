// click events for top up buttons
primoOption1.addEventListener("click", () => {
  primocatnipCount = primocatnipCount + 60;
  moneySpent = moneySpent + 0.99;
  displayNumbers(primocatnipCount, moneySpent);
});

primoOption2.addEventListener("click", () => {
  primocatnipCount = primocatnipCount + 330;
  moneySpent = moneySpent + 4.99;
  displayNumbers(primocatnipCount, moneySpent);
});

primoOption3.addEventListener("click", () => {
  primocatnipCount = primocatnipCount + 1090;
  moneySpent = moneySpent + 14.99;
  displayNumbers(primocatnipCount, moneySpent);
});

primoOption4.addEventListener("click", () => {
  primocatnipCount = primocatnipCount + 2240;
  moneySpent = moneySpent + 29.99;
  displayNumbers(primocatnipCount, moneySpent);
});

primoOption5.addEventListener("click", () => {
  primocatnipCount = primocatnipCount + 3880;
  moneySpent = moneySpent + 49.99;
  displayNumbers(primocatnipCount, moneySpent);
});

primoOption6.addEventListener("click", () => {
  primocatnipCount = primocatnipCount + 8080;
  moneySpent = moneySpent + 99.99;
  displayNumbers(primocatnipCount, moneySpent);
});

//display numbers
function displayNumbers(primocatnipCount, moneySpent) {
  primocatnipDisplay.innerText = `Primocatnips: ${primocatnipCount}`;
  moneySpentDisplay.innerText = `Money Spent: ${moneySpent.toFixed(2)}`;
}
