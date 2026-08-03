// relative distance
export type FamilyTreeType = Record<string, string[]>;
export function degreesOfSeparation(
  familyTree: FamilyTreeType,
  personA: unknown,
  personB: unknown,
): number {
  // creae an empty graph dictionary
  const graph: Map<string, string> = new Map<string, string>();
  return 0;
}
