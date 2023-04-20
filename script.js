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
  //console.log de teste de input,
  console.log(dinheiro)
  console.log(ifood)
  console.log(pix)
  console.log(sumup)
  console.log(pagseguro)
  console.log(ninenine)
  console.log(soma)

  let caixa01 = document.getElementById("valorcaixa01")
  caixa01 = Number(caixa01.value)
  let caixa02 = document.getElementById("valorcaixa02")
  caixa02 = Number(caixa02.value)
  let somadecaixa = caixa01 + caixa02

  let taxamotoboy = document.getElementById("valorpagomotoboy")
  taxamotoboy = Number(taxamotoboy.value)
  let despesaextra = document.getElementById("despesasextras")
  despesaextra = Number(despesaextra.value)
  let somadespesas = taxamotoboy + despesaextra

  let total = somadespesas + soma
  let divergecia = total - somadecaixa

  rescaixa.innerHTML = `Valor dos Caixas(SISTEMA CONSUMER): R$ ${somadecaixa} .`
  resdeclarado.innerHTML = `Valor declarado: R$  ${total} .`
  resdespesas.innerHTML = `Total de despesas: R$  ${somadespesas} .`
  resdespesas.innerHTML = `divergencia R$  ${divergecia} .`

  resultadofinal.innerHTML = `O SEU CAIXA FOI FINALIZADO COM SALDO: +/- R$  ${soma} .`
}
