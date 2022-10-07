const alert = document.getElementById('alert');

const setAlert=(status)=> {
    console.log(status);
    alert.classList.remove('alert--online', 'alert--offline');
    // El setTimeOut nos sirve para quitar las clases después de que hagan las animaciones
    setTimeout(()=>{
        status === 0
        ? (alert.textContent = "Ups, it seems you're offline", alert.classList.add('alert--offline'))
        : (alert.textContent = "Great, you're online again!", alert.classList.add('alert--online'));
    }, 100);
}
// Con estos eventos escucharemos y sabremos si el navegador tiene o no conexión a internet
addEventListener('online', (e)=> {
    console.log(e);
    setAlert(1);
});
addEventListener('offline', (e)=> {
    console.log(e);
    setAlert(0);
});

