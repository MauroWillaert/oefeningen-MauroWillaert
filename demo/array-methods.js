// maak een array aan
const testArray = [1, 2, 3];
// push iets naar die array
testArray.push(4);
console.log(testArray);
// voeg iets toe aan het begin van de array
testArray.unshift(0);
console.log(testArray);
// verwijder het laatste element
console.log(testArray.pop());
console.log(testArray);
// verwijder het eerste element
console.log(testArray.shift());
console.log(testArray);

console.log(testArray[testArray.length - 1]);

console.log(testArray.at(-1));
console.log(testArray.at(1));
console.log(testArray.at(-2));

// map functie

console.log(`Testarray: ${testArray}`);

const newArray = testArray.map((arrayElement) => arrayElement * 2);

console.log(newArray);

const pows = testArray.map((element, index) => {
  return { key: index, value: element ** 2 };
});

console.log(pows);

// join-methode

const joinArray = testArray.join();
console.log(joinArray);

// filter

// filter alle woorden met minimum 3 letters
const words = ['De', 'Koe',  'staat', 'met', 'haar', 'voeten', 'in', 'het', 'water'];
const filteredWords = words.filter((word) => word.length >= 3);// uw code hier aub
console.log(filteredWords);

//nagaan of en array een waarde bevat
const fruits = ['Buddha`s hand', 'Mangosteen', 'Chayote', 'Jonagold'];
 
function fruitInArray(array, value){
    // hier komt de code
   return array.some(element => element === value)
}
 
console.log(fruitInArray(fruits, "Jonagold")); // true
console.log(fruitInArray(fruits, "Kiwi")); // false

const person1 = {
  favoriteDishes: ["Pizza", "Broodje jonge kaas van de panos"]
}
 
const person2 = {
  favoriteDishes: ["Lasagne", "Oesters", "Pizza"]
}
 
const persons = [person1, person2];
 
const favoriteDishes = persons.flatMap((person) => person.favoriteDishes);
console.log(favoriteDishes)