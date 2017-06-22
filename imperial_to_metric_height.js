function convertInchesToCentimeters(height){
	heightCentimeters = height * 2.54;
	return heightCentimeters;

}




var myName = prompt("What is your name?");
var heightInches = prompt("How tall are you?");
var weightPounds = prompt("How much do you weight?");
var weightKilograms = weightPounds * 0.453592;

// console.log(myName + " is " + heightCentimeters + "cm tall and " + weightKilograms + "kg.");
alert(myName + " is " + convertInchesToCentimeters(heightInches) + "cm tall and " + weightKilograms + "kg.");