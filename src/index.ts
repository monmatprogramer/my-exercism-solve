import { answer } from "./wordy";

try {
  console.log(answer("What is?"));
} catch (e: any) {
  console.log(e.message);
}
