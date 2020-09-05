// function currying

function multiply(a, b) {
    return a*b;
}

const multiplyByTwo = multiply.bind(this, 2);

// As we have bound one param of the multiply function to 2, we only add one param below
console.log(multiplyByTwo(4));