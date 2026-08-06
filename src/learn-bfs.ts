// Learn about breadth-first searching
function bfs(graph: Record<string, string[]>, startNode: string) {
  // Create a queue
  const queue: string[] = [startNode];
  const visited: Set<string> = new Set<string>(startNode);
  console.log(visited);
}

const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
};
bfs(graph, "stringA");
