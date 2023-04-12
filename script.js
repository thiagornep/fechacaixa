function verificar() {
  window.alert("Testando a conexão....")
  //recebendo as informações do input
  let dinheiro = document.getElementById("dinheiroemmaos")
  dinheiro = Number(dinheiro.value)
  //recebendo as informações do input
  let ifood = document.getElementById("ifoodemmaos")
  ifood = Number(ifood.value)
  //recebendo as informações do input
  let pix = document.getElementById("pixemmaos")
  pix = Number(pix.value)
  //recebendo as informações do input
  let sumup = document.getElementById("sumupemmaos")
  sumup = Number(sumup.value)
  //recebendo as informações do input
  let pagseguro = document.getElementById("pagseguroemmaos")
  pagseguro = Number(pagseguro.value)
  //recebendo as informações do input
  let ninenine = document.getElementById("nineemmaos")
  ninenine = Number(nineemmaos.value)

  //Variável que soma VALORES CHECADOS
  let soma = dinheiro + ifood + pix + sumup + pagseguro + ninenine
  //console.log de teste de input
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
