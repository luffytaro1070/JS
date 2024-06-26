const user={
    username:"devanshu",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this)//prints user
    }
}
user.welcomeMessage()
user.username="dev"//change in current context->simple values
user.welcomeMessage()
console.log(this)//empty object in vs code but in browser the window is the parent object so it will show that as it is a global object

// **arrow-functions**

const c=()=>{
    let username="devanshu"
    console.log(this)
}
c()

// syntax==>const v=()=>{}
// const addTwo=(num1,num2)=>{
//     return num1,num2
// }
const addTwo=(num1,num2)=>({//return an object
    username:"hitesh"
})
console.log(addTwo(3,4))

// ***Immediately invoked function expression IIFE***
//sometimes there are some problems caused by global scope pollution,to solve that iife is used
//named iife
// (function chai(){
//     console.log('DB connected');
// })();

//unnamed iife
( (name)=>{
    console.log(`name ${name}`)
})('hitesh')
