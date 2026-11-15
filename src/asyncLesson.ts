// Lesson is fore review to create async
const delay = (ms: number): Promise<void> => {
  new Promise((resolve) => setTimeout(resolve, ms));
};
