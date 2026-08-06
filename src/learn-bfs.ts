// Learn about breadth-first searching
function bfs(graph: Record<string, string[]>, startNode: string) {
  // convert object to map
  const graphM: Map<string, string[]> = new Map<string, string[]>(
    Object.entries(graph),
  );
  // Create a queue
  const queue: string[] = [startNode];
  const visited: Set<string> = new Set<string>([startNode]);
  while (queue.length > 0) {
    const currentNode: string = queue.shift()!; //a
    if (graphM.has(currentNode)) {
      const neighbors: string[] = graphM.get(currentNode)!; //[b,c]
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
        }
      }
    }
  }
}

const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
  C: [],
  D: [],
};
bfs(graph, "A");
