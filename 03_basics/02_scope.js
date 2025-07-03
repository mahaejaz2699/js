

let a = 300  //global scope

if(true){        //block scope
    let a = 10
    const b = 20
    // console.log("Inner",a);
}



// console.log(a);
// // console.log(b);
// // console.log(c);

function one(){
    const username ="Maha"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website);

    // two()
}

one()

if(true){
    const username = "Maha"
    if(username == "Maha"){
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

console.log(addone(5))

function addone(num){

    return num + 1
}

// addTwo(5)
const addTwo = function(num){        
    return num +2
}

const myArray = [2,4,6,8,10]

// myArray.forEach(() => {})
