function multiply(n1: number, n2: number) {
  return n1 * n2;
}

// full function type signature
let multiplyOperation: (n1: number, n2: number) => number;
multiplyOperation = multiply;

console.log(multiplyOperation(5, 4));
