const res = require("express/lib/response");

function sayMyName(){
    console.log("Devanshu")
    console.log("Devanshu")
    console.log("Devanshu")
}
sayMyName//reference to a function and if() then execution

function addTwoNumbers(n1,n2){
    let result=n1+n2;
    return result
}
const result=addTwoNumbers(4,null)
console.log("result: ",result)

function loginUserMessage(username){
    if(!username){//(!username)empty string is also considered false
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("devanshu"))

function cal(val1,val2, ...num1){
    return num1
}
console.log(cal(200,400,600,3000))//array of num1 contains only 600,3000.
