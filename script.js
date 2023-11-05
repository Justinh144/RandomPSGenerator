var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = parseInt(prompt("Password Length must be greater than 6 characters but less than 128."));

  if (length <= 6) {
    return "Password too short.";
  } else if (length > 128) {
    return "Password too long";
  } else {
    var Uppercase = confirm("Uppercase letters?");
    var Lowercase = confirm("Lowercase letters?");
    var Numbers = confirm("Numbers?");
    var SpecialChars = confirm("Special Characters?");
    var Emoji = confirm("Emojis?")
    
  }

var charset = ""
  if (Uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (Lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (Numbers) charset += "0123456789";
  if (SpecialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  if (Emoji) charset += "✌️😘😎😠😉🎅😭😈😀😺🐻💘🤷";
  


  var password = "";
  for (var i = 0; i < length; i++) {

    //console.log(charset);

    //select a random index number
    //var randomIndex = Math.floor((Math.random() * charset.length));
var randomIndex = (Math.random() * charset.length) | 0;
    console.log(randomIndex);

    //return the character corresponding the random index number from the charset, and add to password variable
    password += charset.charAt(randomIndex);
    console.log(password);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

