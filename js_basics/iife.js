//IMIDAIATELY INVOKED FUNCTION EXPRESSION(IIFE)
(function chai(){
    //name iife
    console.log("Db connected")
})();
//we write ; if using 2nd iffe function otherwose it will give eroro it will end the its scope there
// ()() first () for function call then for function execution i.e IIFE
//due to global scope pollution

((name) =>{
    //unnamed iife
   console.log(`Db connected two ${name}`) 
})('prashant')

