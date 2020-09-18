/** ASYNC ERRORS 
 * 
 * Promises: We cannot handle the promise errors using try catch.
 *           Promises have their own catch methos.
 * 
 * Async Await: we can handle the async await errors using try catch.
 * 
*/

Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
        throw new Error('#1 fail')
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error('error', err.message)
    })
    .then(response => {
        console.log('hi am I still needed?', response)
        return 'done'
    })
    .catch(err => {
        console.error(err)
        return 'failed'
    })

async function something() {
    try {
        await Promise.reject('hello')
        await Promise.resolve('NONO')
    } catch(err){
        console.log(err);
    }
}
something()