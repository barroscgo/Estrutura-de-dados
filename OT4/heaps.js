// Classe Max-Heap
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Obtém o índice do pai de um nó
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Obtém o índice do filho esquerdo
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Obtém o índice do filho direito
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Troca dois elementos no heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Insere um novo elemento no heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Reorganiza o heap para manter a propriedade do Max-Heap após inserção
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Remove e retorna o maior elemento do heap
    removeMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    // Reorganiza o heap para manter a propriedade do Max-Heap após remoção
    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
                largerChildIndex = rightChildIndex;
            }

            if (this.heap[index] < this.heap[largerChildIndex]) {
                this.swap(index, largerChildIndex);
                index = largerChildIndex;
            } else {
                break;
            }
        }
    }

    // Retorna o maior elemento sem removê-lo
    getMax() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// Implementação de uma fila de prioridade baseada em Max-Heap
class PriorityQueue {
    constructor() {
        this.heap = new MaxHeap();
    }

    // Adiciona um elemento à fila com base na prioridade
    enqueue(value) {
        this.heap.insert(value);
    }

    // Remove e retorna o elemento com maior prioridade (o maior valor)
    dequeue() {
        return this.heap.removeMax();
    }

    // Retorna o elemento de maior prioridade sem removê-lo
    peek() {
        return this.heap.getMax();
    }
}

// Testando Max-Heap
testHeap();
function testHeap() {
    const heap = new MaxHeap();
    heap.insert(10);
    heap.insert(20);
    heap.insert(15);
    heap.insert(30);
    heap.insert(25);

    console.log("Max-Heap:", heap.heap);
    console.log("Maior elemento removido:", heap.removeMax());
    console.log("Max-Heap após remoção:", heap.heap);
}

// Testando a Fila de Prioridade
testPriorityQueue();
function testPriorityQueue() {
    const pq = new PriorityQueue();
    pq.enqueue(5);
    pq.enqueue(12);
    pq.enqueue(18);
    pq.enqueue(7);
    
    console.log("Elemento de maior prioridade:", pq.peek());
    console.log("Removendo maior prioridade:", pq.dequeue());
    console.log("Fila de prioridade após remoção:", pq.heap.heap);
}
