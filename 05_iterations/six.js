// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNums.filter( (num) => {
//     return num>4                                //if we open scope, then we have to add the return keyword
// })     //this will return value

const newNums = []
myNums.forEach( (num) =>{ 
    if(num>4 || num>6){
        newNums.push(num)
    }
})
console.log(newNums);


