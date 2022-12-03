// API => https://fakeapi.platzi.com/doc/products
const API = "https://api.escuelajs.co/api/v1/products";

// const postData = (urlAPI, data) => {
//     const response = fetch(urlAPI, {
//         method: "POST",
//         mode: "cors",
//         credentials: "same-origin",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     return response;
// }
const viewProduct = (API, id) => {
    fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(res => console.log(res))
}

// const data = {
//     "title": "New Product couse",
//     "price": 9999,
//     "description": "A description",
//     "categoryId": 1,
//     "images": ["https://placeimg.com/640/480/any"],
// };

// postData(API, data)
//     .then(res => res.json())
//     .then(res => console.log(res))

viewProduct(API, 214)
