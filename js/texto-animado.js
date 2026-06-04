const texto = "Músico • Compositor • Estudiante Ingeniería en Sonido";

let i = 0;

function escribirTexto() {

    if (i < texto.length) {

        document.getElementById("texto-animado").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribirTexto, 80);
    }
}

escribirTexto();