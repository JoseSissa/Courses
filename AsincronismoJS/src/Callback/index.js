function sum (num1, num2) {
        return num1 + num2
}

function calculate (num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calculate(2, 3, sum));

setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000)

function grettin (name) {
    console.log(`Hola, ${name}`);
}

setTimeout(grettin, 2000, 'Jose')