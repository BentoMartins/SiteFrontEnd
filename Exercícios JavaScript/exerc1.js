const numeros = [1, 2, 3, 4, 5];

let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    //console.log(numeros[i]);
    soma += numeros[i];
}

console.log('Resultado da soma: ' + soma)