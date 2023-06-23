<script>
    export let text = "No text props provided~!";
    export let cssClasses;
    export let disabled = false;
    let defaultCssClasses = "btn btn-lg text-uppercase display-6 "+cssClasses;
    

</script>

<button type="button" class={defaultCssClasses} on:click  {disabled}>{text}</button>