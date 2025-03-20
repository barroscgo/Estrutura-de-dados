class TabelaHash {
    constructor(tamanho) {
        // Inicializa a tabela com listas vazias para encadeamento
        this.tabela = new Array(tamanho).fill(null).map(() => []);
        this.tamanho = tamanho;
    }

    // Função hash eficiente usando multiplicação para melhor distribuição
    calcularHash(chave) {
        let valorHash = 0;
        const fator = 0.6180339887; // Constante da razão áurea para melhor espalhamento
        for (let i = 0; i < chave.length; i++) {
            valorHash += chave.charCodeAt(i) * (i + 1);
        }
        return Math.floor(this.tamanho * ((valorHash * fator) % 1));
    }

    // Insere um par (chave, valor) na tabela hash
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

    // Busca um valor pela chave
    buscar(chave) {
        const indice = this.calcularHash(chave);
        for (let par of this.tabela[indice]) {
            if (par[0] === chave) {
                return par[1]; // Retorna o valor correspondente à chave
            }
        }
        return undefined; // Retorna undefined se a chave não for encontrada
    }

    // Remove um elemento pela chave
    remover(chave) {
        const indice = this.calcularHash(chave);
        const novaLista = this.tabela[indice].filter(par => par[0] !== chave);
        
        if (novaLista.length === this.tabela[indice].length) {
            return "Elemento não encontrado.";
        }
        
        this.tabela[indice] = novaLista;
        return "Elemento removido com sucesso.";
    }
}

// Função para medir o desempenho
function medirDesempenho(tamanhoTabela) {
    const tabela = new TabelaHash(tamanhoTabela);
    const elementos = Array.from({ length: 500 }, (_, i) => [`chave${i}`, `valor${i}`]);
    
    console.time(`Inserção - Tamanho ${tamanhoTabela}`);
    elementos.forEach(([chave, valor]) => tabela.inserir(chave, valor));
    console.timeEnd(`Inserção - Tamanho ${tamanhoTabela}`);

    console.time(`Busca - Tamanho ${tamanhoTabela}`);
    elementos.forEach(([chave]) => tabela.buscar(chave));
    console.timeEnd(`Busca - Tamanho ${tamanhoTabela}`);

    console.time(`Remoção - Tamanho ${tamanhoTabela}`);
    elementos.forEach(([chave]) => tabela.remover(chave));
    console.timeEnd(`Remoção - Tamanho ${tamanhoTabela}`);
}

// Teste com diferentes tamanhos de tabela
[50, 100, 250].forEach(medirDesempenho);

/*
Explicação:
- Criamos uma TabelaHash com uma função hash eficiente baseada na razão áurea.
- Medimos o tempo necessário para inserir, buscar e remover 500 elementos.
- Testamos diferentes tamanhos de tabela (50, 100, 250) e analisamos o impacto no desempenho.
- A expectativa é que tabelas maiores reduzam colisões e melhorem o tempo médio de busca e remoção.
*/
