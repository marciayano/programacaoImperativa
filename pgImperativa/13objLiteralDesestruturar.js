// Aula 13 Objeto Literal
/* desestruturar eh extrair valores de um obj ou array, isso NAO MODIFICA o original */

//declarando obj carro
let carro = {
  placa: 'DRU2258',
  cor: 'preto',
  ano: 2021,
  flex: true,
  mostrar: function(){
    return 'Caracteristicas do seu carro: \n Placa = ' + carro.placa + '\n Cor = '+ carro.cor + '\n Ano = ' +carro.ano + '\n Flex = '+ carro.flex;
  }
}
// no caso de obj as variaveis sao envolvidas por CHAVES
let{placa, cor, ano, flex} = carro;
console.log(carro);


