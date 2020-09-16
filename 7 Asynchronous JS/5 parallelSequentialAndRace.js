/** THREE WAYS TO RUN MULTIPLE PROMISES
 * 
 * Parallel: All promises are executed simultaneously
 * Race: Returning the first promise that finishes
 * Sequence: Running promises one after another. 2nd runs when first finishes
*/

const promisify = (item, delay) =>
new Promise((resolve) =>
  setTimeout(() =>
    resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

//Parallel: a(), b() and c() are executed simultaneously
async function parallel() {
const promises = [a(), b(), c()];
const [output1, output2, output3] = await Promise.all(promises);
return `prallel is done: ${output1} ${output2} ${output3}`
}

//Race: first our of a(), b() and c() is executed
async function race() {
const promises = [a(), b(), c()];
const output1 = await Promise.race(promises);
return `race is done: ${output1}`;
}

//Sequence: a(), b() and c() are executed in a sequence.
async function sequence() {
const output1 = await a();
const output2 = await b();
const output3 = await c();
return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)