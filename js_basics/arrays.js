//array

const myArr=[0,1,2,3,4,5]
// console.log(myArr[0]);

//array methods
myArr.push(6)
myArr.push(6)
myArr.pop()
// console.log(myArr)

myArr.unshift(9)
// console.log(myArr)
myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(4))

const newArr=myArr.join()

// console.log(myArr);
// console.log(typeof myArr)
// console.log(newArr);
// console.log(typeof newArr)

//slice, spice

// console.log("A",myArr)
// const myn1=myArr.slice(1,3)
// console.log(myn1)
// console.log("B",myArr)

// const myn2=myArr.splice(1,3)
// console.log(myn2)
// console.log("C",myArr)
const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// const merged=marvel_heroes.concat(dc_heroes)
// console.log(merged)

//another common technique using SPREAD OPERATOR
const all_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_heroes)

const another_array=[1,2,3,[,4,5,6],7,[6,7,[4,5,8,0,[7,5,1,4]]]]
const real_array=another_array.flat(Infinity)
console.log(real_array)
console.log(real_array.sort())

console.log(Array.isArray("Prashant"))
console.log(Array.from("Prashant"))


let score1=100
let score2=200
let score3=300
const score=Array.of(score1,score2,score3)
console.log(score)

