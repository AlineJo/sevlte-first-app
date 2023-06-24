<script>
	import {count} from '../stores/count.js'
	import Button from './Button.svelte'

	function reset() {
		count.set(0);
	}
</script>

<Button cssClasses="btn-danger p-2 px-3 ms-5" text="Reset" on:click={reset} />
