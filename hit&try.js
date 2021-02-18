

// let obj = {
//     number: 10,
//     setNumber: function(newNumber){
//         this.number  = newNumber;
//     },
//     setNewNumber: function(callback) {
//         callback();
//     },
//     getNumber: function() {
//         console.log(this.number);
//     },
//     main: function() {
//         this.getNumber();
//         this.setNewNumber(function(){
//             this.setNumber(20);
//             this.getNumber();
//         }.bind(this))
//     }
// };

// const { func } = require("prop-types");

// obj.main();

// var foo = {
//     x: 3
// }

// var bar = function(){
//     console.log(this.x);
// }

// bar.apply(foo);

// let i =1;
// setInterval(function() {
//     console.log(i++)
//     if(i > 10){
//         console.log(timer)
//         clearInterval(timer);
//     }
// },1000);
// for(var i =1; i< 10;i++){
//     setTimeout(function(i) {
//         console.log(i)
//     }.bind(null,i),5000);
// }
// for(let i =1; i< 10;i++){
//     setTimeout(function() {
//         console.log(i)
//     },5000);
// }

// "use strict";
// function f() {
//     console.log( this ); // ?
//   }
  
//   let user = {
//     g: f.bind(null)
//   };
//   user.g();

// function f() {
//     console.log(this.name);
//   }
  
//   f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
//   f();

// function sayHi() {
//     console.log( this.name );
//   }
//   sayHi.name = 5;
//   let a = sayHi.bind(sayHi);
// //   console.log(sayHi.name)
//   a();

//   console.log(a.name)


// function outest(){

//     function outer(){

//         function inner(){
//             console.log(a,b)
//         }
//         // let a =109;
//         return inner;
//     }
//     let a = 101;
//     return outer;
// }

// let a = 19;
// let b = 12;
// outest()(2)();



// function counter(){
//     let count =  0;
//     function counterPlusPlus(){
//         count++;
//         return  count;
//     }
//     return counterPlusPlus;
// } 
// const callCounterPlusPlus = counter();

// console.log(callCounterPlusPlus());
// console.log(callCounterPlusPlus());



function counter(){
    this.count =0;
    this.incrementCounter = function() {
        this.count++;
    }
    this.decrementCounter = function(){
        this.count--;
    }
    this.returnCounter = function(){
        return this.count;
    }
}

let countNumber = new counter(); 

countNumber.incrementCounter();
countNumber.incrementCounter();
countNumber.incrementCounter();
console.log(countNumber.returnCounter());