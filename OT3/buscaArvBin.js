// Classe que representa um nó da árvore binária de busca
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Classe que representa a árvore binária de busca
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Método para inserir um novo valor na árvore
    insert(value) {
        this.root = this.#insertRecursive(this.root, value);
    }

    #insertRecursive(node, value) {
        if (node === null) {
            return new TreeNode(value); // Cria um novo nó se a posição estiver vazia
        }
        if (value < node.value) {
            node.left = this.#insertRecursive(node.left, value); // Insere na subárvore esquerda
        } else {
            node.right = this.#insertRecursive(node.right, value); // Insere na subárvore direita
        }
        return node;
    }

    // Método para buscar um valor na árvore (chamada pública)
    search(value) {
        return this.#searchRecursive(this.root, value);
    }

    // Função recursiva para buscar um valor na árvore
    #searchRecursive(node, value) {
        if (node === null) {
            return false; // Se o nó for null, o valor não está na árvore
        }
        if (node.value === value) {
            return true; // Encontrou o valor
        }
        if (value < node.value) {
            return this.#searchRecursive(node.left, value); // Busca na subárvore esquerda
        } else {
            return this.#searchRecursive(node.right, value); // Busca na subárvore direita
        }
    }
}

// Testando a implementação
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

console.log(bst.search(7));  // true (o valor 7 está na árvore)
console.log(bst.search(13)); // true (o valor 13 está na árvore)
console.log(bst.search(20)); // false (o valor 20 não está na árvore)


/**
 *  a complexidade de tempo da busca depende diretamente do balanceamento da árvore. Em uma árvore binária balanceada, 
 * a busca é muito eficiente com O(log n), enquanto em uma árvore desbalanceada, ela pode se tornar O(n).
 */