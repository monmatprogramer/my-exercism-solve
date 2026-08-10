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
  //A
  startNode: string,
  //E
  targetNode: string,
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
  //newPath= [];
  const newPath: string[] = [];
  while (queue.length > 0) {
    // queue = [D,E]
    let currentNode: string = queue.shift()!; //B,C,D
    //  D === D => True
    if (currentNode === targetNode) {
      break;
    }
    // visited = [A,B,C] has A,B,C => true
    if (visited.has(currentNode)) {
      //currentNode = C
      // neighbors = [E]
      const neighbors = graphM.get(currentNode)!;
      for (const neighbor of neighbors) {
        camFrom.set(neighbor, currentNode);
        /*
          *camFrom = {
          B: A,
          C: A
          D: B
          C: E
        }
          * */
        //queue = [D,E]
        queue.push(neighbor);
        //visited = [A,B,C,D,E]
        visited.add(neighbor);
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
  backFarwd(graph, "A", "E");
} catch (e: any) {
  console.log(`💥 ${colors.red}Error message: ${e.message}${colors.reset}`);
}
