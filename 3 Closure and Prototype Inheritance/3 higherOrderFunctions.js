// Higher order functions are the functions which have functions as parameter.

const giveAccessTo = (name) =>{
    return 'Access Granted to ' + name;
}

function authenticate(person, checks) {
    let array = [];
    // you can add checks here for person.level
    for (let i = 0; i < checks; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name)
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
    if (person.level === 'admin') {
        return fn(person, 100000)
    } else if (person.level === 'user') {
        return fn(person, 50000)
    }
}

function sing(person) {
    return 'la la la my name is ' + person.name
}

console.log(letPerson({ level: 'user', name: 'Tim' }, sing));
console.log(letPerson({ level: 'admin', name: 'Kitty' }, authenticate));