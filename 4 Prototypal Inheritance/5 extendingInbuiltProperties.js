//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
//'1899'


//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map())
//1🗺, 2🗺, 3🗺






// Solution #1
Date.prototype.lastYear = function () {
    return this.getYear() + 1899;
}
console.log(new Date('1900-10-10').lastYear())

// Solution Bonus
Array.prototype.map = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] + '🏞');
    }
    return arr;
}
console.log([1, 2, 3].map())

// Resource(s) to refer:
// https://javascript.info/native-prototypes