// Definição do Nó da Árvore
class Node {
    constructor(valorArvore) {
        this.valorArvore = valorArvore;
        this.left = null; // Filho esquerdo
        this.right = null;  // Filho direito
    }
}

// Definição da Árvore Binária
class ArvoreBinaria {
    constructor() {
        this.raiz = null;
    }

    // Inserir um novo valor na árvore (para teste)
    inserir(valorArvore) {
        const novoNode = new Node(valorArvore);
        if (!this.raiz) {
            this.raiz = novoNode;
        } else {
            this.#inserirRecursivo(this.raiz, novoNode);
        }
    }

    #inserirRecursivo(noAtual, novoNode) {
        if (novoNode.valorArvore < noAtual.valorArvore) {
            if (!noAtual.left) {
                noAtual.left = novoNode;
            } else {
                this.#inserirRecursivo(noAtual.left, novoNode);
            }
        } else {
            if (!noAtual.right) {
                noAtual.right = novoNode;
            } else {
                this.#inserirRecursivo(noAtual.right, novoNode);
            }
        }
    }

    //  Percurso In-Order (Esquerda -> Raiz -> Direita)
    inOrder(no = this.raiz){
        if(no){
            this.inOrder(no.left); //Percorre a subArvore esquerda
            console.log(no.valorArvore); //visita o node atual
            this.inOrder(no.left); //Percorre a subArvore direita
        }
    }

    //Percurso Pre-Order (Raiz -> Esquerda -> Direita)
    preOrder(no = this.raiz){
        if(no){
            console.log(no.valorArvore); // visita o nó atual
            this.preOrder(no.left); //Percorre o nó esquerdo
            this.preOrder(no.left); //Percorre direito
        }
    }

    //Precurso para Post-Order (Esquerda -> direita -> raiz)
    postOrder(no = this.raiz){
        if(no){
            this.postOrder(no.left);
            this.postOrder(no.right);
            console.log(no.valorArvore);
        }
    }
}

// Testando a implementação
const arvore = new ArvoreBinaria();
arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(2);
arvore.inserir(7);
arvore.inserir(12);
arvore.inserir(20);

console.log("In-Order:");
arvore.inOrder(); // Saída: 2 5 7 10 12 15 20

console.log("Pre-Order:");
arvore.preOrder(); // Saída: 10 5 2 7 15 12 20

console.log("Post-Order:");
arvore.postOrder(); // Saída: 2 7 5 12 20 15 10


/**
 *     10
      /  \
     5    15
    / \   /  \
   2   7 12  20

 * 
 * 
 *  A complexidade dos percursos In-Order, Pre-Order e Post-Order é: O(n)
Porque visitamos cada nó uma única vez
 */