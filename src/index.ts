type GameType = {
  status: string;
  cards: number;
  tricks: number;
};

const test: GameType = {
  status: "finished",
  cards: 10,
  tricks: 1,
};
console.log(test);
