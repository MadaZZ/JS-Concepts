/** PROMISES
 * Promises simplify deferred and asynchronous computations. 
 * A promise represents an operation that hasn't completed yet.
 *
 * Resourses:
 * - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
 * - https://javascript.info/promise-basics
 */
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('worked');
    } else {
        reject('Failed')
    }
})

promise
    .then((result) => {
        // throw Error('bigone')
        return result + ' but i am not sure what happened'
    })
    .then((result2) => console.log(result2))
    .catch((err) => { console.log(err) }) // catch checks for errors only for the chain items before it
    
    .finally(() => { console.log('this piece of code runs irrespective of resolve or reject') })
    // Finally runs after the promise chain is completed no matter if it is resolved or rejected