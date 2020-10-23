// typeof
function execute(x: number | string) {
    if (typeof x === 'string') { // here x will be a string for sure
        console.log(x.substr(2, 4));
        // console.log(x.subtr(2, 1)); ts will catch this method name as a typo
    }
    // x.substr(1); no guarantees here that x is a string
}
