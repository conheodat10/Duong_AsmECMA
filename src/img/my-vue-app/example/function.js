/*
  -function declaration
  -function expression 
  -arrow function
 */
function functionDeclaration(a, b) {
    return a + b;
}
console.log(functionDeclaration(2, 3));



const functionExpression = function (a, b) {
    return a + b;
}
console.log(functionExpression(2, 3));



const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(1, 2));




