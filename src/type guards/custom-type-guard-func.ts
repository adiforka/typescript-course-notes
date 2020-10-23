interface Theta {
    theta: number;
    common: string;
}

interface Gamma {
    gamma: number;
    common: string;
}

// custom type guard: if property alpha is defined, then structurally the arg is going to be of type Alpha
function isTheta(arg: any): arg is Theta {
    return arg.theta !== undefined;
}

function execute(arg: Theta | Gamma) {
    if (isTheta(arg)) {
        console.log(arg.theta);
    } else {
        console.log(arg.gamma);
    }
}

execute({ theta: 666, common: 'somthing here' });
execute({ gamma: 777, common: 'something else' });

