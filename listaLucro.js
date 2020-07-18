/*Loop com Array - Lucros
Uma empresa separou em uma lista, os valores dos lucros mensais. Com isso você terá no código um array com o seguinte nome: listaDeLucro contendo em cada posição o valor de recebido de cada mês!

var listaDeLucro = [100, 30, 300, -10, 600, 10]


Seu trabalho será criar um loop que calcule o valor total baseado nessa lista, e coloque o valor em uma variável já existente no código chamada: lucroTotal*/

let listaDeLucro = [100, 30, 300, -10, 600, 10]
let lucroTotal = 0;

for( i = 0; i < listaDeLucro.length; i++ ){
lucroTotal = lucroTotal + listaDeLucro[i]
}
console.log(lucroTotal)

//cada vez que o loop é executado o valor de [i] é somado a variavel lucro total