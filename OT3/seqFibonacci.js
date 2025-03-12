function fibonacci(n){
    // Caso base: se n for 0, retorna 0. Se for 1, retorna 1.
    if(n === 0) return 0;
    if(n === 1) return 1;

    //Caso recursivo: Soma os dois anteriores na sequencia
    return fibonacci(n-1) + fibonacci(n-2);
}

/**
 * TESTANDO ESSA FUNÇÃO
 */

console.log(fibonacci(6)) //retorno 8
console.log(fibonacci(10)) //retorno 55
console.log(fibonacci(0)) //retorno 0
console.log(fibonacci(1)) //retorno 1

//COMPLEXIDADE DE TEMPO - O(2ⁿ) - O número de chamadas cresce exponencialmente, tornando a complexidade

//------------------------------------------------------------------

/**
 * ○ Analise o desempenho do algoritmo e sugira uma otimização (por exemplo,
usando memoization ou uma abordagem iterativa).

    MEMORIZATION
 */

    function fibonacciTest (n, test = {}){
        //Se já calculamos Fibonacci (n), retornamos o valor armazenado
        if(n in test) return test[n];

        //Caso base
        if(n === 0) return 0;
        if(n === 1) return 1;

        //Armazena o resultado no objeto *test* e retorna o valor calculado
        test[n] = fibonacciTest(n-1, test) + fibonacciTest(n -2, test);
        return test[n];
    }

    //testando
    console.log('Testes do Memoization')
    console.log(fibonacciTest(6)); // Retorna 8
    console.log(fibonacciTest(10)); // Retorna 55
    console.log(fibonacciTest(50)); // Retorna 12.586.269.025

    /**
     * Complexidade de Tempo: O(n)
🔹      Vantagens: Usa apenas O(1) de espaço, pois mantém apenas os últimos dois valores da sequência.
     */