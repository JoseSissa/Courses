// API => https://fakeapi.platzi.com/doc/products

const API = 'https://api.escuelajs.co/api/v1'

const fetchData = (urlAPI) => {
    return fetch(urlAPI)
}

// fetchData(`${API}/products`)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .then(console.log('Hola mundo'))
//     .catch(err => console.log(err))

fetchData(`${API}/products`)
    .then(res => res.json())
    .then(products => {
        console.log(products[0]);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(res => res.json())
    .then(product => {
        console.log(product.category);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(res => res.json())
    .then(category => console.log(category.name))
    .catch(err => console.log(err))
    .finally(() => console.log('Se terminó la petición'))