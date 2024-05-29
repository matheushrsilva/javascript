/**Calculadora IMC
 * @author Matheus henrique rodrigues da silva
 */
let peso
let altura
let  imc

function calcular() {   
    peso = Number(frmIMC.txtPeso.value)
    altura = Number(frmIMC.txtAltura.value)
    imc = peso / (altura * altura)
    frmIMC.txtIMC.value = `${imc.toFixed(2)}`
    
}
