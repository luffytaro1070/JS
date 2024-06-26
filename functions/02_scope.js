var c = 300
if(true){
    let a=10
    const b=20
    var c=50
}
// console.log(a)
// console.log(b)
console.log(c)//even though c's value is 300 and in loop it should be changing temporarily,still the value of c becomes 50,that's why var is crap 

function one(){
    const username="hitest"
    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
}
one()