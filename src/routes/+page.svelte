<script>
    import Paragraph from "../components/paragraph.svelte";
    import Button from "../components/Button.svelte";

   

    
 let count = 0;
//keep doubled variable in sync with count
$: doubled = count * 2;

$: {
    console.log("the count is " + count);
    console.log("the doubled is " + doubled);
    if (count >= 100) {
        alert("count is dangerously high!");
    }
}

function incrementCount() {
    // event handler code goes here
    count += 5;
}

let numbers = [1, 2, 3, 4];

function addNumber() {
    numbers = [...numbers, numbers.length + 1];
}

$: sum = numbers.reduce((t, n) => t + n, 0);

$: carObj = { totalCars: 1 };

function addInfoToCarObj() {
    carObj.carName = "test-car";
    carObj.totalCars += 1;
}

$: obj = { total: 1 };

 function quox(number) {
    obj.total += number;
}


function handleClick() {
    alert("meaw");
}
let childProps = { on: { click: handleClick } };



</script>

<div id="mainContainer">
    <h1 class="display-1 mb-5">Welcome to your library project</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />
    <div class="d-flex flex-row justify-content-center mb-3">
        <Paragraph cssClasses="display-6 me-2" text={"Visit "} />

        <a class="display-6" href="https://kit.svelte.dev">kit.svelte.dev</a>

        <Paragraph
            cssClasses="display-6 ms-3"
            text={"to read the documentation"}
        />
    </div>

    <Paragraph
        cssClasses="mt-5 display-5"
        text="{count} doubled is {doubled}"
    />
    <Button
        on:click={incrementCount}
        cssClasses="btn-primary"
        text="Clicked {count} + {count === 1 ? ' time' : ' times'}"
    />

    <Paragraph
        cssClasses="mt-5 display-6"
        text="{numbers.join(' + ')} = {sum}"
    />

    <Button on:click={addNumber} cssClasses="btn-primary" text="Add a number" />

    <Paragraph cssClasses="mt-5 display-6" text={JSON.stringify(carObj)} />

    <Button
        on:click={addInfoToCarObj}
        cssClasses="btn-primary"
        text="Add Car info"
    />

    <Paragraph cssClasses="mt-5 display-5" text={JSON.stringify(obj)} />

    <Button
        cssClasses="btn-primary"
        text="print info"
        on:click={() => {
            quox(6);
        }}
    />

    <Paragraph cssClasses="mt-5 display-5" text="--------" />

    <Button
        on:click={handleClick}
        cssClasses="mt-5 btn-primary"
        text="My Button"
    />
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
