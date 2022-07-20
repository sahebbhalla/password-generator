// Assignment code here
var specialCharacter=["!","#","$","%","&","(",")","*","+",",","-"];//Array to eandomly select a Special character, More characters can be added if the oragnization decides to give user option
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];//Array to randomly select a UpperCase Character, More characters can be added if the oragnization decides to give user option
var number=["0","1","2","3","4","5","6","7","8","9"];//Array to randomly select a numberr, More numbers can be added if the oragnization decides to give user option

// Function to get Length from the user 
var getLength =function(pwdLength){

  while(pwdLength<8 || pwdLength>128||isNaN(pwdLength)){//Loop until coorect choice is made 
 
    pwdLength = window.prompt("How Long do you want your password to be ");//get length
    if(isNaN(pwdLength)){
      window.alert("You entered a String, Please enter a Valid number");
    }
    else if(pwdLength<8 || pwdLength>128){
      window.alert("Password has to be more 8 or less than 128");
    }
  }
  return pwdLength;
}


//generatePassword Function
var generatePassword= function(){
  var pwd = "";//A new empty string for a new password
  var pwdLength=0;//Length check
  pwdLength=getLength(pwdLength);

  var atLeastOneSelected = false;//condtion to loop until the user selects one criteria 
    while(!atLeastOneSelected){
      var specialCharacterQuestion = window.confirm("Do you want to include at least one special character, e.g., ! @ # ? ] ");//Special Character Questions
      var caseControl = window.confirm("Do you want to include uppercase letters ?");//UpperCase Letter Question
      var numberControl = window.confirm("Do you want a password with numbers ?");//number question

      if(specialCharacter==true||caseControl==true||numberControl==true){//if atleast one is selected set the while loop condtion to true 
        atLeastOneSelected=true;
      }
      else{
        atLeastOneSelected=false;
        window.alert("You need to sleect atleast One option")//Ask the user to reneter thier choices 
      }
    }
  for(var i = 0; i <pwdLength;i++){//Loop for ever password character.
    var internalRandom = Math.floor(Math.random() *4);///Internal random for switch thus creating a unbiased seqeuence of characters
    
    //Case will only break of the condition is true, Thus always defaulting at lower case characters.
    switch(internalRandom){
      case 0:
        if(specialCharacterQuestion){
       
          pwd=pwd+specialCharacter[Math.floor(Math.random()*specialCharacter.length)];//Random from array
          break;
        }
       
      case 1:
        if(caseControl){
          pwd=pwd+upperCase[Math.floor(Math.random()*upperCase.length)];//randomfor Array 
          break;
        } 
       
      case 2:
        if(numberControl){
          pwd=pwd+number[Math.floor(Math.random()*number.length)];//random from Array 
          break;
        }   
        
      case 3://Default under any scenario
        var temp = upperCase[Math.floor(Math.random()*number.length)];
        pwd=pwd+temp.toLowerCase();
        break;
    }
  }

  return pwd;//return password string 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
