// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// // Write your code here
// const firstNames = fullNames.map((itr)=>{
//     return itr.first;
// })

// console.log(firstNames);


// const greet = (name) => {
//   return `Hey ${name}!`;
// };


// const add = (x , y) => ( x * y);

// console.log("Hey ");
// setTimeout(() =>{
//     console.log("Byeeeee");
// },5000);

// console.log("What are you doing");

// setInterval(()=>(
//   console.log("This line will render after every 2sec")

// ),2000)

// function validUserNames(usernames) {
//   // your code here
//   return usernames.filter((itr)=>(
//      itr.length < 10
//   )
    
//   )
// }


const person = {
  name: "Alex",
  greet: function() {
    // 'this' refers to the 'person' object
    console.log("Hi, my name is " + this.name);
  }
};

person.greet(); // Output: "Hi, my name is Alex"