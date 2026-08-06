// relative distance
export type FamilyTreeType = Record<string, string[]>;
export function degreesOfSeparation(
  familyTree: FamilyTreeType,
  personA: string,
  personB: string,
): number {
  // graph
  const graph: Map<string, string[]> = addToGrap(familyTree);
  return prepareSearchTool(graph, personA, personB);
}
function seach(queue: [string, number][]) {
  if (queue.length !== 0) {
    for (let i: number = 0; i < queue.length; i++) {}
  } else {
    throw new Error("queue is zero");
  }
}
function prepareSearchTool(
  graph: Map<string, string[]>,
  startPerson: string,
  targetPerson: string,
): number {
  //Mock data graph
  //
  /*
  let object = {
    Vera: ["Bob", "Alice"],
    Bob: ["Vera", "Tomoko"],
    Alice: ["Vera"],
    Tomoko: ["Bob"],
  };
  graph = new Map(Object.entries(object));*/
  const queue: [string, number][] = [];
  const visited = new Set<string>();

  if (!graph.has(startPerson) || !graph.has(targetPerson)) return -1;
  queue.push([startPerson, 0]);
  visited.add(startPerson);
  while (queue.length > 0) {
    const [currenPerson, currenDistance] = queue.shift()!;

    if (currenPerson === targetPerson) return currenDistance;

    let neighbords: string[] = graph.get(currenPerson)!;
    for (const neighbord of neighbords) {
      if (!visited.has(neighbord)) {
        visited.add(neighbord);
        queue.push([neighbord, currenDistance + 1]);
      }
    }
  }

  return -1;
}
// Add family tree to graph
function addToGrap(familyTree: FamilyTreeType): Map<string, string[]> {
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
