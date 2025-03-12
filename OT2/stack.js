// Classe que representa a pilha
class Stack {
    constructor(limit = Infinity) {
        this.items = [];  // Array que armazena os elementos da pilha
        this.limit = limit;  // Define um limite opcional para a pilha
    }

    // Método para adicionar um elemento no topo da pilha
    push(element) {
        if (this.items.length < this.limit) {
            this.items.push(element);
        } else {
            console.log("A pilha está cheia!");
        }
    }

    // Método para remover o elemento do topo da pilha
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        } else {
            console.log("A pilha está vazia!");
            return null;
        }
    }

    // Método para verificar se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Método opcional para verificar se a pilha está cheia (se houver limite)
    isFull() {
        return this.items.length === this.limit;
    }

    // Método para visualizar o topo da pilha sem remover
    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    // Método para exibir a pilha
    display() {
        console.log(this.items);
    }
}

// Função para verificar se os parênteses de uma expressão estão balanceados
function isBalanced(expression) {
    const stack = new Stack(); // Criamos uma pilha para armazenar os parênteses

    for (let char of expression) {
        if (char === '(') {
            stack.push(char); // Se for um parêntese de abertura, empilha
        } else if (char === ')') {
            if (stack.isEmpty()) return false; // Se encontrar um ')' sem um '(' correspondente, já está desequilibrado
            stack.pop(); // Se houver um '(', remove da pilha
        }
    }

    return stack.isEmpty(); // Se a pilha estiver vazia, os parênteses estão balanceados
}

// -------------------- Testando a Pilha --------------------
const stack = new Stack(5); // Criando uma pilha com limite de 5 elementos
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Pilha atual:");
stack.display();  // Output: [1, 2, 3]

console.log("\nRemovendo elemento do topo:");
stack.pop(); 
stack.display();  // Output: [1, 2]

console.log("\nA pilha está vazia?", stack.isEmpty());  // Output: false
console.log("A pilha está cheia?", stack.isFull());    // Output: false

// -------------------- Testando Expressões --------------------
const expr1 = "((1+2) * (3/4))"; // Balanceado
const expr2 = "((1+2) * (3/4)";  // Não balanceado

console.log(`\nA expressão "${expr1}" está balanceada?`, isBalanced(expr1)); // true
console.log(`A expressão "${expr2}" está balanceada?`, isBalanced(expr2));   // false


/*Pilha (Stack):
○ Implemente uma pilha e adicione operações para verificar se a pilha está
cheia ou vazia.
○ Utilize uma pilha para verificar se uma expressão aritmética contém
parênteses balanceados (exemplo: ((1+2) * (3/4))).*/