// Learn about object start from scratch

function lesson1() {
  interface ServerInfo {
    brand: string;
    memory: number;
  }

  const myNAS: ServerInfo = {
    brand: "QNAP",
    memory: 4,
  };
}

// properties of object is function
function lesson2() {
  interface BackendService {
    name: string;
    memory: number;
    start: () => void;
  }

  const koyeb: BackendService = {
    name: "Koyeb",
    memory: 8,
    start: () => {
      console.log(`Koyerb is start...`);
    },
  };
  koyeb.start();
}
lesson2();
