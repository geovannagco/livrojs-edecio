function preencherEstrelas() {
  //cria referência aos elementos html manipulados pela function
  var inNumero = document.getElementById('inNumero');
  var outEspacos = document.getElementById('outEspacos');

  //obtem o conteúdo do campo inNumero
  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert('Número Inválido');
    inNumero.focus();
    return;
  }

  //declara a variável que irá concatenar as estrelas/traços
  var estrelas = '';
  //cria um laço de repetição de 1 até o número informado
  for (var i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + '*'; //na posição ímpar do i: *
    } else {
      estrelas = estrelas + '-'; //na posição par: -
    }
  }
  outEspacos.textContent = estrelas; //exibe as estrelas
}

var btPreencher = document.getElementById('btPreencher');
btPreencher.addEventListener('click', preencherEstrelas);
