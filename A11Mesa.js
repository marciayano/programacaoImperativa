//== aplicacao ==
//Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
   /*a maior e a menor altura do grupo;
     a média de altura das mulheres;
     o número de homens.*/

let altura = [1.85, 1.6, 1.9, 1.65, 1.75, 1.8];
console.log(altura.sort(function(a,b){return a-b;}));

let alturaM = [1.55,1.65,1.6];
let soma = alturaM.reduce(function(acumulador,numero){return(acumulador+numero);});
let media = (soma / 3);
console.log(media);

//Exercicios mesa:
//A maior e a menor altura do grupo
let alturas = [1.63,1.55,1.91,1.80,1.72,1.64,1.48,1.72,1.77,1.66];
let sexo    = ['F','F','M','F','M','M','F','M','F','M'];

let maiorAltura = Math.max(...alturas);
console.log(`A pessoa mais alta tem ${maiorAltura}m de altura `);
let menorAltura = Math.min(...alturas);
console.log(`A pessoa mais baixa tem ${menorAltura}m de altura `);

//A média de altura das mulheres
function mediaAltura (arraySexo,arrayAlturas) {
    let acumulador = 0;
    let somaAltura = 0;
    for(let i=0; i<arrayAlturas.length; i++){
        if(arraySexo[i]=='F'){
            somaAltura += arrayAlturas[i];
            acumulador ++;   }              }
    return (somaAltura/acumulador).toFixed(2); } //.toFixed == casas decimais
console.log(`A media de altura das mulheres = ${mediaAltura(sexo,altura)} m`);

//O número de homens
let numerosHomens = sexo.filter ( num => num=='M');
console.log(`O numero de homens = ${numerosHomens.length}`);

//============= II =============
// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
let idades = [31,42,18,23,35,27,20,33,45,67];
let opniao = [3,1,2,3,2,1,3,3,2,1];

//A média das idades das pessoas que responderam ótimo;
let somaOtimo = 0;
let contador = 0;
idades.forEach(
    function(idade,i){
        if(opniao[i]==3) {
          somaOtimo += idade; 
          contador ++;   }  }  );
console.log(`A media das idades das pessoas (nota ótimo) = ${somaOtimo/contador}`);

//A quantidade de pessoas que responderam regular;
var qtd = opniao.reduce((total, valor) => { if (valor === 1) { return total + 1; } return total; }, 0); // 0 é o "total" inicial
console.log(`A quantidade de pessoas que responderam regular = ${qtd}`);

// A porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
let numeroBom = opniao.reduce((total, valor) => { if (valor === 2) { return total + 1; } return total; }, 0);
console.log(`A porcentagem de pessoas que responderam bom entre todos os espectadores analisados = ${(numeroBom*100)/opniao.length}%`);