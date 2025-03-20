class TabelaHash {
    constructor(tamanho = 10) {
        this.tabela = new Array(tamanho).fill(null).map(() => []);
        this.tamanho = tamanho;
    }

    // Função hash para strings
    calcularHash(chave) {
        let valorHash = 0;
        for (let i = 0; i < chave.length; i++) {
            valorHash += chave.charCodeAt(i);
        }
        return valorHash % this.tamanho;
    }

    // Inserir um par (chave, valor) na tabela hash
    inserir(chave, valor) {
        const indice = this.calcularHash(chave);
        for (let par of this.tabela[indice]) {
            if (par[0] === chave) {
                par[1] = valor; // Atualiza o valor se a chave já existir
                return;
            }
        }
        this.tabela[indice].push([chave, valor]); // Adiciona novo par (chave, valor)
    }

    // Buscar um valor pela chave
    buscar(chave) {
        const indice = this.calcularHash(chave);
        for (let par of this.tabela[indice]) {
            if (par[0] === chave) {
                return par[1]; // Retorna o valor correspondente à chave
            }
        }
        return undefined; // Retorna undefined se a chave não for encontrada
    }

    // Remover um elemento pela chave
    remover(chave) {
        const indice = this.calcularHash(chave);
        this.tabela[indice] = this.tabela[indice].filter(par => par[0] !== chave);
    }
}

// Testando a tabela hash com encadeamento
const tabelaHash = new TabelaHash();
tabelaHash.inserir("nome", "Alice");
tabelaHash.inserir("idade", 25);
tabelaHash.inserir("cidade", "Nova York");

console.log(tabelaHash.buscar("nome")); // Alice
console.log(tabelaHash.buscar("idade")); // 25
console.log(tabelaHash.buscar("cidade")); // Nova York

tabelaHash.remover("idade");
console.log(tabelaHash.buscar("idade")); // undefined
