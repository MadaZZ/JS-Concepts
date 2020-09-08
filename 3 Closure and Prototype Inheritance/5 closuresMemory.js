// CLOSURES ARE MEMORY EFFICIENT \\


// To use this method's bigArray we need to call this again and again, so this is created repeatedly
function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('created!');
    return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)

/**
 * Now if we want to use the bigArray without storing it in a global variable.
 * Just create closure as that will store the bigArray reference without polluting the global Namespace.
 */ 
function heavyDuty2() {
    const bigArray = new Array(7000).fill('🌚')
    console.log('created Again!')
    return function (item) {
        return bigArray[item]
    }
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(11)
getHeavyDuty(500)
getHeavyDuty(123)
