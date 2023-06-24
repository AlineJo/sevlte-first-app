<script>
	import {count} from '../stores/count.js'
	import Button from './Button.svelte'

	function increment() {
		count.update((n) => n + 1);
	}
</script>

<Button cssClasses="btn-success p-2 px-3" text="+" on:click={increment} />
