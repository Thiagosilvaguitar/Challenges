/*Loop Array - Frutas
Um sacolão montou uma lista com as frutas que eles vendem, e de acordo com a fruta que o usuário busca eles querem informar se existe a fruta na lista ou não! 

var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]

Você deverá criar um loop que verifique se a fruta contida na variável busca existe na lista de frutas do sacolão.
Se existe basta exibir uma mensagem, “Sim, temos a fruta banana disponível”.
Use a variável busca para exibir o nome da fruta nessa mensagem de forma dinâmica.  */

let listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
let busca = "Cajá"


  //for(let i = 0; i < listaDeFrutas.length; i++){}

 //usar um if para validar se o valor atual da array é igual a busca, caso for, exibimos a mensagem.

    if(listaDeFrutas.indexOf(busca) !== -1){  
   console.log("Sim, temos a fruta " + busca +" disponível")
 } 
 
 else {
 console.log("Não temos a fruta " + busca +" disponível")
 }
