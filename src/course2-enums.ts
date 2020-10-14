// note the js to which this is transpiled
enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

const dude: {
    name: string
    age: number
    hobbies: any
    role: Role
} = {
    name: 'Max',
    age: 40,
    hobbies: ['sports', 'loitering'],
    role: Role.ADMIN
}

if (dude.role === Role.ADMIN) {
    console.log('who\'s your daddy')
}
else {
    console.log('suck it')
}
