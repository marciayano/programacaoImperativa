/* ====== ATRIBUIÇÃO ========================== */
// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"
let idade = 40

/* ====== ARITMÉTICOS ========================= */
// Nos permitem fazer operações matemáticas
10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ====== OPERADORES DE COMPARAÇÃO SIMPLES ================== */
10 == 15 // Igualdade → nao, false
10 == "10" // TRUE pq JS eh fracamente tipada
100 == [100];
10 != 15 // Desigualdade → sim, true

/* ====== OPERADORES DE COMPARAÇÃO ESTRITA ================== */
// tb inclui o tipo de dado
10 === "10" // Igualdade estrita → false 'number e string'
10 !== 15 // Desigualdade estrita → true 
Anna !== anna // true

/* ====== OPERADORES RELACIONAIS ============================ */
// sempre escrever o igual atras, pq causa da ordem de leitura do js
15 > 15 // Maior que → false
15 >= 15 // Maior ou igual a → true
10 < 15 // Menor que → true
10 <= 15 // Menor ou igual a → true

/* ====== LÓGICOS =========================================== */
// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
(10 > 15) && (10 != 20)      // false
(12 % 4 == 0) && (12 != 24)  // true
(10 > 15) || (10 != 20)       // true
(12 % 5 == 0) && (12 != 12)  // false
!false // true
!(20 > 15) // false

var TarefasFeitas = true;

if(TarefasFeitas == true) {
  var granaFilhote = 10;
} else {
  granaFilhote = 0;
}
console.log("Tarefas Feitas?..."+TarefasFeitas);
console.log("Grana para o filhote..."+granaFilhote);

!true  //  resultado false
!false //  resultado True
!!false // Resultado False
!!true  // Resultado True
!1    // resultado  False
!!1     // resultado  True
!0      // resultado  True
!!0     // resultado  False
!!""    // resultado  False
let x = 5;
let y = 9;
x < 10 && x!==5   // resultado  False
x > 9 || x===5   // resultado True
!(x===y)   // resultado True
