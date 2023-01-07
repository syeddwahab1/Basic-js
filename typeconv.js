/* type conversions of number, string and boolean 
explicit vs implicit 
change the datatype of one value to another */

var age=window.prompt("enter your age?")
console.log("happy birthday")
// age +=1
// console.log(age)
// if you input age 18 then output in console is gonna be 181 because input value is a string 

age =Number(age)
age +=1
console.log(age)

//  now to convert number into string 
var myVar=3.14
myVar=String(3.14)
console.log(typeof myVar)
console.log(myVar)

// same can be done for boolean. the value in boolean if its no undefined nan etc will show false as output and everything else as true 