import { answer } from "./wordy";

try {
  console.log(answer("What is 52 cubed?"));
} catch (e: any) {
  console.log(e.message);
}
