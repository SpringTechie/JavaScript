
//x = `Hello ${y}`
// z = new String("Arun")
// k = new String("Arun")
// console.log(z==k) // comparing two javacript objects returns false
// console.log(z===k) // comparing two javacript objects returns false
// console.log(typeof z)
// console.log(x)
// some imp String methods
x = "  Arun how are  "
console.log(x.length) // finds the length of String
console.log(x.charAt(-1)) // find the char at particular position and  if specifed index in not found then returns nothing.
console.log(x[6]) // to access the char 
console.log(x.at(-3)) 
// it is intro in ES6 if specifed index in not found then returns undefined
// this method also accepts the negative index.and negative index starts from end pof the String.

// To extract any part of String we have to use 
// 1.substring(startIndex,endIndex) // specify start index and end index(Optional)
// 2.slice(startIndex,endIndex)
// startindex always should be small and end index always should be high.
console.log(x.substring(0)) // from 0 index to last index(length-1)
console.log(x.substring(1,2)) // from 2 index to end-index(excluded)
console.log(x.slice(-12,-9)) // this methods works same as substring

console.log(x.toUpperCase())
console.log(x.toLowerCase())
y = " you"


console.log(x.concat(y)) 
console.log(x.trim()) // trim will remove extra white spaces in a String.
console.log(x.trimStart())
console.log(x.trimEnd())

console.log(y.repeat(2)) // repeats the String.

console.log(x.replace("are","is")) // replace "are" with "is" and it only replaces firstMatch.
console.log(x.replaceAll("are","is"))
console.log(x.split(" ")) // splitting with white spaces and retuns an array.
console.log(x.split(","))
console.log(x.split("-"))

console.log(x.indexOf('x')) // if specified char is present inside a String returns the index,if not returns the -1.
console.log(x.lastIndexOf('r'))









