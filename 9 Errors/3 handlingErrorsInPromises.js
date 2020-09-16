/** 
 * We can only catch synchronous errors using try catch.
 * There is a catch block for promises
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
