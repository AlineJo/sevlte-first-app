<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    export let text = "text";
    export let isActive = false;
    export let cssClasses;
    let defaultCssClasses;

toggleActive();

    function toggleActive() {

        isActive = !isActive;


        dispatch("onToggle", {
            status: isActive,
        });

        if (isActive) {
            defaultCssClasses =
                "btn btn-lg active text-uppercase display-6 " + cssClasses;
        } else {
            defaultCssClasses =
                "btn btn-lg inactive text-uppercase display-6 " + cssClasses;
        }
    }
</script>

<button type="button" class={defaultCssClasses} on:click={toggleActive}
    >{text}</button
>

<style>
    .active {
        color: white;
        background-color: #007bff;
    }

    .inactive {
        color: gray;
        background-color: lightgray;
    }
</style>
