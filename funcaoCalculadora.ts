let somar : (n1 : number, n2 : number) => number

function calculo(numero1 : number, numero2 : number) : number {
  return numero1 + numero2;
}

// função anonima, quando não tem nome. Usamos para quando precisamos
// passar uma função como parametro
(numero1 : number, numero2 : number) : number => {
  return numero1 + numero2
}

//e podemos colocar ela dentro de uma variavel
somar = (numero1 : number, numero2 : number) : number => {
  return numero1 + numero2
}

let s = somar(45,89)

console.log("Resultado: ", s);
