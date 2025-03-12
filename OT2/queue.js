// Classe para uma fila simples
class Queue {
    constructor() {
        this.items = []; // Armazena os elementos da fila
    }

    // Adiciona um elemento ao final da fila
    enqueue(element) {
        this.items.push(element);
    }

    // Remove e retorna o primeiro elemento da fila
    dequeue() {
        if (this.isEmpty()) {
            console.log("A fila está vazia!");
            return null;
        }
        return this.items.shift();
    }

    // Retorna o primeiro elemento sem removê-lo
    peek() {
        return this.isEmpty() ? null : this.items[0];
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Exibe a fila
    display() {
        console.log("Fila:", this.items.join(" <- "));
    }
}

// -------------------- Testando a Fila Simples --------------------
const queue = new Queue();
queue.enqueue("Cliente 1");
queue.enqueue("Cliente 2");
queue.enqueue("Cliente 3");

console.log("\nFila inicial:");
queue.display(); // Cliente 1 <- Cliente 2 <- Cliente 3

console.log("\nAtendendo:", queue.dequeue()); // Remove Cliente 1
queue.display(); // Cliente 2 <- Cliente 3

console.log("\nPróximo a ser atendido:", queue.peek()); // Cliente 2

// -------------------- Fila Circular --------------------
class CircularQueue {
    constructor(size) {
        this.items = new Array(size).fill(null);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    // Verifica se a fila está cheia
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.front === -1;
    }

    // Adiciona um elemento à fila circular
    enqueue(element) {
        if (this.isFull()) {
            console.log("A fila está cheia!");
            return;
        }

        if (this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = element;
    }

    // Remove e retorna o primeiro elemento da fila circular
    dequeue() {
        if (this.isEmpty()) {
            console.log("A fila está vazia!");
            return null;
        }

        let removed = this.items[this.front];
        this.items[this.front] = null;

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return removed;
    }

    // Exibe a fila circular
    display() {
        console.log("Fila Circular:", this.items.join(" <- "));
    }
}

// -------------------- Testando a Fila Circular --------------------
const circularQueue = new CircularQueue(3);
circularQueue.enqueue("A");
circularQueue.enqueue("B");
circularQueue.enqueue("C");
circularQueue.display(); // A <- B <- C

console.log("\nAtendendo:", circularQueue.dequeue()); // Remove A
circularQueue.enqueue("D"); // Adiciona D, reutilizando espaço
circularQueue.display(); // D <- B <- C

// -------------------- Simulação de Atendimento Bancário --------------------
class Banco {
    constructor() {
        this.fila = new Queue();
    }

    // Adiciona um cliente à fila
    adicionarCliente(nome) {
        console.log(`Cliente ${nome} entrou na fila.`);
        this.fila.enqueue(nome);
    }

    // Atende um cliente
    atenderCliente() {
        if (this.fila.isEmpty()) {
            console.log("Nenhum cliente na fila.");
        } else {
            let cliente = this.fila.dequeue();
            console.log(`Atendendo ${cliente}...`);
        }
    }

    // Exibe a fila de espera
    mostrarFila() {
        this.fila.display();
    }
}

// -------------------- Testando o Atendimento Bancário --------------------
const banco = new Banco();
banco.adicionarCliente("João");
banco.adicionarCliente("Maria");
banco.adicionarCliente("Carlos");

console.log("\nFila no banco:");
banco.mostrarFila(); // João <- Maria <- Carlos

console.log("\nAtendendo clientes...");
banco.atenderCliente(); // Atendendo João
banco.mostrarFila(); // Maria <- Carlos
banco.atenderCliente(); // Atendendo Maria
banco.mostrarFila(); // Carlos
banco.atenderCliente(); // Atendendo Carlos
banco.mostrarFila(); // Nenhum cliente na fila


/*Fila (Queue):
○ Crie uma fila e implemente as operações de enqueue e dequeue.
○ Modifique o código para implementar uma fila circular.
○ Desenvolva um programa que simule o atendimento de um banco utilizando
uma fila simples*/