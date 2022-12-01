function verificaVel() {
  var inVelPermitida = document.getElementById('inVelPermitida');
  var inVelCondutor = document.getElementById('inVelCondutor');
  var outSituacao = document.getElementById('outSituacao');

  var velPermitida = Number(inVelPermitida.value);
  var velCondutor = Number(inVelCondutor.value);

  if (velCondutor <= velPermitida) {
    outSituacao.textContent = 'Situação: Sem Multa';
  } else {
    var multa = velPermitida * 1.2;
    if (velCondutor <= multa) {
      outSituacao.textContent = 'Situação: Multa Leve';
    } else {
      outSituacao.textContent = 'Situação: Multa Grave';
    }
  }
}
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificaVel);
