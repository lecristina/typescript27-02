function calculadoraNova(n1 : number, n2 : number, 
            operacao : (numero1 : number, numero2 : number) => number
        ) : number {

            return operacao(n1, n2)
}

function somarNovo (n1 : number, n2 : number) : number {
    return n1 + n2;
}

function subtrairNovo (n1 : number, n2 : number) : number {
    return n1 - n2;
}

function multiplicarNovo (n1 : number, n2 : number) : number {
    return n1 * n2;
}

function dividirNovo (n1 : number, n2 : number) : number {
    return n1 / n2;
}

let r10 = calculadoraNova(10,10, somarNovo)
console.log("Somar 10 + 10: ", r10);

let r11 = calculadoraNova(10,10, subtrairNovo)
console.log("Subtrair 10 - 10: ", r11);

let r12 = calculadoraNova(10,10, multiplicarNovo)
console.log("Multiplicar 10 * 10: ", r12);

let r13 = calculadoraNova(10,10, dividirNovo)
console.log("Dividir 10 / 10: ", r13);

