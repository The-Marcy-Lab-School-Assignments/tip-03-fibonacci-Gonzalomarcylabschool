// Prints the first n Fibonacci numbers
//  variable "a" first number
//  variable "b" second number 
//  variable "next" the sum of first and second number and the new var "b"
// start
// a = 0
// b = 1

// a + b = next

// 0 + 1 = 1

//next iteration
// a = b (a is now 1)
// b = next (b is now 1)


//**do not do this** 
// b = next
// a = b

// 1 + 1 = 2 (next now has a value of 2)
// next iteration
// a = b (a is now 1)
// b = next (b is now 2)

// 1 + 2 = 3




const printFibonacci = (n) => {
  let a = 0
  let b = 1
  // maybe let i = 2
  // maybe i <= n
  for (let i = 0;  i < n; i++){
    console.log(a);
    let next = a + b; // add the current 2 numbers to get the "next" number 
    a = b; // store the value of b into the variable a
    b = next; // store the value of next into the variable b
  }
}
console.log('example 1')
printFibonacci(5);  // should print 0, 1, 1, 2, 3
console.log('example 2')
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
