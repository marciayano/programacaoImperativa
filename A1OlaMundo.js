// Arquivo Aula 4 alterado por...Marcia Data...16/08/2021
//Comentário = o programa nao executa, ignora.
//Comentário em uma linha Ctrl+; 
// Ctrl+[] eh dar tab
/*Comentários em Bloco 
                    inclui
                    varias 
                    linhas*/

//Variaveis:
let variavelLocal = null;
var variavelGlobal = NaN;
const variavelFixo = undefined;

// 6 Tipos de Dados Primitivos... Todos os demais são objetos...
  // Undefined (uma variável sem valor definido).
  // Null      (um simples valor nulo)
  // Boolean   (verdadeiro [true] ou falso [false])
  // Números   (incluindo infinito [infinity] e “não número” [NaN])
  // String    (dados de texto)
  // Symbol    (tipo de dado cujo valor é único e imutável)

// Truthy e Falsy, são dados que tem boolean na sua natureza
//sempre false: false, 0 (zero), ‘’ ou “” (string vazia), null, undefined, NaN (Ex:o resultado de 1/0)
//sempre true: ‘0’ (uma string que contenha um simples 0), ‘false’ (uma string que contenha o texto “false”), [] (un array vazio)*, {} (um objeto vazio)*, function(){} (uma função vazia)

//False, zero e strings vazias são todas equivalentes.
// Null e undefined são equivalentes a si próprios e um ao outro, mas nada mais.
// NaN não é equivalente a nada, incluindo outro NaN.
// Infinity é truthy, mas não se pode comparar com verdadeiro ou falso.
// Um array vazio é truthy, mas se o comparamos com true nos retorna false, e se o comparamos com false nos retorna true.

// Todos são verdadeiros
/* 
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;
 
Todos são falsos.
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;
*/


//TreinoOoOoOoOo:
let minhaPrimeiraVariavel = 'Hello World!!!'
let bancoDeDados =          'Host123' //tipo: String (texto)
let conexao =                true //tipo: Booleano (logico)
let totalAcessos =           1000000
let total =                  100 / 2 //multiplicação:*     divisão:/   resto:^
let usuario =                'Marcita!'
let saudacao =               'Bom dia,'
let mensagem =               saudacao + ' ' + usuario + '!'
let numero1 =                1.8

console.log(
            'BancoDeDados....: ' + bancoDeDados,
            'Conexão...: ' + conexao,
            'Total de Acessos...: ' + totalAcessos,
            usuario,
            numero1
)

console.log(minhaPrimeiraVariavel)
console.log(bancoDeDados)
console.log(totalAcessos)
console.log(total)
console.log(mensagem)
console.log(saudacao + ' ' + usuario)
console.log('Nome....:' + usuario)
