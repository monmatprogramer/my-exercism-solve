import {SplitSecondStopwatch} from "./split-second-stopwatch";


const s = new SplitSecondStopwatch();
try{
  s.start();
  s.advanceTime('00:00:58');
  console.log(s.currentLap);
}catch(e: any){
  console.log(e.message);
}
