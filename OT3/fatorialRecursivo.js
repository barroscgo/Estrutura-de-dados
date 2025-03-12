function fatorialTeste(n){
    //Caso base: Se N foir 0 ou 1, retorna 1, pois 0! e 1! (! - siginifica fatorial) são definidos cmo 1
    if(n === 0 || n === 1){
        return 1;
    }

    //caso recursivo: Multiplicamos n pelo fatorial de (n-1)
    return n*fatorialTeste(n-1);
}

//Exemplo se o n fosse igual a 5 =
//fatorial(5) → 5 * fatorial(4)
//fatorial(4) → 4 * fatorial(3)
//fatorial(3) → 3 * fatorial(2)
//fatorial(2) → 2 * fatorial(1)
//fatorial(1) → 1 (caso base)
//Por isso n-1

/**
 * TESTANDO A FUNÇÃO ACIMA
 */

console.log(fatorialTeste(5)) //tem que retornar 120
console.log(fatorialTeste(3)) //tem que retornar 6
console.log(fatorialTeste(7)) //tem que retornar 5040
console.log(fatorialTeste(0)) //tem que retornar 1


/**
 * Complexidade de Tempo
A cada chamada recursiva, reduzimos n em 1, 
até chegar ao caso base. Isso resulta em n chamadas no pior caso. Portanto, a complexidade de tempo é:

O(n) (linear), pois fazemos n multiplicações antes de chegar ao caso base.
 */