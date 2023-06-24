<script>
    import Incrementer from "../../lib/components/Incrementer.svelte";
    import Decrementer from "../../lib/components/Decrementer.svelte";
    import Reset from "../../lib/components/Reset.svelte";

    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import {count} from "../../lib/stores/count.js";

    let countValue;

    count.subscribe((value) => {
        countValue = value;
    });
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Stores Example</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />

    <Paragraph cssClasses="mt-5 display-6" text="Count is: {countValue}" />

    <Incrementer />
    <Decrementer />
    <Reset />
</div>

<style>
    #mainContainer {
        padding: 4rem;
        align-items: center;
        text-align: center;
        background-color: bisque;
    }
</style>
