<script>
  import WorkoutDisplay from "./WorkoutDisplay.svelte";
  import {state as _state}  from "./store.js"
  $: state = $_state.value

</script>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
    width:100%;
    text-align:center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
  .displayContainer {
    display: grid;
    grid-template-columns: repeat(1,1fr) ;
    justify-content: center ;

  }

</style>
<h1>
  {JSON.stringify(state)}
</h1>
<h1>Gym Workouts</h1>
<div class="displayContainer"> 
<WorkoutDisplay title="Today" />
</div>
