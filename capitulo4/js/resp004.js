/*d) Elaborar um programa que leia um número e exiba estrelas na página, em linhas diferentes. A cada nova linha, o número de estrelas deve ser incrementado. Observação: caso você informe um valor alto, as linhas podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda da página. Para evitar que isso ocorra, crie uma nova classe no arquivo estilos.css, que de½na uma ¾utuação à direita para essa imagem. A Figura 4.18 ilustra uma execução do programa desse exercício. */
function fabricarEstrelas() {
  //cria referência aos elementos html
  var inNumero = document.getElementById('inNumero');
  var outEstrelas = document.getElementById('outEstrelas');

  //converte o conteúdo do campo inNumero
  var numero = Number(inNumero.value);

  //verifica se o campo inNumero foi preenchido corretamente
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido');
    inNumero.focus();
    return;
  }

  //cria uma variável do tipo string, que irá concatenar a resposta
  var resposta = '';

  //cria um laço de repetição
  for (var i = 1; i <= numero; i++) {
    //a variávl resposta vai acumulando os novos conteúdos
    resposta = resposta + '* \n';
  }

  //o conteúdo da tag pre é alterado para exibição das linhas
  outEstrelas.textContent = resposta;
}

//cria referência ao botão e após associa function ao evento click
var btCriar = document.getElementById('btCriar');
btCriar.addEventListener('click', fabricarEstrelas);
