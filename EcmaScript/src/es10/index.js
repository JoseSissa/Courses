// Flat
let array = [1,2,3, [4,5,6, [7,8,9, [10, 11, 12, [13, 14, 15]]]]];
console.log(array.flat(4));
// Flat map
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value*2]));
// Eliminar espacios al inicio o final de los array.
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart());
let hello2 = 'hello world        ';
console.log(hello2);
console.log(hello2.trimEnd());

// No es necesario poner el parámetro error en el catch,
// el automaticamente va a trabajar con el dentro del mismo
try {
    
} catch {
    error
}

// Transforma un array a un objeto
let entries = [["name", "Jose"], ["age", 25], ["country", "CO"]];
console.log(Object.fromEntries(entries));



let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);