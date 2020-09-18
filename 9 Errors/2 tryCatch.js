/** Try Catch
 * Try Catch blocks are used to handle any kinds of error
 * These prevent unwanted program crashes and give us an idea of what is the error and where it occured.
*/

function fail() {
    try {
        console.log('this works');
        throw new Error('oopsie');
    } catch (e) {
        console.log('error', e);
    } finally {
        console.log('still good');
        return 'returning from fail';
    }
    console.log('never going to get here'); // not reachable
}
fail();