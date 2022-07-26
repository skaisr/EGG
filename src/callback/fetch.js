import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

function fetchData(urlApi) {
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(Response => Response.json())
    .then(products =>{
        console.log(products);
    })
    .then(() => {
        console.log(`hola`)
    })
    .catch(error => console.log(error))



fetchData(`${API}/products`)
    .then(Response => Response.json())
    .then(products =>{
        setTimeout(function(){
            console.log(products)
            return fetchData(`${API}/products/${products[0].id}`)},10000)
    })
    .then(Response => Response.json())
    .then(product =>{
        setTimeout(function(){
            console.log(product.title)
            return fetchData(`${API}/categories/${product.category.id}`)},30000)
    })
    .then(Response => Response.json())
    .then(category =>{
        setTimeout(function(){
        console.log(category.name);},60000)
    })
    .catch(error2 => console.log(error2))
    .finally(() => console.log("finally"))