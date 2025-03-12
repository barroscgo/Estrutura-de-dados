const numeros = ["1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "10"];

    const numero = numeros.find(function(numero){

        return numero === "3";
});

console.log(numero);

numeros.splice(2,1);

console.log(numeros);

/*○ Crie um vetor que armazene 10 números inteiros e desenvolva uma função
para buscar um número específico no vetor.
○ Implemente uma função para remover um elemento do vetor em uma
posição específica.*/
