
function sayMyName(){
    console.log("M")
console.log("A")
console.log("H")
console.log("A")
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }



function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // console.log("Maha");
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log(result);

// function loginUserMessage(username){
//     return `${username} just logged in `
// }

// console.log(loginUserMessage("Maha"))
// console.log(loginUserMessage())


function loginUserMessage(username = "Maha"){
    if(!username){    //if username is undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Haris"))

// console.log(loginUserMessage("Maha"))

// console.log(loginUserMessage("Rameen"))

function calculateCartPrice(val1,val2, ...num1){     //rest operator
    return num1
}

// console.log(calculateCartPrice(2))

// console.log(calculateCartPrice(200,300,400,500))

const user = {
    username: "Maha",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username: "Maha",
    price:399
})

const myNewArray = [200,300,500,600,700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,100,600]));