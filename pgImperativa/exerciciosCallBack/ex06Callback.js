function testandoCallback(a, b, ImprimirMensagem) {
    console.log(a + b);
    ImprimirMensagem();
}
testandoCallback(1,2, ImprimirMensagem => {
    console.log('soma finalizada!')
});