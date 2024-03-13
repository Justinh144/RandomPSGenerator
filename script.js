// Selects the HTML button with the ID 'generate'
var generateBtn = document.querySelector("#generate");
// Begins the function when the buttonis clicked
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Creates a prompt for the user describing password requirements
  var length = parseInt(prompt("Password Length must be greater than 8 characters but less than 128."));

  // If password length is 8 or less characters returns false
  if (length <= 8) {
    return "Password too short.";
    // If password length is greater than 128 returns fallse
  } else if (length > 128) {
    return "Password too long";
  } else {
    // Allows user to select which parameters they would like their password to have
    var Uppercase = confirm("Uppercase letters?");
    var Lowercase = confirm("Lowercase letters?");
    var Numbers = confirm("Numbers?");
    var SpecialChars = confirm("Special Characters?");
    var Emoji = confirm("Emojis?")
     }

     // If the above parameter is selected as yes this will add the corresponding
     // values to the generated password
var charset = ""
  if (Uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (Lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (Numbers) charset += "0123456789";
  if (SpecialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  if (Emoji) charset += "✌️😘😎😠😉🎅😭😈😀😺🐻💘🤷";
  


  var password = "";
  for (var i = 0; i < length; i++) {

  // Randomizes all possible characters for password
var randomIndex = (Math.random() * charset.length) | 0;
    console.log(randomIndex);

    //return the character corresponding the random index number from the charset, and add to password variable
    password += charset.charAt(randomIndex);
    console.log(password);
  }

  return password;
}

// Defines our writePassword function
function writePassword() {
  // Calls the generatePassword function and stores it in the variable ''password''
  var password = generatePassword();
  // Selects the HTML element with ID 'password'
  var passwordText = document.querySelector("#password");
  // Sets said HTML element with the updated password
  passwordText.value = password;
}

