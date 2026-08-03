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
  for (const [key, parent] of Object.entries(familyTree)) {
  }
  return 0;
}
