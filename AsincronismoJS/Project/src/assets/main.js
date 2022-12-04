const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=10';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '11037c2959mshf44954505504f53p1756a3jsn154ca562c1a4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI, options)
    const data = await response.json()
    return data
}
// Función que se llama a sí misma, de forma automática
(async () => {
    try {
        const video = await fetchData(API)
    } catch (error) {
        console.log(error);
    }
})();


// fetch(API, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));