<script>
  export let title;
  export let mainWorkouts=[];
  export let optionalWorkouts=[];
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
<button on:click={()=>{alert("add!")}}>+ add workout</button>
</div>

