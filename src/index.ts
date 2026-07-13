import { answer } from "./wordy";

try {
  console.log(answer("What is 5"));
} catch (e: any) {
  console.log(e.message);
}
