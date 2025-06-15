//Dates

let myDate = new Date()

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString())

// console.log(myDate.toJSON())

// console.log(myDate.toLocaleString())

// console.log(myDate.toLocaleDateString())

let myCreateDate = new Date(2023,3,23,5,3)

// console.log(myCreateDate.toDateString())

// console.log(myCreateDate.toLocaleString())

let CreateDate = new Date("2025-04-26")

// console.log(CreateDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

console.log(CreateDate.getTime())

console.log(Math.round(Date.now()/1000))

let myNewDate = new Date()
console.log(myNewDate);
console.log(myNewDate.getMonth() + 1);
console.log(myNewDate.getDay() +1);

myNewDate.toLocaleString()

myNewDate.toLocaleString('default',{
    weekday:"long"
})

