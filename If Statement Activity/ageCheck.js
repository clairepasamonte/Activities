// This script checks the user's age and categorizes them as a child, teenager, or adult.

let age = prompt("Enter your age: ");  // Prompt the user to enter their age

// Convert the input to a number
age = Number(age);

// Use if-else structure to determine the category based on age
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20) {
    console.log("You are an adult.");
} else {
    console.log("Invalid age entered.");
}
