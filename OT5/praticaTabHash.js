class DicionarioHash {
    constructor(tamanho = 1000) {
        // Inicializa a tabela hash com listas vazias para encadeamento
        this.tabela = new Array(tamanho).fill(null).map(() => []);
        this.tamanho = tamanho;
    }

    // Função hash para calcular o índice baseado na palavra
    calcularHash(palavra) {
        let valorHash = 0;
        for (let i = 0; i < palavra.length; i++) {
            valorHash += palavra.charCodeAt(i);
        }
        return valorHash % this.tamanho;
    }

    // Adiciona uma palavra com seu significado no dicionário
    
    adicionar(palavra, significado) {
        const indice = this.calcularHash(palavra);
        
        // Verifica se a palavra já existe e atualiza o significado
        for (let par of this.tabela[indice]) {
            if (par[0] === palavra) {
                par[1] = significado;
                return;
            }
        }
        
        // Se não existir, adiciona a nova palavra e significado
        this.tabela[indice].push([palavra, significado]);
    }

    // Busca o significado de uma palavra
    buscar(palavra) {
        const indice = this.calcularHash(palavra);
        
        for (let par of this.tabela[indice]) {
            if (par[0] === palavra) {
                return par[1]; // Retorna o significado da palavra
            }
        }
        return "Palavra não encontrada no dicionário."; // Retorna mensagem se não encontrar
    }

    // Remove uma palavra do dicionário
    remover(palavra) {
        const indice = this.calcularHash(palavra);
        
        const novaLista = this.tabela[indice].filter(par => par[0] !== palavra);
        
        if (novaLista.length === this.tabela[indice].length) {
            return "Palavra não encontrada para remoção.";
        }
        
        this.tabela[indice] = novaLista;
        return "Palavra removida com sucesso.";
    }
}

// Testando o dicionário hash
const dicionario = new DicionarioHash();
dicionario.adicionar("computador", "Máquina eletrônica que processa dados");
dicionario.adicionar("programação", "Atividade de escrever códigos para softwares");
dicionario.adicionar("javascript", "Linguagem de programação usada na web");

dicionario.adicionar("computador", "Dispositivo usado para cálculos e processamento de dados"); // Atualiza significado

console.log(dicionario.buscar("computador")); // Deve exibir o novo significado
console.log(dicionario.buscar("inteligência")); // Palavra inexistente

console.log(dicionario.remover("programação")); // Remove a palavra
console.log(dicionario.buscar("programação")); // Verifica se foi removida
