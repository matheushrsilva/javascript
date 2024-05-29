
/**
 *  Estrutura de dados
 * array (vetor e matriz)
 * @author Matheus henrique rodrigues da silva 
 */
 
let alunosEM1 = ["vitor", "maria", "agatha","mateus", "taina", "nicolas"]
console.log(typeof alunosEM1)
// determinando o tamanho de um array
console.log(alunosEM1.length)
// exibindo os dados de uma array (CRUD create)
console.log(alunosEM1[1])
console.log(alunosEM1)
console.table(alunosEM1)
// adicionando dados ao array (CRUD Read)
alunosEM1.push("jorge")
console.table(alunosEM1)
// alterando um dado do array (CRUD update)
alunosEM1[0] = "victor"
console.table(alunosEM1)
// axcluindo um dado do array
alunosEM1.pop() // exclui o ultimo registro
console.table(alunosEM1)
delete alunosEM1[1]// exclui o registro com o indice
console.table(alunosEM1)
// percorrendio um array
let notas = [3,8,5,9,2]
console.log(notas)
console.table(notas)
//laço for
for(let i = 0; i<notas.length; i++) {
    console.log(notas[1])
   
}
//forEach
notas.forEach((n) => {
    console.log(n)

})

//map()
//exemplo 1: add 1 ponto as notas
let notasAtualizado = notasmap((na) =>{
    return na =1

})
console.log(notas)
console.log(notasAtualizado)




let notasConvertida = notas.map((nc) =>)
        if(nc < 5){
            return("NA")
        } else if (nc > 7){
            return("A")
        }else{
            return("PA")
        }
        
   
        
 