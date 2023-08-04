// Se obtienen los elementos
let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor'); 

// Genera num entero aleatorio (no incluye el num max)
function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Modifica la cita y el autor de manera aleatoria
function cambiarCita() {
    let indiceAleatorio = numAleatorio(0, citas.length); // Obtiene num aleatorio
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`; // Modifica la cita
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

// EventListener cuando se presiona el boton
botonElem.addEventListener('click', cambiarCita);
