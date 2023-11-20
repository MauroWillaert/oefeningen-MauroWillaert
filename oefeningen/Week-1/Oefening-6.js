function GetGlobal(){
    let global = 2;
    console.log(`Binnen de functie: ${global}`)
}

let global = 1;
GetGlobal();
console.log(`Buiten de functie: ${global}`)