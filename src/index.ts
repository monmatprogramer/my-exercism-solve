import { answer } from "./wordy";

try {
  console.log(answer("What is 1 plus 1?"));
} catch (e: any) {
  console.log(e.message);
}
