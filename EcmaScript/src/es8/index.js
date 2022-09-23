const data = {
    frontend: 'Jose',
    backend: 'Isabel',
    design: 'Sara',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
const keys = Object.keys(data);
console.log(keys);

// Padding
const stringg = 'hello';
console.log(stringg.padStart(9, 'hi'));
const string2 = 'hello';
console.log(string2.padEnd(9, 'hi'));