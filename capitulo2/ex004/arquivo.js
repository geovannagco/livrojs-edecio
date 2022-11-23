/* Criar um programa que calcule o valor a ser pago por um cliente em um restaurante.*/
function mostrarPreco() {
  //criar referência aos elementos da página
  var inQuilo = document.getElementById('inQuilo');
  var inConsumo = document.getElementById('inConsumo');
  var outPreco = document.getElementById('outPreco');

  //obtém os conteúdos dos campos de entrada
  var quilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);

  //calcular o valor a ser pago.
  //converter grama para kg - grama/1000
  var preco = consumo * 0.001 * quilo;

  //altera os conteúdos dos parágrafos de retorno
  outPreco.textContent = 'Valor a pagar R$: ' + preco.toFixed(2);
}

//cria uma referência do elemento btPreco
var btPreco = document.getElementById('btPreco');
//registra um evento associado ao botão para carregar uma função
btPreco.addEventListener('click', mostrarPreco);
