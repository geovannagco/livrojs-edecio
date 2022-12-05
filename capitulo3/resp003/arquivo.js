function Depositar() {
  var inValor = document.getElementById('inValor');
  var outTempo = document.getElementById('outTempo');
  var outTroco = document.getElementById('outTroco');

  var valor = Number(inValor.value);

  //Valores do Parquímetro
  //Tempo 30min = 1.00
  //Tempo 60min = 1.75
  //Tempo 120min = 3.00

  if (valor < 1) {
    outTempo.textContent = 'Valor Insuficiente';
  }

  if (valor == 1 || valor <= 1.75) {
    if (valor == 1) {
      outTempo.textContent = 'Tempo: 30min.';
    } else if (valor > 1 || valor <= 1.75) {
      var troco = valor - 1;
      outTempo.textContent = 'Tempo: 30min,';
      outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
    } 
  }

  if (valor == 1)
}
