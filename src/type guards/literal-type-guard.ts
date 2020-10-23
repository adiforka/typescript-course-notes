// can afford to use == and != with literal types
type TriState = 'yes' | 'no' | 'unknown';

function logoutState(state: TriState) {
    if (state == 'yes') {
        console.log('User selected yes');
    } else if (state = 'no') {
        console.log('User selected no');
    } else {
        console.log('Unser has not made a selection');
    }
}

// we can do this with union types as well
type isTheta = {
    kind: 'alpha',
    alpha: number;
};

type Beta = {
    kind: 'beta',
    beta: number;
};

function execute(arg: isTheta | Beta) {
    if (arg.kind === 'alpha') {
        console.log(arg.alpha);
    }
    else { // must be Beta
        console.log(arg.beta);
    }
}
