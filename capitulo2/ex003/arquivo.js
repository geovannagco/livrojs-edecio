/*Elaborar um programa para uma revenda de veículos que deve retornar o modelo, a entrada e o saldo em 12x*/
function mostrarPromocao() {
  //cria referência aos elementos da página
  var inVeiculo = document.getElementById('inVeiculo');
  var inPreco = document.getElementById('inPreco');
  var outVeiculo = document.getElementById('outVeiculo');
  var outEntrada = document.getElementById('outEntrada');
  var outSaldo = document.getElementById('outSaldo');

  //obtém conteúdos dos campos de entrada
  var veiculo = inVeiculo.value;
  var preco = inPreco.value;

  //calcular o valor da entrada arredondado para baixo
  var entrada = Math.floor(preco / 2);
  //calcular o saldo dividido em 12x
  var saldo = Math.floor(entrada / 12);

  //altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = 'Promoção: ' + veiculo;
  outEntrada.textContent = 'Entrada de R$: ' + entrada.toFixed(2);
  outSaldo.textContent = '+ 12x de R$: ' + saldo.toFixed(2);
}

//cria uma referência do elemento btPromocao
var btPromocao = document.getElementById('btPromocao');
//registra um evento associado ao botão, para carregar uma função
btPromocao.addEventListener('click', mostrarPromocao);
