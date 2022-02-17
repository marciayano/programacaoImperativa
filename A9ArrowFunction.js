//Arrow Functions == forma mais compacta de criar funcoes. => fat arrow heuheu
//Este recurso foi integrado ao JavaScript a partir da especificação ES6 (EcmaScript versão 6). E, uma de suas vantagens é que são mais concisas do que as funções clássicas.
//sao sempre anonimas, para ter nome precisamos atribuir a uma variavel
//nao precisa escrever 'function', nem '{return }'
let soma = (num1, num2) => num1 + num2;
console.log(soma(3,5));

//com apenas um parametro, nao precisa de ()
let dobro = num => console.log(num * 2);
dobro(4);

//qdo a funcao tem mais de uma linha de codigo, vc vai precisar de '{return }'
let Par = numero => {
  if(numero %2 === 0){
    return true;
  } return false;
};
console.log(Par(2));

// ******* MICRO DESAFIO ********* 
/* Transforme em arrow function
function print(mensagem){
  console.log(mensagem)
}
print("Olá, bom dia")*/
let print = mensagem => console.log(mensagem);
print('Bom Dia, Boa Tarde, Boa Noite!');

/*function soma(n1, n2){
  return n1 + n2
}
console.log(soma(10, 10)) */
let adicao = (num1, num2) => console.log(num1 + num2);
adicao (99,1);

//Neste exercício, você terá que criar uma função "FizzBuzz" que recebe dois parâmetros numéricos.
/* A função deve atender aos seguintes requisitos:
    Você deve imprimir os números de 1 a 10;
    Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
    Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
    Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.*/
    let FizzBuzz = (num1, num2) => {
      for (var i = 1; i <= 10; i++) {
        if (i%num1 == 0 && i%num2 != 0) {
        console.log('Fizz');
    } else if (i%num2 == 0 && i%num1 != 0) {
      console.log('Buzz');
    } else {console.log("FizzBuzz")}}};
    FizzBuzz(2,5);