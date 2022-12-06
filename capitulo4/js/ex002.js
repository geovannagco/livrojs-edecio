function listarNumeros() {
  //cria referência aos elementos que a function irá manipular
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  //armazena o conteúdo da variável
  var numero = Number(inNumero.value);

  //verifica a validade do número
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido!');
    inNumero.focus();
    return;
  }

  //inicializa variável resposta
  var resposta = 'Entre ' + numero + ' e 1: ';

  //cria um for decrescente
  //o comando for é interessante de ser utilizado quando soubermos o número de repetições que devem ocorrer  no programa.
  for (var i = numero; i > 0; i = i - 1) {
    //a variável de controle i é inicializada com o valor da variável número
    //a condição é válidade enquanto i for maior que 0
    //a variável i é decrementada em 1 (poderia ser abreviada por i--)
    //resposta vai acumulando números (e vírgulas)
    /* Solução para a virgula 'sobrando' (não recomendada para esse caso, uma vez que o número de comparações que o programa precisará fazer é extenso): if (i == 1) {
      resposta = resposta + i + '.';
    } else {
      resposta = resposta + i + ', ';
    }*/
    resposta = resposta + i + ', ';
  }
  resposta = resposta + i + '.';

  //altera o conteúdo de outResposta
  outResposta.textContent = resposta;
}

var btDecrescer = document.getElementById('btDecrescer');

btDecrescer.addEventListener('click', listarNumeros);
