// unknown is strict, enforcing a type check if you want to use it as some other specific type
// any basically disables type checking and reverts to js dynamics
let userInput: unknown
let userName: string

userInput = 5
userInput = 'Dude'
if (typeof userInput === 'string') {
    userName = userInput
}

// never returns a value, not even the value of 'undefined'. better from a code quality perspective
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}
// generateError(`error occured!`, 500)

// this also never returns 
function infiniteLoop(): never {
    while(true) {}
}
