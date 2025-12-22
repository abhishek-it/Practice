const arr = [1 , 2, 3,4 ,5];
const newarr = arr.map((ind)=>{
      return ind = ind*2;
})
const watches = [{tite : "Fossil",
           price : 5000
},{
     tite : "Titan",
     price : 1000
}]

const watchname = watches.map((i) =>{
    return i.tite;
}
    )

console.log(newarr);
console.log(watchname);