let cars = ["volvo","hyndai","tata"]
// console.log(cars.length)
// console.log(cars.sort())
let items = [] // empty array
items[0] = "ball"
items[1] = "pen"
items[2] = "phone"
items[3] = 45
// items[4] = {
//     name: "arun",
//     age: 34
// }

//items.unshift("book")
// delete items[4]
items.copyWithin(3,0)
console.log(items)
// let ar = new Array("volvo","hyndai","tata")
console.log(cars[2])
// update the value

cars[1]="BMW"
console.log(cars)
console.log(typeof cars)

// How iterate over a array:
for(let i =0;i<cars.length;i++) {
    console.log(cars[i])
}
// by using forEach method
cars.forEach(a=>console.log(a))

// to add new value to existing array

cars.push("Range Rover")
console.log(cars)

// some important methods
// to
console.log(cars.at(2))
console.log(cars[2])
// volvo+hyndai+tata
console.log(cars.join("+"))

console.log(cars.pop())
console.log(cars.shift())
console.log(cars.concat(items))

arr = [[1,2],[3,4],[7,8]] // [1,2,3,4,5,6,7,8]
console.log(arr.flat())
console.log(arr.flatMap(x=>x))
arr1 = [1,2,3,4,5,6,7,8]
console.log(arr1.slice(0,4))











