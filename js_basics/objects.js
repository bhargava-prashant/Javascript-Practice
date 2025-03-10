//singleton
//Object.create-->constrcutor method which makes singleton

//object literals

const mySym=Symbol("key1")
const JsUser={
    name:"htesh",
    age:21,
    [mySym]:"mykey1",
    location:"jalandhar",
    email:"prash@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

//when using [mySymb]-->results
//{
//     name: 'Prashant',
//     age: 21,
//     location: 'jalandhar',
//     email: 'prashant@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

//when using mySymb after declaring it as symbol-->
// {
//     name: 'Prashant',
//     age: 21,
//     mySym: 'mykey1',
//     location: 'jalandhar',
//     email: 'prashant@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ]
//   }

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(typeof JsUser[mySym])

JsUser.email="prashant@gmail.com"
JsUser.name="Prashant"
// Object.freeze(JsUser)
JsUser.email="hitesh@gmail.com"
JsUser.name="hitesh"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello ji")
}
JsUser.greetingTwo=function(){
    console.log(`Hello, ${this.name}`)
}
console.log(JsUser.greetingTwo())