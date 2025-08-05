const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3 )

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "php course",
        price: 5999
    },
    {
        itemName: "R course",
        price: 7999
    },

]

const priceToPay =  shoppingCart.reduceRight( (acc, item) => acc + item.price,0)

console.log(priceToPay);