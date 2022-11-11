function name() {
    // code body
}

function name(parameter1, parameter2) {
    // code body
}

// Th create a function, we use a function declaration. 
function showText() {
    alert("hello!");
}

showText();
showText();
showText();


function addNumb(a, b) {
    let result = a + b;
    return result;
}

addNumb(5, 2);


//Local variables
function showTextMesage(message) {
    alert(`${message}`);
}

showTextMesage("This is a function!");
showTextMesage("Hello there!");

// variables declared inside a function is only visible inside that function.
function showMsg() {
    let message = "Hello Nigeria!";
    alert(message);
}

showMsg();
alert(message);


//outer variables
let gender = "male";

// a function can access an outer variable.
function showGender() {
    let text = "I am a " + gender;
    alert(text);
}

showGender();

let gender1 = "male";

// a function can access an outer variable and can modify it.
// if same-named variable is declared inside the function, it over-shdows the outer one.
function showGender() {
    gender1 = "female";
    let text = "I am a " + gender1;
    alert(text);
}

alert(gender1); // male
showGender(); // "I am a female"
alert(gender1); // female


let gender2 = "male";

// a function can access an outer variable and can modify it.
// if same-named variable is declared inside the function, it over-shdows the outer one.
function showGender() {
    let gender2 = "female";
    let text = "I am a " + gender2;
    alert(text);
}

alert(gender2); // male
showGender(); // "I am a female"
alert(gender2); // male


// Parameters and Default values
function sendMssg(from, message) {
    alert(`${from}:  ${message}`);
}

sendMssg("We are making progress"); // We are making progess: undefined
sendMssg("GoodGod", "We are making progress"); // GoodGod: We are making progess


function sendyMsg(from, message = "no text message!") {
    alert(`${from}:  ${message}`);
}

sendyMsg("Allen"); // Allen: no text mesaage!
sendyMsg("Allen", "We now have a message!"); // Allen: We now have  message!

function smallFunc() {
    return "Small world!"
}

function sendyMsg(from, message = smallFunc()) {
    alert(`${from}:  ${message}`);
}
sendyMsg("Buhari"); // Buhari: small world!


// returning a value
function addNumb(a, b) {
    let result = a + b;
    return result;
}
addNumb(5, 2);
alert(result);


function addNumb(a, b) {
    return a + b;
}
let result = addNumb(4, 7);
alert(result); // 11


function abeg() {
    alert("Nothing!");
    return "Something!";
}

abeg();


// function confirmAge(age) {
//     if (age >= 22) {
//         alert(true);
//         return true;
//     } else {
//         return confirm("Do you have permission?")
//     }
// }
// let age = prompt("Enter your age");
// confirmAge(age)


// function clickStart() {
//     age = prompt("Enter your age");
//     name = prompt("Enter your name");
//     return age;
// }

// let age;
// let name;
// let discount;
// function calcDiscount() {
    

//     const gateFee = 2500;

//     if (age < 15) {
//         alert("Hi kiddo!");
//         let disc80 = 80 / 100;
//         discount = disc80 * gateFee;
//         return discount;
//         alert(`Hey kiddo you have a discount of ${discount}, your new gate fee is ${gateFee - discount}`);
//     } else if (age <= 18) {
//         alert("Hello Teenager");
//         let disc50 = 50 / 100;  //this calculates the discount of 50%
//         discount = disc50 * gateFee; //this returns the evaluated discount.
//         alert(`Hi ${name}, you have a discount of N${discount}, your new gate fee is N${gateFee - discount}`);
//     } else if (age <= 30) {
//         alert("Hello Senior Bachelor!")

//     } else if (age <= 45) {
//         alert("")
//     }
// }

function mulNum(a, b) {
    return a * b;
}
let a = prompt("enter first number");
let b = prompt("enter second number");
mulNum(a, b);


// Arrow function
const checkMenu = () => {

}

//function declaration
function checkMenu() {

}

// function expression
let sayHello = function() {
    alert("Hello");
}

sayHello();


let btnBox = document.getElementById("btn");

let ageInput = document.getElementById("age").value;

btnBox.addEventListener("click", clickStart())