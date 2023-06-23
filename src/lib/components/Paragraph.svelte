<script>

    export let text = "No text props provided~!";
    export let fontSize = 56;
    export let cssClasses;
</script>

<p class={cssClasses} style="font-size: {fontSize}px">{text}</p>