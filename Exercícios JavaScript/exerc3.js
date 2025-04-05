const numeros= [1, 2, 2, 3, 3, 3, 4, 4, 5, 5];

const numerosUnicos = [];

for (let i = 0; i < numeros.length; i++) {
    if (!numerosUnicos.includes(numeros[i])) {
        numerosUnicos.push(numeros[i]);

    }
}

console.log("Array de números únicos: ", numerosUnicos);
console.log("Quantidade de números únicos: ", numerosUnicos.length);