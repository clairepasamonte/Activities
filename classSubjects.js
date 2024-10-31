// classSubjects.js

// Collecting user information for class subjects
let subjectTitle = prompt("Please enter the subject title:");
let classSchedule = prompt("Please enter the class schedule (e.g., Mon-Wed-Fri, 9:00 AM - 10:30 AM):");
let classroom = prompt("Please enter the classroom:");
let classInstructor = prompt("Please enter the instructor's name:");
let studentName = prompt("Please enter your name:");

// Logging the information to the console
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
