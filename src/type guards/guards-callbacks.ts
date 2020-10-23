// love this syntax (mandating object structure) -- used a 'declare' kw but I wanted to actually use it
const omicron: {
    upsilon?: {
        zeta: string;
    };
} = {
    upsilon: {
        zeta: 'zeta accessed'
    }
};


function immediate(callback: () => void) {
    callback();
}


// if (omicron.upsilon) { // type guard
//     console.log(omicron.upsilon.zeta); // OK
//     immediate(() => {
//         // Object is possibly undefined becaue TS does not assume type guards remain active in callbacks
//         console.log(omicron.upsilon.zeta); 
//     });
// }

if (omicron.upsilon) { // type guard
    console.log(omicron.upsilon.zeta);
    const arg = omicron.upsilon;
    immediate(() => {
        console.log(arg.zeta);
    });
}

