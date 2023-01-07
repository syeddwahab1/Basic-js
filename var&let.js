// VAR VS LET
// scope:where a variable is accessible
// let : declare variables with blocked scope {}
// var : declare variable with a function scope ()

// example of let
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// as let has bloacked scope so if we console the value of i outside its scope { } it will show error
console.log(i);

// now doing the same with var
for (var j = 1; j <= 5; j++) {
  console.log(j);
}
console.log(j);
