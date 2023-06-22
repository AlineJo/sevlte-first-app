<script>
    import { onMount } from "svelte";
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import Button from "../../lib/components/Button.svelte";

    let HTTP_METHOD_GET_NO_CACHE = {
        method: "GET",
        headers: { "Cache-Control": "no-cache" },
    };

    let API_URL_GET_RANDOM_NUMBER = 
    "http://localhost/expprojects/PDO-APIs/random-number.php";

    // async function fetchRandomNumberNew() {
    //     const response = await fetch(
    //         API_URL_GET_events,
    //         HTTP_METHOD_GET_NO_CACHE
    //     );

    //     // if error display error massege
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status : ${response.status}`);
    //     }
    // }

    async function fetchRandomNumberOld() {
        const response = await fetch(API_URL_GET_RANDOM_NUMBER);
        const text = await response.text();

        if (response.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }

    let jsonResponse;
    onMount(async () => {
        jsonResponse = fetchRandomNumberOld();
    });

    function getRandomNumber() {
        jsonResponse = fetchRandomNumberOld();
    }
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Fetch Example</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />

    {#await jsonResponse}
        <Paragraph cssClasses="mt-5 display-6" text="...waiting" />
    {:then data}
        {#if data == "Faild to genrate a number!"}
            <Paragraph cssClasses="mt-5 display-6 text-danger" text={data} />
        {:else}
            <Paragraph
                cssClasses="mt-5 display-6"
                text="The number is {data}"
            />
        {/if}
    {:catch error}
        <Paragraph
            cssClasses="mt-5 display-6 text-danger"
            text={error.message}
        />
    {/await}

    <Button
        on:click={getRandomNumber}
        cssClasses="btn-success"
        text="generate random number"
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
