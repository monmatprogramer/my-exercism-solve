import {SplitSecondStopwatch} from "./split-second-stopwatch";


const s = new SplitSecondStopwatch();
try{
  s.start();
  s.advanceTime('00:00:05');
  s.stop();
  s.advanceTime('00:00:20');
  s.start();
  s.advanceTime('00:00:08');
  console.log('current lap: ', s.currentLap);
}catch(e: any){
  console.log(e.message);
}
