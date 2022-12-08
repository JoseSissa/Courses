// Las promesas tienen 3 estados, pendiente, resuelta o rechazada.
const promise = new Promise((resolve, reject) => {
    resolve('Todo ha salido correcto')
});
// Estructura básica de una promesa
const cows = 2;
const countCows = new Promise((resolve, reject) => {
    if(cows > 10) {
        resolve(`We have ${cows} cows on the farm.`)
    }else {
        reject(Error)
    }
});

countCows.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('código finalizado');
})