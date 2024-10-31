// studentEnrollment.js

// Arrays for subjects
let DSA = [];
let PL = [];
let Networks = [];

function startEnrollment() {
    while (true) {
        // Ask the user to choose a subject
        let subjectChoice = prompt("Choose a subject to enroll a student:\nA: DSA\nB: PL\nC: Networks\nD: Exit");
        let subjectArray;

        if (subjectChoice === "A") {
            subjectArray = DSA;
        } else if (subjectChoice === "B") {
            subjectArray = PL;
        } else if (subjectChoice === "C") {
            subjectArray = Networks;
        } else if (subjectChoice === "D") {
            break;
        } else {
            console.log("Invalid choice. Please select A, B, C, or D.");
            continue;
        }

        while (true) {
            let operationChoice = prompt("Choose an operation:\nA: Enroll\nB: Unenroll\nC: Select Another Subject\nD: Exit");

            if (operationChoice === "A") {
                let studentName = prompt("Enter the name of the student to enroll:");
                subjectArray.push(studentName);
                console.log(`${studentName} has been enrolled in the subject.`);
            } else if (operationChoice === "B") {
                console.log("Currently enrolled students:", subjectArray);
                let studentName = prompt("Enter the name of the student to unenroll:");
                
                let index = subjectArray.indexOf(studentName);
                if (index !== -1) {
                    subjectArray.splice(index, 1);
                    console.log(`${studentName} has been unenrolled from the subject.`);
                } else {
                    console.log(`${studentName} is not enrolled in this subject.`);
                }
            } else if (operationChoice === "C") {
                break;
            } else if (operationChoice === "D") {
                console.log("Enlisted students per subject:");
                console.log("DSA:", DSA);
                console.log("PL:", PL);
                console.log("Networks:", Networks);
                return;
            } else {
                console.log("Invalid choice. Please select A, B, C, or D.");
            }
        }
    }
}

// Start the enrollment program
startEnrollment();
