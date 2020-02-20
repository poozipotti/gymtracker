<script>
  import {useMachine} from "./useMachine";
  import WorkoutDisplay from "./WorkoutDisplay.svelte";
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
    grid-template-columns: repeat(3,1fr) 

  }

</style>

<h1>Gym Workouts</h1>
<div class="displayContainer"> 
<WorkoutDisplay title="Yesterday" mainWorkouts={[{name:"test",id:1},{name:"test2",id:2}]}/>
<WorkoutDisplay title="Today" />
<WorkoutDisplay title="Tommorow" />
</div>
