import { answer } from "./wordy";

try {
  console.log(answer("What is -3 plus 7 multiplied by -2 divided by 1?"));
} catch (e: any) {
  console.log(e.message);
}
