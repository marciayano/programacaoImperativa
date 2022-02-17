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