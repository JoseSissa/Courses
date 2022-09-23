const obj = {
    name: 'Jose',
    age: 25,
    country: 'CO',
};

// let { name, ...all } = obj;
// console.log(name, all);

let { country, ...all } = obj;
console.log(all);

// ---------
const obj2 = {
    name: 'Jose',
    age: 25,
};
const obj3 = {
    ...obj2,
    country: 'CO',
};

console.log(obj3);




const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true 
            ? setTimeout(()=>{
                resolve('Hello world!')
            }, 3000)
            : reject(new Error('Test error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ya finalizó la promesa'));


//  Regular expressions

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-09-18');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);