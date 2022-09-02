// Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercase characters
var lowerChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// uppercase characters
var upperChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// numbers
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

// special characters
var specialChars = [" ", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

function getLengthCriteria() {
  var length = undefined;

  while(length === undefined) {
    // prompt for user input
    length = window.prompt("What length should the password be? (8 - 128)", "12");
    // if not a number, reset length value
    if(isNaN(length)) {
      length = undefined;
    } else {
      // parse int
      length = parseInt(length);
      // if value is outside of predetermined range reset value
      if(length < 8 || length > 128) {
        length = undefined;
      } else {
        // we have a valid value, break out of loop
        break;
      }
    }
    // alert we need to try again
    window.alert("Please select a length between 8 and 128!")
  }

  return parseInt(length);
}

function generatePassword() {
  var length = getLengthCriteria();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
