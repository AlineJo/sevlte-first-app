<script>

    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import Button from "../../lib/components/Button.svelte";


 
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Dispatcher Example</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
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
