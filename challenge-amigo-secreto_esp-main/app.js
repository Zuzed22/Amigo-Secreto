// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar si el campo está vacío
    if (!nombre) {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Evitar duplicados
    if (amigos.includes(nombre)) {
        alert('Este amigo ya ha sido añadido.');
        return;
    }

    // Añadir el nombre a la lista
    amigos.push(nombre);
    input.value = '';  // Limpiar el campo de entrada
    mostrarAmigos();   // Mostrar la lista actualizada
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiar la lista antes de agregar los nuevos nombres

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo y asignar un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 personas para hacer el sorteo.');
        return;
    }

    // Seleccionar un amigo aleatorio
    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el nombre del amigo seleccionado
    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSeleccionado) {
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = '';  // Limpiar la lista de resultados

    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto seleccionado es: ${amigoSeleccionado}!`;
    listaResultados.appendChild(li);
}
