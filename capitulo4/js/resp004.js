/* d) Elaborar um programa que leia um número e exiba estrelas na página, em linhas diferentes. A cada nova linha, o número de estrelas deve ser incrementado. */
function fabricarEstrelas() {
  //cria referência aos elementos html manipulados pela function
  var inNumero = document.getElementById('inNumero');
  var outEstrelas = document.getElementById('outEstrelas');

  //obtém o conteúdo do campo inNumero
  var numero = Number(inNumero.value);

  //verifica se o campo inNumero foi preenchido corretamente
  if (numero == 0 || numero == '' || isNaN(numero)) {
    alert('Preencha o número de linhas');
    inNumero.focus();
    return;
  }

  //cria a variável que irá compor o laço de repetição
  var estrelas = '';

  //inicia o laço de repetição 'for'
  //o 1º 'for' é usado para icrementar o nº de linhas
  //o 2º 'for' é usado para icrementar o nº de '*' a cada linha
  for (var i = 1; i <= numero; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas += '*';
    }
    estrelas += '\n';
  }
  outEstrelas.textContent = estrelas;
}

//referencia o elemento btCriar e associa a function ao evento click

var btCriar = document.getElementById('btCriar');
btCriar.addEventListener('click', fabricarEstrelas);
