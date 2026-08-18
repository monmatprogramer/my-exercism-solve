export function degreesOfSeparation(
  familyTree: Record<string, string[]>,
  person1: string,
  person2: string,
): number {
  if (person1 === person2) {
    return 0;
  }

  // Build an undirected graph
  const graph = new Map<string, string[]>();

  const addEdge = (u: string, v: string) => {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  };

  // Populate graph relationships
  for (const parent in familyTree) {
    if (Object.prototype.hasOwnProperty.call(familyTree, parent)) {
      const children = familyTree[parent];
      for (let i = 0; i < children.length; i++) {
        // Parent is connected to each child (1 degree)
        addEdge(parent, children[i]);

        // Siblings are directly connected to each other (1 degree)
        for (let j = i + 1; j < children.length; j++) {
          addEdge(children[i], children[j]);
        }
      }
    }
  }

  // Breadth-First Search (BFS) to find the shortest path
  const queue: { node: string; dist: number }[] = [];
  const visited = new Set<string>();

  queue.push({ node: person1, dist: 0 });
  visited.add(person1);

  let head = 0; // index pointer for O(1) dequeue
  while (head < queue.length) {
    const { node, dist } = queue[head++];

    const neighbors = graph.get(node);
    if (neighbors) {
      for (const neighbor of neighbors) {
        // Target found
        if (neighbor === person2) {
          return dist + 1;
        }
        // Explore unvisited neighbors
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({ node: neighbor, dist: dist + 1 });
        }
      }
    }
  }

  // Nodes are disconnected
  return -1;
}
