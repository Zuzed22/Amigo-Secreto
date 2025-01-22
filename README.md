<h1> "Juego del Amigo-Secreto"

Estado del Proyecto; inicio

- declarando una variable
  let amigos = []

- valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

-validando la entrada: Si está vacío, mostrar un alert con un mensaje de error: "Por favor, ingrese un nombre."

- Actualización del array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

- Obtención del elemento de la lista: Utilizar document.getElementById() o document.querySelector() 

- Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.


Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

- Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

- Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

- Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

- Obteneiendo el nombre sorteado:utilizando el índice aleatorio para acceder al nombre correspondiente en el arreglo.
  
- Eliminando duplicados

- Mostrando el resultado: elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

  En revisión
