/*Loop com Array - Saldo negativo
Uma empresa mandou uma lista contendo os números mensais de tudo o que ela faturou,
 e nosso trabalho é ajudá-los a criar um relatório que exiba em quantos meses eles tiveram o saldo negativo.


let listaDeGanhos = [10, 30, -10, -5, -1, 40]

Com base no array acima, que está disponível no código,
 faça um loop que verifique quantos meses tiveram valores negativos e armazene a contagem uma variável chamada totalNegativos que também está disponível no código.*/

 

let listaDeGanhos = [10, 30, -10, -5, -1, 40]
let totalNegativos = 0

for(let i = 0; i < listaDeGanhos.length; i++){
  if(listaDeGanhos[i] < 0) //contagem validando se cada número é um negativo ou não!
 totalNegativos++
}

console.log(totalNegativos)
