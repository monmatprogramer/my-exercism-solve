// Lesson is fore review to create async
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function logProcess(taskName: string): Promise<void> {
  console.log(`Starting: ${taskName}`);
  await delay(1000);
  console.log(`Completed: ${taskName}`);
}
