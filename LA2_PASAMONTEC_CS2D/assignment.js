//define student information
let studentName = "Claire Pasamonte";
let birthdate = "October 1, 2004";
let birthplace = "Tablac, Candon City, Ilocos Sur, Philippines 2710";
let currentLocation = "Labut, Lidlidda, Ilocos Sur, Philippines 2723";
let course = "bachelor of science in computer science";
let dreamJob = "Software Engineer";
let capitalize = studentName.toUpperCase(); // toUpperCase() capitalizes a text
let capCurrentLoc = currentLocation.toUpperCase();

//construct output string 
let output = capitalize + " was born" + birthdate+ " at " + birthplace + ", and currently living at " 
+ capCurrentLoc + ". " + studentName + " is taking up " + course + "and dreams to be " + dreamJob + "after graduation."; // stored in a regular case format

//print output to console
console.log(output);

//define classmate1 information
let classmate1Name = "Jean Matbagan";
let classmate1Birthdate = "November 28, 2004";
let classmate1Birthplace = "San Miliano, San Emilio, Ilocos Sur, Philippines 2722";
let classmate1CurrentLocation = "San Miliano, San Emilio, Ilocos Sur, Philippines 2722";
let classmate1Course = "bachelor of science in Computer Science";
let classmate1DreamJob = "Web Developer";
let classmate1Capitalize = classmate1Name.toUpperCase();
let classmate1capCurrentLoc = classmate1CurrentLocation.toUpperCase();

//construct output string 
let classmate1Output = classmate1Capitalize + " was born" + classmate1Birthdate+ " at " + classmate1Birthplace + ", and currently living at " 
+ classmate1capCurrentLoc + ". " + classmate1Name + " is taking up " + classmate1Course + "and dreams to be " + classmate1DreamJob + "after graduation.";

//print output using console
console.log(classmate1Output);

let classmate2Name = "Jhury-Ann Bordios";
let classmate2Birthdate = "July 15, 2004";
let classmate2Birthplace = "Naguimba, Banayoyo, Ilocos Sur, Phippines 2724";
let classmate2CurrentLocation = "Naguimba, Banayoyo, Ilocos Sur, Phippines 2724";
let classmate2Course = "Bachelor of Science in Computer Science";
let classmate2DreamJob = "Data Scientist";
let classmate2Capitalize = classmate2Name.toUpperCase();
let classmate2capCurrentLoc = classmate2CurrentLocation.toUpperCase();


let classmate2Output = classmate2Capitalize + " was born" + classmate2Birthdate+ " at " + classmate2Birthplace + ", and currently living at " 
+ classmate2capCurrentLoc + ". " + classmate2Name + " is taking up " + classmate2Course + "and dreams to be " + classmate2DreamJob + "after graduation.";

console.log(classmate2Output);
