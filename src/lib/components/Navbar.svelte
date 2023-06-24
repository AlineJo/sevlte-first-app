<script>
    export let screen_home = "/home";
    let screen_logic = "/logic";
    let screen_fetch = "/fetch";
    let screen_dispatch = "/dispatcher";
    let screen_event_forwording = "/event-forwording";
    let screen_bindings = "/bindings";
    let screen_binding_each = "/binding-each-block";
    let screen_this_bindings = "/this-binding";
    let screen_lifecycle = "/lifecycle";
    let screen_stores = "/stores";

    
    let navs = [
        { text: "Home", link: screen_home },
        { text: "logic", link: screen_logic },
        { text: "fetch", link: screen_fetch },
        { text: "dispatcher", link: screen_dispatch },
        { text: "event forwording", link: screen_event_forwording },
        { text: "bindings", link: screen_bindings },
        { text: "binding each", link: screen_binding_each },
        { text: "this-binding", link: screen_this_bindings },
        { text: "lifecycle", link: screen_lifecycle },
        { text: "stores", link: screen_stores },

    ];
</script>

<nav class="p-3">
    {#each navs as n, i (i)}
        <a
            class="btn text-uppercase shadow rounded text-primary fs-5 py-2 px-3 me-3"
            href={n.link}>{n.text}</a
        >
    {/each}
</nav>

<style>
    nav {
        background-color: bisque;
    }
</style>
