function verificar() {
  window.alert("Testando a conexão....")
  var dinheiropraformatar = document.getElementById("dinheiroemmaos")
  var dinheiro = parseInt(dinheiropraformatar.value)
  var ifoodformatar = document.getElementById("ifoodemmaos")
  var ifood = parseInt(ifoodformatar.value)
  var pixformatar = document.getElementById("pixemmaos")
  var pix = parseInt(pixformatar.value)
  var sumupformatar = document.getElementById("dinheiroemmaos")
  var sumup = parseInt(sumupformatar.value)
  var pagseguroformatar = document.getElementById("dinheiroemmaos")
  var pagseguro = parseInt(pagseguroformatar.value)
  var ninefoodformatar = document.getElementById("dinheiroemmaos")
  var ninefood = parseInt(ninefoodformatar.value)

  var soma =
    parseInt(dinheiropraformatar.value) +
    parseInt(ifoodformatar.value) +
    parseInt(pixformatar.value) +
    parseInt(sumupformatar.value) +
    parseInt(pagseguroformatar.value) +
    parseInt(ninefoodformatar.value)

  res.innerHTML = `Detectamos anos R$  ${soma} .`
}
