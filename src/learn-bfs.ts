// Learn about breadth-first searching
function bfs(graph: Record<string, string[]>, startNode: string) {
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
      queue = [...queue, ...graphM.get(currentNode)!]; //[b,c]

      for (const neighbor of queue) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
        }
      }
    }
  }
  console.log(visited);
}

const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
  C: [],
  D: [],
};
bfs(graph, "A");
