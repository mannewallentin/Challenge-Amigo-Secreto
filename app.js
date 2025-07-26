const textoAmigo = document.getElementById('amigo');
const listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');


//Los usuarios escribirán nombre de un amigo en campo de texto y lo agregarán a una lista visible al hacer clic en "Añadir"
function agregarAmigo() {
    //Si campo de texto está vacío, mostrar un mensaje de error "Por favor, agregar nombre válido"
    if (textoAmigo.value === '') {
        alert('Por favor, inserte un nombre')
    }
    listaAmigos.push(textoAmigo.value);
    ///Lista con nombres ingresados debajo de campo de texto
    ulListaAmigos.innerHTML += `<li>${textoAmigo.value}</li>`;
    textoAmigo.value = '';
}


//Al hacer click en "Sortear amigo" seleccionará nombre aleatorio de la lista
function sortearAmigo() {
    const numeroRandom = Math.floor(Math.random() * listaAmigos.length);
    console.log(numeroRandom);
    const amigoSecreto = listaAmigos[numeroRandom];
    ulResultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;

}


