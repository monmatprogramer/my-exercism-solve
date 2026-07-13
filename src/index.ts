import { answer } from "./wordy";

try {
  console.log(answer("What is 2 multiplied by -2 multiplied by 3?"));
} catch (e: any) {
  console.log(e.message);
}
