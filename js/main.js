async function cargarComponente(id, archivo) {

    const respuesta = await fetch(archivo);

    const html = await respuesta.text();

    document.getElementById(id).innerHTML = html;
}

cargarComponente("navbar", "components/navbar.html");
cargarComponente("carousel", "components/carousel.html");
cargarComponente("perfil", "components/perfil.html");
cargarComponente("contenido", "components/contenido.html");
cargarComponente("footer", "components/footer.html");