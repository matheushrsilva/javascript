
/**
 * Tipagem dinamica
 * constantes e variaveis
 */
 
console.clear()
console.log("STRINGS_______________")
let nome ="thiago!"
console.log(nome)
console.log(typeof(nome))
nome = "Thiago "
console.log(nome)
console.log(nome.replace("Thiaguinho" , "Teaga"))
//CONCATENAÇAO
console.log("Professor: " + nome)
console.log(`Professor: ${nome}`)
 
 
console.log("NUMBERS_______________")
let peso = 62
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC:  ${imc.toFixed(1)}`)
 
console.log("BOOLEANS_______________")
let sw = true
console.log(typeof(sw))
console.log(`CHAVE: ${sw}`)
 
//atençao !!!
console.log(10 / 0)
console.log("3" + 2)// contatena
console.log("3" - 2)// faz a conta
console.log("3" * 2)// faz a conta
console.log("3" / 2)// faz a conta
console.log("3x" - 2)//NaN(Note a Number)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)