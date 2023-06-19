<script>
    export let text;
    export let cssClasses;

    let defaultCssClasses = "btn btn-lg text-uppercase display-6 "+cssClasses;
    

</script>

<button type="button" class={defaultCssClasses} on:click>{text}</button>