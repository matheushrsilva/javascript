/**app flex
 *  @author Matheus Henrique Rodrigues da Silva
 * 
 */

let etanol, gasolina

function calcular() {
    etanol = number(fmrFlex.txtEtanol.value.replace(",","."))
    gasolina = number(fmrFlex.txtGasolina.value.replace("," ,"."))
    //console.log(etanol)
    //console.log(gasolina)
    if(etanol <0.7 * gasolina){
       document.getElementById("status").src = "./img/etanol.png"

    } else {
        document.getElementById("status").src = "./img/gasolina.png"


    }
    
}
function Limpar(){
    document.getElementById("status").src = "./img/flex.png"
}