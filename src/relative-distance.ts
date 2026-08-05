// relative distance
export type FamilyTreeType = Record<string, string[]>;
export function degreesOfSeparation(
  familyTree: FamilyTreeType,
  personA: string,
  personB: string,
): number {
  // creae an empty graph dictionary
  const graph: Map<string, string> = new Map<string, string>();
  // Read parent and children
  for (const [parent, children] of Object.entries(familyTree)) {
    console.log("parent: ", parent);
    for (const child of children) {
      console.log(child);
    }
  }
  return 0;
}

function addToGrap(familyTree: Record) {
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
      tempParent = tempChildren.shift();
      remainArray = tempChildren;
      /*
      for(const[index, valueJ] of tempChildren){
         
      }
      */
      tempChildren = [tempParent!, ...remainArray];
      firstEle = tempChildren[0];
      secondEle = tempChildren[i + 1];
      tempChildren[0] = secondEle;
      tempChildren[i + 1] = firstEle;
      remainArray = [parent, ...remainArray];

      graph.set(tempParent!, remainArray);
    }
  }
  console.log(graph);
}
