// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLenght = 0;
var containsUppercase;
var containsNumber;
var containsSpecialCaracter;
var pwLenghtType;
var specialCharacters = ["!","#","$","%","'","&","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","{","}","|","~","`"];
var specialCharacterSelection;
var upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","U","W","X","Y","Z"];
var upperCaseSelection;
var lowerCaseSelection;
var numberSelection;

const password = [];
var passwordText;


function generatePassword () {

  //Getting requirements from the user.
  pwLenght = parseInt(window.prompt("Your password could be between 8 and 128 characters long, How long do you want it to be?"));
 // pwLenghtType = (typeof pwLenght);
 //console.log (pwLenghtType);
  console.log ("Password will be " +pwLenght + " long");

  //validating that lenght is an actual number
  if(pwLenght === NaN){
    window.alert("Please enter an valid number from 8 to 128");  
    generatePassword ();
  }
  //Validating cancel botton
  if (!pwLenght) {
    return;
  }
  //Validating a valid password length/
    if (pwLenght >= 8 && pwLenght <= 128 ){

          //Requesting Uppercase input
          containsUppercase = window.prompt("Do you need an UPPERCASE character? Y or N");
          containsUppercase = containsUppercase.toUpperCase();

          //Validating Y or N input for UpperCase requirement
          if (containsUppercase === "Y"){
            console.log ("Pw will need a UpperCase");
            containsUppercase = true;
          } else if (containsUppercase === "N"){
            console.log ("Pw won't need an UpperCase");
            containsUppercase = false;
          } else {
            containsUppercase = window.prompt("Please select Y for Yes or N for Not");
            containsUppercase = containsUppercase.toUpperCase();
            if (containsUppercase === "Y"){
              console.log ("Pw will need an UpperCase");
              containsUppercase = true;
            } else if (containsUppercase === "N"){
              console.log ("Pw won't need an UpperCase");
              containsUppercase = false;
            } else {
            window.alert("You have selected an invalid entry. Password generator will terminate unsuccesfully");  
            return;
            }  
          }

          //Requesting Number input
          containsNumber = window.prompt("Do you need a Number included? Y or N");
          containsNumber = containsNumber.toUpperCase();
          
          //validating Y or N input for the number requeriment
          if (containsNumber === "Y"){
            console.log ("Pw will need a number");
            containsNumber = true;
          } else if (containsNumber === "N"){
            console.log ("Pw won't need a number");
            containsNumber = false;
          } else {
            containsNumber = window.prompt("Please select Y for Yes or N for Not");
            containsNumber = containsNumber.toUpperCase();
            if (containsNumber === "Y"){
              console.log ("Pw will need a number");
              containsNumber = true;
            } else if (containsNumber === "N"){
              console.log ("Pw won't need a number");
              containsNumber = false;
            } else {
            window.alert("You have selected an invalid entry. Password generator will terminate unsuccesfully");  
            return;
            }  
          }

          //Requesting special character input
          containsSpecialCaracter = window.prompt("Do you wish to have a special character? e.g. #,&,@,% ");
          containsSpecialCaracter = containsSpecialCaracter.toUpperCase();
                  
          if (containsSpecialCaracter === "Y"){
            console.log ("Pw will need a special character");
            containsSpecialCaracter = true;
          } else if (containsSpecialCaracter === "N"){
            console.log ("Pw won't need a special character");
            containsSpecialCaracter = false;
          } else {
            containsSpecialCaracter = window.prompt("Please select Y for Yes or N for Not");
            containsSpecialCaracter = containsSpecialCaracter.toUpperCase();
            if (containsSpecialCaracter === "Y"){
              console.log ("Pw will need a special character");
              containsSpecialCaracter = true;
            } else if (containsSpecialCaracter === "N"){
              console.log ("Pw won't need a special character");
              containsSpecialCaracter = false;
            } else {
            window.alert("You have selected an invalid entry. Password generator will terminate unsuccesfully");  
            return;
            }  
          }
        
          //Loop filling up the initial default values of lowercase characters
          for (var i = 0; i < pwLenght; i++ ){
            console.log ("enter loop");
            
            var index = Math.floor(Math.random() * upperCases.length);
            upperCaseSelection = upperCases[index];
            lowerCaseSelection = upperCaseSelection.toLocaleLowerCase();
            console.log (lowerCaseSelection);
            password [i] = lowerCaseSelection;
          };

          //Conditions to add uppercase, a number or special character as requested to the pw.
          if (containsUppercase === true ){
            
          var index = Math.floor(Math.random() * upperCases.length);
          upperCaseSelection = upperCases[index];

          var index1 = Math.floor(Math.random() * pwLenght);
          password[index1] = upperCaseSelection;
          }

          if (containsSpecialCaracter === true){ 
         
          var index = Math.floor(Math.random() * specialCharacters.length);
          specialCharacterSelection = specialCharacters[index];

          var index2 = Math.floor(Math.random() * pwLenght);
          password[index2] =  specialCharacterSelection;
         
          }
         
          if ( containsNumber === true){
            
          numberSelection = Math.floor(Math.random()*9) ;

          var index2 = Math.floor(Math.random() * pwLenght);
          password[index2] =  numberSelection;
          }

          //Transfering password from array to a single string varaible                         
          passwordText = password.join("");


          //consol log to control and test functionalities
          console.log (containsUppercase);
          console.log (containsNumber);
          console.log (containsSpecialCaracter);
          console.log (specialCharacterSelection);
          console.log (upperCaseSelection);
          console.log ("Number selected is " + numberSelection);
          console.log (password);
          console.log(passwordText);


          //Validating that user request atr least one of the conditions

          if (containsUppercase === false && containsNumber === false && containsSpecialCaracter === false ){//&& containsNumber === false && containsSpecialCaracter === false); {
            window.alert("You would need at least one of the previous requirement in orde to generate a secure password.");  
            window.alert("Lets start again");  
            generatePassword ();
            }



    }
    //Generating alert to the user to select a valid lenght and start again
    else {
      window.alert("Please select a valid number between 8 and 128 to continue");
      generatePassword ();
      return; 
    }

    
    return;
    
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordOut = document.querySelector("#password");
  passwordOut.textContent = passwordText;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);