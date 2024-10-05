// Prompt the user for their name, address, age, class role, and course
let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let age = parseInt(prompt("Enter your age:")); // Convert age to a number
let classRole = prompt("Enter your class role (Officer, Student, Teacher):");
let course = prompt("Enter your course (BSCS, BSM, BAEL):");

// Check if the entered course is valid
if (course === "BSCS") {
  // Check if the entered class role is valid for BSCS
  if (classRole === "Officer") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else {
    // Display an alert message if the class role is invalid
    alert("Invalid class role. Please enter Officer, Student, or Teacher.");
  }
} else if (course === "BSM") {
  // Check if the entered class role is valid for BSM
  if (classRole === "Officer") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else {
    // Display an alert message if the class role is invalid
    alert("Invalid class role. Please enter Officer, Student, or Teacher.");
  }
} else if (course === "BAEL") {
  // Check if the entered class role is valid for BAEL
  if (classRole === "Officer") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    // Print the user's name for 1/4 of their age
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else {
    // Display an alert message if the class role is invalid
    alert("Invalid class role. Please enter Officer, Student, or Teacher.");
  }
} else {
  // Display an alert message if the course is invalid
  alert("Invalid course. Please enter BSCS, BSM, or BAEL.");
}
