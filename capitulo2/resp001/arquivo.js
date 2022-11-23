/*Elaborar um programa que lê o nome do medicamento e o preço. Retorna o preço com o desconto dos centavos*/

function mostrarPromocao() {
  //criar referênca aos elementos do documento html
  var inMedicamento = document.getElementById('inMedicamento');
  var inPreco = document.getElementById('inPreco');
  var outMedicamento = document.getElementById('outMedicamento');
  var outPromocao = document.getElementById('outPromocao');

  //obtém os conteúdos dos campos de entrada
  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  //calcular o preço da promoção
  var promocao = Math.floor(preco * 2);

  //altera o conteúdo dos parágrafos de retorno
  outMedicamento.textContent = 'Promoção de ' + medicamento;
  outPromocao.textContent = 'Leve 2 por apenas R$: ' + promocao.toFixed(2);
}

//cria referência do elemento btPromocao
var btPromocao = document.getElementById('btPromocao');
//registra um evento associado ao bt para carregar a função
btPromocao.addEventListener('click', mostrarPromocao);
