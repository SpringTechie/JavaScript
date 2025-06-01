function add(a,b) { 
   c = a+b; // 11
   y = 56
   console.log(a+b)

}

result = add(3,4) // this function call
console.log(result)

a = function substract(a,b) {
    return a-b
}
console.log(a)
console.log(typeof a)
re= a(7,2)
console.log(re)


b = (a,b) => {
    console.log("Hello raha")
    console.log(a+b)
}
// ananouous function

// self invoking function
(function(){
    console.log("self Invoking")
})();
