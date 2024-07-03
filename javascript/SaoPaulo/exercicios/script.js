/**
 * script Sao paulo Cartas
 * @author matheus hentique
 */

function sortearCarta(){
     
    let pokemon = ["nestor","aborleda","rafinha","igor vinicius", "jandrei"]
    
    let carta = pokemon[Math.floor(Math.random() * 4)]
    let meioCarta = document.getElementById('centro')
    
    meioCarta.innerHTML = `<img src="./img/${carta}.png">`
}