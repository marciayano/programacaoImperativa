console.log('================ METODOS STRING ==================')
//LENGHT
console.log('eu gosto de sorvete'.length); //19 num de caracteres, Tamanho do texto

//INDEX OF
console.log('ola mundo'.indexOf('mundo')); //4 posição da letra inicial, pq começa a contar do 0
console.log('ola mundo'.indexOf('flws')); // -1 pq nao encontrou Para saber se algo existe

//SLICE 'umaString'.slice(inicio, fim*); *opcional
console.log('eu gosto de JS'.slice(3,8)); //gosto Pega uma parte do texto
let texto = 'hello world!';
console.log(texto.length);//12
console.log(texto.indexOf('o'));//4
console.log(texto.indexOf('hello'));//0
console.log(texto.indexOf('hell'));//0
console.log(texto.indexOf('bye'));//-1
let palavra = (texto.slice(0,5));
console.log(palavra);//hello
console.log(texto);//hello world!

//TRIM
let newtxt = '    eu sou programador php    !';
console.log(newtxt.trim()); //'eu sou programador php    !' só faz trim no inicio e final, não faz entre palavras
console.log(newtxt.split()); //[ '    eu sou programador php    !' ] converte texto em array! ***********
console.log(newtxt.split(" ")); //[ '', '', '', '', 'eu', 'sou', 'programador', 'php', '', '', '', '!' ]
console.log(newtxt.split("o")); //[ '    eu s', 'u pr', 'gramad', 'r php    !' ]

//REPLACE
console.log(newtxt.replace('php','JS'));//'    eu sou programador JS    !'
let newNewTxt = newtxt.replace('php','C#');
console.log(newNewTxt);//'    eu sou programador C#    !'

console.log('======= ARRAY =======') 
//ARRAY == conjunto de dados
let meuArray = ['Star Wars', true, 8]; //posicoes 0,1 e 2 meuArray[2]; acessamos o 8

//LENGHT
console.log(meuArray.length); // 3 me diz quantos elementos tem no array

//PUSH
meuArray.push('Laranja','Felicidade'); //inclui mais um item por ultimo
console.log(meuArray); // [ 'Star Wars', true, 8, 'Laranja', 'Felicidade' ]

//POP
let ultimoItem = meuArray.pop();
console.log(ultimoItem);//Felicidade deleta o ultimo item do array e nao recebe parametro
console.log(meuArray);//[ 'Star Wars', true, 8, 'Laranja' ]

//SHIFT
console.log(meuArray.shift());//Star Wars deleta o primeiro item
console.log(meuArray);//[ true, 8, 'Laranja' ]

//UNSHIFT
meuArray.unshift('Garfield', 'Oddie'); //adiciona os parametros no inicio do array
console.log(meuArray);//[ 'Garfield', 'Oddie', true, 8, 'Laranja' ]

//JOIN
let juntaArray = meuArray.join();//junta tudo e usa virgula como separador
console.log(juntaArray); //Garfield,Oddie,true,8,Laranja 
let juntaArrayTraco = meuArray.join(' - ');
console.log(juntaArrayTraco);//Garfield - Oddie - true - 8 - Laranja

//PUSH
meuArray.push('Oddie');

//INDEX OF
console.log(meuArray.indexOf('Abacaxi'));//-1 nao encontrou
console.log(meuArray.indexOf('Laranja'));//4 retorna a sua posicao

//INCLUDES
console.log(meuArray.includes('Laranja'));//true retorna boolean
//LAST INDEX OF
console.log(meuArray);
console.log(meuArray.lastIndexOf('Oddie'));//5 pq ele retorna de tras para frente

console.log('======= MICRO DESAFIO ======');
// Crie um array que contenha nomes de produtos para compra. 
let listaCompras = ['Melancia', 'Alcool em Gel', 'Sorvete'];

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 
// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.
// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)
console.log('O metodo JOIN agrupa tudo com um separador padrao (,)');
console.log(listaCompras.join());
console.log('O metodo PUSH inclui o parametro na ultima posicao do array');
listaCompras.push('Racao para cachorro');
console.log(listaCompras);
console.log('O metodo SHIFT deleta o primeiro item, nao precisa de parametro');
console.log(listaCompras.shift());
console.log(listaCompras);
console.log('O metodo UNSHIFT adiciona o parametro no comeco do array');
listaCompras.unshift('Tangerina');
console.log(listaCompras);

console.log('========== MESA ===========');
// Array Invertido
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
let arrayInvertido = [1,2,3];
function imprimirInverso (){
   console.log(arrayInvertido.reverse())
   }
imprimirInverso();

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
function inverter (array){
  return(array.reverse());
  }
console.log(inverter([1,2]));

//somarArray()
let numbers = [1,2,3];
function addNumbers (array){
  let result = 0;
  for (let i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
}
console.log(addNumbers(numbers));

// Array.join()
let message = ["o","l", "a", "!"]
let join = message.join(' - ');
console.log(join);

// Filmes
//1.	Criar a estrutura apropriada para armazenar os seguintes filmes e séries: "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela".
let filmes = ["star wars", "matrix", "mr.robot", "o preço do amanhã", "a vida é bela"];
console.log(filmes[0]);

//2.	Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "genshin impact"];
console.log(filmes2[3]);

//3. Crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.
function joinArray (array1, array2){
array1.push(array2[0])
array1.push(array2[1])
array1.push(array2[2])
array1.push(array2[3])
console.log(array1)
}
joinArray(filmes,filmes2);

//Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes. PS: por precaução, salve o elemento que você vai deletar em uma variável.
let game = filmes2.pop();
console.log(game);

//Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
function compare (score1,score2){
  for (let i = 0; i < score1.length; i ++) {
    if(score1[i]==score2[i]){
      console.log('As notas sao iguais');
    } else {
      console.log('As notas sao diferentes');
    }
  }
}
compare(asiaScores,euroScores);