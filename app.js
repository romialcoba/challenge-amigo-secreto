// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.querySelector('#amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);

    actualizarLista();

    limpiarCaja();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para limpiar el input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
