import {SplitSecondStopwatch} from "./split-second-stopwatch";


const s = new SplitSecondStopwatch();
try{
  s.advanceTime('00:08:22');
}catch(e: any){
  console.log(e.message);
}
