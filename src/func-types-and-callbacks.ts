// specify the type definition for the accepted callback (void return type will 
// make the compiler ignore any returned result, but won't force you to pass a callback that returns void)
function addAndHandle(n1: number, n2: number, then: (res: number) => void) {
    const result = n1 + n2
    then(result)
}

addAndHandle(2, 6, (res) => console.log(res * Math.PI))


