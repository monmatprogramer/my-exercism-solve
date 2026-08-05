// relative distance
export type FamilyTreeType = Record<string, string[]>;
export function degreesOfSeparation(
  familyTree: FamilyTreeType,
  personA: string,
  personB: string,
): number {
  // graph
  const graph: Map<string, string[]> = addToGrap(familyTree);
  return 0;
}

// Add family tree to graph
function addToGrap(familyTree: FamilyTreeType): Map<string, string[]> {
  const graph = new Map<string, string[]>();
  for (const [parent, children] of Object.entries(familyTree)) {
    if (!graph.has(parent)) {
      graph.set(parent, [...children]);
    }
    let tempChildren: string[] = children;
    let remainArray: string[];
    let tempParent: string | undefined;
    let firstEle: string;
    let secondEle: string;

    for (let i: number = 0; i < children.length; i++) {
      let tempI: number = i;
      tempParent = tempChildren.shift();
      tempChildren = [tempParent!, ...tempChildren];
      console.log("tmepParent: ", tempParent);

      console.log("tempChildren: ", tempChildren);
      console.log("i: ", i);
      //console.log(tempParent);
      //remainArray = tempChildren;
      //tempChildren = [tempParent!, ...remainArray];
      // firstEle = tempChildren[0];
      /*
      if (!tempChildren[tempI + 1]) {
        secondEle = tempChildren[i];
        tempChildren[0] = secondEle;
        tempChildren[i] = firstEle;
      } else {
        secondEle = tempChildren[tempI + 1];
        tempChildren[0] = secondEle;
        tempChildren[tempI + 1] = firstEle;
      }*/
      //remainArray = [parent, ...remainArray];
      // graph.set(tempParent!, remainArray);
    }
  }
  return graph;
}
