function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) -->this will give eorr because child scope variable cant be used
    two()

}
one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+" "+website)

    }
    // console.log(website)
}
// console.log(username)



console.log(addone(5))//can be written here
function addone(num){
    return num+1

}

//console.log(addTwo(5)) -->cannot write here
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))



