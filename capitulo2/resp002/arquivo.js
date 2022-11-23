/*Elaborar um programa que leia o valor de 15 min de uso em uma lan house e o tempo em minutos de uso do cliente. Retornar o valor a ser pago.*/
function mostraValor() {
  //cria referência com os elementos do documento
  var inPreco = document.getElementById('inPreco');
  var inTempo = document.getElementById('inTempo');
  var outPagar = document.getElementById('outPagar');

  //armazenar os conteúdos de entrada
  var preco = Number(inPreco.value);
  var tempo = Number(inTempo.value);

  //calcular valor a ser pago
  var pagar = Math.ceil(tempo / 15) * preco;

  //alterar os parágrafos de retorno
  outPagar.textContent = 'Valor a Pagar R$: ' + pagar.toFixed(2);
}

//criar referência ao elemento btPagar
var btPagar = document.getElementById('btPagar');
//registar um evento associado ao bt para carregar a função
btPagar.addEventListener('click', mostraValor);
