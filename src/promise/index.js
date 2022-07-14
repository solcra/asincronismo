const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() =>{
                resolve("True");
            }, 2000)
        } else {
            const error = new Error('Whooop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array of results", response);
    })
    .catch(err => {
        console.error(err);
    })

const promise = new Promise(function(resolve, reject){
    resolve('Hey!')
})

const cows = 10;

const countCows = new Promise(function (resolve, reject){
    if (cows > 16){
        resolve(`We have ${cows} cows on the fanm`);
    } else {
        reject("There is no cows on the farm");
    }
})

countCows.then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error)
}).finally(() => console.log('Finally'));