const message = "Hallo wereld!";

console.log(message);

function zegHallo() {
    let message;
    console.log(message);
    message = "vaarwel!"
    function nestedFunction(){
        console.log("Bericht uit nested function" + message)
    }
}

zegHallo();
console.log(message);

function doubleNumber(number){
    number = number * 2;
    console.log(`Binnen de functie: ${number}`)
}

let originalNumber = 5;
doubleNumber(originalNumber);
console.log(`Buiten de functie: ${originalNumber}`);

function doubleNumberObj(obj){
    obj.number = obj.number * 2;
    console.log(`Binnen de functie: ${obj.number}`);
}

let originalObject = {
    number: 5,
}

doubleNumberObj(originalObject);
console.log(`Buiten de functie: ${originalObject.number}`);