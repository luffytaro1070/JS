//singleton->object made using constructor
// Object.create->singleton
//object literals

const mySym=Symbol("key1");

const JsUser={
    name:"devanshu",
    "fullname":"devanshu gupta",
    age:22,
    [mySym]:"mykey1",//write it in [] or it will be string or of type value
    location:"Jaipur",
    isLoggedIN:["Monday","Saturday"]
}
console.log(JsUser.name);
console.log(JsUser["name"])
console.log(JsUser.fullname)
console.log(typeof JsUser[mySym])

// Object.freeze(JsUser);//no changes can be made after this in the object 
// JsUser.name="hitesh";
console.log(JsUser);

JsUser.GreetingOne=function(){
    console.log("hello js user");
}
JsUser.GreetingTwo=function(){
    console.log(`hello ${this.name}`);//this for current object
}
console.log(JsUser.GreetingOne())
console.log(JsUser.GreetingTwo())