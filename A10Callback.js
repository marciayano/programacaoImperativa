// função callback é algo próximo de uma terceirização de funções.
//Ao invés da função principal realizar tudo, é passado para ela uma função secundária (pode ser anonima ou pode ter sido definida antes) como parâmetro, onde irá se realizar o processo.

//callback definida dentro da arrow function
const somar = (numA, numB) => numA + numB;
const calculadora = (numA, numB, operacao) => operacao(numA, numB);
console.log(calculadora(10, 20, somar));

//callback funcao anonima
console.log(calculadora(10, 2, (numA, numB) => numA - numB));

// ======= TREINO 01 ========
function nomeCompleto(nome, sobrenome){
  return nome + ' ' + sobrenome;
}
function cumprimentar (nome, sobrenome, callback) {
  return 'Ola, ' + callback(nome, sobrenome);
}
console.log(cumprimentar('Ana', 'Silva', nomeCompleto));

// ======= TREINO 02 ========
function iniciais (nome, sobrenome){
  return nome[0] + sobrenome[0];
}
function dizerInicial (nome, sobrenome, callback){
  return 'Ola, ' + callback (nome, sobrenome);
}
console.log (dizerInicial('Ana', 'Garcia', iniciais));

// ======= TREINO 03 ========
const frutas = ['Maçã', 'Banana', 'Melancia'];
function listaCompras(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}
frutas.forEach(listaCompras)
//A impressão é:
//1 - Maçã
//2 - Banana
//3 – Melancia
// ======= TREINO 04 ========
function testandoCallback(a, b, callback) {
  console.log(a + b);
  callback();
}
testandoCallback(1,7, function() {
  console.log('soma finalizada!')
});

// ======= TREINO 05 ========
function testandoCallback2(a, b, ImprimirMensagem) {
  console.log(a + b);
  ImprimirMensagem();
}
testandoCallback2(6,2, ImprimirMensagem => {
  console.log('soma finalizada!')
});

// ======= TREINO 06 ========
let salarioBruto = 5000;
function getSalario(salarioBruto, callback) {
    let liquido = 0
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const descontos = inss + vr + vt;
    liquido = salarioBruto - descontos;
    return callback(liquido);
}
getSalario(salarioBruto, (resultado) => { 
    let salarioLiquido = resultado;
    console.log(`O salário líquido é ${salarioLiquido}`);
});
