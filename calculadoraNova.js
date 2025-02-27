function calculadoraNova(n1, n2, operacao) {
    return operacao(n1, n2);
}
function somarNovo(n1, n2) {
    return n1 + n2;
}
function subtrairNovo(n1, n2) {
    return n1 - n2;
}
function multiplicarNovo(n1, n2) {
    return n1 * n2;
}
function dividirNovo(n1, n2) {
    return n1 / n2;
}
var r10 = calculadoraNova(10, 10, somarNovo);
console.log("Somar 10 + 10: ", r10);
var r11 = calculadoraNova(10, 10, subtrairNovo);
console.log("Subtrair 10 - 10: ", r11);
var r12 = calculadoraNova(10, 10, multiplicarNovo);
console.log("Multiplicar 10 * 10: ", r12);
var r13 = calculadoraNova(10, 10, dividirNovo);
console.log("Dividir 10 / 10: ", r13);
