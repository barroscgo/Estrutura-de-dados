/**
 * A função hanoi(n, origem, destino, auxiliar) recebe 4 parâmetros:
*n: número de discos a ser movido.
*origem: a haste de onde os discos vão ser movidos.
*destino: a haste para onde os discos vão ser movidos.
auxiliar: a haste auxiliar que é usada no processo recursivo.
Se n === 1, movemos o disco diretamente da origem para o destino. Esse é o caso base da recursão.
Para n > 1, a função recursivamente move n-1 discos da origem para a haste auxiliar, 
move o disco maior da origem para o destino, e depois move os n-1 discos da haste auxiliar para o destino.
 */

function hanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco 1 de ${origem} para ${destino}`);
        return;
    }
    // Passo 1: Mover n-1 discos da origem para a auxiliar
    hanoi(n - 1, origem, auxiliar, destino);

    // Passo 2: Mover o disco maior da origem para o destino
    console.log(`Mover disco ${n} de ${origem} para ${destino}`);

    // Passo 3: Mover os n-1 discos da auxiliar para o destino
    hanoi(n - 1, auxiliar, destino, origem);
}

// Teste
const n = 3; // Número de discos
hanoi(n, 'A', 'C', 'B'); // Mover 3 discos da haste A para a haste C usando a haste B como auxiliar


/**
 * Complexidade de tempo: 
𝑂(2n), exponencial.
 */