let alphabets = ["a", "b", "c", "d"];
let users = [{name: "Seun"}, {name: "esther", age: 40}];

// length of array
alphabets.length; // 4

// accessing arrays using index notation
alphabets[1]; // b
alphabets[0]; // a

let numb = [1, 2, 3, 4, 5];

// Array methods
// Add/remove methods
    // push method -- adds an item to the end of an array
let arr1 = ["mango", "cucumber", "orange", "pear", "banana"];
arr1.push("carrot");
alert(arr1); // ["mango", "cucumber", "orange", "pear", "banana", "carrot"]

    // pop method -- removes an item from the end of an array
    arr1.pop();
    alert(arr1); // ["mango", "cucumber", "orange", "pear", "banana"]

    // shift method -- removes an item from the beginning of an array.
    arr1.shift();
    alert(arr1); // ["cucumber", "orange", "pear", "banana"]

    // unshift method -- add an item at the beginning of an array.
    arr1.unshift("apple");
    alert(arr1); // ["apple", "cucumber", "orange", "pear", "banana"]

    // deleting item from an array
    let arr2 = [21, 45, 60, 34, 90];
    delete arr2[2];
    alert(arr2[2]); // undefined
    arr2.length; // 5

let arr3 = [1, 2, 3, 4, 5, 6, 7];
let removedItems = arr3.splice(1, 2); // from index 1 remove two elements.
alert(arr3); // [ 1, 4, 5, 6, 7]
alert(removedItems); // 2, 3


arr3.splice(0, 3, 66, 77, 88); // from index 0 remove three elements and replace them with another.
alert(arr3); // [66, 77, 88, 4, 5, 6, 7]

let arr4 = [11, 22, 33, 44, 55, 66, 77, 88]
arr4.splice(3, 0, 12, 43, 65); // from index 0 remove no items and replace them with 12, 43, 65.
alert(arr4); // [11, 22, 33, 12, 43, 65, 44, 55, 66, 77, 88]

//slice
// is much simpler 
// array.slice(start, end)

let arr5 = ["a", "b", "c", "d", "e", "f"];
arr5.slice(1, 3); // start from index 1 and end at index 3 and don't include the end index.
