/*
    API drag & drop:
    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo
    Para controlar estas acciones tenemos varios eventos de cada una de las partes

        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto
        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const smile = document.getElementById('smile');
const dropZone = document.getElementById('drop-zone');


// smile.addEventListener('dragend', (e)=> {
//     console.log(e);
// });

// El evento dragover y drop deben ir junto porque si no, no funcionan al menos al día de hoy.
dropZone.addEventListener('dragover', (e)=> {
    e.preventDefault();
    console.log('Drag over');
});

dropZone.addEventListener('drop', (e)=> {
    e.preventDefault();
    console.log('Drop');
});