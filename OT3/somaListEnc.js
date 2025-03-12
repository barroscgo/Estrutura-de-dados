class Node{
    constructor(valor){
        this.valor = valor; //Armazena o valor do nó
        this.next = null // Aponto para o próximo nó
    }
}
// Classe que representa a Lista Simplesmente Encadeada
class LinkedList {
    constructor() {
        this.head = null; // Inicialmente, a lista está vazia (cabeça é nula)
    }

    // Método para inserir um nó no final da lista
    add(valor) {
        const newNode = new Node(valor); // Cria um novo nó
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

    // Função recursiva para somar todos os elementos da lista
    somarElementos(node = this.head){
        if(node === null){
            return 0; //Caso base, se o nó for null, retorna 0
        }

        return node.valor + this.somarElementos(node.next); // Soma o valor atual (node.valor) com o restante dos elementos (this.somarElementos(node.next))
    }

}

// Teste
const list = new LinkedList();
list.add(2);
list.add(4);
list.add(6);
list.add(8);

console.log("Soma dos elementos da lista:", list.somarElementos()); 

/**
 * O tempo de execução é O(n), pois percorremos toda a lista uma vez.
 */