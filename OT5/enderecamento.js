class TabelaHash {
    constructor(tamanho = 10) {
        this.tabela = new Array(tamanho).fill(null);
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

    // Inserir um par (chave, valor) usando probing linear
    inserir(chave, valor) {
        let indice = this.calcularHash(chave);
        let contador = 0;
        
        // Probing linear para encontrar um espaço livre
        while (this.tabela[indice] !== null && this.tabela[indice][0] !== chave) {
            indice = (indice + 1) % this.tamanho;
            contador++;
            if (contador === this.tamanho) {
                console.log("Tabela Hash cheia!");
                return;
            }
        }
        
        this.tabela[indice] = [chave, valor];
    }

    // Buscar um valor pela chave
    buscar(chave) {
        let indice = this.calcularHash(chave);
        let contador = 0;
        
        while (this.tabela[indice] !== null) {
            if (this.tabela[indice][0] === chave) {
                return this.tabela[indice][1];
            }
            indice = (indice + 1) % this.tamanho;
            contador++;
            if (contador === this.tamanho) {
                break;
            }
        }
        return undefined;
    }

    // Remover um elemento pela chave
    remover(chave) {
        let indice = this.calcularHash(chave);
        let contador = 0;
        
        while (this.tabela[indice] !== null) {
            if (this.tabela[indice][0] === chave) {
                this.tabela[indice] = null;
                return;
            }
            indice = (indice + 1) % this.tamanho;
            contador++;
            if (contador === this.tamanho) {
                break;
            }
        }
    }
}

// Testando a tabela hash com probing linear
const tabelaHash = new TabelaHash();
tabelaHash.inserir("nome", "Alice");
tabelaHash.inserir("idade", 25);
tabelaHash.inserir("cidade", "Nova York");
tabelaHash.inserir("país", "Brasil");
tabelaHash.inserir("profissão", "Engenheira");
tabelaHash.inserir("empresa", "TechCorp");

console.log(tabelaHash.buscar("nome")); // Alice
console.log(tabelaHash.buscar("idade")); // 25
console.log(tabelaHash.buscar("cidade")); // Nova York

tabelaHash.remover("idade");
console.log(tabelaHash.buscar("idade")); // undefined
