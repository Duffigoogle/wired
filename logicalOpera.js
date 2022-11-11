// AND Operator (&&)

let menu = a && b;
// returns true if both operands are truthy and false if otherwise
// && finds the first falsy value.
// evaluates from left to right.

alert(true && false); //false
alert(false && true); //false
alert(false && true); //false
alert(true && false); //false
alert(true && true); // true
alert(false && false); // false

alert( 1 && 0); // 0 -> false
alert (1 && 2 && 3); // 3 // when all values are truthy, && returns the last value
alert(1 && 2 && null && 3); // null

// OR (||) operator finds the first truthy value
// Evaluates from left to right
alert(true || false); //true
alert(false || true); //true
alert(false || true); //true
alert(true || false); //true
alert(true || true); // true
alert(false || false); // false


// NOT (!) operator

alert (!true); // false
alert(!0); // true


alert(a && b || c && d)
alert(1 && 0 || null && 3);
alert(0 || null); // null

if (age >= 15 || age <=18 ) {
    alert()
}