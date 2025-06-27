function calculate(num1, num2, operator) {
  switch (operator) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
}

function performCalculation() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  const result = calculate(num1, num2, operator);
  document.getElementById("result").textContent = result;
}