class TabelaHashPersonalizada {
    constructor(tamanho = 100) {
        // Inicializa a tabela com listas vazias para encadeamento
        this.tabela = new Array(tamanho).fill(null).map(() => []);
        this.tamanho = tamanho;
    }

    // Função de hash personalizada para distribuir valores uniformemente
    calcularHash(chave) {
        let valorHash = 0;
        const fator = 31; // Número primo para espalhamento uniforme
        for (let i = 0; i < chave.length; i++) {
            valorHash = (valorHash * fator + chave.charCodeAt(i)) % this.tamanho;
        }
        return valorHash;
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

    // Contagem de colisões para análise de distribuição
    contarColisoes() {
        return this.tabela.filter(lista => lista.length > 1).length;
    }
}

// Testando a função de hash personalizada
function testarDistribuicao() {
    const tabela = new TabelaHashPersonalizada(100);
    const palavrasTeste = [
        "banana", "maçã", "laranja", "abacaxi", "uva", "pera", "pêssego", "ameixa", "cereja", "kiwi",
        "notebook", "computador", "teclado", "mouse", "monitor", "cadeira", "mesa", "telefone", "impressora", "tablet",
        "jogador", "time", "gol", "futebol", "camisa", "bola", "árbitro", "torcida", "estádio", "chuteira",
        "python", "javascript", "java", "c++", "typescript", "html", "css", "react", "nodejs", "vuejs"
    ];
    
    palavrasTeste.forEach(palavra => tabela.inserir(palavra, `Significado de ${palavra}`));
    
    console.log(`Colisões detectadas: ${tabela.contarColisoes()} de ${palavrasTeste.length} palavras.`);
}

testarDistribuicao();

/*
Explicação:
- Criamos uma função de hash personalizada utilizando um fator primo (31) para espalhamento uniforme.
- Testamos a distribuição com um conjunto diversificado de palavras.
- Medimos a quantidade de colisões para avaliar a eficiência da função de hash.
- Se muitas colisões forem detectadas, podemos aumentar o fator primo ou ajustar a estratégia de hashing.
*/
