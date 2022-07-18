const doSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Do Something Async'),3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch {
        console.error(error);
    }
}

console.log('Before1');
anotherFunction();
console.log('After1');

const fnAsync = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Async!!'), 2000)
        : reject(new error('Error!'));
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');