const a = {
    name: 'Sparsh',
    say() {console.log(this)}
}
console.log(a.say());

const b = {
    name: 'Madazz',
    say() {
        return function() {console.log(this)} // 'this' will be dynamically scoped here and will point to global scope
    }
}
console.log(b.say()());

const c = {
    name: 'Rana',
    say() {
        return () => {console.log(this)}
    }
}
console.log(c.say()());