const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  //if we refer to current context, we should use this
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   //it gives empty object

// function chai(){
//     let username = "Maha"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Maha"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "Maha"
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Maha"})


console.log(addTwo(1,2))