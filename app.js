// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variable global para almacenar los nombres de los amigos.
let amigos = [];

/**
 * Agrega un nuevo amigo al array `amigos` tras validar la entrada.
 * Si el campo está vacío o el nombre ya existe, muestra una alerta.
 */
function agregarAmigo() {
  const inputElemento = document.getElementById('amigo');
  const nombreAmigo = inputElemento.value.trim();

  if (nombreAmigo === '') {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nombreAmigo)) {
    alert("¡Ese nombre ya ha sido agregado! Por favor, inserte un nombre diferente.");
    inputElemento.value = '';
    return;
  }

  amigos.push(nombreAmigo);
  console.log(`Se ha añadido a ${nombreAmigo}. Amigos actuales:`, amigos);

  mostrarAmigosEnLista();

  inputElemento.value = '';
}

/**
 * Recorre el array `amigos` y renderiza cada nombre como un elemento de lista (<li>)
 * en la lista HTML con el ID `listaAmigos`.
 */
function mostrarAmigosEnLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    li.className = 'nombre-amigo';
    listaAmigos.appendChild(li);
  }
}

/**
 * Selecciona un amigo de forma aleatoria del array `amigos` y muestra el resultado.
 * Si no hay amigos en la lista, muestra una alerta.
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡No hay amigos para sortear! Por favor, agregue al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;

  // Ocultamos la lista de amigos para un enfoque en el resultado
  document.getElementById('listaAmigos').style.display = 'none';

  // Cambiamos el texto y la función del botón de sortear a "Reiniciar"
  const botonSortear = document.querySelector('.button-container .button-draw');
  botonSortear.textContent = 'Reiniciar';
  botonSortear.onclick = reiniciarSistema;
}

/**
 * Reinicia la aplicación borrando el array de amigos y el contenido de la interfaz.
 * Esto permite comenzar un nuevo juego sin recargar la página.
 */
function reiniciarSistema() {
  amigos = [];
  
  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = '';

  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  listaAmigos.style.display = 'block';

  // Restablecemos el botón de "Sortear" a su estado original
  const botonSortear = document.querySelector('.button-container .button-draw');
  botonSortear.textContent = 'Sortear amigo';
  botonSortear.onclick = sortearAmigo;
}