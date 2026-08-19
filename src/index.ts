import { Anagram } from "./anagram";

const subject = new Anagram("diaper");
const matches = subject.matches("hello", "world", "zombies", "pants");
