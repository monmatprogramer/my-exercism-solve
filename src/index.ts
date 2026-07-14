import { answer } from "./wordy";

try {
  console.log(answer("What is 1 plus plus 2"));
} catch (e: any) {
  console.log(e.message);
}
