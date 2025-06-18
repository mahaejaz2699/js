//singleton

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Maha",
    "full name": "Maha Ejaz", 
    [mySym]: "mykey1",
    lastname: "Ejaz",
    age: 18,
    location: "Lahore",
    email: "maha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "maha@chatgpt.com"
console.log(Jsuser.email)
// Object.freeze(Jsuser)
Jsuser.email = "maha@yahoo.com"
console.log(Jsuser.email)

Jsuser.greeting = function(){
    console.log("Hello JS User");
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);

Jsuser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());