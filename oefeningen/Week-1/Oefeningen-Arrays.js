//Dagen van de week
let weekDagen = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

for (let index = 0; index < weekDagen.length; index++) {
    console.log(weekDagen[index])
}

//Array waarde
let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

// what's in fruits?
console.log(fruits.length); // ?

//Multidimensionele arrays
let matrix = [
    [1,2,3],
    [4,5,6]
];

function getMatrixElement(row, column, array){
    return multiDimArray[row][column]
}

console.log(multiDimArray, 0,0)

//For of, foreach
const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

const colors = ['red', 'blue', 'green', 'yellow']