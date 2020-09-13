// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const history = [];

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// FUNCTIONAL PROGRAMMING SOLUTION:

// Method 1 -  Add item to user cart
const addToCart = (user, item) => {
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
};

// Method 2 - Add tax to the price of an item
const addTax = (user) => {
    history.push(user)
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart });
}

// Method 3 - Purchase item, move to purhcase list
const buyItem = (user) => {
    history.push(user)
    const itemsInCart = user.cart;
    return Object.assign({}, user, { purchases: itemsInCart });
}

// Method 4 - Empty the cart
const emptyCart = (user) => {
    history.push(user)
    return Object.assign({}, user, { cart: [] });
}

const compose = (f, g) => (...args) => f(g(...args)) // To use compose to run functions
const pipe = (f, g) => (...args) => g(f(...args)) // To use pipe to run functions

const purchaseItems1 = (...fns) => fns.reduce(compose)
const purchaseItems2 = (...fns) => fns.reduce(pipe)

// Argument order For compose
console.log(purchaseItems1(
    emptyCart,
    buyItem,
    addTax,
    addToCart
)(user, { name: 'mobile', price: 50000 }))

// Argument order For pipe
console.log(purchaseItems2(
    addToCart,
    addTax,
    buyItem,
    emptyCart
)(user, { name: 'mobile', price: 50000 }))

console.log('history', history)


// ** Open for contribution ** Add the functionality using pure functions.
const refundItem = () => { }
const getUserState = () => { }
const goBack = () => { }
const goForward = () => { }