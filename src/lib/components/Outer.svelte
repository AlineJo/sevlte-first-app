<script>
	import ToggleButton from './ToggleButton.svelte';
    export let text="outer default text";

</script>

<ToggleButton text={text} on:onToggle />
