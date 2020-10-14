// union types with some crazy type checks and literal types (see resultType)
function combine(
    // wanted to make resultType optional, but then it'd have to be last as well. went with rest param
    resultType: 'as-number' | 'as-text',
    // rest param has to be last (like varargs in Java)
    ...input: (number | string)[]
): string | number {
    let result
    if (input.every(item => typeof item === 'number') || resultType === 'as-number') {
        result = input.reduce((prev, cur) => +prev + +cur, 0)
    }
    else {
        result = input.reduce((prev, cur) => prev + cur.toString(), '')
    }
    return result
}

// not all rest param values are nums, but they're all convertible to num vals, 
// and the result type is enforced as a number (literal type)
console.log(combine('as-number', '3', 2, '4', 23))
// we're forcing the return here to be of type number, and since we then pass the function args of type string, not only nums, 
// we get a NaN as a result
console.log(combine('as-number', 2, 3, 'sd', 5, 3))
console.log(combine('as-text', 2, 3, '4', 2, 'sad', 3))




