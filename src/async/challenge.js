import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

async function FetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data
}

const anotherFunction = async (urlApi) => {
    try{
        const products = await FetchData(`${urlApi}/products/`);
        const product = await FetchData(`${urlApi}/products/${products[0].id}`);
        const category = await FetchData(`${urlApi}/categories/${product.id}`);
        console.log(products);   
        console.log(product.title);        
        console.log(category.name);
    } catch(error){
        console.error(error)    
    }
}

anotherFunction(API)



//FetchData(`${API}/products`)
//    .then(response => response.json())
//    .then(products => {
//        console.log(products)
//        return FetchData(`${API}/products ${products[0].id}`)
//    })
//    .then(Response => Response.json())
//    .then(product => {
//        console.log( product)
//        return FetchData(`${API}/categories/${product.id}`)
//    })
//    .then(Response => Response.json())
//    .then(category =>{
//        console.log(category.name);}
//    )
//    .catch(error => console.log(error))
//    .finally(() => console.log("finally"))
//