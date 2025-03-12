class Grafo {
    constructor() {
        this.vertices = new Map(); // Armazena os vértices e suas conexões
    }

    adicionarVertice(vertice) {
        if (!this.vertices.has(vertice)) {
            this.vertices.set(vertice, new Map());
        }
    }

    adicionarAresta(origem, destino, peso) {
        this.adicionarVertice(origem);
        this.adicionarVertice(destino);
        this.vertices.get(origem).set(destino, peso);
    }

    // Algoritmo de Dijkstra: Encontra o caminho mais curto a partir de um vértice
    dijkstra(inicio) {
        const distancias = new Map(); // Armazena as menores distâncias
        const visitados = new Set(); // Conjunto de vértices visitados
        const fila = new Map(); // Fila de prioridade (simulada com Map)
        
        // Inicialização das distâncias
        this.vertices.forEach((_, vertice) => {
            distancias.set(vertice, Infinity);
        });
        distancias.set(inicio, 0);
        fila.set(inicio, 0);

        while (fila.size > 0) {
            // Seleciona o vértice com a menor distância
            let menorVertice = [...fila.entries()].reduce((a, b) => a[1] < b[1] ? a : b)[0];
            fila.delete(menorVertice);
            visitados.add(menorVertice);

            // Atualiza as distâncias dos vizinhos
            this.vertices.get(menorVertice).forEach((peso, vizinho) => {
                if (!visitados.has(vizinho)) {
                    let novaDistancia = distancias.get(menorVertice) + peso;
                    if (novaDistancia < distancias.get(vizinho)) {
                        distancias.set(vizinho, novaDistancia);
                        fila.set(vizinho, novaDistancia);
                    }
                }
            });
        }
        return distancias;
    }

    // Algoritmo de Floyd-Warshall: Encontra o caminho mais curto entre todos os pares de vértices
    floydWarshall() {
        const distancias = new Map();
        const vertices = [...this.vertices.keys()];
        
        // Inicializa a matriz de distâncias
        for (let v1 of vertices) {
            distancias.set(v1, new Map());
            for (let v2 of vertices) {
                distancias.get(v1).set(v2, v1 === v2 ? 0 : Infinity);
            }
        }
        
        // Preenche com os pesos das arestas existentes
        this.vertices.forEach((adjacentes, v1) => {
            adjacentes.forEach((peso, v2) => {
                distancias.get(v1).set(v2, peso);
            });
        });
        
        // Algoritmo principal
        for (let k of vertices) {
            for (let i of vertices) {
                for (let j of vertices) {
                    let novaDistancia = distancias.get(i).get(k) + distancias.get(k).get(j);
                    if (novaDistancia < distancias.get(i).get(j)) {
                        distancias.get(i).set(j, novaDistancia);
                    }
                }
            }
        }
        return distancias;
    }
}

// Teste dos algoritmos
const grafo = new Grafo();
grafo.adicionarAresta('A', 'B', 4);
grafo.adicionarAresta('A', 'C', 2);
grafo.adicionarAresta('B', 'C', 5);
grafo.adicionarAresta('B', 'D', 10);
grafo.adicionarAresta('C', 'D', 3);

document.write("Distâncias usando Dijkstra a partir de 'A':<br>");
console.log(grafo.dijkstra('A'));

document.write("<br>Distâncias usando Floyd-Warshall:<br>");
console.log(grafo.floydWarshall());
