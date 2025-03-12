// Classe para representar um Grafo usando Lista de Adjacência
class Grafo {
    constructor(direcionado = false) {
        this.listaAdjacencia = {}; // Lista de adjacência para armazenar os vértices e suas conexões
        this.direcionado = direcionado; // Define se o grafo é direcionado
    }

    // Adicionar um vértice ao grafo
    adicionarVertice(vertice) {
        if (!this.listaAdjacencia[vertice]) {
            this.listaAdjacencia[vertice] = [];
        }
    }

    // Adicionar uma aresta entre dois vértices com um peso opcional
    adicionarAresta(vertice1, vertice2, peso = 1) {
        this.listaAdjacencia[vertice1].push({ no: vertice2, peso });
        if (!this.direcionado) {
            this.listaAdjacencia[vertice2].push({ no: vertice1, peso });
        }
    }

    // Busca em Profundidade (DFS) - Explora um caminho completamente antes de retroceder
    dfs(inicio, visitados = new Set()) {
        if (!visitados.has(inicio)) {
            console.log(inicio); // Exibe o vértice atual
            visitados.add(inicio); // Marca como visitado
            this.listaAdjacencia[inicio].forEach(vizinho => {
                this.dfs(vizinho.no, visitados); // Chamada recursiva para os vizinhos
            });
        }
    }

    // Busca em Largura (BFS) - Explora todos os vizinhos antes de prosseguir
    bfs(inicio) {
        let fila = [inicio]; // Fila de processamento
        let visitados = new Set(); // Conjunto para armazenar os nós visitados
        visitados.add(inicio);
        
        while (fila.length) {
            let vertice = fila.shift(); // Remove o primeiro elemento da fila
            console.log(vertice); // Exibe o vértice atual
            this.listaAdjacencia[vertice].forEach(vizinho => {
                if (!visitados.has(vizinho.no)) {
                    visitados.add(vizinho.no); // Marca como visitado
                    fila.push(vizinho.no); // Adiciona à fila para processamento
                }
            });
        }
    }

    // Algoritmo de Dijkstra - Encontra o caminho mais curto a partir de um vértice de origem
    dijkstra(inicio) {
        let distancias = {}; // Armazena as distâncias mínimas até cada vértice
        let filaPrioridade = new Map(); // Simula uma fila de prioridade
        let anteriores = {}; // Armazena o caminho mais curto
        
        // Inicializa todas as distâncias como infinito
        for (let vertice in this.listaAdjacencia) {
            distancias[vertice] = Infinity;
            anteriores[vertice] = null;
            filaPrioridade.set(vertice, Infinity);
        }
        
        distancias[inicio] = 0;
        filaPrioridade.set(inicio, 0);

        while (filaPrioridade.size) {
            // Obtém o vértice com menor distância na fila de prioridade
            let verticeAtual = [...filaPrioridade.entries()].sort((a, b) => a[1] - b[1])[0][0];
            filaPrioridade.delete(verticeAtual);

            // Atualiza as distâncias para os vizinhos
            this.listaAdjacencia[verticeAtual].forEach(vizinho => {
                let novaDistancia = distancias[verticeAtual] + vizinho.peso;
                if (novaDistancia < distancias[vizinho.no]) {
                    distancias[vizinho.no] = novaDistancia;
                    anteriores[vizinho.no] = verticeAtual;
                    filaPrioridade.set(vizinho.no, novaDistancia);
                }
            });
        }

        return { distancias, anteriores };
    }
}

// Criando e testando o Grafo
const grafo = new Grafo(true);
grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");
grafo.adicionarVertice("D");
grafo.adicionarAresta("A", "B", 1);
grafo.adicionarAresta("A", "C", 4);
grafo.adicionarAresta("B", "C", 2);
grafo.adicionarAresta("B", "D", 5);
grafo.adicionarAresta("C", "D", 1);

console.log("Percurso em Profundidade (DFS):");
grafo.dfs("A");

console.log("\nPercurso em Largura (BFS):");
grafo.bfs("A");

console.log("\nMenores distâncias a partir de A (Dijkstra):", grafo.dijkstra("A"));