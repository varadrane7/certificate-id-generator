<script lang="ts">
	let count = 0;
</script>

<h1>Counter: {count}</h1>
<br />
<button on:click={() => count++}>Increase</button>
<button on:click={() => count--}>Decrease</button>
<button on:click={() => (count *= 2)}>Double</button>
