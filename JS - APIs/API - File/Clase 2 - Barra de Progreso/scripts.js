const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');


// Este primer event es para hacerlo con css en linea, usa un span como barra de progreso
// fileInput.addEventListener('change', (e)=> {
//     const file = e.target.files[0];
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);

//     fileReader.addEventListener('progress', (e)=> {
//         console.log(e.loaded);
//         console.log(e.total);

//         // Con ls sgte operación podemos calcular el porcentaje que va teniendo el archivo a medida que se va subiendo
//         // (probar con archivo grande para ver mejor), el progress event no llega hasta el 100% pues este sólo
//         // se ejecuta mientras se está subiendo el archivo
//         console.log(e.loaded * 100 / e.total);

//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%';
//     })
//     // De esta forma sabemos cuando el archivo se subió al 100%
//     fileReader.addEventListener('loadend', (e)=> {
//         console.log('END');
//         progress.style.width = '100%';
//     })
// })

// Este usa variables de css para controlar la barra de progreso y un sólo elemento html
const root = document.documentElement // Ruta de nuestro proyecto
fileInput.addEventListener('change', (e)=> {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('progress', (e)=> {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%');
    })
    // De esta forma sabemos cuando el archivo se subió al 100%
    fileReader.addEventListener('loadend', (e)=> {
        root.style.setProperty('--bar-width', '100%');
    })
})