function digitProductSum(n1, n2) {
  // Convert both numbers to strings
  let str1 = n1.toString();
  let str2 = n2.toString();

  // Pad the shorter number with leading zeros
  const maxLength = Math.max(str1.length, str2.length);
  str1 = str1.padStart(maxLength, '0');
  str2 = str2.padStart(maxLength, '0');

  let sum = 0;
  for (let i = 0; i < maxLength; i++) {
    sum += parseInt(str1[i]) * parseInt(str2[i]);
  }

  return sum;
}

function calculateProductSum() {
  const n1 = parseInt(document.getElementById("num1").value);
  const n2 = parseInt(document.getElementById("num2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  const result = digitProductSum(n1, n2);
  document.getElementById("result").innerText = `Sum of Products: ${result}`;
}