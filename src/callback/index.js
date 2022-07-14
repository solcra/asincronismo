function sum(numero1, numero2) {
    return numero1 + numero2
}

function res(numero1, numero2) {
    return numero1 - numero2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(6,2,sum));
console.log(calc(6,2,res));

function date(callback) {
    console.log(new Date)
    setTimeout(function () {
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate)

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Carlos');