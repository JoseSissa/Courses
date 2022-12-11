// API tomada de : https://restcountries.com/


const flags = document.getElementById('flags')
const urlAPI = 'https://restcountries.com/v2/'
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

const uploadPicture = async () => {
    const form = document.getElementById('uploadingForm')
    const formData = new FormData(form)
    const res = fetch('https://api.thecatapi.com/v1/images/upload', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'X-API-KEY': 'c08d415f-dea7-4a38-bb28-7b2188202e46'
        },
        body: formData
    })

    console.log(res);
}