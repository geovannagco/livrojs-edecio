function mostrarTabuada() {
  //cria referência aos elementos da página
  var inNumero = document.getElementById('inNumero');
  var outTabuada = document.getElementById('outTabuada');

  //armazena o conteúdo do campo inNumero
  var numero = Number(inNumero.value);
  //valida o número
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido!');
    inNumero.focus();
    return;
  }

  //cria uma variável do tipo String, que irá concaternar a resposta;
  var resposta = '';

  //cria um laço de repetição
  for (var i = 1; i <= 10; i++) {
    //a repetição inicia em 1 e prossegue verdadeira enquanto o valor da variável i é menor ou igual a 10
    //i++ ----> i = i+1
    //a variável vai acumulando novos conteúdos
    resposta = resposta + numero + ' x ' + i + ' = ' + numero * i + '\n'; //para gerar uma quebra de linha é utilizado o caractere especial '/n'
  }

  // o conteúdo da tag pre é alterado para exibir a tabuada do num
  outTabuada.textContent = resposta;
}

//cria referência ao botão e após associa function ao evento click
var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', mostrarTabuada);
