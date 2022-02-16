/* O que são objetos literais?
Em JavaScript, um Objeto Literal é uma entidade separada com Propriedades. 
Essas propriedades têm valores. 
Por exemplo, um país poderia ser representado como um Objeto Literal com as seguintes propriedades: nome, número de habitantes, capital, etc. 
Os objetos em JavaScript podem ter propriedades que definem suas características.

JSON
     eh um objeto nativo(dele mesmo)
     Precisamos converte o json em js! (desserializacao = parsing)
  serve para:
    troca de dados - formulario para o servidor
    criacao e consumo - utilizando API's
    formatos de dados - padrao da web atualmente
*/

//declarando um obj: propriedade vem com ':' e valor vem com ','
let meuPais = {
  nome:"Brasil",
  capital:"Brasilia",
  idade: 522, 
  republica: true,
  //metodos: sao funcoes atribuidas como valor, faz mais do que armazenar um dado
  //vamos criar um metodo que se chama dizerNacionalidade, com funcao anonima (sem nome)
  dizerNacionalidade: function(){
    return 'Nasci no '+ this.nome; //palavra reservada 'this' chama uma propriedade interna do objeto
  }
};

//imprimindo
console.log(meuPais);
console.log(meuPais.nome);
console.log(meuPais['nome']);
//nao da para chamar com virgula: console.log(meuPais['nome','capital']);
console.log('a capital do ' + meuPais.nome + ' e ' + meuPais.capital);
console.log(meuPais.dizerNacionalidade());

//Construtor e objetos literais == molde: quero criar varios objetos com as mesmas propriedades, mas nao quero repetir todas as vezes as mesmas linhas de codigo.
//letra Maiuscula
function Carro(aMarca, oModelo){
  this.marca = aMarca;//uso o this para criar e associar o dado com esta propriedade
  this.modelo = oModelo;
}
//instanciar == criar o objeto atraves de um molde, usar a palavra reservada 'new'
let meuCarro = new Carro ('Peugeot','Clio');
console.log(meuCarro);
let novoCarro = new Carro ('Toyota', 'Etios');
console.log(novoCarro);

// O QUE E JSON???
/* (Javascript Object Notation) é um padrão/formato de texto usado para trocar dados entre sistemas.
Imagine que cada linguagem seja uma língua diferente (JavaScript, Python, Java, PHP, C#, C++, TypeScript,Ruby....), mesmo que elas possuam semelhanças como string, boolean... a maneira que cada uma trabalha internamente é diferente.
Pensando nisso, é necessário que exista uma maneira universal de escrita, que todas as linguagens consigam compreender, para que haja comunicação == Qualquer linguagem entende JSON */

//convertendo Json em JS
  //converte Objeto Literal ou Array
let paraJSON = JSON.stringify(meuCarro); //Usei meuCarro pq JSON nao aceita metodo !!

//imprimindo
console.log(paraJSON);

//JSON para JS
let paraJS = JSON.parse(paraJSON);

//imprimindo...
console.log(paraJS);

//ja estao convertidos, ai sim consigo manipular
console.log(paraJS.oModelo.toUpperCase());

//PQ JSON E POPULAR?
/* Na web, a maioria das requisições e suas respostas viajam como texto simples (transmissão de informações entre sites e aplicações web), ou seja, texto sem codificações especiais == JSON. Considerando que o JavaScript está presente em todos os navegadores modernos. Outra vantagem do JSON é que qualquer linguagem de programação pode interpretá-lo com facilidade. Na verdade, a maioria das linguagens web funcionam nativamente com JSON.
*/