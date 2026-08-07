const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};
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
export function toMap(graph: Record<string, string[]>): Map<string, string[]> {
  return new Map<string, string[]>(Object.entries(graph));
}
function backFarwd(
  graph: Record<string, string[]>,
  startNode: string,
): string[] {
  const graphM = toMap(graph);
  if (!graphM.has(startNode) || startNode.length === 0) {
    throw new Error(
      `This start node: ${startNode} is not found in family tree`,
    );
  }
  const camFrom: Map<string, string> = new Map<string, string>();
  const queue: string[] = [startNode]; //[A]
  const visited = new Set<string>([startNode]); //[A]
  while (queue.length > 0) {
    //[A] = 1, [B,C]= 2,[C]= 1, [E] =1
    let currentNode: string = queue.shift()!; // A =>[],B = [C], C=[], E=[]
    if (visited.has(currentNode)) {
      //Visited = [A, B, C, E]
      // true,
      const neighbors = graphM.get(currentNode)!; //[B,C], [D], [E],[]
      for (const neighbor of neighbors) {
        camFrom.set(neighbor, currentNode);
        /*{B: A, C: A}
         *{D: B}
         *{E: C}
         * */
        queue.push(neighbor); // [E]
        visited.add(neighbor); //[A,B,C, E]
      }
    }
  }
  console.log("camFrom :  ", camFrom);
  return [];
}
export const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
};
//console.log(bfs(graph, "A", "C"));
try {
  backFarwd(graph, "A");
} catch (e: any) {
  console.log(`💥 ${colors.red}Error message: ${e.message}${colors.reset}`);
}
