// const accountId=144553
// let accountEmail="prash@gmail.com"
// var accountpassword="123"
// accountCity="Mathura"

// console.log();


let age=23;
console.log(typeof null);

let score="33abc"
console.log(typeof(score));
let valueNumber=Number(score);
console.log(typeof valueNumber);
console.log(valueNumber);

// operations
console.log("1"+2);
console.log("1"+"2");
console.log(1+2+"2");

let gameCounter=102
gameCounter++;
console.log(gameCounter);

// == check for the value comparison
// === check for the value+datatype comparison

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

const fruits=["apple","bananba","mango"]

let myObj={
    name:"hitesh",
    age: 22,
}


const myfunc=function(){
    console.log("hello")

}
console.log(typeof anotherid)
console.log(typeof myfunc)


let userOne={
    email:"hello@gmail.com",
    name:"prashant",
}

let usertwo=userOne
usertwo.email="prashant@gmail.com"
console.log(userOne.email)
console.log(usertwo.email)

const name="prashant"
const repoCount=50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('prashant')
console.log(gameName.toLocaleLowerCase());
console.log(gameName)
console.log(gameName.charAt(4));
console.log(gameName.indexOf("an"))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(4,-2)
console.log(anotherString)

const newStringOne="   prashant    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https://prashant.com/prashant%20bhargava"
console.log(url.replace('%20','-'))
console.log(url)
console.log(url.includes("prashant"))

const a="prashant-bhargava-excellent"
console.log(a.split('-'))

const balance=new Number(100)
console.log(balance)
console.log(typeof balance)

console.log(balance.toString().length)

const decimalnum=324.345
console.log(decimalnum.toFixed(2))

const hundreds=100000
console.log(hundreds.toLocaleString('en-In'))

console.log(Math.round(4.5));

console.log(Math.random());
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+ min))

const ab=400
const abc =new Number(200)
console.log(ab)
console.log(abc)


let myDate=new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.getFullYear())


// let exDate=new Date(2023,0,25)//here month starts with 0
let exDate=new Date("2023-01-25")
console.log(exDate.toDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(Date.now()/1000)

exDate.toLocaleString('default',{
    weekday:'long'
})
