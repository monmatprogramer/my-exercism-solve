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
  //const graphM: Map<string, string[]> = new Map<string, string[]>(
  //Object.entries(graph),
  //);
  const graphM: Map<string, string[]> = toMap(graph);
  // Create a queue
  let queue: QueueObjType[] = [{ node: startNode, distance: 0 }]; //[{node: , distance: }]
  const visited: Set<string> = new Set<string>([startNode]); //[a]
  while (queue.length > 0) {
    //true,
    let currentNode: QueueObjType = queue.shift()!; //{node:..., distance:...}
    if (currentNode.node === targetNode) {
      return currentNode.distance;
    }
    if (graphM.has(currentNode.node)) {
      // node: ....,
      //true
      const neighbors: string[] = graphM.get(currentNode.node)!; //[b,c]
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // [b,c]
          queue.push({ node: neighbor, distance: currentNode.distance + 1 });
        }
      }
    }
  }
  return -1;
}
// Conver record to map
function toMap(graph: Record<string, string[]>): Map<string, string[]> {
  return new Map<string, string[]>(Object.entries(graph));
}
function backFarwd() {}
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
};
console.log(bfs(graph, "A", "C"));
