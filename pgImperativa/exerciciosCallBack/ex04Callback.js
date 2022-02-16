const frutas = ['Maçã', 'Banana', 'Melancia']

function listaCompras(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}
frutas.forEach(listaCompras)
//A impressão é:
//1 - Maçã
//2 - Banana
//3 – Melancia