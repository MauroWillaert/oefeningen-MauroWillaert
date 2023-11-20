function mainLogic(myCallback){
    console.log(myCallback()); 
}
function myCallback(){
    return "dit is een callback-functie";
}

mainLogic(myCallback);