// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }node 05_iterations/one.js

// for (let i = 0; i <=10; i++) {
//         console.log(`Outer Loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner Loop values ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }

// let myArray = ["flash","batman","superman"]

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break
// for (let index = 0; index < 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 0; index < 20; index++) {
    if(index == 5 || index==6){
        console.log(`Detected 5`);
        continue 
    }
    console.log(`Value of i is ${index}`);
    
}
