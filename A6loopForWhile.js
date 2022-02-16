/* loop: FOR (definir a variavel, o seu inicio; condicao/quantas vezes meu loop vai rodar; incremento ou decremento do i)*/
for (let i = 0; i<=3; i++){
  console.log(i)
}
for (let i = 0; i<=3; i++){
  console.log('oi')
}
for (let voltaa = 1; voltaa <= 5; voltaa ++){
  console.log('Volta numero: ' + voltaa)
}

/* ====== MICRO DESAFIO =======*/
//Repetir como um papagaio: Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.
for (let i=0; i<=4; i++){
  console.log('Ola Mundo')
}
/*Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.*/
for (let i=0; i<=10; i+=2){
  console.log(i)
} // so mostra os pares
for (let i=1; i<=10; i++){
  if (i % 2 != 0){
      console.log(i);
  }
}
/*Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).*/
for (let i = 1; i<=10; i++){
  console.log(i + 'x' + '8' + ' = ' + i*8)
}
for (let i = 1; i < 10; i++) {
  console.log('Tabuada do '+ i)
  for (let j=1; j<=10; j++)
      console.log(`${i} x ${j} = ${i*j}`)
}
//============================ WHILE ==========================================
// while == executa o coigo e modifica ate onde a instrucao pedir
let volta = 1
while(volta <= 5) {
  console.log('Volta número ' + volta);
  volta++ //ao final de cada volta somará 1 à variável volta
}

// DO WHILE: neste caso é verificada no final do bloco de código, portanto, não importa o que seja resolvido, as ações serão realizadas pelo menos uma vez.
let voltas = 1
do{
  console.log('Volta número ' + voltas);
  voltas++ //Se soma 1 à variável volta, portanto volta será = 6
} while(voltas <= 5); //quando o retorno é 6, a condição retorna false e o bloco de código é encerrado

console.log('============ MICRO DESAFIO ==============')
// 1. Programa em Javascript que mostra os números ímpares
// Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.
for (let i=1; i<=100; i++){
  if (i % 2 != 0){
      console.log(i);
  }
}

// 2. Programa em Javascript que mostra os números pares
// Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
for (let i=1; i<=100; i++){
  if (i % 2 == 0){
      console.log(i);
  }
}

// 3. Programa em Javascript que mostra os números pares e ímpares 
// Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
for (let i=1; i<=5; i++){
  if (i % 2 != 0){
      console.log('numeros impar ' + i);
  } else {console.log('numeros par ' + i)}
}

// 4. Programa em Javascript que calcula a média das notas de uma turma
// Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
// Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
// Por fim, o programa mostra a média aritmética da turma.

let numAlunos = 1;
function media (nota1, nota2){
  do{
    console.log('media do aluno ' + ((nota1+nota2)/2))
    numAlunos++
  } while(numAlunos <= 2);
}
media (10,9.5);

