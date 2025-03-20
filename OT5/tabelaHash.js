// Implementação de uma função de hash simples para chaves inteiras
function hashInt(key) {
    // Define o tamanho da tabela hash
    const tableSize = 10;
    // Calcula o índice aplicando módulo do tamanho da tabela
    return key % tableSize;
}

// Testando a função com números inteiros
console.log(hashInt(15)); // Saída: 5
console.log(hashInt(27)); // Saída: 7
console.log(hashInt(33)); // Saída: 3

// Implementação de uma função de hash para strings
function hashString(key) {
    const tableSize = 10;
    let hashValue = 0;
    
    // Percorre cada caractere da string
    for (let i = 0; i < key.length; i++) {
        // Soma o valor ASCII do caractere
        hashValue += key.charCodeAt(i);
    }
    
    // Calcula o índice aplicando módulo do tamanho da tabela
    return hashValue % tableSize;
}

// Testando a função com strings
console.log(hashString("hello")); // Saída: depende da soma dos valores ASCII
console.log(hashString("world")); // Saída: depende da soma dos valores ASCII
console.log(hashString("hash"));  // Saída: depende da soma dos valores ASCII
