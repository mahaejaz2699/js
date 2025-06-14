//Data Types

//Primitive - 7 Types

const score = 100
const scorValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//Non Primitive

const heros = ['Spiderman',"Superman","Batman"]   //Array

let myObj = {        //Object
    name:"Maha",
    age:26,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof id);

// Stack(Primitive), heap(Non-Primitive)

let myYoutubename = "Mahaejaz.com"

let anothername = myYoutubename
anothername = "harisejaz"

let userone = {
    email: "maha@gmail.com",
    upi:"maha@gmail.com",
}

let usertwo = userone;
usertwo.email = "mahaejaz1@gmail.com"

console.log(anothername);

console.log(myYoutubename);


console.log(userone);
console.log(usertwo);