// type alias
type Combinable = number | string

function processAsString(...elems: Combinable[]): string {
    return elems.map(elem => {
        if (isNotString(elem)) { 
            elem.toString() 
        }
    }).reduce((prev, cur) => prev + cur, '')
}

function isNotString(value: Combinable): boolean {
    return value !== 'string';
} 