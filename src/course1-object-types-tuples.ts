// not the best practice but to illustrate how ts works with object types
const person: {
    name: string
    age: number
    hobbies: string[]
    // tuple (array with a union type)
    roles: [number, string]
} = {
    name: 'Max',
    age: 40,
    hobbies: ['sports', 'loitering'],
    roles: [2, 'author']
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

// unfortunately ts does not make tuples thaat fixed
person.roles.push('admin')
console.log(person.roles)
