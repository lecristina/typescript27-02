function calculadora(numero1 : number, numero2 : number, 
                     operacao : string) : number {

    if (operacao === "+") {
        return numero1 + numero2
    } else if (operacao === "-") {
        return numero1 - numero2
    } else if (operacao === "*") {
        return numero1 * numero2
    } else if (operacao === "/") {
        return numero1 / numero2 
    } else if (operacao === "**") {
        return numero1 ** numero2
    } else {
        return NaN
    }
}

let r1 = calculadora(10, 20, "+")
let r2 = calculadora(10, 20, "-")
let r3 = calculadora(10, 20, "*")
let r4 = calculadora(10, 20, "/")
let r5 = calculadora(2, 16, "**")
console.log("resultado 1:", r1);
console.log("resultado 2:", r2);
console.log("resultado 3:", r3);
console.log("resultado 4:", r4);
console.log("resultado 4:", r5);
