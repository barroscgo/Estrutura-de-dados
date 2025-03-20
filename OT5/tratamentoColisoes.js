class TabelaHashEncadeamento {
    constructor(tamanho = 1000) {
        // Inicializa a tabela com listas vazias para tratar colisões por encadeamento
        this.tabela = new Array(tamanho).fill(null).map(() => []);
        this.tamanho = tamanho;
    }

    // Função hash simples que soma os valores ASCII dos caracteres da chave e aplica módulo
    calcularHash(chave) {
        let valorHash = 0;
        for (let i = 0; i < chave.length; i++) {
            valorHash += chave.charCodeAt(i);
        }
        return valorHash % this.tamanho;
    }

    // Insere um par (chave, valor) na tabela usando encadeamento
    inserir(chave, valor) {
        const indice = this.calcularHash(chave);
        // Verifica se a chave já existe para atualizar o valor
        for (let par of this.tabela[indice]) {
            if (par[0] === chave) {
                par[1] = valor;
                return;
            }
        }
        // Adiciona o novo par à lista no índice calculado
        this.tabela[indice].push([chave, valor]);
    }

    // Busca um valor pela chave
    buscar(chave) {
        const indice = this.calcularHash(chave);
        for (let par of this.tabela[indice]) {
            if (par[0] === chave) {
                return par[1]; // Retorna o valor associado à chave
            }
        }
        return undefined; // Retorna undefined se a chave não for encontrada
    }
}

class TabelaHashProbing {
    constructor(tamanho = 1000) {
        // Inicializa a tabela com valores nulos para usar probing linear
        this.tabela = new Array(tamanho).fill(null);
        this.tamanho = tamanho;
    }

    // Função hash simples semelhante à usada na abordagem de encadeamento
    calcularHash(chave) {
        let valorHash = 0;
        for (let i = 0; i < chave.length; i++) {
            valorHash += chave.charCodeAt(i);
        }
        return valorHash % this.tamanho;
    }

    // Insere um par (chave, valor) na tabela usando probing linear para resolver colisões
    inserir(chave, valor) {
        let indice = this.calcularHash(chave);
        
        // Probing linear: se a posição estiver ocupada e não for a mesma chave, busca a próxima posição disponível
        while (this.tabela[indice] !== null && this.tabela[indice][0] !== chave) {
            indice = (indice + 1) % this.tamanho; // Move para a próxima posição (circular)
        }
        // Insere ou atualiza o valor na posição encontrada
        this.tabela[indice] = [chave, valor];
    }

    // Busca um valor pela chave
    buscar(chave) {
        let indice = this.calcularHash(chave);
        
        // Probing linear: continua buscando até encontrar a chave ou um espaço vazio
        while (this.tabela[indice] !== null) {
            if (this.tabela[indice][0] === chave) {
                return this.tabela[indice][1]; // Retorna o valor associado à chave
            }
            indice = (indice + 1) % this.tamanho;
        }
        return undefined; // Retorna undefined se a chave não for encontrada
    }
}

// Testando desempenho das duas abordagens
const totalInsercoes = 1000;
const dados = Array.from({ length: totalInsercoes }, (_, i) => [`chave${i}`, `valor${i}`]);

console.time("Encadeamento");
const tabelaEncadeamento = new TabelaHashEncadeamento();
dados.forEach(([chave, valor]) => tabelaEncadeamento.inserir(chave, valor));
dados.forEach(([chave]) => tabelaEncadeamento.buscar(chave));
console.timeEnd("Encadeamento");

console.time("Probing Linear");
const tabelaProbing = new TabelaHashProbing();
dados.forEach(([chave, valor]) => tabelaProbing.inserir(chave, valor));
dados.forEach(([chave]) => tabelaProbing.buscar(chave));
console.timeEnd("Probing Linear");

/*
 Explicação do código:

 1. Criamos duas classes para implementar as técnicas de tratamento de colisão:
    - `TabelaHashEncadeamento` (Usa listas encadeadas para resolver colisões)
    - `TabelaHashProbing` (Usa probing linear para encontrar espaços vazios)

 2. A função `calcularHash(chave)` converte a chave em um índice aplicando uma soma dos valores ASCII dos caracteres e tirando o módulo do tamanho da tabela.

 3. No encadeamento:
    - Cada índice contém uma lista de pares (chave, valor).
    - Se houver colisão, adicionamos o novo par na lista correspondente.
    - A busca percorre a lista procurando a chave desejada.

 4. No probing linear:
    - Se a posição calculada estiver ocupada, procuramos a próxima posição disponível.
    - A busca percorre os índices sequencialmente até encontrar a chave ou um espaço vazio.

 5. Criamos um conjunto de 1000 pares (chave, valor) para testar ambas as implementações.

 6. Medimos o tempo de execução das inserções e buscas usando `console.time()` para comparar o desempenho das duas abordagens.

*/
