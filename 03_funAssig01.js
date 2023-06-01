




console.log("<--- 1. Two function with no argument & no return type --->");

function dimensions(){
    console.log("Dimensions function");
}
console.log("Dimensions Function");

function shape(){
    console.log("Shape function");
}
console.log("Shape Function");

console.log("<---2. My Personal Details--->");

var firstName = "Amruta";
var lastName = "Thorat";
var collegeName = "HRM";

function personalDetails(firstName, lastName, collegeName){
    console.log("My Personnal Detail is");
    console.log("First Name is",firstName,);
    console.log("Last Name is", lastName,);
    console.log("College Name is", collegeName);
}
personalDetails(firstName, lastName,collegeName)

console.log("<---3.Swap--->");
var name1 = "Virat";
var name2 = "Anushka";

var value1 = "1000";
var value2 = "2000";

function swapValueDude(parameter1, parameter2){
    console.log("Before swap...",parameter1, parameter2);
    var temp = parameter1;
    parameter1 = parameter2;
    parameter2 = temp;
    console.log("After swap...",parameter1, parameter2);
}
swapValueDude(name1, name2);
swapValueDude(value1, value2);

console.log("<---04. Add three values--->");
var num1 = 10.23;
var num2 = 600;
var num3 = 40;
var text1 = "hello";
var text2 = "good";
var text3 = "morning";
function addThreeValues(arg1, arg2, arg3){
    var result = arg1 + arg2 + arg3;
    console.log("Addition is:",result);
}
addThreeValues(num1,num2,num3);
addThreeValues(text1,text2,text3);
