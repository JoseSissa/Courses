function newFunction(name, age, country) {
    var name = name || 'Jose';
    var age = age || 25;
    var country = country || 'CO';
};

// es6
function newFunction2(name = 'Jose', age = 25, country = 'CO') {
    console.log(name, age, country);
};
// Si no se le pasan los parámetros, se establecen las variables con los valores predeterminados
newFunction2();
newFunction2('Rafael', 26, 'US');

// Templates literales
let hello = "Hola";
let world = "Mundo";
console.log(hello + ' ' + world);
// es6
console.log(`${hello} ${world}`);

// Multilínea
let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n"
+ "Otra frase que necesitamos";
console.log(lorem);
// es6
let lorem2 = `Otra frase épica
Ahora es otra frase épica`;
console.log(lorem2);

// Desestructuración
let person = {
    name : "Jose",
    age : 25,
    country : "CO",
};

console.log(person.name, person.age, person.country);
// es6
let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);


let name2 = "Jose",
    age2 = 25;
obj = { name2: name2, age2: age2 };
// es6
obj2 = { name2, age2 };
console.log(obj);
console.log(obj2);

// Arrow functions
const names = [
    { name: 'Jose', age: 25},
    { name: 'Camila', age: 22},
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});
let listOfNames2 = names.map( item => {
    console.log(item.name);
});
// let listOfNames3 = (name, age, country) => {
//     ...
// }


// Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Positivo');
        }else {
            reject('Negativo');
        }
    })
};
// Resolvemos la promesa
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    };
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
};

const calc = new Calculator();
console.log(calc.sum(2, 4));

// import { hello } from './module.js';
const hello = require('./module');
hello();

// Generators
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world.';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

