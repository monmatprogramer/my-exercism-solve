import { answer } from "./wordy";

try {
  console.log(answer("What is plus 1 2?"));
} catch (e: any) {
  console.log(e.message);
}
