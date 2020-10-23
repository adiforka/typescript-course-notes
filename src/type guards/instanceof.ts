import { exec } from "child_process";

// instanceof
class Foo {
    foo = 123;
    common = '123';
}

class Bar {
    bar = 123;
    common = '123';
}

function execute(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.foo);
        console.log(arg.bar);
    }
    // ts knows that else means that arg type must be Bar
    else {
        console.log(arg.bar);
        console.log(arg.foo);
    }

    console.log(arg.common);
    // no guarantees here that variable stores ref to this a specific type
    console.log(arg.foo);
    console.log(arg.bar);
}

execute(new Foo());
execute(new Bar());