// colorPreferences.js

// Creating an array to store colors the user likes
let colorPreferences = [];

// Collecting three colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    colorPreferences.push(color);
    console.log("Updated color preferences:", colorPreferences);
}
