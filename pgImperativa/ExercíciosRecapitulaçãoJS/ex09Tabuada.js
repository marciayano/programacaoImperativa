/*Escreva um programa que exibe qualquer tabuada completa. 
O programa deve perguntar ao usuário qual tabuada ele deseja visualizar, 
que irá responder digitando um número de 1 a 10. */

//TABUADA: Digite um número:
let num = 10
        var cont = 1;
        var calculo = 0;

        console.log("TABUADA: " + num );

        for(i = 1; i<=10 ; i ++){
            

            calculo = num * cont;
            console.log(num + " x " + cont + " = " + calculo);
            cont++;
        }
