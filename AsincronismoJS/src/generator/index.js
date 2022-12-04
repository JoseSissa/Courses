function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen()
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* iterable(array) {
    for (const elem of array) {
        yield elem
    }
}
const it = iterable(['oscar', 'omar', 'sofia', 'lucía', 'juan'])
console.log(it.next().value);

// ============================================================================
function* genApi() {
    let products
    const API = 'https://api.escuelajs.co/api/v1'
    yield fetch(`${API}/products`)
        .then(res => res.json())
        .then(res => {
            products = res
            return res
        })
    yield fetch(`${API}/products/${products[0].id}`)
        .then(res => res.json())
        .then(res => res)
    yield fetch(`${API}/categories/${products[0].category.id}`)
        .then(res => res.json())
        .then(res => res)
}

const hola =  async () => {
    const peticiones = genApi()
    const products = await peticiones.next().value.then(res => res);
    const product = await peticiones.next().value.then(res => res)
    const category = await peticiones.next().value.then(res => res)
    console.log(await products);
    console.log(await product.title);
    console.log(await category.name);
}
hola()
