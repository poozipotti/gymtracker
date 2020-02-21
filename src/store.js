
  import {useMachine} from "./useMachine";
  import {workoutMachine} from "./workoutMachine.js"
 
  export const {state,send} = useMachine(workoutMachine)
