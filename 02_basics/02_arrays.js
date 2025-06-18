const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros)

// console.log(marvel_heros[3][1])

const all_heros=marvel_heros.concat(dc)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc]   //spread

console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_Array = another_array.flat(Infinity)
console.log(real_another_Array)

console.log(Array.isArray("Maha")) //Asking if it is an array

console.log(Array.from("Maha"))

console.log(Array.from({name:"Maha"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))