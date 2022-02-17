//MODULO == bloco de codigo reutilizavel
/* temos blocos de codigos em arquivos que resolvem um problema bem especifico
o modulo nao impacta o funcionamento de outros blocos no sistema
Podemos criá-los com responsabilidades determinadas e utilizar em conjunto com outros módulos para realizar tarefas mais complexas.
O módulo é apenas importado e todas as suas funcionalidades são adicionadas ao código que o importou.
Node fornece muitos blocos, com/sem instalacao por npm, (www.nodejs.org/api)*/
//3 Tipos de MODULOS
/*Módulos nativos:      já vêm instalados quando criamos um projeto de Node.js.
  Módulos de terceiros: podemos instalá-los usando o gerenciador de pacotes npm/ynp
  Módulos criados:      aqueles criados por nós mesmos. */

//COMO USAR
//NATIVO
//1-Criar um arquivo de entrada (app.js)
//2-Funcao nativa do node (const fs = require("fs");) string com o nome do arquivo
//  quando enviamos o modulo pelo require, gera um objeto literal
console.log("estou no arquivo principal");

//vou importar o modulo nativo do node 'fs' - file system - serve para ler dados de um arquivo, por isso vou criar o dados.txt
//***** Por convenção, o nome da variável que armazena o módulo que estamos solicitando deve receber o mesmo nome do módulo, ou uma abreviatura.*****
const fs = require('fs');

//.READ FILE SYNC == metodo que recupera dados para poder usar
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8')
// readfilesync abre um arquivo e me retorna o conteudo. 
//__dirname ele pega o endereco completo do arq no seu pc
//utf8 e a tabela de caracteres especiais que ele vai usar
console.log(dados);
/*se queremos ler um JSON precisamos converter em obj literal (JSON.parse) para poder manipular os dados.
let users = fs.readFileSync('users.json','utf-8');
let usersJson = JSON.parse(users); */

//.WRITE FILE SYNC(arquivo que queremos escrever, conteudo que queremos escrever) == metodo que cria, edita um arquivo (apaga o original e salva por cima!)
fs.writeFileSync('dados.txt','Hello Word!');

let cblol = {
  time: 'Furia',
  jogadores: 'fNb, Ranger, Envy, Netuno e Redbert'
};
let cblolJson = JSON.stringify(cblol);
fs.writeFileSync('cblol.json', cblolJson);

//.APPEND FILE SYNC()== WRIT FILE SYNC, a diferenca e que ele adiciona a informacao ao final do arquivo, sem apaga-lo.
fs.appendFileSync('dados.txt', ' #naoSejaUmTouquinhaVerde!')

//MODULO DE TERCEIROS
//no terminal vou instalar o modulo momentjs.com: npm install moment --save
let moment = require('moment');//coloquei apenas o nome moment pq o node ja vai procurar nessa pasta node_modulos
let data = moment().format('MMM Do YY');
console.log(data);

//MODULO PROPRIO
//criar uma pasta na raiz do seu projeto.
//***** Como boa prática, os módulos que criamos são geralmente armazenados dentro de uma pasta com o mesmo nome do módulo que estamos prestes a criar. *****
//exemplo: modulo com info de varios super-herois == crio a pasta superHerois
//dentro crio arquivo index.js (pq na hora de chamar o modulo, o node ja vai primeiro no index procurar o modulo, e nao precisamos escrever ./nomePasta/index)
//crio um array com objetos literais
//agora no arquivo index.js eu preciso exportar o dado que quero compartilhar
//isso e possivel usando o objeto nativo do node, module; e sua propriedade exports
//SEMPRE COLOQUE ESSA LINHA NO FINAL DO ARQUIVO module.exports = superHeroes;
//Chamar o modulo criado:
let heroes = require("./superHerois"); //usando o './' diz ao node que esta nessa pasta superHerois e nao vai procurar no default node_modules.
console.log(heroes[0]);
console.log(heroes[0].greenting());

let disneyMovies = require("./filmes");
const movies = require('./filmes');
console.log(movies);