/*Elaborar um programa que leia o produto e o preço. Retornar um alerta de promoção na comprar de três und. e o valor do desconto do terceiro produto*/

function alertaPromocao() {
  //criar referência com o documento
  var inProduto = document.getElementById('inProduto');
  var inPreco = document.getElementById('inPreco');
  var outAlerta = document.getElementById('outAlerta');
  var outPromocao = document.getElementById('outPromocao');

  //armazenar o valor das entradas
  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  //calcular o valor de 3 produtos e a promoção
  var unidade = preco * 0.5;
  var promocao = preco * 3 - unidade;

  //alterar parágrafos de retorno
  outAlerta.textContent =
    produto + ' = Promoção: Leve 3 por R$' + promocao.toFixed(2);
  outPromocao.textContent =
    'O 3º produto custa apenas R$: ' + unidade.toFixed(2);
}

//referenciar o botão
var btPromocao = document.getElementById('btPromocao');
//Criar evento que chamará a função
btPromocao.addEventListener('click', alertaPromocao);
