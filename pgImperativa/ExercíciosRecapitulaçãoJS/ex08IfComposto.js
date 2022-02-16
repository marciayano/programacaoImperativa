/* Escreva um programa que solicita um número inteiro. 
Exiba uma mensagem de erro se o número informado estiver 
entre 15 e 25 ou entre 45 e 50.*/

//digite um número
let num = 48

        if ((num >= 15 && num <= 25) || (num >=45 && num <=50)){
            console.log("NÚMERO VÁLIDO -> " + num);
        }else{
            console.log("NÚMERO INVÁLIDO -> " + num);
        }