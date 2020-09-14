// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
    history: {} // Track history of items bought/returned
}


//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// Method 1 -  Add item to user cart
const addToCart = (product) => {
    user.cart.push({
        name: product.name,
        price: addTax(product.price),
    });
};

// Method 2 - Add tax to the price of an item
const addTax = (amount) => amount + (amount * 0.03);

// Method 3 - Purchase item, move to purhcase list
const buyItems = () => {
    user.purchases = [...user.cart];
    for (product of user.cart){
        let key = product.name;
        product.status = 'purchased';
        user.history[key] = product
    }
    emptyCart();
}

// Method 4 - Empty the cart
const emptyCart = () => {user.cart = []};

addToCart({name: 'mobile', price: 10000});
addToCart({name: 'mobilecover', price: 190});
buyItems();
console.log(user);

// Method 5 - Accept return on item
const returnItem = (key) => {
    if(user.history[key]){
        user.history[key].status = 'return';
    }
}
returnItem('mobile');
console.log(user);