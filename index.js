console.log("hello world")

console.log(typeof 3)

newline  = "This is the first line\nAnd this is the 2nd"

//note the string needs to quoted with backticks. 
templateLiteral = `half of 100 is ${100/2}`
console.log(templateLiteral)

// NaN is the only value in JavaScript that is not equal to itself. 
console.log(NaN == NaN)

// logical operators have a lower precedence compared to comparison and binary. 
// this it to allow expressions such as below to use a few parentheses as poss. 
operatorPrecedence = 1 + 1 == 2 && 10 * 10 > 50
console.log(operatorPrecedence)

// conditional operators 
conditionalOperator = true ? "this is true" : "this is false"
console.log(conditionalOperator)

//type coercion 
console.log(8 * null) 
console.log("5" - 1) 
console.log("5" + 1) 
console.log("five" * 2)
console.log(false == 0) 

// whenever we have null or undefined on either side of the operator 
// it only produces true if the other value is null or undefined 
console.log(null == undefined)
// -> true
console.log(0 == null) 
// -> false

//avoiding type coercion and comparing presicely
console.log(false === 0) 
// -> false
console.log("" !== false) 
// -> true

// Automatic type conversion with logical operators 
// These will convert the value on the left of the operator into a boolean type. 
console.log(null || "user")
// -> "user"
console.log("Agnes" || "user")
// -> "Agnes"