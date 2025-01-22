<h1> "Juego del Amigo-Secreto"

Estado del Proyecto; En construcción..

let amigos = []
Para saber mas sobre array puedes revisar la siguiente documentación:

Array - JavaScript | MDN

- document.getElementById o document.querySelector 
- alert con un mensaje de error: "Por favor, ingrese un nombre."

.push().

- Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() 

- Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.


Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

- Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

- Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

- Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

- Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

- Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
