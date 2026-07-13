import { answer } from "./wordy";

try {
  console.log(answer(""));
} catch (e: any) {
  console.log(e.message);
}
