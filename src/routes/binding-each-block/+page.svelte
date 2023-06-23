<script>
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import Button from "../../lib/components/Button.svelte";

    let todoList = [
        { done: true, text: "eat brackfast...." },
        { done: false, text: "finish tutorial...." },
    ];

    let addTask = () => {
        todoList = [...todoList, { done: false, placeHolder: "add task" , text:""}];
    };

    let deleteAllTasks = ()=>{
        todoList = [];
    }

    
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Binding Each Block Example</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />

    {#each todoList as todo}
        <div class:done={todo.done} class="mb-3">
            <input type="checkbox" bind:checked={todo.done} />
            <input
                type="text"
                placeholder={todo.placeHolder}
                bind
                value={todo.text}
            />
        </div>
    {/each}

    <Button cssClasses="mt-3 btn-success" text="add task" on:click={addTask} />
    <Button cssClasses="mt-3 btn-danger" text="delete all task" on:click={deleteAllTasks} />
</div>

<style>
    #mainContainer {
        padding: 4rem;
        align-items: center;
        text-align: center;
        background-color: bisque;
    }

    .done {
        opacity: 0.4;
    }
</style>
