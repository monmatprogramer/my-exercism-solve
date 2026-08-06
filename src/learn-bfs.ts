// Learn about breadth-first searching
function bfs(graph: Record<string, string[]>, startNode: string) {
  // Create a queue
  const queue: string[] = [startNode];
  console.log(queue);
}

const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D"],
};
bfs(graph, "A");
