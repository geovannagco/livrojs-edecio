function mostrarOla() {
  var nome = document.getElementById('nome').value;
  document.getElementById('resposta').innerHTML = 'Olá, ' + nome;
}
var mostrar = document.getElementById('mostrar');
mostrar.onclick = mostrarOla;
/*No arquivo Js, as funções devem estar no início do arquivo.*/
