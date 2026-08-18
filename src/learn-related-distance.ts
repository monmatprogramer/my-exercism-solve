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
}

const addEdge = (u: string, v: string) => {
  if (!graph.has(u)) {
    graph.set(u, []);
  }
  console.log(graph.get(u));
};

const u: string = "a";
const v: string = "b";
addEdge(u, v);
