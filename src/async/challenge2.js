import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function ferchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await ferchData(`${urlApi}/products`);
        const product = await ferchData(`${urlApi}/products/${products[0].id}`);
        const category = await ferchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name); 
        
    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API);