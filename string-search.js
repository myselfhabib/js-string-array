const products = [
    'asus apple ios 556gb laptop',
    'asus Iphone 12pro 256gb',
    'asus vivo v21 pro phone',
    'asus laptop asus',
    'walton laptop',
    'htc phone',
    'xiaomi laptop',
    'expensive phone with Laptop'
];
const searching = 'asus';
//indexOf

const output = [];
for (product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

// console.log(output);

const str1 = 'Bangladesh is a beautiful country.';
console.log(str1.endsWith("country"));
