array = [2, 4, 6, 8];

function solucion(array) {
    const newArray = array.map(elem => {
        return elem * 2;
    });
    console.log(newArray);
}
solucion(array);

data = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
];
function solucion2(data) {
    // let newArray = [];
    let newArray = data.map(elem => {
        return (elem.name);
    });
    console.log(data);
    console.log(newArray);
};
solucion2(data);

// ------------------------------------
data = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
];
function solucion3(data) {
  data.map(elem => {
    elem.taxes = Math.trunc(elem.price * 0.19);
  });
  return data;
};
console.log(solucion3(data));

// ------------------------------------
data = [
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
];
function solucion4(data) {
  let total = 0;
  data.forEach(elem => {
    total += elem.total;
  });
  return total;
};
console.log(solucion4(data));


data = [1, 2, 3, 4];
const res = data.map(elem => {
  return elem * 2
});
console.log(res);


// -------------------
orders = [
  {
    customerName: 'ho'
  },
  {
    customerName: 'hol2'
  },
  {
    customerName: 'co'
  },
  {
    customerName: 'hola3'
  },
];
const search = (query) => {
  return orders.filter(item => item.customerName.length >= 3);
}
console.log(search('hol'));

console.log(console);


// -------------------

const values = [2, 3, 4, 5];
const initialValueOfSum = 0;
const t = values.reduce((sum, elem ) => {
  return sum + elem;
}, initialValueOfSum);
console.log(t);


// Some

const num = [1, 2, 3, 4];

const respuesta = num.some(elem => elem % 2 == 0 );
console.log(respuesta);

const solution = ([1, 3, 5, 7, 10, 11]);
const solution2 = ([1, 3, 5]);

const resSome = solution => solution.some(elem => elem % 2 == 0);
console.log(resSome(solution));


// Includes
// En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda,
// por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" 
// y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que 
// debe encontrar coincidencias, así la el término de búsqueda sea mayúscula o minúscula.
// La solución debería tener un input y output como los siguientes:
const words = "Ana lava la tina";
const query = "ana";

function fIncludes(words, query) {
  console.log(words.toLowerCase().includes(query.toLowerCase()));
};
fIncludes(words, query);


// Join

// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de 
// URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), 
// por ejemplo: Curso de arrays => curso-de-arrays
// La solución debería tener un input y output como los siguientes:

let array1 = ("La forma de correr Python");
let array2 = ("La API para nunca parar de aprender");
let array3 = ("Curso de arrays");

function fJoin(text) {
  return text.toLocaleLowerCase().split(' ').join('-');
}
console.log(fJoin(array1));

const t1 = "Hola";
const t2 = "mundo";
console.log([...t1, ...t2]);


// ESTO DE ABAJO ES LO QUE HACE EL MÉTODO FLAT PERO CON MI PROPIA FUNCION DE FORMA RECURSIVA

const matriz = [
  [1, 2, 3],
  [4, 5, 6, [7, 8, [9, 10, 11]]],
  [12, 13, 14]
];
const matriz2 = [
  1,
  [1,2,3],
  [4,5,6],
  [7,8,[9,10,[11,12]]]
];
function recursividad(array) {
  let newArray = [];
  for (const elem of array) {
    Array.isArray(elem)
      ? newArray = newArray.concat(recursividad(elem))
      : newArray.push(elem);
  }
  return newArray;
};
const resRecursividad = recursividad(matriz2);
console.log('Recursividad', resRecursividad);

// 

const solutionWords = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];


function numWords(text) {
  return text.split(' ').join('').length;
}
solutionWords.map(elem => console.log(numWords(elem)));

// Examples
// const array = ['a', 'bb', 'ccc']; 
// const rta = array.map(item => item.length);
// console.log(rta);

// const array = [['🐸','🐱'],'🐹', ['🐯']]; 
// const rta = array.flat();
// console.log(rta);