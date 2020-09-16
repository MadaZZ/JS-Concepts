/** ES Modules
 * This are the standard module system introduces in ES6.
 * 
 * Notes:
 * - Standalone Code will not run.
 * 
 * Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 * - Export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 * - Import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * - Comparing all the Module designs: https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
*/

import module1 from 'module1'
import module2 from 'module2'

const myVar1 = 'Some variable scoped to this file';
export const myVar2 = 'Some variable that can be imported by other files';

export function toExport(a, b) {
    return a > b ? a : b;
}

// export{ myVar2, toExport } export can also be listed at the end of the js file