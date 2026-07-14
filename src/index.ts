import { answer } from "./wordy";

try {
  console.log(answer("What is 1 2 plus?"));
} catch (e: any) {
  console.log(e.message);
}
