function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return "Invalid salary input";
  }

  let taxAmount = salary * taxRate;
  return `Tax Amount: ₹${taxAmount.toFixed(2)} (Rate: ${(taxRate * 100)}%)`;
}

function calculateTax() {
  const salary = parseFloat(document.getElementById("salaryInput").value);
  const result = findTax(salary);
  document.getElementById("result").innerText = result;
}