/** FOR AWAIT OF
 * Used to loop/iterate through all the promises using async await
 * 
 * * Note: 
 * **Runs only in browser console**
 * 
 * Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
 * - https://javascript.info/async-iterators-generators
 * 
*/

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos'
]

const getData = async function (urls) {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}
getData(urls);