const marvel_heroes=["thor","Ironman","spiderman"];
const dc_heroes=["superman","batman","flash"];
// marvel_heroes.push(dc_heroes);//adds the array dc_heroes as one single variable//
// console.log(marvel_heroes[3][1]);

// const all_Heroes=marvel_heroes.concat(dc_heroes);
// console.log(all_Heroes);

const all_newHeroes=[...marvel_heroes,...dc_heroes];//spread operator->just give any number of arrays
console.log(all_newHeroes);
const another_array=[1,2,3,[2,3,4,[7,8,9]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("devanshu"));
console.log(Array.from("devanshu"));//makes an array of devanshu
console.log(Array.from({name:"devanshu"}))//cant make an array of this without getting specified whether array to be made from key or value

