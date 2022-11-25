//Cria referência aos elementos manipulados pela function
function calcularPeso() {
  var inNome = document.getElementById('inNome');
  var rbMasculino = document.getElementById('rbMasculino');
  var rbFeminino = document.getElementById('rbFeminino');
  var rbOutros = document.getElementById('rbOutros');
  var inAltura = document.getElementById('inAltura');
  var outResultado = document.getElementById('outResultado');

  //obtém o conteúdo dos campos de edição da página
  var nome = inNome.value;
  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var outros = rbOutros.checked;
  var altura = Number(inAltura.value);

  //verifica se o nome foi preenchido e se o gênero foi selecionado através de operadores lógicos 'true' e 'false'
  if (
    nome == '' ||
    (masculino == false && feminino == false && outros == false)
  ) {
    alert('Por favor, informe o nome e selecione o gênero...');
    inNome.focus(); //posiciona (joga foco) no campo de edição inNome
    return;
  }

  //se altura vazio (0) ou NaN:
  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente...');
    inAltura.focus();
    return;
  }

  //se masculino (significa se masculino == true)
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2); //Math.pow elevar ao quadrado
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  //apresenta a resposta (altera o conteúdo da linha outResultado)
  outResultado.textContent =
    nome + ': Seu peso ideal é ' + peso.toFixed(1) + ' kg';
}

//cria a referência ao elemento btCalcular e registra evento associado a calcularPeso
var btResultado = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularPeso);

//função para limpar os campos
function limparCampos() {
  //limpa tos conteúdos dos elementos
  document.getElementById('inNome').value = '';
  document.getElementById('rbMasculino').checked = false;
  document.getElementById('rbFeminino').checked = false;
  document.getElementById('rbOutros').checked = false;
  document.getElementById('inAltura').value = '';
  document.getElementById('outResposta').textContent = '';
  //posiciona (joga foco) no elemento inNome
  document.getElementById('idNome').focus();
}

var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparCampos);

/*Outra forma de limpar os campos de edição é executando uma chamada ao método location.reload() que regarrega a página atual */
/* function limparCampos() {
    location.reload();
    document.getElementById('btLimpar'); 
}

var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparCampos);
*/
