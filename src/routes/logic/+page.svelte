<script>
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import Button from "../../lib/components/Button.svelte";

    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    let x = 7;

    let cats = [
        { id: "J---aiyznGQ", name: "Keyboard Cat" },
        { id: "z_AbfPXTKms", name: "Maru" },
        { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    ];

    function removeFirstItem() {
        cats = cats.slice(1);
    }
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
        <Button on:click={toggle} cssClasses="btn-danger mt-5" text="Log out" />
    {:else}
        <Button on:click={toggle} cssClasses="btn-success mt-5" text="Log in" />
    {/if}

    <Paragraph cssClasses="mt-5 display-5" text="--------" />
    {#if x > 10}
        <p>{x} is greater than 10</p>
    {:else if 5 > x}
        <p>{x} is less than 5</p>
    {:else}
        <p>{x} is between 5 and 10</p>
    {/if}

    <h1>The Famous Cats of YouTube</h1>

    <ul>
        <!-- open each block -->

        {#each cats as cat (cat.id)}
            <li id="ytLink">
                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v={cat.id}"
                    rel="noreferrer"
                >
                    {cat.name}
                </a>
            </li>
        {/each}

        <!-- close each block -->
    </ul>

    <Paragraph cssClasses="my-5 display-5 text-center" text="--------" />

    <Button
        on:click={removeFirstItem}
        cssClasses="btn-danger my-2"
        text="Remove First Item"
    />

    <ul>
        {#each cats as cat, i}
            <li id="ytLink">
                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v={cat.id}"
                    rel="noreferrer"
                >
                    {i + 1}. {cat.name}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    #mainContainer {
        padding: 4rem;
        align-items: center;
        text-align: center;
        background-color: bisque;
    }

    #ytLink {
        background-color: wheat;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 1rem;
    }
</style>
