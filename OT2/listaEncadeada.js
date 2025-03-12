// Classe que representa um nó da lista encadeada
class Node {
    constructor(data) {
        this.data = data; // Armazena o valor do nó
        this.next = null; // Ponteiro para o próximo nó (inicialmente nulo)
    }
}

// Classe que representa a Lista Simplesmente Encadeada
class LinkedList {
    constructor() {
        this.head = null; // Inicialmente, a lista está vazia (cabeça é nula)
    }

    // Método para inserir um nó no início da lista
    insertAtBeginning(data) {
        const newNode = new Node(data); // Cria um novo nó
        newNode.next = this.head; // Aponta o novo nó para o antigo primeiro nó
        this.head = newNode; // Atualiza a cabeça da lista para o novo nó
    }

    // Método para inserir um nó no final da lista
    insertAtEnd(data) {
        const newNode = new Node(data); // Cria um novo nó
        if (!this.head) { // Se a lista estiver vazia, o novo nó vira a cabeça
            this.head = newNode;
            return;
        }
        let current = this.head; // Começa pelo primeiro nó
        while (current.next) { // Percorre a lista até o último nó
            current = current.next;
        }
        current.next = newNode; // Adiciona o novo nó no final da lista
    }

    // Método para remover um nó em uma posição específica
    removeAtPosition(position) {
        if (!this.head) return; // Se a lista estiver vazia, sai da função

        let temp = this.head;

        // Caso especial: se o nó a ser removido for o primeiro
        if (position === 0) {
            this.head = temp.next; // Atualiza a cabeça para o próximo nó
            return;
        }

        let prev = null;
        for (let i = 0; temp !== null && i < position; i++) { // Percorre a lista até a posição desejada
            prev = temp;
            temp = temp.next;
        }

        if (!temp) return; // Se a posição for inválida, sai da função

        prev.next = temp.next; // Remove a referência para o nó da posição especificada
    }

    // Método para buscar um nó pelo valor
    searchByValue(value) {
        let current = this.head; // Começa pelo primeiro nó
        let index = 0;

        while (current) { // Percorre a lista enquanto houver nós
            if (current.data === value) return index; // Se encontrar o valor, retorna a posição
            current = current.next;
            index++;
        }

        return -1; // Retorna -1 se o valor não for encontrado na lista
    }

    // Método para exibir a lista encadeada no console
    display() {
        let current = this.head;
        let result = "";
        while (current) { // Percorre a lista e concatena os valores
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null"); // Indica o final da lista
    }
}

/*Lista Simplesmente Encadeada:
○ Implemente uma lista simplesmente encadeada com as seguintes operações:
inserir no início, inserir no final e remover de uma posição específica.
○ Modifique o código anterior para permitir a busca de um elemento por valor*/