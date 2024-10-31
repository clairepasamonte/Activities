// userProfileObject.js

// Creating an object to store user profile information
let userProfile = {
    fullName: prompt("Please enter your full name:"),
    age: prompt("Please enter your age:"),
    favoriteNumber: prompt("Please enter your favorite number:"),
    favoriteColors: [] 
};

// Prompt for favorite colors, allowing multiple entries
let moreColors = true;
while (moreColors) {
    let colorInput = prompt("Enter a favorite color (or type 'done' to finish):");
    if (colorInput.toLowerCase() === 'done') {
        moreColors = false;
    } else {
        userProfile.favoriteColors.push(colorInput);
    }
}

// Logging the entire object to the console
console.log("User Profile:", userProfile);
