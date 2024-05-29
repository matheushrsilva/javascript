/**
 * assincronismo
 * async-await
 * @author MATHEUS henrique
 */
 
// importar biblioteca nativa(javascript) para trabalhar
 
const fs = require('fs')
 
//função para criar arquivo
async function criarArquivo() {
    let conteudo = "Professor José de assis \nExemplo de uso de recursos async - await"
    await gravarArquivo('teste.txt', conteudo)
}
 
async function gravarArquivo(path, conteudo){
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log("arquivo criado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

criarArquivo()
