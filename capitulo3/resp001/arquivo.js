function verificaPar() {
  //cria referência com os elementos do documento
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  //armazena o conteúdo do input
  var numero = Number(inNumero.value);

  //verifica se é par ou não
  if (numero % 2 == 0) {
    outResposta.textContent = 'Resposta: ' + numero + ' é PAR';
  } else {
    outResposta.textContent = 'Resposta: ' + numero + ' é ÍMPAR';
  }
}

//cria referência ao elemento btVerificar e associa a function ao evento click
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificaPar);
