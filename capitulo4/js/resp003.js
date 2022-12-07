/* c) Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.*/
function verificaPerfeito() {
  //referenciar os elementos html
  var inNumero = document.getElementById('inNumero');
  var outDivisores = document.getElementById('outDivisores');
  var outPerfeito = document.getElementById('outPerfeito');

  //obter o conteúdo de inNumero
  var numero = Number(inNumero.value);

  //verifica se foi preenchido corretamente
  if (numero == 0 || numero == '' || isNaN(numero)) {
    alert('Preencha corretamente...');
    inNumero.focus();
    return;
  }

  //cria as variaveis que serão usadas no 'for'
  //como 1 é um divisor universal, começa com ele
  var divisores = 'Divisores do ' + numero + ': 1';
  var soma = 1;

  //inicia o laço de repetição
  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ', ' + i; //vírgula + i (evita a última vírgula)
      soma = soma + i;
    }
  }
  divisores = divisores + ' (Soma: ' + soma + ')';

  //altera o conteúdo de outDivisores
  outDivisores.textContent = divisores;

  //verifica se é perfeito e exibe na tag 'outPerfeito'
  if (numero == soma) {
    outPerfeito.textContent = numero + ': É um número perfeito';
  } else {
    outPerfeito.textContent = numero + ': Não é um número perfeito';
  }
}

//referencia o btVerificar e criar o evento 'click'
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificaPerfeito);
