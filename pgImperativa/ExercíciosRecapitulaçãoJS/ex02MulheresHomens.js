// Total de homens pagantes:
let homem = 275;
// Total de mulheres pagantes:
let mulher = 359;
// "Valor Ingresso Homens: R$"
let valor = 20;
// Valor Ingresso Mulheres: R$
let valor1 = 17;

// Cálculo
let publico = mulher + homem;
let total1 = (homem * valor);
let total2 = (mulher * valor1);
let soma = (total1 + total2);

console.log("TOTAL DE MULHERES NA FESTA: " + mulher);
console.log("TOTAL DE HOMENS NA FESTA: " + homem);
console.log("TOTAL de PÚBLICO NA FESTA: " + publico + " PESSOAS.");

console.log("SOMA DE INGRESSOS: " + soma + " reais.");