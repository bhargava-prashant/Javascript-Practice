function myName(){
    console.log("Prashant")

}
myName()

// function addTwoNum(number1,number2){
//    console.log(number1+number2);
// }
function addTwoNum(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
 }
const result=addTwoNum(5, 4)
console.log(result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("enter username")
        return
    }
    return `${username} just logged in`
}
const user=loginUserMessage("Prashant")
console.log(user)

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,40,500,800))

const user1={
    username:"prashant",
    price:199

}
const user2={
    username:"bhargava",
    price:5000

}
function handleObject(user1){
    console.log(`name is ${user1.username} and price is ${user1.price}`)
}

handleObject(user2)
const myArray=[1,2,3,4,6]
function abc(array){
    return array[3]
}
console.log(abc(myArray))
console.log(abc([1,2,3,69]))
