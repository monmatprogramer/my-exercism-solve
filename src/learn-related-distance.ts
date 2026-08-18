// learn it from scratch

function learnRecod() {
  const myFriends: Record<string, string[]> = {
    Alice: ["Bob", "Charlie"],
    David: ["Eve"],
  };
}
const graph = new Map<string, string[]>([
  ["a", ["b", "c", "d"]],
  ["c", ["f", "g", "h"]],
  ["h", ["j", "k", "l"]],
]);

export function degreeOfSeparation(
  familyTree: Record<string, string[]>,
  person1: string,
  person2: string,
) {
  if (person1 === person2) {
    return 0;
  }
  for (const parent in graph) {
    console.log(parent);
  }
}

const addEdge = (u: string, v: string) => {
  if (!graph.has(u)) {
    graph.set(u, []);
  }
  if (!graph.has(v)) {
    graph.set(v, []);
  }
  graph.get(u)!.push(v); //[b,c,d,h]
  graph.get(v)!.push(u); //[j,k,l,a]
};

const familyTree7 = {
  Khadija: ["Mateo"],
  Mateo: ["Rami"],
};
degreeOfSeparation(familyTree7, "a", "a");
