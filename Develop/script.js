// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalEl = document.querySelector("#capital");
var lowerEl = document.querySelector("#lower");
var numbersEl = document.querySelector("#numbers");
var specialEl = document.querySelector("#special");
var passwordEl = document.querySelector("#password");
var lengthEl = document.querySelector("#length");



// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const CapitalBox = capitalEl.checked;
  const LowerBox = lowerEl.checked;
  const NumbersBox = numbersEl.checked;
  const SpecialBox = specialEl.checked;

  passwordEl.innerText = writePassword;
});


function geratePassword (capitalEl, lowerEl, numberEl, specialEl, lengthEl) {
  let generatePassword = "";
  const typesCount = capitalEl + lowerEl + numberEl + specialEl;
  const typesArr = [{capitalEl}, {lowerEl}, {numberEl}, {specialEl}].filter(item =>
    Object.values(item)[0]);
    if(typesCount === 0){
      return '';
    }
}



// if generate password is clicked 
// then generate password

// generate password is Random
// choose capital-letters
// choose lowcase-letters
// choose numbers
// choose special characters
// choose the number of characters in password
//     var password_length = number;
//     charArray []

// how to randomize the character locations

