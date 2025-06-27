// 1. let, const, var scope difference

function scopeExample() {
  var a = "I am var";     // Function-scoped
  let b = "I am let";     // Block-scoped
  const c = "I am const"; // Block-scoped

  if (true) {
    var a = "var changed inside block";
    let b = "let inside block";
    const c = "const inside block";
    console.log("Q1:","Inside block:", a, b, c);
  }

  console.log( "    ","Outside block:", a, b, c);
}
scopeExample();


//2. Second fruit in array

const fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

function getSecondFruit() {
  return fruits[1]; // index starts from 0
}

console.log("Q2:", getSecondFruit());


// //3. Push and pop an element

function modifyArray(arr) {
  arr.push("New Element");
  arr.pop();
  return arr;
}

console.log("Q3:", modifyArray([1, 2, 3]));


//4. Square each number using map()

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log("Q4:", squareNumbers(numbers));


//5. Filter odd numbers using filter()

function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log("Q5:", filterOddNumbers([1, 2, 3, 4, 5, 6, 7]));


//6. Object with properties

const person = {
  name: "Ravi",
  age: 25,
  occupation: "Engineer"
};

function greetPerson(p) {
  console.log("Q6:", `Hello, my name is ${p.name}. I am a ${p.age} year old ${p.occupation}.`);
}

greetPerson(person);


// 7. Calculate area of rectangle

function getArea(rectangle) {
  return rectangle.width * rectangle.height;
}

console.log("Q7:", getArea({ width: 5, height: 10 }));

//8. Get object keys using Object.keys()

const sampleObj = { a: 1, b: 2, c: 3 };

function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log("Q8:", getObjectKeys(sampleObj));


// 9. Merge two objects using Object.assign()

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log("Q9:", mergeObjects({ a: 1 }, { b: 2 }));


// 10. Sum of array using reduce()

const nums = [10, 20, 30, 40];

function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log("Q10:", sumArray(nums));