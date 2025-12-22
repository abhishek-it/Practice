// const arr = [1,2,3,4,5,6,7,8];

// arr.forEach(function(pointer){
//     console.log(pointer);
// })

const movie = [{tite : "Fossil",
           price : 5000
},{
     tite : "Titan",
     price : 1000
}]

//using the foreeach loop
movie.forEach(function(arr){
    console.log(`${arr.tite}`)
});

movie.forEach(function(pointer){
    console.log(`${pointer.price}`)
})