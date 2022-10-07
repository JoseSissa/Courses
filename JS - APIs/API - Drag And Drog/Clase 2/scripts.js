const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

pendingTasks.addEventListener('dragstart', (e)=> {
    // console.log(e.dataTransfer);
    // dataTransfer ejem: console.log(e.dataTransfer)
    // Métodos:
    // setData: establece la información que queremos compartir
    // getData: establece la información que queremos obtener

    // Cada vez que se activa el event dragstart, guardamos en dataTransfer el id del
    // elemento que estamos moviendo, para consultar dicho id lo podemos ver usando getData
    // Esto con el fin de tener el id a donde vayamos a arrastrar el contenedor/elemento
    e.dataTransfer.setData('text/plain', e.target.id);
    // console.log(e.dataTransfer.getData('text'));
});

// Este evento lo que hace es que le agrega la clase active al elemento que hayamos movido
pendingTasks.addEventListener('drag', (e)=> {
    e.target.classList.add('active');
});
pendingTasks.addEventListener('dragend', (e)=> {
    e.target.classList.remove('active');
});

// Métodos para el contenedor que recibirá lo elementos arrastrados
// El evento drop sólo funciona si antes establecemos el evento dragover en preventdefault()
finishedTasks.addEventListener('dragover', (e)=> {
    e.preventDefault();
});
finishedTasks.addEventListener('drop', (e)=> {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    // El método removeChild me devuelve el elemento eliminado
    finishedTasks.append(pendingTasks.removeChild(element));
    element.classList.remove('active');
});

/* --------------------- EFECTO CONTRARIO - REGRESAR LAS TASK ----------------------- */

finishedTasks.addEventListener('dragstart', (e)=> {
    e.dataTransfer.setData('text/plain', e.target.id);
});
finishedTasks.addEventListener('drag', (e)=> {
    e.target.classList.add('active');
});
finishedTasks.addEventListener('dragend', (e)=> {
    e.target.classList.remove('active');
});

pendingTasks.addEventListener('dragover', (e)=>{
    e.preventDefault();
});
pendingTasks.addEventListener('drop', (e)=>{
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    pendingTasks.appendChild(finishedTasks.removeChild(element));
    element.classList.remove('active');
});