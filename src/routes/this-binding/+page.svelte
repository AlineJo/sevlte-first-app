<script>
    import Button from "$lib/components/Button.svelte";
    import Input from "$lib/components/Input.svelte";
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";

    let inputFullName;
    let value;

    let displayFormInfo = () => {
        alert(inputFullName.getValue());
    };
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">this-binding Example</h1>

    <Input placeHolder="Full Name" bind:this={inputFullName} bind:value={value}  />

    <Button
        cssClasses="btn-success mt-5"
        text="submit"
        on:click={displayFormInfo}
    />
</div>

<style>
    #mainContainer {
        padding: 4rem;
        align-items: center;
        text-align: center;
        background-color: bisque;
    }
</style>
