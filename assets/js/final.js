var listas = [];
function Lista(id,titulo){
  this.titulo = titulo,
  this.id = id,
  this.pendientes = []
}

function crearLista(){
  var titulo = document.getElementById("titulo");
  var id = Date.now();
  var lista = new Lista (id,titulo.value);
  listas.push(lista);
  imprimirNuevaLista(lista);
}

function imprimirNuevaLista(lista){
  var contenedorListas = document.getElementById('contenedorListas');
  var section = document.createElement('section');
  var pendiente = document.createElement('input');
  var botonPendiente = document.createElement('input');
  var ul = document.createElement('ul');
  ul.innerText = lista.titulo;
  pendiente.type = 'text';

  botonPendiente.type = "submit";
  botonPendiente.value = "Crear Pendiente";
  botonPendiente.setAttribute('data-lista-id',lista.id);
  botonPendiente.onClick =

  section.id = lista.id;


  section.appendChild(ul);
  contenedorListas.appendChild(section);
  contenedorListas.appendChild(pendiente);
  contenedorListas.appendChild(botonPendiente);

}
