// Classe que representa um nó da lista duplamente encadeada
class Node {
    constructor(data) {
        this.data = data; // Valor armazenado no nó
        this.next = null; // Ponteiro para o próximo nó
        this.prev = null; // Ponteiro para o nó anterior
    }
}

// Classe que representa a Lista Duplamente Encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null; // Primeiro nó da lista
        this.tail = null; // Último nó da lista
    }

    // Inserir no início da lista
    insertAtBeginning(data) {
        const newNode = new Node(data);

        if (!this.head) { // Se a lista estiver vazia
            this.head = this.tail = newNode; // O novo nó é a cabeça e a cauda
        } else {
            newNode.next = this.head; // O próximo do novo nó aponta para o antigo primeiro nó
            this.head.prev = newNode; // O antigo primeiro nó aponta para o novo nó
            this.head = newNode; // O novo nó se torna a nova cabeça da lista
        }
    }

    // Remover do final da lista
    removeFromEnd() {
        if (!this.tail) return; // Se a lista estiver vazia, não faz nada

        if (this.head === this.tail) { // Se houver apenas um elemento
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev; // Move a cauda para o nó anterior
            this.tail.next = null; // Remove a referência para o antigo último nó
        }
    }

    // Percorrer a lista na ordem direta
    traverseForward() {
        let current = this.head;
        let result = "Lista (frente): ";
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // Percorrer a lista na ordem reversa
    traverseBackward() {
        let current = this.tail;
        let result = "Lista (trás): ";
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        console.log(result + "null");
    }
}

/*Lista Duplamente Encadeada:
○ Implemente uma lista duplamente encadeada com as operações de inserir no
início e remover do final da lista.
○ Crie uma função que percorra a lista em ambas as direções, imprimindo os
valores dos nós.*/