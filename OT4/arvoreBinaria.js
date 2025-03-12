
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Classe árvore binária de busca
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

     
    inserir(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }

    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

     
    search(value) {
        return this.#buscarNode(this.root, value);
    }

    #buscarNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.#buscarNode(node.left, value);
        } else if (value > node.value) {
            return this.#buscarNode(node.right, value);
        } else {
            return true; // Valor encontrado
        }
    }

        // Remover um nó da árvore
        remove(value) {
            this.root = this.#removeNode(this.root, value);
        }
    
        #removeNode(node, value) {
            if (node === null) {
                return null;
            }
    
            if (value < node.value) {
                node.left = this.#removeNode(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = this.#removeNode(node.right, value);
                return node;
            } else {
                // Caso 1: Nó sem filhos
                if (node.left === null && node.right === null) {
                    return null;
                }
    
                // Caso 2: Nó com apenas um filho
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                }
    
                // Caso 3: Nó com dois filhos
                const minValue = this.#findMinValue(node.right);
                node.value = minValue;
                node.right = this.#removeNode(node.right, minValue);
                return node;
            }
        }
    
        #findMinValue(node) {
            while (node.left !== null) {
                node = node.left;
            }
            return node.value;
        }
    
        // Percurso in-order (Esquerda, Raiz, Direita)
        inOrder(node = this.root) {
            if (node !== null) {
                this.inOrder(node.left);
                console.log(node.value);
                this.inOrder(node.right);
            }
        }
    
        // Percurso pre-order (Raiz, Esquerda, Direita)
        preOrder(node = this.root) {
            if (node !== null) {
                console.log(node.value);
                this.preOrder(node.left);
                this.preOrder(node.right);
            }
        }
    
        // Percurso post-order (Esquerda, Direita, Raiz)
        postOrder(node = this.root) {
            if (node !== null) {
                this.postOrder(node.left);
                this.postOrder(node.right);
                console.log(node.value);
            }
        }
    }
    
    // Testando a Árvore Binária de Busca
    const bst = new BinarySearchTree();
    const values = [50, 30, 70, 20, 40, 60, 80];
    
    values.forEach(value => bst.inserir(value));
    
    console.log("In-Order Traversal:");
    bst.inOrder();  // Deve imprimir os valores em ordem crescente
    
    console.log("\nPre-Order Traversal:");
    bst.preOrder();  // Raiz primeiro
    
    console.log("\nPost-Order Traversal:");
    bst.postOrder(); // Raiz por último
    
    console.log("\nBusca pelo valor 40:", bst.search(40)); // Deve retornar true
    console.log("Busca pelo valor 100:", bst.search(100)); // Deve retornar false
    
    console.log("\nRemovendo o valor 30:");
    bst.remove(30);
    console.log("In-Order após remoção:");
    bst.inOrder();
    
/**
 * Complexidade de Tempo
    logarítmico 
    𝑂(log 𝑛)
 */