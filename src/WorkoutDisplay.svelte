<script>
  import {send,state as _state}  from "./store.js"
  $: state = $_state.value
  export let title;
  $: mainWorkouts = $_state.context.mainWorkouts
  $: optionalWorkouts = $_state.context.optionalWorkouts
  $: newWorkout = $_state.context.newWorkout
</script>
<style>
  p{
    width:100%;
    text-align:center;
  }
</style>
<div>
<h2>
  {title}
</h2>

<h3>
Main:
</h3>
{#each mainWorkouts as {name}}
  <div>{name}</div>
{/each}
<h3>
Optional:
</h3>
{#each optionalWorkouts as {name}}
  <div>{name}</div>
{/each}
{#if state === 'idle'}
<button on:click={()=>{send('ADD_WORKOUT')}}>+ add workout</button>
{:else}
  <div>
    <input  
      on:input={(evt)=>{
        send({type:"EDIT_WORKOUT",value:evt.target.value})
      }}
    />
    <button on:click={()=>{send('FINISH_ADDING')}}>+</button>
  </div>

{/if}
</div>

