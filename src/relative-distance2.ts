//for testing

const graphM = new Map<string, string[]>();
graphM.set("Khadija", ["Mateo"]);
graphM.set("Mateo", ["Khadija", "Rami"]);
graphM.set("Rami", ["Khandija", "Mateo"]);
const startNodeG: string = "Khadija";
const targetNodeG: string = "Rami";

// object of queue type
type QueueObjType = {
  node: string;
  distance: number;
};

export function degreesOfSeparation(
  graph: Record<string, string[]>,
  startNode: string,
  targetNode: string,
) {
  // convert object to map
  const graphM: Map<string, string[]> = enhanceAddToGraph(graph);
  startNode = startNodeG;
  targetNode = targetNodeG;

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
function enhanceAddToGraph(
  graph: Record<string, string[]>,
): Map<string, string[]> {
  graph = {
    A: ["B", "C"],
    B: ["C", "D"],
  };
  // Create graph that is converted from record
  const parentGraph = new Map<string, string[]>(Object.entries(graph));

  // Create parent key
  let parentKey: string;
  // Create child value
  let childValue: string[];
  // total child
  let totalChildren: number = 0;
  if (parentGraph.size > 1) {
    let firstParent = parentGraph.keys().next().value;
    let nextParent: string = parentGraph.get(firstParent!)![0];
    for (const [parent, children] of parentGraph) {
      if (parent === nextParent) {
        children.unshift(firstParent!);
      }
    }
  }
  return parentGraph;
}

// Add family tree to graph
function addToGrap(
  familyTree: Record<string, string[]>,
): Map<string, string[]> {
  /*familyTree: {
  Vera: ["Bob", "Alice", "Tomoko"],
};*/

  const graph = new Map<string, string[]>();
  for (const [parent, children] of Object.entries(familyTree)) {
    if (!graph.has(parent)) {
      graph.set(parent, [...children]);
    }

    let tempChildren: string[] = [...children];
    let remainArray: string[];
    let tempParent: string | undefined;
    let firstEle: string;
    let secondEle: string;
    for (let i: number = 0; i < children.length; i++) {
      let tempI: number = i;
      tempParent = tempChildren.shift();
      remainArray = tempChildren;
      tempChildren = [tempParent!, ...remainArray];
      firstEle = tempChildren[0];
      if (!tempChildren[tempI + 1]) {
        secondEle = tempChildren[i];
        tempChildren[0] = secondEle;
        tempChildren[i] = firstEle;
      } else {
        secondEle = tempChildren[tempI + 1];
        tempChildren[0] = secondEle;
        tempChildren[tempI + 1] = firstEle;
      }
      remainArray = [parent, ...remainArray];
      graph.set(tempParent!, remainArray);
      remainArray = [];
    }
  }
  return graph;
}
