// const promiseOne=new Promise(function(resolve,reject){
//     //Do an async task
//     //Db calls,cryptography,network
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve()
//     },1000)
// })

const { response } = require("express");

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// //other syntax
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async task 2 resolved");
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"prashant", EMAIL: "prash@gmail.com"});
//     })
// }).then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"prashant",email:"prash@gmail.com"})
//         }else{
//             reject("Error")

//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("the promis is either resolved or rejected");
// })


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"prashant",email:"prash@gmail.com"});
//         }else{
//             reject("error");
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=await response.json();//this also takes time so use await here otherwise it wont shou you the values
//     console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    })
    .catch((error)=>{
        console.log(error);
        })
        