import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//         console.log(" ---- ")
//         console.log(products[0]);
//     })
//     .then(()=>{
//         console.log("Carlos paso por aquia jijijiji");
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log('Inicia el nuevo');
        console.log(products[0]);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));