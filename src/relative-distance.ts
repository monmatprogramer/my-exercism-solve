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
