//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element===5) {
//         console.log('Found 5');
        
//     }
//     console.log(element);
// }

// let myArray=["prashant","avi","arush"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }



// for of

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5,6]
// for (const i of arr) {
//     console.log(i)
    
// }

// const string="hello"
// for (const index of string) {
//     console.log(index);   
// }

//Maps

// const map=new Map()
// map.set("IN", "India")
// map.set("US", "USA")
// map.set("UK", "United Kingdom")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key,":",value);
// }


// for loop for Objects is used like this cant use for of
// const myObj={
//     "js":"Javascript",
//     "cpp":"c++",
//     "py":"Python"

// }
// for (const key in myObj) {
//     console.log(key,":",myObj[key]);
// }

// const program=["a","b","c"]
// for (const key in program) {
//     console.log(program[key])
// }

//Can't use For in Map as its not iterrable

//For Each
// const coding=["hello","hi","hey"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4)
//or can write like this if you open scope {} then u have to write return otherwise you can write like as written in the above line 
// const newNums=myNums.filter((num)=>{
//    return  num>4
// })
// above i have opened the scope so i m wrting the return keyword there otherwise it will return an empty array
// const newNums=[];

// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//     }
// })


// console.log(newNums);
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks=books.filter((bk)=>{
//     if(bk.genre==="History"){
//         return bk;
//     }

// })

// const userBooks=books.filter((bk)=>{
//     if(bk.publish>=1995 && bk.genre==="History"){
//         return bk
//     }
// })
// console.log(userBooks);


//using map
// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((num)=>{
//     return num+=10;
    
// })

// this is called chaining
// const newNums=myNums.map((num)=>num*10).map((num)=>num+1)
// const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newNums);


//reduce

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
const myTotal=myNums.reduce((acc,curr)=>{
     return acc+curr
},0)
console.log(myTotal);


const shoppingCart=[{
    product:"phone",
    price:999
},{
    product:"laptop",
    price:1999
},{
    product:"headphone",
    price:299
}]
const totalPrice=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalPrice);




