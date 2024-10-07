// File: gradeAssignment_v2.js

// Function to determine the equivalent grade based on score using Conditional Ternary Operators
function calculateGrade(score) {
    // Ternary conditions to assign grades based on score range
    let grade = score >= 97 ? "1.00 Excellent" :
                score >= 94 ? "1.25 Excellent" :
                score >= 91 ? "1.50 Above Average" :
                score >= 88 ? "1.75 Above Average" :
                score >= 85 ? "2.00 Average" :
                score >= 82 ? "2.25 Average" :
                score >= 79 ? "2.50 Below Average" :
                score >= 76 ? "2.75 Below Average" :
                score == 75 ? "3.00 Below Average" :
                score >= 72 ? "4.00 Poor" :
                "5.00 Poor";  // If score is 71 or below
    return grade;
}

// Function to determine final remarks based on score using if-else statements
function finalRemarks(score) {
    let remarks;

    if (score >= 90) {
        remarks = "HIGH PASS, Candidate for Cum Laude";
    } else if (score >= 80) {
        remarks = "AVERAGE PASS";
    } else if (score >= 75) {
        remarks = "LOW PASS";
    } else {
        remarks = "FAILED, Needs Improvement";
    }

    return remarks;
}

// Main function to log the results
function logGrade() {
    // Prompt the user to enter their score
    let score =prompt("Please enter your score:");
    
    // Convert the input into a number
    score = parseFloat(score);
    
    // Check if the input is a valid number
    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Invalid input. Please enter a score between 0 and 100.");
    } else {
        // Getting the equivalent grade using the calculateGrade function
        let equivalentGrade = calculateGrade(score);
        
        // Getting the final remarks based on the score
        let remarks = finalRemarks(score);
        
        // Logging the output to the console
        console.log("Your equivalent Grade is: " + equivalentGrade);
        console.log("Final Remarks: " + remarks);
    }
}

// Call the main function to prompt user for input and display the result
logGrade();
