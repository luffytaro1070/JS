let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let myCreatedDate=new Date(2023,0,24)
// console.log(myCreatedDate)
// let myCreatedDate=new Date("2023-01-14")
// let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//compare these two values in milli-seconds for the time difference
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))