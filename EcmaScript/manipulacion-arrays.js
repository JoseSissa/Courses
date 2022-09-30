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