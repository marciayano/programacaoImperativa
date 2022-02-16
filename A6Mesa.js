//Ciclos e Repetições:
let filmes= ['star wars', 'totoro', 'rocky', 'pulp fiction','a vida é bela']
//1.passe todos os elementos para letras maiúsculas.
filmes = filmes.map(function(x){ return x.toUpperCase(); })
console.log(filmes);
function maiusculas (array){
  array[0] = array[0].toUpperCase()
  array[1] = array[1].toUpperCase()
  array[2] = array[2].toUpperCase()
  array[3] = array[3].toUpperCase()
  array[4] = array[4].toUpperCase()
  return array
}
console.log(maiusculas(filmes));

//2. Agora precisamos modificar a função passagemDeElemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.
let filmes2 = ['Star Wars', 'Totoro'];
let filmes3 = ['Pocahontas', 'Dalmatas', 'Mulan'];
function passagemDeElemento(array1, array2){
array1.push(array2[0],array2[1],array2[2])
console.log(array1);
}
passagemDeElemento(filmes2,filmes3);

// 3. A partir deste ponto, se você decidiu trabalhar em um arquivo diferente ao invés de modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação, o qual tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!
let infiltrado = filmes2.pop();
console.log(filmes2);

// 4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.
function comparar (conjunto1,conjunto2){
  for (let i = 0; i<conjunto1.length; i++){
    if (conjunto1==conjunto2) {
      console.log('filmes iguais')
    } else {
      console.log('filmes diferentes')
    }
  }
}
comparar (filmes2,filmes3);

console.log('==== Treinando ====');

function somarArray(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum;
}
console.log(somarArray([1,2,3]));
console.log(somarArray([8000,700,60,58]));

// Escreva um algoritmo para calcular o consumo médio de um automóvel (medido 
// em km/l), dado que são conhecidos a distância total percorrida e o volume de 
// combustível consumido para percorrê-la (medido em litros);
let km = 500;
let litros = 30;
let calculo = km / litros;
console.log(calculo.toFixed(3) + " km/l");

// Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um 
// programa que pergunta quantos homens e quantas mulheres participaram da festa e 
// calcula o valor total arrecadado com as entradas.
let valorHomem = 20;
let valorMulher = 17;
function valorArrecadado (homem, mulher){
  console.log("O valor arrecadado hoje foi de: " + ((homem * 20) + (mulher * 37)) + " reais");
}
valorArrecadado(20,37);

// Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. O 
// programa deve perguntar as notas da primeira e da segunda prova, calcular a média 
// aritmética entre elas, e exibir na tela
function media (nota1, nota2){
  console.log("A sua média é de: " + ((nota1 + nota2) / 2));
}
media(10,9.99);

// Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 
// 3 separados por virgulas. Ex: maçã, pera, banana
let nome1 = "Abacate";
let nome2 = "Abacaxi";
let nome3 = "Morango";
let nomes = ["Pera", "Melancia", "Uva"];
console.log(nome1 + ", " + nome2 + ", " + nome3);
console.log(nomes);
console.log(nomes.join(' - '));

// ---------------- Parte 2 ----------------------------

// Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10
let numero = 11;
if (numero > 10) {
    console.log("É maior que 10");
} else {
    console.log("Não é maior que 10");
}

// Escreva um algoritmo que leia dois valores inteiros e informe se os números são iguais.
let numero1 = 10;
let numero2 = 10;
if (numero1 == numero2) {
    console.log("Os dois número são iguais")
} else {
    console.log("Os números não são iguais")
}

// Solicite que o usuário digite um número. Informe então se este número é par ou  ímpar.
let number = 6;
if (number % 2 == 0) {
    console.log("É par")
} else {
    console.log("É impar")
}

// Crie um programa que receba um número inteiro e informa se este número é múltiplo de 10
let num = 20;
if (num % 10 == 0) {
    console.log("É multiplo de 10")
} else {
    console.log("Não é multiplo de 10")
}

// ---------------- Parte 3 ----------------------------

// Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50
let numInt = 20;
if (numInt >= 15 && numInt <= 25 || numInt >= 45 && numInt <= 50) {
    console.log("Erro");
}

// Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 80, menor que 25 ou igual a 40.

let maiorMenor = 60;
if (maiorMenor >= 80 || maiorMenor <= 25 || maiorMenor == 40) {
    console.log("Erro");
} else {
    console.log("Aprovado");
}

/* Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as 
medidas dos lados de um triângulo.
Exemplo: 
let ladoA = 10
let ladoB = 10
let ladoC = 10
MENSAGEM: 
"Os números digitados formam um TRIÂNGULO! (TRUE)"
"Os números digitados NÃO FORMAM um triângulo! (FALSE)" */
let ladoA = 5;
let ladoB = 4;
let ladoC = 10;
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("Os números digitados NÃO FORMAM um triângulo! (FALSE)");
} else {
    console.log("Os números digitados formam um TRIÂNGULO! (TRUE)");
}

/* - Crie um programa que pergunte o nome do usuário. 
Exiba uma mensagem diferenciada caso o nome digitado 
seja "William", "Roberta" ou "JavaScript" */
let nome = "Marcia";
if (nome == "William" || nome == "Roberta" || nome == "JavaScript") {
    console.log("Sucesso!");
} else {
    console.log("voce esta subindo um degrau a cada dia");
}