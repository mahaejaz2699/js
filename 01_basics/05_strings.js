const name = "Maha"
const weight = 50

console.log(`Hello my name is ${name} and weight is ${weight}`);

const gameName = new String("Maha Ejaz")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-2,2)
console.log(anotherString)

const newStringOne = "    Maha    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://mahaejaz.com/Maha%20ejaz"

console.log(url.replace('%20','-'))

console.log(url.includes('Mahae'))

console.log(gameName.split(' '))