
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

console.log(loginUserMessage("Haris"))