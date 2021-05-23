// Assignment Code
const generate = document.getElementById("generate");
var generateBtn = document.querySelector("#generate");
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const capitalEl = document.getElementById("capital");
const lowerEl = document.getElementById("lower");
const numbersEl = document.getElementById("numbers");
const specialEl = document.getElementById("special");
const passwordEl = document.getElementById("password");

const writePasswordEl = document.getElementById("writePassword");
const GenpasswordEl = document.getElementById("Genpassword");

const randomFunc = {
  capital: getRandomcapital,
  lower: getRandomlower,
  numbers: getRandomcapital,
  special: getRandomspecial
};

// Write password to the password input
// function writePassword() {
//   password = generatePassword()
//   passwordText = document.querySelector("#password")
//   passwordText.value = password
// }

// writePassword();
generateBtn.addEventListener("click", writePassword);
// generate event
generate.addEventListener("click", () => {
  const length = +lengthEl.value
  const hascapital = capitalEl.checked
  const haslower = lowerEl.checked
  const hasnumbers = numbersEl.checked
  const hasspecial = specialEl.checked

  password.innterText= generatePassword(hascapital, haslower, hasnumbers, hasspecial,length);
});

// generate password function
function generatePassword (capital, lower, numbers, special, length) {
  // initalize password vairable
  // filter out unchecked types
  // loop over length call generator function for each type
  // add the final password to the password variable
  let Genpassword = "";
  const typesCount = capital + lower + numbers + special;
  const typesArr = [{capital}, {lower}, {numbers}, {special}].filter(item => Object.values(item)[0]);

    if(typesCount === 0){
      return '';
    }
  }


// loop

for (let i=0; i<length; i +=typesCount){
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    Genpassword += randomFunc[funcName]();
  });
console.log(Genpassword);
  const password = (Genpassword.slice(0, length));
  return password;
}



function getRandomcapital() {
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  return capitalEl[Math.floor(Math.random() * capital.lengthEl)];
}

function getRandomlower() {
  const lower = "abcdefghijklmnopqrstuvwxyz".split('');
  return lower[Math.floor(Math.random() * lower.lengthEl)];
}

function getRandomNumber() {
  const numbers = "0123456789".split('');
  return +numbers[Math.floor(Math.random() * numbers.lengthEl)];
}

function getRandomspecial() {
  const special = "!@#$%^&*()+-[]<>".split('');
  return specialEl[Math.floor(Math.random() * special.lengthEl)]
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

