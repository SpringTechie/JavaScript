// // by using literal
// let person =  {
//     id : 1,
//     lastname: "kumar",
//     firstname:"arun",
//     age: 23,
//     Car : {
//         price : 3459,
//         brand : "BMW",
//         model : "300"
//     },
//     fullName : function () {
//        return this.firstname + this.lastname;
//     }
    
//  }
// // how to access the property of object.
// console.log(person.firstname)
// console.log(person["age"])
// // How to add new property to existing object.
// person.nation = "india";
// console.log(person)
// // nested object: An object contains of another object
// // how to access the nested object
// console.log(person.Car.brand)
// console.log(person.fullName())

// // This by using new keyword
// const animal = new Object();
// animal.name = "Lion"
// animal.age = 34;
// console.log(animal)
// // to delete any property from object
// delete animal.name;
// console.log(animal)
// delete animal["name"]

// // to display person object in UI.
// document.getElementById("demo").innerHTML = person.fullName();


// // 3rd way to create object in js. by using Constructor
// function Person(id,name,age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }

// // the above is blue print to create a person object.

// // // create objects for above
// const person1 = new Person(1,"arun",23);
// const person2 = new Person(2,"pavan",34);
// console.log(person1)

// person1.nation= "india" // adding to new property to the person1 object.

// console.log(person1)

// // we want to add new proptery to constructor?
// Person.prototype.country = "USA"
// console.log(person1.country)
// console.log(person2.nation)

// let person =  {
//     id : 1,
//     lastname: "arun",
//     firstname:"kumar",
//     isPresent : true
// };

// let person2 = Object.create(person)
// console.log(person2.id)

// Funtions

// function add(a,b) {
//   c = a+b;
//   console.log(c);
// }

// add(2,3); // calling or invoking
// here a,b are parameters
// 2,3 are arguments.
// the above code is not returning anything.
// Example: With return statement

// function sub(a,b) {
//     return a-b; // 5-4 = 1 
// }

// const result = sub(5,4)// 1
// console.log(result)

// const minus = function sub(a,b) {
//     console.log(a)
//     return a-b;
// }
// console.log(a)

// console.log(minus(3,1)) 




let x = 0.2
let y = 0.3
console.log(x+y)

console.log(typeof NaN)

Infinity