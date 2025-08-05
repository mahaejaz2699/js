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






const books = [
    { title : 'Book One', genre: 'Fiction', publish: 1981, edition: 1998 },
    { title : 'Book Two', genre: 'Non Fiction', publish: 1982, edition: 2008 },
    { title : 'Book Three', genre: 'History', publish: 1983, edition: 2009 },
    { title : 'Book Four', genre: 'Science', publish: 1984, edition: 2011 },
    { title : 'Book Five', genre: 'Fiction', publish: 1985, edition: 2012 },
    { title : 'Book Six', genre: 'History', publish: 2020, edition: 2016 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1985 && bk.genre === "History"
})

console.log(userBooks);

