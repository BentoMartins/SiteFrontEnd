const listaPessoas = [
    { nome: "João", idade: 25},
    { nome: "Maria", idade: 18},
    { nome: "Pedro", idade: 30},
];

for (let i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].idade > 18) {
        console.log(listaPessoas[i]);
    }
}
