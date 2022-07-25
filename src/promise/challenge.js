import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

const data = {
    "title": "new space ship",
    "price": 1000000,
    "description": "A space ship, new as package",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]

  }



function postData(urlApi, data) {
    const response = fetch(urlApi,{
        method:`POST`,
        mode: "cors",
        credentials: 'same-origin',
        headers:{
            "Content-Type": 'application/json'
        },
        body:JSON.stringify(data)
    });
    return response;
}


postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))