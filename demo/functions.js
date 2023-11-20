function printItemsOfArray(stringArray){
    for(string of stringArray){
        console.log(string)
    }
}

const daysOfWeek = ["Monday","Tuesday","Wednesday"]

printItemsOfArray(daysOfWeek);

function sum(a, b){
    return a+b;
}

console.log(sum(2,4))

function makeList(items){
    return items.join(', ')
}

console.log(makeList(daysOfWeek));

function getFirstItemOfLists(items){
    return items[0]
}

function objectSum(obj){
    return obj.x = obj.y;
}

const obj = {
    x: 1,
    y: 12,
}

console.log(`De som van het object is ${objectSum(obj)}`)

function doCalculation(x,y, Calculation){
    return Calculation(x,y);
}

let sumResult = doCalculation(76,15, sum);
console.log(`Optelling ${sumResult}`);