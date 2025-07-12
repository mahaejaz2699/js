const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function(item) {        //Function
//     console.log(item)
// } )


//Arrow function

// coding.forEach((value) => {
//     console.log(value);
// })




// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js",
    },

    {
        languageName: "java",
        languageFile: "java",
    },

    {
        languageName: "python",
        languageFile: "py",
    }

]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )