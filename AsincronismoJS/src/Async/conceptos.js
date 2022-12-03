const fnAsync = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => resolve('Async !!'), 2000)
            : reject(new Error('Error !!'))
    })
}
const anotherFunction = async () => {
    const something = await fnAsync()
    console.log(something);
    console.log('Hello anotherFunction');
}

console.log('Before');
fnAsync().then(res => console.log(res))
anotherFunction()
console.log('After');