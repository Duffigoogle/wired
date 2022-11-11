let user = {
    name: "Caleb",
    complexion: "dark",
    gender: "male",
    isAvailable: true,
    age: 50,
    "has commented": false
}

// Using the dot notation to access the object properties

user.name; // Caleb
user[name] // undefined
user["name"] // Caleb
user.age; // 50
user["has commented"]; // false

// Delete a property from an object
delete user.gender;
delete user["has commented"]; 
alert(user.gender); //


//Object.keys. values and entries

// Object.keys(name of object) --- returns an array of keys
Object.keys(user); // ["name","complexion", "gender", "isAvailable", "age", "has commented" ]

Object.values(user); // []

Object.entries(user); // [ []]


let salariesOfCoders = {
    "Seun Sunday": 2500,
    "Dark Praise": 1500,
    "Chidi Nelson": 3000,
    "Blessing Agbagbuo": 2000
}

// looping over property values
// for (let i =0; i<5; i++) {
//     alert(i)
// }
let total = 0;
for (let salary of Object.values(salariesOfCoders)) {
    // alert(salary); //2500, 1500, 3000, 2000
    total += salary;
    // alert(total);
}


function totalSal(salariesOfCoders) {
    let total = 0;
    for (let salary of Object.values(salariesOfCoders)) {
        total += salary;
    }
    return total;
}

totalSal(salariesOfCoders);
alert(totalSal(salariesOfCoders));


// total += salary
// total = total + salary
// total = 0 + 2500;
// total = 2500;
// total += salary
// total = total + salary;
// total = 2500 + 1500;
// total = 4000;



let x =2
x += 1
x = x+1

