
  // Available variables:
  // - Machine
  // - interpret
  // - assign
  // - send
  // - sendParent
  // - spawn
  // - raise
  // - actions
  // - XState (all XState exports)
  
const lightMachine = Machine(
  {
    id: 'light',
    initial: 'init',
    context: {
      unselectedDay: [],
      selectedDay: null,
      newWorkout: null
    },
    states: {
      init: {
        on:{
          ADD_WORKOUT:'adding',
          SELECT_DAY:'init'
        }
      },
      adding: {
         on:{
          FINISH_ADDING:'init',
          CANCEL_ADDING:'init',
          EDIT_WORKOUT:'adding'
        }
      }
    }
  },
  {
    actions: {
      FINISH_ADDING: assign((ctx, {evt,id})=>{
        return {
          selectedDay:{...selectedDay,workouts:[...workouts,newWorkout]}
        }
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
