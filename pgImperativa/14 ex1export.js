/*let valor1=1;
let valor2=2;
let valor3=3;

function somarvalor(a,b){
  console.log(a+b);
  }

somarvalor(9,valor1);
somarvalor(valor1,valor2);
somarvalor("100",valor3);*/

/*--------REVISAO--------*/
/*1) Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros).*/
function consumoMedio(distancia,volume) {
  return (distancia / volume);
}
console.log(consumoMedio(200,10));

/*2) Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.*/
function valorArrecadado(homens,mulheres){
  return(homens*20 + mulheres*17);
}
console.log(valorArrecadado(19,23));


/*3) Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. 
Na rotina deve-se incluir as notas do 1º ao 4º Bimestre. Calcular a média aritmética entre elas, e exibir na tela.*/
let mediaNotas=(nota1,nota2,nota3,nota4)=>(nota1+nota2+nota3+nota4)/4;
console.log(mediaNotas(10,10,10,10));

function mediaNotas2(nota1,nota2,nota3,nota4) {
  return (nota1+nota2+nota3+nota4)/4;
  }
console.log(mediaNotas2(10,10,10,10));

/*4) Escreva um programa que o programador inclua o nome de 3 alimentos e então exiba o nome dos 3 separados por virgulas. Ex: maçã, pera, arroz.*/
function separadosVirgula(array) {
  return array.join(", ");
}

let frutas = ["maca","pera","mamao","jaca","melancia","uva"];

console.log(separadosVirgula(frutas));


/*5) Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.*/
function maiorDez(numero) {
  if(numero > 10){
    return ("esse numero eh maior que 10 =D");
  }
}
console.log(maiorDez(11));


/*6) Escrever um algoritmo que leia dois valores inteiros distintos e informe qual deles é o maior e também se são iguais.*/
function doisValores(numero1,numero2) {
  if(numero1>numero2){
    return numero1}
      else if (numero1==numero2){
        return "sao iguais!"}
        else{return numero2}
      };

console.log(doisValores(16,26));

/*7) Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.*/
function parImpar(numero) {
  return (numero % 2 == 0 ?"par":"impar")
}
console.log(parImpar(24));

/*let parOuImpar=(numero) => (numero%2==0?"par":"impar")*/

/*8) Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.*/
let numeroInteiro = (numero)=>((numero > 15 && numero < 25)||(numero > 45 && numero < 50)) ?"erro":"ok";
console.log(numeroInteiro(18));

/*let testeNumero = num =>{
  if ((num > 15 && num < 25) || (num > 45 && num < 50)){
      return "erro";
  }
}
console.log(testeNumero(18))*/


/*7) Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.*/

/*8) Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver 
entre 15 e 25 ou entre 45 e 50. */



/*9) Escreva um programa que exibe qualquer tabuada completa. O programa deve perguntar ao usuário qual tabuada ele deseja visualizar, que irá responder digitando um número de 1 a 10.*/
let tabuada = numero => {
  for (i=1; i<=10;  i++){
    console.log(`${i} x ${numero}= ${i*numero}`) //template strings
    // console.log(i+" x " + numero +" = " + i*numero)
  }
}
tabuada(7);
