// promises
const gemiddelde = 9;
 
const isIedereenErdoor = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (gemiddelde >= 10) {
      resolve("Iedereen is er door!");
    } else {
      reject("Jammer! :( ");
    }
  }, 2000);
});
 
console.log(isIedereenErdoor);
 
isIedereenErdoor
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Geniet van de zomer!");
    console.log(isIedereenErdoor)
  });
 
console.log(isIedereenErdoor);
 
 
const punten = 80;
 
// schrijf nu een promise die 3 seconden wacht en waarbij we 10 euro krijgen als de punten boven de 70 zitten
const KrijgIkGeld = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (punten > 70) {
        resolve("Je krijgt 10 euro")
    }
    else{
        reject("Niet goed")
    }
    3000
    })
   
})

KrijgIkGeld
    .then((object) => {
    console.log(`Je krijgt ${Object.budget}`)
})
    .catch((error) => {
        console.log(error)
    })
