// API tomada de : https://restcountries.com/


const flags = document.getElementById('flags')
const urlAPI = 'https://restcountries.com/v2/'
// const urlAPI = 'https://restcountries.com/v2/name/colombia'

// fetch(`${urlAPI}/name/colombia`)
//     .then(res => res.json())
//     .then(res => {
//         flag1.src = res[0].flag
//         console.log('Response since fetch promises ', res)
//     })

const getData = async (urlAPI) => {
    let res = await fetch(`${urlAPI}/lang/es`)
    res = await res.json()
    const fragment = document.createDocumentFragment()
    for (const elem of res) {
        const div = document.createElement('DIV')
        div.innerHTML = `
            <h2>${elem.nativeName} - ${elem.capital}</h2>
            <img alt="flag" src="${elem.flag}" width="300">
        `
        fragment.appendChild(div)
    }
    flags.appendChild(fragment)
}
getData(urlAPI)