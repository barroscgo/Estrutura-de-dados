class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Método para adicionar um novo nó no final da lista
    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Função recursiva para contar os nós
    countNodes(node = this.head) {
        if (node === null) {
            return 0; // Caso base: Se o nó for null, retornamos 0
        }
        return 1 + this.countNodes(node.next); // Conta o nó atual e faz a recursão no próximo
    }
}

// Teste
const list = new LinkedList();
list.add(5);
list.add(10);
list.add(15);
list.add(20);

console.log("Número de nós na lista:", list.countNodes());  // Saída esperada: 4

/**
 * Portanto, a complexidade de tempo é O(n), onde n é o número de nós na lista, pois a função faz uma chamada recursiva para cada nó até o final da lista.

 */