//variable
var x = 1;
var y = 2;
var z = x + y;
console.log(z);
document.getElementById("demo").innerText = z

//functions
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);

//debugging(alerts)
function myFunction() {
    alert("I am an alert box!");
}

//debugging(comments)
document.getElementById("myP").innerHTML = "My first paragraph.";

//debugging(the console)
a = 5;
b = 6;
c = a + b;
console.log(c);

//array
var cars = ["Valiant", "Scamp", "Duster"];
document.getElementById("demo").innerHTML = cars[0];

//logic
var x = 6;
var y = 3;

document.getElementById("demo").innerHTML = 
(x < 10 && y > 1) + "<br>" + 
(x < 10 && y < 1);

//data types(string)
var carName1 = "Dodge Dart";
var carName2 = 'Plymouth Valiant';
var answer1 = "It's got holes in the floor board!";
var answer2 = "She is called 'Edna'";
var answer3 = 'She is called "Katrina"';

document.getElementById("demo").innerHTML =
carName1 + "<br>" + 
carName2 + "<br>" + 
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

//data types(boolean)
var person = {
    firstName : "Matt",
    lastName  : "Emmerich",
    age       : 32,
    eyeColor  : "green"
};

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";


//data types(number)
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>


function myFunction() {
    var x = 999999999999999;
    var y = 9999999999999999;
    document.getElementById("demo").innerHTML = x + "<br>" + y;
}

//global scope
var z = 1;
function print_it(){   console.log(z); //Will return 1 }

//local scope
var z = 3;
function some_f(z){   console.log(z); } some_f(10) >>10
console.log(z); >>3

//Function Scope
function haha(argument_uno){   console.log(argument_uno); }
haha("hello"); >>"hello" console.log(argument_uno); >>ReferenceError: argument_uno is not defined


//1. Add Two Variables
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("x+y").innerHTML = z;

//1. Add Two Scripts
txt1 = "What a very";
txt2 += "nice day.";
document.getElementById("What a very").innerHTML = txt2;

//2. Multi-dimensional array
var monster = ["Dracula", "Wolfman", "Mummy", "Frankenstein"];
	console.log(monster[0][1]);

//3. var = >10
$(document).ready(function(){
        confirm("Is X less than 10?");
        var X = prompt("Type X");

        if (X > 10) {
        console.log(">");
        }
        }); 
 
 //4. re-declare value

 var greeting = "yo cuz";

	function changeGreeting() {
	    if (greeting == "yo cuz") {
	        var greeting = "how you doin?";
	    }
	    console.log(greeting;)
	 }



