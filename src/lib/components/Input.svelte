<script>
    let input;
    export let id;
    // const type = "text";
    export let value = "";
    export let placeHolder = "No placeHolder props provided~!";
    export let cssClasses;
    let defaultCssClasses = "form-control " + cssClasses;

    export function getValue() {
        return value;
    }

</script>

<div class="maxWidth">
    <div class="form-floating">
        <!-- {#if value == null} -->
        <input
            {id}
            type="text"
            class={defaultCssClasses}
            placeholder={placeHolder}
            bind:value
            bind:this={input}
        />
        <!-- {:else}
            <input
                {id}
                type="text"
                class={defaultCssClasses}
                placeholder={placeHolder}
                bind:value
            />
        {/if} -->

        <label for="floatingInput">{placeHolder}</label>
    </div>
</div>

<style>
    .maxWidth {
        width: 50%;
    }
</style>
