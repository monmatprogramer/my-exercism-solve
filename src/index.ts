import {SplitSecondStopwatch} from "./split-second-stopwatch";

const stopwatch = new SplitSecondStopwatch()
 try{   
    stopwatch.start()
stopwatch.advanceTime('00:08:22')
stopwatch.lap()
expect(stopwatch.currentLap).toBe('00:00:00')
stopwatch.advanceTime('00:00:15')
expect(stopwatch.currentLap).toBe('00:00:15')
 }catch(er:any){
  console.log(er.message);
 }  
 

