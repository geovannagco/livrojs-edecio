/*a) Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta, de acordo com o número informado. Utilize o “*” para separar os nomes. A Figura 4.15 ilustra a execução do programa.*/
function repeteFruta() {
  //cria referência aos elementos html manipulados pela function
  var inFruta = document.getElementById('inFruta');
  var inNumero = document.getElementById('inNumero');
  var outResposta = document.getElementById('outResposta');

  //armazenar o conteúdo das variáveis
  var fruta = inFruta.value;
  var numero = Number(inNumero.value);

  //variável que vai acumular o número repetido das frutas
  var resposta = '';

  //laço de repetição de 1 até o número informado
  for (var i = 1; i <= numero; i++) {
    resposta = resposta + fruta + '*';
  }
  outResposta.textContent = resposta + fruta;
}

//referencia o elemento e associa function ao evento click
var btRepetir = document.getElementById('btRepetir');
btRepetir.addEventListener('click', repeteFruta);
