// Declare the variables and constant with their values
let a = 25;
let b = 20;
let c = 12;
let d = "15";
let e = 15;

// Display the sum of the declared variables and constant
console.log(a + b + c + parseInt(d) + e);

// Compare the values of variable d and constant e using relational operators
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);
console.log(d == e);

// Declare new variables to store the results of the following operations
let result1 = a - b - c - parseInt(d) - e;
let result2 = (a * c) / e;
let result3 = e ** c;
let result4 = e;

// Display the results
console.log(result1);
console.log(result2);
console.log(result3);

// Reassign the value of c.3 to constant e
e = c * 3;
console.log(e);
