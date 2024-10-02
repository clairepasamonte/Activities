// This script assigns a grade based on the user's score input.

let score = prompt("Enter your score: ");  // Prompt the user to enter their score

// Convert the input to a number
score = Number(score);

// Use if-else structure to assign grades based on the score
if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80 && score < 90) {
    console.log("Your grade is: Good.");
} else if (score >= 70 && score < 80) {
    console.log("Your grade is: Fair.");
} else if (score < 70) {
    console.log("Your grade is: Needs Improvement.");
} else {
    console.log("Invalid score entered.");
}
