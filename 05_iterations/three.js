// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each character is ${greet}`)
}

//Maps

const map = new Map()
map.set('PK',"Pakistan")
map.set('USA','United States of America')
map.set('Fr',"France")
map.set('PK',"Pakistan")    //Maps only consist of unique values

console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Tekken'
}

// for (const [key] of myObject) {
//     console.log(key, ':-', value);
// }


//Maps are iterable but objects are not