// Assignment Code
var generateBtn = document.querySelector("#generate");
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "0123456789".split("");
var special = "!#$%&()*+-/=>@[]^_{}|~".split("");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to ok button
function charchoice(event){
  var 

}

function addTip(event) {
  event.preventDefault();
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}



// Add event listener to generate button
/* generateBtn.addEventListener("click", writePassword);

if generate password is clicked 
then generate password

generate password is Random
choose capital-letters
choose lowcase-letters
choose numbers
choose special characters
choose the number of characters in password
    var password_length = number;
    charArray []

how to randomize the character locations

 */
