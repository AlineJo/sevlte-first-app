<script>
    export let screen_home = "/home";
    let screen_logic = "/logic";
    let screen_fetch = "/fetch";

    let navs = [
        { text: "Home", link: screen_home },
        { text: "logic", link: screen_logic },
        { text: "fetch", link: screen_fetch },
    ];
</script>

<nav class="p-3">
    {#each navs as n, i (i)}
        <a
            class="btn text-uppercase shadow rounded text-primary fs-4 py-2 px-3 me-3"
            href={n.link}>{n.text}</a
        >
    {/each}
</nav>

<style>
    nav {
        background-color: bisque;
    }
</style>
