//Gere uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.
function Conta(name, number, type, balance){
  this.nome = name;
  this.numero = number;
  this.tipo = type;
  this.saldo = balance;
}

let client1 = new Conta('Abigael Natte',5486273622, 'Conta Corrente', 27771);
let client2 = new Conta('Ramon Connell',1183971869, 'Conta Corrente', 8675);
let client3 = new Conta('Jarret Lafuente',9582019689, 'Conta Poupança', 27363);
let client4 = new Conta('Ansel Ardley',1761924656, 'Conta Poupança', 32415);
let client5 = new Conta('Jacki Shurmer',7401971607, 'Conta Poupança', 18789);
let client6 = new Conta('Jobi Mawtus',630841470, 'Conta Corrente', 28776);
let client7 = new Conta('Thomasin Latour',4223508636, 'Conta Corrente', 2177);
let client8 = new Conta('Lonnie Verheijden',185979521, 'Conta Poupança', 25994);
let client9 = new Conta('Alonso Wannan',3151956165, 'Conta Corrente', 7601);
let client10 = new Conta('Bendite Huggett',2138105881, 'Conta Poupança', 33196);

//Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.
let banco = {
  cliente1: client1.nome,
  cliente2: client2.nome,
  cliente3: client3.nome,
  cliente4: client4.nome,
  cliente5: client5.nome,
  cliente6: client6.nome,
  cliente7: client7.nome,
  cliente8: client7.nome,
  cliente9: client7.nome,
  cliente10: client7.nome,
  consultaCliente: function(pesquisa){
    return this.banco
}};
console.log(consultaCliente(client5));

//o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.
