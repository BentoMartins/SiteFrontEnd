const numeros = [10, 5, 8, 20, 3];

let maiorNumero = numeros [0];

for( let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);