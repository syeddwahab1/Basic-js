// for naming variables camel case is considered a good practice 
// var firstName
// var lastName
// var myAddress 

// variable can be assigned value later on too 
// var whatever
// whatever = "code"

// strings can be added too
var firstName ="wahab"
var lastName="uddin"
var fullName= firstName+lastName
console.log(fullName)

// shortcut for arithmetic expressions 
var number=10
number +=1
number -=1
number *=2

// operator precedence
/*
1. Parenthesis ()
2. Expoents 
3. Multiply and Divide 
 4. Addition and Subtraction 
 */
var opprec= (10 + 2) / 2
console.log(opprec)

// ways of taking input 
// var myName=window.prompt("whats your name?") 
// console.log(myName)

// another way 

document.getElementById("myButton").onclick= function(){
    var myName =document.getElementById("myText").value ;
    console.log("hello",myName)
}

whatever
