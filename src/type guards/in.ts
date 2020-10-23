interface A {
    x: number;
}

interface B {
    y: string;
}

// when I know the other has y on it if the first has x on it
function execute(q: A | B) {
    if ('x' in q) {
        console.log(q.x);
    }
    else {
        console.log(q.y);
    }
}
