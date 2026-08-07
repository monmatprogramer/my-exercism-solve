// Learn about breadth-first searching
function bfs(
  graph: Record<string, string[]>,
  startNode: string,
  targetNode: string,
) {
  // convert object to map
  const graphM: Map<string, string[]> = new Map<string, string[]>(
    Object.entries(graph),
  );
  // Create a queue
  let queue: string[] = [startNode]; //[a]
  const visited: Set<string> = new Set<string>([startNode]); //[a]
  while (queue.length > 0) {
    //true,
    const currentNode: string = queue.shift()!; //a
    if (graphM.has(currentNode)) {
      //true
      const neighbors: string[] = graphM.get(currentNode)!; //[b,c]
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // [b,c]
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
};
bfs(graph, "A", "E");
