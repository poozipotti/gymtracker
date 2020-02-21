import { Machine, actions } from "xstate";
const { assign } = actions;

export const workoutMachine = Machine(
  {
    id: 'workoutMachine',
    initial: 'idle',
    context: {
      mainWorkouts:[],
      optionalWorkouts: [],
      newWorkout: '',
    },
    states: {
      idle: {
        on:{
          ADD_WORKOUT:'adding',
          SELECT_DAY:'idle'
        }
      },
      adding: {
         on:{
          FINISH_ADDING:{
            target:'idle',
            actions:['addWorkout']
          },
          CANCEL_ADDING:'idle',
          EDIT_WORKOUT:{
            target:'adding',
            actions:['change']
          }
        },
      }
    }
  },
  {
    actions: {
      change: assign((ctx, {value})=>{
        return {newWorkout:value}
      }),
      addWorkout: assign((ctx)=>{
        console.log(ctx.newWorkout)
        return {mainWorkouts:[...ctx.mainWorkouts,{name:ctx.newWorkout}],newWorkout:''}
      })
      // action implementation
    },
    activities: {
      
      /* ... */
    },
    guards: {
      /* ... */
    },
    services: {
      /* ... */
    }
  }
);
