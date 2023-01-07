// useful string properties and methods
 var myName="syed wahab" 
//  to check String's length
console.log(myName.length)
// to find character at a given index 
console.log(myName.charAt(0))
// to find index of given character 
console.log(myName.indexOf("s"))
// if you have same character repeated in string then indexOf will show first character to find pther you writ lastindexOf property 
// if you have excess spaces trim method will remove them
console.log(myName.trim())
// to change into upper or lower case
console.log(myName.toUpperCase()) 
console.log(myName.toLowerCase()) 
// to slice portion of any string we use slice method 
var firstName=(myName.slice(0,4))
console.log(firstName)
// string concatination 
var myStreet="b508 sector 11a"
var myCity="karachi"
var myAddress=myStreet.concat(" ",myCity)
console.log(myAddress)
// to replace characters 
var phoneNumber="0317-2040117 "
phoneNumber=phoneNumber.replace("-","")
console.log(phoneNumber)
