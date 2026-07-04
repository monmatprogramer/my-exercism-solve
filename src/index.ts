import {SplitSecondStopwatch} from "./split-second-stopwatch";

const stopwatch = new SplitSecondStopwatch()
 try{
  stopwatch.start()
    stopwatch.advanceTime('00:01:38')
    stopwatch.lap()
    //['00:01:38']
    stopwatch.advanceTime('00:00:44')
    stopwatch.lap();
    //['00:01:38', '00:00:44'] 
 }catch(er:any){
  console.log(er.message);
 }  
 

