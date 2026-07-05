import {SplitSecondStopwatch} from "./split-second-stopwatch";

const stopwatch = new SplitSecondStopwatch()
 try{
   stopwatch.start()
    stopwatch.advanceTime('00:00:22')
    stopwatch.lap()
    stopwatch.advanceTime('00:00:33')
    console.log(stopwatch.total); // '00:00:55'
 }catch(er:any){
  console.log(er.message);
 }  
 

