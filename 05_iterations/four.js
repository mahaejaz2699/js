const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(programming[key]);
}

//For in loop and for of loop has a difference that for in cant have key,value like for in loop

const map = new Map()
map.set('PK',"Pakistan")
map.set('USA','United States of America')
map.set('Fr',"France")
map.set('PK',"Pakistan") 

// for (const key in map) {       
//     console.log(key);
// }

//Maps are not iteratable

