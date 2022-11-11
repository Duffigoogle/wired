// if statement

if (7 > 3) {
    alert("Hello world!")
}

let numb = prompt("Enter a year");

if (numb === 2023) {
    alert("Happy New Year!")
}

if (numb == 2023) {
    alert("YOU GUESSED RIGHT");
} else {
    alert("YOU ARE SO WRONG");
}


//ELSE IF

let year = prompt("Enter a year");
if (year < 2022) {
    alert("YOU ARE TOO LATE!");
} else if (year > 2022) {
    alert("YOU ARE IN THE FUTURE!")
} else {
    alert("YOU GUESSED RIGHT");
}



let age = prompt("Enter your age");
let name = prompt("Enter your name");

const gateFee = 2500;

if (age < 15) {
    alert("Hi kiddo!");
    let disc80 = 80 / 100;
    let discount = disc80 * gateFee;
    alert(`Hey kiddo you have a discount of ${discount}, your new gate fee is ${gateFee - discount}`);
} else if (age <= 18) {
    alert("Hello Teenager");
    let disc80 = 50 / 100;  //this calculates the discount of 50%
    let discount = disc80 * gateFee; //this returns the evaluated discount.
    alert(`Hi ${name}, you have a discount of N${discount}, your new gate fee is N${gateFee - discount}`);
} else if (age <= 30) {
    alert("Hello Senior Bachelor!")

} else if (age <= 45) {
    alert("")
}