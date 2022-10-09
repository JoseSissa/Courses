
/* 
https://developer.mozilla.org/es/docs/Web/API/notification 
icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions = document.getElementById('permissions')

permissions.addEventListener('click', ()=> {
    // Estados del Notification.permission:
    // default -> Lo que tenga definido el navegador
    // denied -> denegado
    // granted -> Permitido
    if(Notification.permission !== 'granted') {
        getPermissions()
    }else {
        notify()
    }
})

const getPermissions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
};
const notify = () => {
    const options = {
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        icon: './world.png',
        data: 'Extra data',
        tag: 'Notification demo',
    }
    const notification = new Notification('Hello World', options);

    console.log(notification);

    notification.addEventListener('close', () => console.log('CLOSE'))
    notification.addEventListener('show', () => console.log('OPEN'))
};