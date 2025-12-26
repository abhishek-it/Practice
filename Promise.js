const a  = 1;
const b = 9;
const add = new Promise((resolve , reject) =>{
      if(a + b == 10){
        resolve("Resolved is executed")
        
      }
      else{
        reject("Above condition is rejected");
      }
})
//need to display the output

add.then((message)=>{
    console.log("This is the message which says " + message)
}).catch((message)=>{
    console.log("This is the message" + message)
})