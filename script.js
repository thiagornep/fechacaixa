function verificar() {
  window.alert("Testando a conexão....")
  var dinheiropraformatar = document.getElementById("dinheiroemmaos")
  var dinheiro = parseFloat(dinheiropraformatar.value)
  var ifoodformatar = document.getElementById("ifoodemmaos")
  var ifood = parseFloat(ifoodformatar.value)
  var pixformatar = document.getElementById("pixemmaos")
  var pix = parseFloat(pixformatar.value)
  var sumupformatar = document.getElementById("dinheiroemmaos")
  var sumup = parseFloat(sumupformatar.value)
  var pagseguroformatar = document.getElementById("dinheiroemmaos")
  var pagseguro = parseFloat(pagseguroformatar.value)
  var ninefoodformatar = document.getElementById("dinheiroemmaos")
  var ninefood = parseFloat(ninefoodformatar.value)

  var soma =
    parseFloat(dinheiropraformatar.value) +
    parseFloat(ifoodformatar.value) +
    parseFloat(pixformatar.value) +
    parseFloat(sumupformatar.value) +
    parseFloat(pagseguroformatar.value) +
    parseFloat(ninefoodformatar.value)
  res.innerHTML = `Detectamos essa quantia em Dinheiro: R$  ${soma} .`
  
}
