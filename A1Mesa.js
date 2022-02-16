// Exercicio Praticar o uso de operadores aritméticos
console.log('=======Exercicio 1=========');
console.log("1) Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.");
console.log("a soma de 99 + 1 = " + (99+1));

console.log("2) Repita o processo anterior, mas utilizando outro operador.");
console.log("a divisão de 9/6 = " + (9/6));

console.log("3) Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.");
let a = 10;
let b = 20;
let c = a + b;
console.log("a soma de a + b = " + c);

console.log('4) Atribua a soma das duas variáveis ​​anteriores a uma outra variável e exiba-a na tela.');
console.log("a soma de b + a + c = " + (a + b + c));

console.log('5) Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)');
a = 1;
console.log(a + 1);

console.log('6) Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)');
a = "olá"
console.log(a + 23);

console.log('7) Crie mensagens concatenadas com valores diferentes.');
console.log("variaveis: "+ "a= "+ a + ' b= ' + b + ' c= ' + c);

console.log('=======Exercicio 2=========');
let Nome1 = 'Diego';
let Nome2 = 'Jose';
let Nome3 = 'Carlos';
let Nome4 = 'Aline';
let Nome5 = 'Ana';

let Sobrenome1 = 'Dias';
let Sobrenome2 = 'Silva';
let Sobrenome3 = 'Souza';
let Sobrenome4 = 'Ferreira';
let Sobrenome5 = 'Paula';

let Idade1 = 29;
let Idade2 = 55;
let Idade3 = 28;
let Idade4 = 33;
let Idade5 = 26;

let Peso1 = 100;
let Peso2 = 83.5;
let Peso3 = 80.1;
let Peso4 = 63.7;
let Peso5 = 55;

let Altura1 = 1.65;
let Altura2 = 1.70;
let Altura3 = 1.76;
let Altura4 = 1.53;
let Altura5 = 1.62;

let Plano1 = 'Diamante';
let Plano2 = 'Ouro';
let Plano3 = 'Diamante';
let Plano4 = null;
let Plano5 = 'Prata';

console.log('Paciente ' + Nome1 + ' ' + Sobrenome1 + ' tem ' + Idade1 + ' anos e seu IMC é de ' + Peso1/(Altura1*Altura1));

console.log('Paciente ' + Nome2 + ' ' + Sobrenome2 + ' tem ' + Idade2 + ' anos e seu IMC é de ' + Peso2/(Altura2*Altura2));

console.log('Paciente ' + Nome3 + ' ' + Sobrenome3 + ' tem ' + Idade3 + ' anos e seu IMC é de ' + Peso3/(Altura3*Altura3));

console.log('Paciente ' + Nome4 + ' ' + Sobrenome4 + ' tem ' + Idade4 + ' anos e seu IMC é de ' + Peso4/(Altura4*Altura4));

console.log('Paciente ' + Nome5 + ' ' + Sobrenome5 + ' tem ' + Idade5 + ' anos e seu IMC é de ' + Peso5/(Altura5*Altura5));
