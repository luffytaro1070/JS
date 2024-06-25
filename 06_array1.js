const myArray=[0,1,2,3,4,5]
console.log(myArray[0])
myArray.push(6)
myArray.push(8)
console.log(myArray)
myArray.pop(myArray);
console.log(myArray)
myArray.unshift(9);//add 9 to the start of the array
myArray.shift();//removes 9 from the start
console.log(myArray.includes(9))
console.log(myArray.indexOf(3))
console.log(myArray)

const newArr=myArray.join();
console.log(typeof newArr);//.join() adds the elements into a string

//slice,splice
console.log("A",myArray);
const myn1=myArray.slice(1,3);
const myn2=myArray.splice(1,3);//remove the elements at index: 1,2,3
console.log(myArray);