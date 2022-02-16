// Calculadora - Nível I
//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar (num1, num2){
console.log (num1+num2)
}
//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtrair (a,b){
  let subtracao = (a-b)
  console.log(subtracao)
}
//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicar (a,b){
  console.log(a*b)
}
//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao (a,b){
  console.log(a/b);
}
//Calculadora - Nível II
//No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções
console.log ("-------------- Teste de Operações / Calculadora --------------")

//Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
adicionar(10,20);
//Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
multiplicar(10,2);
//Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
divisao(10,2);
//Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
divisao(0,2);

//Calculadora - Nível III - Funções Extras
console.log ("-------------- Teste de Operações / Calculadora --------------")
//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
function quadradoDoNumero (a){
let multiplica = Math.pow(a, 2);
console.log(multiplica);
}
quadradoDoNumero(2);
//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function mediadeTresNumeros (a,b,c){
let media = ((a+b+c)/3);
console.log(media);
}
mediadeTresNumeros(1,2,3);
//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function calculaPorcentagem (a,b){
let result = (a*(b/100));
console.log(result);
}
calculaPorcentagem(300,15);
//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem (a,b){
  let result = ((a*100)/b);
  console.log(result+"%")
}
geradorDePorcentagem(2,200);