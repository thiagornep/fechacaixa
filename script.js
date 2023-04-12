function verificar() {
  window.alert("Testando a conexão....")

  let dinheiro = document.getElementById("dinheiroemmaos")
  dinheiro = Number(dinheiro.value)

  let ifood = document.getElementById("ifoodemmaos")
  ifood = Number(ifood.value)

  let pix = document.getElementById("pixemmaos")
  pix = Number(pix.value)

  let sumup = document.getElementById("sumupemmaos")
  sumup = Number(sumup.value)

  let pagseguro = document.getElementById("pagseguroemmaos")
  pagseguro = Number(pagseguro.value)

  let ninenine = document.getElementById("nineemmaos")
  ninenine = Number(nineemmaos.value)

  let soma = dinheiro + ifood + pix + sumup + pagseguro + ninenine 



  console.log(dinheiro)
  console.log(ifood)
  console.log(pix)
  console.log(sumup)
  console.log(pagseguro)
  console.log(ninenine)
  console.log(soma)

  // var soma = parseFloat(dinheiro) + parseFloat(ifood)
  //soma = soma.toFixed(2)

  res.innerHTML = `Detectamos essa quantia em Dinheiro: R$  ${soma} .`
}
