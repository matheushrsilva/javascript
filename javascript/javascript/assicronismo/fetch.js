/**
 * @author m,atheus henrique rodrigues da silva
 */
const read = require(`readline-sync`)
console.clear()
console.log("VIA CEP")
let cep = read.question("digite o cep")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
//apoio ao entendimento logica
//console.log(urlAPI)
//uso de promise para recuperar os dados do web service
fetch(urlAPI)
    .then((resposa) => {
   return resposa.json
    })
    .then((dados) => {
     console.log(dados.lougradouro)
     console.log(dados.bairro)
     consol.log(dados.localidade)
     consol.log(dados.uf)
    })
    .catch(() => {
        console.log(`erro ao obter o endereço: ${error}`)
    })
