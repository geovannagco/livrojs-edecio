/*Observação: segundo novos conceitos matemáticos, o número 1 não deve mais ser considerado número primo. Em razão disso, o teste para verficar se o número é primo, no programa, contém apena a comparação if(numDivisores ==2)*/
function verificarPrimo() {
  //cria referência aos elementos da página
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  //obtem o conteúdo do número informado
  var num = Number(inNumero.value);

  //verifica se preencheu corretamente o campo inNumero
  if (num == 0 || isNaN(num)) {
    alert('Número Inválido');
    inNumero.focus();
    return;
  }

  //Declara e inicializa o contador
  var numDivisores = 0;

  /* Uma forma de criar o laço
  for (var i = 1; i <= num; i++) {
    //verifica se i (1, 2, 3, 4...) é divisor do num
    if (num % i == 0) {
      //se é incrementa contador
      numDivisores++;
    }
  }*/

  //Para melhorar o desempenho do algoritmo, pode-se utilizar uma variável com um comportamento semelhante ao de um contador. A variável de controle recebe o valor inicial 0. E, caso uma condição no lado seja verdadeira, troca o valor dessa variável para 1 e forçamos a saída do loop (com o comando break). Essas variávems agem como um flag (sinalizadora ou bandeira) e indicam a presença ou ausência de algo no conjunto de dados em análise. A variável sinalizadora também poderia receber os valores lógicos true ou false.

  //declara e inicializa a variável tipo flag
  var temDivisor = 0;

  //percorre todos os possíveis divisores do número
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1; //muda o flag
      break; //sai da repetição
    }
  }

  //se possui apenas 2 divisores, é primo
  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + ': É primo!';
  } else {
    outResposta.textContent = num + ': Não é primo!';
  }
}

//referencia o elemento e após associa function ao evento click
var btVerificarPrimo = document.getElementById('btVerificarPrimo');
btVerificarPrimo.addEventListener('click', verificarPrimo);
