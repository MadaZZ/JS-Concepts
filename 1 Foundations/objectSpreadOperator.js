/** OBJECT SPREAD
 * Just as the spread operator for arrays,
 * Spread operator was introduced for objects in es9
 * 
 * Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

let shinobi = {
    leaf: 8,
    stone: 6,
    sand: 5,
    cloud: 7,
    mist: 5
}

const spreadShinobi = () =>{
    let {leaf, mist, ...rest} = shinobi;
    console.log(leaf);
    console.log(rest);
    console.log(mist);
}
spreadShinobi();