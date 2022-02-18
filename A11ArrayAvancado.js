//  o JavaScript nos fornece vários métodos para executar em arrays, dando-nos, assim, uma gama de ferramentas para poder trabalhar com eles.
//metodos: map, filter, reduce, forEach (todos vao usar callback)
console.log('======= I ======')
//MAP
//Este método recebe uma função como parâmetro (callback).
//Faz um loop no array e retorna um novo array modificado.
//As modificações serão aquelas que programamos em nossa função de callback.
let numeros = [11,22,33];
let dobro = numeros.map(function(num){
    return num * 2;
});
console.log(dobro);

//FILTER
//Este método também usa uma callback.
//Realiza um loop no array e filtra os elementos com base em uma condição existente na callback.
//Retorna um novo array que contém apenas os elementos que atendem a essa condição.
let idades = [22, 8, 18, 14, 29];
let maiores = idades.filter(function(idade){ return idade >= 18;});
console.log(maiores);

//REDUCE
//Este método percorre a array e retorna um único valor.
//Ele recebe uma callback para ser executada em cada elemento do array. 
//Este, por sua vez, recebe dois parâmetros: um acumulador e o elemento atual que está percorrendo.
let numbers = [5, 7, 16];
let soma = numbers.reduce(function(acumulador,numero){return acumulador + numero;});
console.log(soma); //ele somou um por um e acumulou 28.

//forEACH
//O objetivo deste método é iterar == fazer novamente; repetir, reiterar um array.
//ps. aqui nao foi criada nova variavel pq esta iterando 'paises'
var paises = ['Brasil', 'Japao', 'Canada'];
paises.forEach(function(pais){ console.log(pais);});

console.log('======= II ======')
//MAIS METODOS: slice, splice, sort, flat, includes, find

//SLICE
//Este método retorna uma cópia do array. Parâmetros (índice inicial e final (opcional)).
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
let subArray = lista.slice(0, 3);
console.log(subArray); // [1,2,3]
//Se o índice inicial negativo, se iniciando no final do array. 
let subArray2 = lista.slice(-1, 3);
console.log(subArray2); // []
//Caso omitido o padrão é 0, e se for um índice maior que o tamanho do array, retornará um array vazio.
let subArray3 = lista.slice(3);
console.log(subArray3); // [4,5,6,7,8]
let subArray4 = lista.slice(10);
console.log(subArray4); // []
//Caso o índice final seja negativo, ele conta para o final
let subArray5 = lista.slice(0,-5);
console.log(subArray5); // [1,2,3]
//Se for maior que o tamanho do array ou omitido, extrai para o final do array.
let subArray6 = lista.slice(5,10);
console.log(subArray6); // [6,7,8]
let subArray7 = lista.slice(5,);
console.log(subArray7); // [6,7,8]

//SPLICE
//Este método remove/ adiciona elementos de um array.
//três parâmetros:
  //Inicio: O índice do primeiro elemento.
  //Quantidade (opcional): Número de inteiros a eliminar (deve ser do tipo inteiro). 
  //Itens: Indica os elementos que serão adicionados ao array. Caso seja omitido, ele apenas remove.
let treino = [1, 2, 3, 4, 5];
treino.splice(0, 0, 8);//incluir o 8
console.log(treino); // [8,1,2,3,4,5]
treino.splice(1, 2); //remover o '2'
console.log(treino); // [8,3,4,5] 
treino.splice(3); //apenas remove todos menos os tres primeiros
console.log(treino); // [8,3,4,5]

//SORT
//Este método nos ajuda a ordenar os elementos de um array.
//A callback recebe dois parâmetros, ambos elementos que serão comparados.
let ordem = [10, 3, 4, 52, 6, 7];
console.log(ordem.sort(function(a,b){return a-b;})); //a-b == menor -> maior [4, 7, 8, 9, 10, 52]
//callback como um parâmetro (opcional) que especifica o modo de classificação, se for omitido, o array é ordenado com o valor da string (Unicode).
let lojas = ['samsung', 'xiaomi', 'asus', 'apple', 'motorola'];
console.log(lojas.sort());// [ 'apple', 'asus', 'motorola', 'samsung', 'xiaomi' ]

//FLAT
//Este método é usado para desembrulhar sub-arrays dentro de arrays, ou seja, ele não modifica o array original.
let flatTreino = [1, 2, 3, [4], [[5, 6]]];
let novoArray = flatTreino.flat();
console.log(flatTreino.flat(0)); // [ 1, 2, 3, [ 4 ], [ [ 5, 6 ] ] ]
//Recebe como parâmetro (opcional) um nível de profundidade que especifica o quanto o array aninhado deve ser achatado, se for omitido o padrão == 1 como valor.
console.log(flatTreino.flat(1)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flatTreino.flat());  // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flatTreino.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log(flatTreino.flat(3)); // [1, 2, 3, 4, 5, 6]
console.log(flatTreino); //continua o mesmo

//INCLUDES
//Verifica a existência de um elemento no array, retornando true caso exista, e false se não.
let emBusca = [3, 4, 5, 6, 7];
console.log(emBusca.includes(4));  //true
console.log(emBusca.includes(4,8));//false

//FIND
//Retorna o primeiro valor que cumprir a condição especificada na callback, true ou false.
//Parametros: Elemento: elemento atual do array.
              //Indice: (opcional) posição atual do elemento.
               //Array: array que está sendo percorrido.
let moedas = [
  { nome: 'Bitcoin',   simbolo: 'BTC' },
  { nome: 'Dogecoin',  simbolo: 'DOGE'},
  { nome: 'Ethereum',  simbolo: 'ETH' },
  { nome: 'Cardano',   simbolo: 'ADA' }    ];
console.log(moedas.find(function(moeda){return moeda.nome === 'Bitcoin';}));// {nome: 'Bitcoin', simbolo: 'BTC'}