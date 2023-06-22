<script>
    import Outer from "$lib/components/Outer.svelte";
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import ToggleButton from "../../lib/components/ToggleButton.svelte";

    let text = "blue";

    function onStatusChange(event) {
        if (event.detail.status) {
            text = "blue";
        } else {
            text = "gray";
        }
    }
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Event-Forwording Example</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />

    <Paragraph text={text} cssClasses="display-1"/>
    <Outer text={"Toggle Color"} on:onToggle={onStatusChange} />
</div>

<style>
    #mainContainer {
        padding: 4rem;
        align-items: center;
        text-align: center;
        background-color: bisque;
    }
</style>
