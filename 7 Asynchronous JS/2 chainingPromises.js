// ** Making multiple promises working together ** \\
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Hello')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'are')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'you')
})

const promise4 = new Promise((resolve, reject) => {
    //setTimeout(reject, 4000, 'there?')
    reject('naaa')
})

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log('values show after the max timer ends', values)) // Will run after all the promises are resolved
    .catch((err) => console.log(err)) // If even one is rejected, the operation will land in .catch()
    .finally(() => { console.log('this piece of code runs irrespective of resolve or reject') })
    // Finally runs after the promise chain is completed no matter if it is resolved or rejected
    
// ** chaining fetch requests ** \\
/**
 * Below code works only on console
 * Source for the API: https://jsonplaceholder.typicode.com
 */
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos'
]
Promise.all(urls.map(url => {
    return fetch(url).then((response) => { return response.json() })
})).then((results) => {
    results.forEach(result => {
        console.log(result); // Log the values returned by the API
    })
}).catch(err => console.log(err))