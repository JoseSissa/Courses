/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. 
        Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const fileInput = document.getElementById('file')
const img = document.getElementById('img')