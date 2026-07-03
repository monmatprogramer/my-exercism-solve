import {SplitSecondStopwatch} from "./split-second-stopwatch";


const s = new SplitSecondStopwatch();
try{
  s.advanceTime('00:00:58');
}catch(e: any){
  console.log(e.message);
}
