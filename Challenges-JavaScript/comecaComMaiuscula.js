/*Usando funções - Começa com Maiúscula
O código abaixo já tem a função comecaComMaiuscula(palavra) definida.
 Essa função retorna true caso a palavra passada no parâmetro seja iniciada por uma letra maiúscula e false caso contrário.
 Use um for para imprimir para cada palavra no array de palavras as seguintes frases: “Começa com maiúscula”
caso a palavra comece com maiúscula e “Não começa com maiúscula” caso contrário.*/

function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra)
 }
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"]
 
 for(i = 0; i < palavras.length; i++){
 
 var maiuscula = comecaComMaiuscula(palavras[i])
 
   if(maiuscula == true){
 
      console.log("A palavra " + palavras[i] + " Começa com maiuscula")
 
      continue
 
   }else{
 
      console.log("A palavra " +palavras[i] + " Não começa com maiuscula")
 
   }
 
 }
 