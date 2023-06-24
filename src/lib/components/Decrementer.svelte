<script>
	import {count} from '../stores/count.js'
	import Button from './Button.svelte'

	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<Button cssClasses="btn-warning p-2 px-3" text="-" on:click={decrement} />
