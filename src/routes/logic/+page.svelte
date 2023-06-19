<script>
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import Button from "../../lib/components/Button.svelte";
    
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    let x = 7;
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Welcome to your library project</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />
 
    
        {#if user.loggedIn}
            <Button
                on:click={toggle}
                cssClasses="btn-danger mt-5"
                text="Log out"
            />
        {:else}
            <Button
                on:click={toggle}
                cssClasses="btn-success mt-5"
                text="Log in"
            />
        {/if}

        <Paragraph cssClasses="mt-5 display-5" text="--------" />
        {#if x > 10}
            <p>{x} is greater than 10</p>
        {:else if 5 > x}
            <p>{x} is less than 5</p>
        {:else}
            <p>{x} is between 5 and 10</p>
        {/if}
    
        
</div>

<style>
    #mainContainer {
        padding: 4rem;
        align-items: center;
        text-align: center;
        background-color: bisque;
    }

    a {
        padding-bottom: 16px;
    }
</style>
