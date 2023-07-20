import { sum, multiply, subtract, divide } from './math.mjs';

console.log('Sum', sum(1, 2));
console.log('Subtract', subtract(1, 2));
console.log('Divide', divide(1, 2));
console.log('Multiply', multiply(1, 2));



// Tradeoffs
// Encapsulation: The values within a module are scoped to that specific module. Values that aren't explicitly exported are not available outside of the module.

// Reusability: We can reuse modules throughout our application

