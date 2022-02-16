// função expressa:
let somar = function(){
  console.log(1+1);
}
somar(); //chamando a função resultado 2 Terminal Bash $: node A2Funcao.js

      // função com parametros
      let somar2 = function(a,b,c){
        console.log(a+b); 
      };
      somar2(1,2); // Deu certo, resultado 3
      // se eu quiser armazenar ele não vai saber o resultado pq console log nao retorna nada, precisa usar return
          //let resultado = somar2 (1,2); 
          //console.log(resultado); // Undefined

      // função com parametros
      let somar3 = function(a,b,c){
        return a+b+c; 
      };
      // se eu quiser armazenar ele não vai saber o resultado pq console log nao retorna nada, precisa usar return
      let result = somar3(1,2,3); 
      console.log(result); // resultado 6


// função declarada:
function dobro (numero){
  //let variavelLocal = "não consigo chamar ela fora" pq ta dentro da funcao
  console.log(numero *2)}

dobro(10); //chamando a função resultado 20
dobro(50); // resultado 100
dobro(20); // resultado 40

// por exemplo 
    //function bemVindo (nome='visitante',sobrenome='anonimo')
    //                  {return 'ola, '+nome+' '+sobrenome}
//bemVindo(); retorna ola, visitante anonimo pq agt definiu um padrão, nao precisa de parametro

// parametros = informações que escrevemos para definirmos uma função
// argumento = valor que enviamos quando invocamos uma função

// treino ************************************************************************************//
//01 Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function conversorEmCm(valor){
  return valor * 2.54;
}
let resultads = conversorEmCm(1);
console.log(resultads);

//02 Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function converterEmURL(texto= 'funcaojs'){
  return 'http://www.'+ texto + '.com.br';
}
let resul = converterEmURL();
console.log(resul);

//03 Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function adicionandoExclamacao(nome){
  console.log(nome + '!');
}
adicionandoExclamacao('roberta');

//04 Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeDog(age){
  return age*7;
}
let dog = idadeDog(2);
console.log(dog);

//05 Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
function calculoValorHoraTrabalho(salarioMensal){
  return salarioMensal / 160;
}
let job = calculoValorHoraTrabalho(5000);
console.log(job);

//06 Crie a função calculadora de IMC de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
function calcularIMC(altura, peso){
  return peso/altura**2;
}
let pessoa = calcularIMC(1.65,90);
console.log(pessoa);

//07 Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.Investigue o que o método de .toUpperCase() faz.
function textoMaiusculo(nome2){
  return nome2.toUpperCase();
}
let pet = textoMaiusculo('tibi');
console.log(pet);

//08 Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz.
function obterTipoDeDado(valor){
  return typeof valor;
}
let type =obterTipoDeDado(true);
console.log(type);

//09 Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function calcularCircunferencia(raio){
  return 2* Math.PI * raio;
}
let circulo = calcularCircunferencia(2);
console.log(circulo);

Math.random();
console.log( Math.random());