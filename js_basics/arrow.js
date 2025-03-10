const user={
    username:"hitesh",
    price:999,
    message: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.message()
// user.username="prashant"
// user.message()

// const chai=()=>{   arrow function
//     let username="hitesh"
//     console.log(this)

// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
const addTwo=(num1,num2) => (num1+num2)//can write like this 

console.log(addTwo(3,4))

const add=(num1,num2) => ({username:"prashant"})//use parenthesis () for objects
console.log(add(3,5))





