let idade = " ";
idade = 29;
let acesso = " ";

if (idade < 16){
  acesso = "acesso negado";
  console.log(acesso);
} else if (idade >=16 && idade <=18){
acesso = "acesso permitido apenas com acompanhante maior de idade"
console.log (acesso);
} else {
acesso = "acesso permitido"
console.log (acesso);
}

let dia = 'segunda'
dia = 'terça'
dia = 'sabado'
if (dia == 'segunda'){
  console.log('vou tomar um café!')
}else if(dia == "terça"){
  console.log ('vou para a academia!')
}else if(dia == 'quarta'){
  console.log('vou para o cinema a noite!')
}else if(dia == 'sabado'){
  console.log('vou para o parque!')
}else{
  console.log('vou codar!')
}

// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".
let linguagem = "javascript";
if (linguagem == "javascript"){
  console.log("Estou aprendendo!")
}else {
  console.log("Aprenderei mais tarde!")
}

// If ternário
// condição ? expressão para true: declaração para false / " " / 0;
let oMaior = 4 > 10 ? "O 4 é Maior" : "O 10 é maior";
console.log(oMaior);
let number = 0;
let resultado = number == 0 ? true : false;
console.log(resultado);

//condicional Switch
// pergunta -> se vdd -> executar o codigo
let filme = "musical";
switch (filme){
  case "ação": 
  console.log("kabum!");
  break; // importante colocar para nao precisar rodar todas as condições

  case "terror": 
  console.log("run!!!");
  break;

  case "musical": 
  console.log("ok!");
  break;

  default: 
  console.log("nenhum filme para ver");
}

console.log("********* micro desafio **********")

//Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
// 1) Crie uma função podeSubir() que receba dois parâmetros:
// - altura da pessoa;
// - se está acompanhada.
// Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
// subir ou não, baseado nas seguintes condições:
// a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
// b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// c) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

function podeSubir (altura, acompanhada){
  if (altura >= 1.4 && altura < 2.00) {
    console.log (true);
  } else if (altura < 1.4 && altura >= 1.2 && acompanhada){
    console.log(true);
  } else {
    console.log(false)
  }
}
podeSubir(1.2, false);

// 2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo: 
// a) Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
// b) Em caso de impedimento, exiba a mensagem: “Acesso negado.”

function podeSubir2 (altura, acompanhada){
  if (altura >= 1.4 && altura < 2.00) {
    console.log ('altura permitida acesso permitido');
  } else if (altura < 1.4 && altura >= 1.2 && acompanhada){
    console.log('acesso permitido com acompanhante');
  } else {
    console.log('acesso proibido')
  }
}
podeSubir2(1.2, true);

function podeSubir3(altura,vemAcompanhado){ 
  if ((altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 &&  vemAcompanhado)){
   return true
   }
   else{
   return false
   }
  }

console.log('*********** checkpoint ************')

// Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
//   Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;
let lasanha = " ";

let tempoTriplo = "kabumm!"
let tempoDobro = "a comida queimou x_x";
let tempoMenor = "tempo insuficiente ó_ò";
let pratoNull = "Prato inexistente";
let pratoOk = "Prato pronto, bom apetite~!!"

microo (lasanha, 2);
function microo (comida, tempo) {
  if (comida === pipoca) {
  if (tempo >=20 && tempo <30){
    console.log(tempoDobro);
  } else if (tempo >=30){
    console.log(tempoTriplo);
  } else if (tempo < 10){
    console.log(tempoMenor);
  } else {
    console.log(pratoOk);
  }
}
  else if(comida === macarrao && comida === brigadeiro){
    if(tempo >=16 && tempo <24){
      console.log(tempoDobro);
    } else if (tempo >=24){
      console.log(tempoTriplo);
    } else if (tempo < 8){
      console.log(tempoMenor);
    } else {
      console.log(pratoOk);
    }
  }
  else if(comida === carne){
    if(tempo >=30 && tempo <45){
      console.log(tempoDobro);
    } else if (tempo >=45){
      console.log(tempoTriplo);
    } else if (tempo < 15){
      console.log(tempoMenor);
    } else {
      console.log(pratoOk);
    }
  }
  else if(comida == feijao){
    if(tempo >=24 && tempo <36){
      console.log(tempoDobro);
    } else if (tempo >=36){
      console.log(tempoTriplo);
    } else if (tempo < 12){
      console.log(tempoMenor);
    } else {
      console.log(pratoOk);
    }
  } 
  else {
    console.log(pratoNull);
  }
} 

console.log('********** outra solução *********')
const microondas = {
  pratos: ["🍿 Pipoca", "🍝 Macarrão", "🍖 Carne", "🥜 Feijão", "🧁 Brigadeiro"],
  tempos: [10, 8, 15, 12, 8],
  definir: function (prato, tempo) {
    const pratoPedido = microondas.pratos[prato];
    const timer = microondas.tempos[prato];

    if (!pratoPedido) {
      return "❔ Esse prato não existe";
    } else if (tempo >= timer * 2 && tempo < timer * 3) {
      return "♨️ Vix, teu prato queimou";
    } else if (tempo >= timer * 3) {
      return "💥 KABUUUM!";
    } else if (tempo < timer) {
      return "⏰ Tempo insuficiente";
    } else {
      return "💡 Seu prato está pronto";
    }
  }
}
console.log("No microondas existem 5 opções: \n[0]Pipoca: 10 segundos, \n[1]Macarrão: 8 segundos, \n[2]Carne: 15 segundos, \n[3]Feijão: 12 segundos e \n[4]Brigadeiro: 8 segundos. \nEscolha o tempo que quiser, com cuidado pra não queimar.")
console.log("")
console.log("---TESTES DO MICROONDAS---")
console.log((microondas.pratos[0]) + ": " + (microondas.definir(0, 20))); // Pipoca: Vix, teu prato queimou
console.log((microondas.pratos[0]) + ": " + (microondas.definir(0, 30))); // Pipoca: KABUUUM!
console.log((microondas.pratos[1]) + ": " + (microondas.definir(1, 7))); // Macarrão: Tempo insuficiente
console.log((microondas.pratos[1]) + ": " + (microondas.definir(1, 8))); // Macarrão: Seu prato está pronto
console.log((microondas.pratos[2]) + ": " + (microondas.definir(2, 15))); // Carne: Seu prato está pronto
console.log((microondas.pratos[2]) + ": " + (microondas.definir(2, 45))); // Carne: KABUUUM!
console.log((microondas.pratos[3]) + ": " + (microondas.definir(3, 11))); // Feijão: Tempo insuficiente
console.log((microondas.pratos[3]) + ": " + (microondas.definir(3, 12))); // Feijão: Seu prato está pronto
console.log((microondas.pratos[4]) + ": " + (microondas.definir(4, 8))); // Brigadeiro: Seu prato está pronto
console.log((microondas.pratos[4]) + ": " + (microondas.definir(4, 24))); // Brigadeiro: KABUUUM!