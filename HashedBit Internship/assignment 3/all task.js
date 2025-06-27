// Q1: Filter states not starting with vowels
function filterStates() {
  const states = ["Jharkhand", "Bihar", "Odisha", "Punjab", "Maharashtra", "Assam"];
  const result = states.filter(state => !/^[aeiou]/i.test(state));
  console.log("Q1:", result);
}

// Q2: Reverse word order
function reverseWords() {
  const str = 'I love my India';
  const result = str.split(" ").reverse().join(" ");
  console.log("Q2:", result);
}

// Q3: Convert 'INDIA' to 'INDONESIA'
function convertIndia() {
  const arr = 'INDIA'.split('');
  arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
  const result = arr.join('');
  console.log("Q3:", result);
}

// Q4: Count vowels and consonants
function countVowelsAndConsonants() {
  const text = "This is a test string for vowels and consonants.";
  const vowels = text.match(/[aeiou]/gi)?.length || 0;
  const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
  console.log("Q4: Vowels:", vowels, "Consonants:", consonants);
}

// Q5: Replace wrong word with correct word
function correctfn(string, wrong, correct) {
  const result = string.replace(new RegExp(wrong, 'gi'), correct);
  console.log("Q5:", result);
}

// Q6: Filter numbers greater than 5
function filterGreaterThanFive() {
  const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
  const result = inputArr.filter(num => num > 5);
  console.log("Q6:", result);
}

// Q7: Calculate average scores of students
function studentAverages() {
  const students = [
    { name: "Abhishek", scores: [80, 70, 60] },
    { name: "Rahul", scores: [80, 70, 90] },
    { name: "Amit", scores: [60, 70, 80] },
    { name: "Hemant", scores: [90, 90, 80, 80] }
  ];

  const result = students.map(student => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return { name: student.name, average: avg };
  });

  console.log("Q7:", result);
}

// Q8: Repeated sum of digits until single digit
function digitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  console.log("Q8:", num);
}

// Q9: Count number of words in a paragraph
function countWords(paragraph) {
  const count = paragraph.trim().split(/\s+/).length;
  console.log("Q9: Word Count =", count);
}

// Q10: Reverse a string
function reverseString(str) {
  const result = str.split('').reverse().join('');
  console.log("Q10:", result);
}

// Q11: Average marks of students from subject objects
function studentSubjectAverage() {
  const data = [
    {
      name: "student1",
      scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
      name: "student2",
      scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
      name: "student3",
      scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
  ];

  const result = data.map(student => {
    const scores = Object.values(student.scores);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return { [student.name]: { average: Math.round(avg) } };
  });

  console.log("Q11:", result);
}

// ▶️ Function Calls to run all:
filterStates();
reverseWords();
convertIndia();
countVowelsAndConsonants();
correctfn("He is a goood boy", "goood", "good");
filterGreaterThanFive();
studentAverages();
digitSum(456);
countWords("This is a sample paragraph with a bunch of words to count.");
reverseString("Hello");
studentSubjectAverage();