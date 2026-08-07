// Learn about breadth-first searching
// object of queue type
type QueueObjType = {
  node: string;
  distance: number;
};
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
  let queue: QueueObjType[] = [{ node: startNode, distance: 0 }]; //[{node: , distance: }]
  const visited: Set<string> = new Set<string>([startNode]); //[a]
  while (queue.length > 0) {
    //true,
    let currentNode: QueueObjType = queue.shift()!; //{node:..., distance:...}
    if (graphM.has(currentNode.node)) {
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
