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
![image](https://github.com/user-attachments/assets/f35c2269-7ae4-4948-a2a1-2bccae723822)
muestra la lista

![image](https://github.com/user-attachments/assets/0a08f095-79bf-447c-8d17-4c0571101d53)
emite alerta cuando hay espacio vacío paar ingresar nombre valido

![image](https://github.com/user-attachments/assets/f0f083a6-6463-4fe9-829e-3410ad7749ce)
no admite nombres ducplicados

![image](https://github.com/user-attachments/assets/1e15a57c-f226-4364-a4d7-2c0d5ff46313)
indica en pantalla el amigo secreto de manera aleatoria


