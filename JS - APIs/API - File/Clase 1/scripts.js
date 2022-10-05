/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. 
        Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const fileInput = document.getElementById('file');
const imgSingle = document.getElementById('img');
const text = document.getElementById('text');
const images = document.getElementById('images');

// fileInput.addEventListener('change', (e)=> {
//     console.log(e.target.files);

//     const file = e.target.files[0];

//     // Creamos una instancia de FileReader() que nos permite leer los archivos que subamos
//     const fileReader = new FileReader();
//     // Ejecutamos la función leer como texto y le pasamos el elemento que queremos leer
//     fileReader.readAsText(file);
//     // Le ponemos un evento que nos ejecute la función cuando el archivo se termine de "leer"
//     // esto debido a que el archivo puede persar mucho lo ejecuta de forma asíncrona, cuando termine 
//     // ejecutará la función del load event.
//     fileReader.addEventListener('load', (e)=> {
//         console.log(e.target.result);
//         text.textContent = e.target.result;
//     })
// });


/* ----------------------- AHORA LEEREMOS IMÁGENES ----------------------- */
// Carga simple, una imagen
// fileInput.addEventListener('change', (e)=> {
//     const file = e.target.files[0];
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.addEventListener('load', (e)=> {
//         img.setAttribute('src', e.target.result);
//     })
// });

// Carga múltiple de imágenes
fileInput.addEventListener('change', (e)=> {

    const fragment = document.createDocumentFragment()

    const files = e.target.files;
    for (const elem of files) {
        const img = document.createElement('IMG');

        const fileReader = new FileReader();
        fileReader.readAsDataURL(elem);

        fileReader.addEventListener('load', (e)=> {
            img.setAttribute('src', e.target.result);
        })
        fragment.appendChild(img);
    }
    images.appendChild(fragment);    
});