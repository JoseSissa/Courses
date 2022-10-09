const boxes = document.querySelectorAll('.box');

const callback = (entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting');
        }
    })
};

// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API


const options = {
    root: null, // Elemento padre que estamos vigilando, normalmente es el viewport cuando no se define o es null
    rootMargin: '100px', // Acepta valores tanto positivos como negativos
    threshold: 0 //Valores entre 0 y 1, por defecto es 0
  }

const observer = new IntersectionObserver(callback, options);

boxes.forEach(elem => observer.observe(elem));