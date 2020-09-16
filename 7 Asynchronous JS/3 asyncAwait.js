/** ASYNC AWAIT
 * This is a syntactic sugar introduced in ES8 which works on Proomises
 * Only makes a the promise syntax simpler, while doing the same job.
 * 
 * RESOURCES: 
 * - https://javascript.info/async-await\
 * 
 * NOTE: Run the below code in browser console only
*/

async function fetchUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    console.log(data);
}
fetchUsers();
// ** chaining fetch requests ** \\
/**
 * Source for the API: https://jsonplaceholder.typicode.com
*/
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos'
]
const getData = async () => {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => // We can use await prior to any promise
            fetch(url).then((response) => response.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch(e){
        console.log(e)
    } // Can use js try catch blocks as there are no inbuilt for async await
}
getData();