// const tinderUser=new Object()//singleton object
const tinderUser={}//non-singleton object
tinderUser.id="123ab"
tinderUser.name="danny"
tinderUser.idLoggedIn=false
console.log(tinderUser)

// const regularUser={
//     email:"devanshugupta921@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"devanshu",
//             lastname:"gupta"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastname)//chaining

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign({},obj1,obj2)//now if {}->an empty object is not given then the obj1 will act as the destination 


const obj3={...obj1,...obj2}//spread operator
console.log(obj3)

const users=[
    {
        id:1,
        email:"hg@gmail.com"
    },
    {
        id:1,
        email:"hg@gmail.com"
    },
    {
        id:1,
        email:"hg@gmail.com"
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))//an array of keys
console.log(Object.values(tinderUser))//array of values
console.log(Object.entries(tinderUser))//array of entries of key-value pair

console.log(tinderUser.hasOwnProperty('isLogged'))//checks the property in tinderUser

const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//destructoring the object
const {courseInstructor:d}=course//: to rename the property of this courseInstructor key name
console.log(d)

