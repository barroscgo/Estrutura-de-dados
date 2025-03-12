// Classe que representa um nó da Árvore AVL
class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
        this.altura = 1;
    }
}

// Classe da Árvore AVL
class ArvoreAVL {
    constructor() {
        this.raiz = null;
    }

    // Retorna a altura de um nó
    obterAltura(no) {
        return no ? no.altura : 0;
    }

    // Calcula o fator de balanceamento do nó
    obterFatorBalanceamento(no) {
        return no ? this.obterAltura(no.esquerda) - this.obterAltura(no.direita) : 0;
    }

    // Rotação simples à direita
    rotacaoDireita(y) {
        let x = y.esquerda;
        let T2 = x.direita;
        x.direita = y;
        y.esquerda = T2;
        y.altura = Math.max(this.obterAltura(y.esquerda), this.obterAltura(y.direita)) + 1;
        x.altura = Math.max(this.obterAltura(x.esquerda), this.obterAltura(x.direita)) + 1;
        return x;
    }

    // Rotação simples à esquerda
    rotacaoEsquerda(x) {
        let y = x.direita;
        let T2 = y.esquerda;
        y.esquerda = x;
        x.direita = T2;
        x.altura = Math.max(this.obterAltura(x.esquerda), this.obterAltura(x.direita)) + 1;
        y.altura = Math.max(this.obterAltura(y.esquerda), this.obterAltura(y.direita)) + 1;
        return y;
    }

    // Inserir um valor na árvore AVL
    inserir(no, valor) {
        if (!no) return new NoArvore(valor);

        if (valor < no.valor) {
            no.esquerda = this.inserir(no.esquerda, valor);
        } else if (valor > no.valor) {
            no.direita = this.inserir(no.direita, valor);
        } else {
            return no; // Não permite valores duplicados
        }

        // Atualizar a altura do nó
        no.altura = Math.max(this.obterAltura(no.esquerda), this.obterAltura(no.direita)) + 1;
        let balanceamento = this.obterFatorBalanceamento(no);

        // Aplicar rotações para manter o balanceamento
        if (balanceamento > 1 && valor < no.esquerda.valor) return this.rotacaoDireita(no);
        if (balanceamento < -1 && valor > no.direita.valor) return this.rotacaoEsquerda(no);
        if (balanceamento > 1 && valor > no.esquerda.valor) {
            no.esquerda = this.rotacaoEsquerda(no.esquerda);
            return this.rotacaoDireita(no);
        }
        if (balanceamento < -1 && valor < no.direita.valor) {
            no.direita = this.rotacaoDireita(no.direita);
            return this.rotacaoEsquerda(no);
        }
        return no;
    }

    adicionar(valor) {
        this.raiz = this.inserir(this.raiz, valor);
    }

    // Encontrar o menor valor na subárvore direita (para remoção)
    menorValorNo(no) {
        let atual = no;
        while (atual.esquerda !== null) {
            atual = atual.esquerda;
        }
        return atual;
    }

    // Remover um nó
    remover(no, valor) {
        if (!no) return no;

        if (valor < no.valor) {
            no.esquerda = this.remover(no.esquerda, valor);
        } else if (valor > no.valor) {
            no.direita = this.remover(no.direita, valor);
        } else {
            if (!no.esquerda || !no.direita) {
                no = no.esquerda ? no.esquerda : no.direita;
            } else {
                let temp = this.menorValorNo(no.direita);
                no.valor = temp.valor;
                no.direita = this.remover(no.direita, temp.valor);
            }
        }

        if (!no) return no;

        no.altura = Math.max(this.obterAltura(no.esquerda), this.obterAltura(no.direita)) + 1;
        let balanceamento = this.obterFatorBalanceamento(no);

        // Aplicar rotações para manter o balanceamento
        if (balanceamento > 1 && this.obterFatorBalanceamento(no.esquerda) >= 0) return this.rotacaoDireita(no);
        if (balanceamento > 1 && this.obterFatorBalanceamento(no.esquerda) < 0) {
            no.esquerda = this.rotacaoEsquerda(no.esquerda);
            return this.rotacaoDireita(no);
        }
        if (balanceamento < -1 && this.obterFatorBalanceamento(no.direita) <= 0) return this.rotacaoEsquerda(no);
        if (balanceamento < -1 && this.obterFatorBalanceamento(no.direita) > 0) {
            no.direita = this.rotacaoDireita(no.direita);
            return this.rotacaoEsquerda(no);
        }
        return no;
    }

    deletar(valor) {
        this.raiz = this.remover(this.raiz, valor);
    }

    // Percurso in-order (exibir valores em ordem crescente)
    emOrdem(no = this.raiz) {
        if (no) {
            this.emOrdem(no.esquerda);
            console.log(no.valor);
            this.emOrdem(no.direita);
        }
    }
}

// Testando a Árvore AVL
const avl = new ArvoreAVL();
const valores = [30, 20, 40, 10, 25, 35, 50, 5, 15, 27];
valores.forEach(valor => avl.adicionar(valor));

console.log("Percurso In-Order (Ordenado):");
avl.emOrdem();

console.log("\nRemovendo o valor 20:");
avl.deletar(20);
avl.emOrdem();
