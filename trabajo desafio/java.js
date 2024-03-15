let contador = 0;

function mostrarContador() {
    console.log("Contador:", contador);
    contador++;
}

// La función mostrarContador se ejecutará cada segundo (1000 milisegundos)
setInterval(mostrarContador, 1000);