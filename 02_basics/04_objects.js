// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "Maha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "maha@gmail.com",
    fullname: {
        username: {
            firstname: "maha",
            lastname: "ejaz"
        }
    }
}

// console.log(regularUser.fullname.username.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "c", 6:"d"}

// const obj3 = { obj1, obj2 }   //Adding objects
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,}

// console.log(obj3);

const users = [
    {
        id:1,
        email:"maha@gmail.com"
    },
    {
        id:1,
        email:"maha@gmail.com"
    },
    {
        id:1,
        email:"maha@gmail.com"
    },
    {
        id:1,
        email:"maha@gmail.com"
    },

]

// console.log(users[1])

// console.log(tinderUser);
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Javascript",
    price: "9.99",
    instructor: "Maha"
}

// console.log(course.instructor)

// {
//     "name": "hitesh",
//     "coursename": "javascript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
