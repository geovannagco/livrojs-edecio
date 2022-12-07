/* b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
da fazenda. Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal). */
function preverChinchilas() {
  //criar referência com os elementos html manipulados na function
  var inChinchilas = document.getElementById('inChinchilas');
  var inAnos = document.getElementById('inAnos');
  var outPrevisao = document.getElementById('outPrevisao');

  //obtem o conteúdo dos campos preenchidos
  var chinchilas = Number(inChinchilas.value);
  var anos = Number(inAnos.value);

  //valida se os dados foram preenchidos corretamente
  if (
    chinchilas < 2 ||
    chinchilas == '' ||
    isNaN(chinchilas) ||
    anos == 0 ||
    isNaN(anos)
  ) {
    alert('Preencha os dados corretamente');
    inChinchilas.focus();
    return;
  }

  //cria uma variável do tipo String, que irá concaternar a resposta
  var resposta = '';
  var total = chinchilas;

  //cria o laço de repetição 'for'
  for (var i = 1; i <= anos; i++) {
    total = total * 3;
    resposta = resposta + i + 'º Ano: ' + total + ' Chinchilas\n';
  }
  outPrevisao.textContent = resposta;
}

//referencia o elemento btMostrar e cria o evento 'click'
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', preverChinchilas);
