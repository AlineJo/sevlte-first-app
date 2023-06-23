<script>
    import Navbar from "../../lib/components/Navbar.svelte";
    import Paragraph from "../../lib/components/Paragraph.svelte";
    import Button from "$lib/components/Button.svelte";
    import Input from "$lib/components/Input.svelte";
    import ToggleButton from "$lib/components/ToggleButton.svelte";
    import { json } from "@sveltejs/kit";

    let inputFullName;
    let inputProtoTypes = 1;
    let inputTimeInDays = 7;
    let p = 280;
    $: inputStartingPrice = p - inputTimeInDays * 12 + inputProtoTypes * 25;

    let isChecked = false;

    let orderFor = ["Dine in", "Pick up", "Delivery"];
    let selectedRadioButton;
    let alertOrderFor = () => {
        alert(selectedRadioButton);
    };

    let extras = [
        "Spicy",
        "Humos",
        "Mio",
        "Katchap",
        "Chips Oman",
        "Pickals",
        "black paper",
    ];
    let selectedExtras = [extras[0]];

    let displaySelectedExtras = () => {
        return selectedExtras.slice(0, selectedExtras.lenght).join(", ");
    };

    let alertSelectedExtras = () => {
        alert(selectedExtras.slice(0, selectedExtras.lenght).join(", "));
    };

    let textareaValue = "";

    let genras = [
        "Select Genra",
        "Action",
        "Fantasy",
        "Drama",
        "Vampire",
        "Horror",
    ];
    let selectedGenra;
</script>

<Navbar screen_home="../" />

<div id="mainContainer">
    <h1 class="display-1 mb-5">Binding Example</h1>

    <Paragraph
        cssClasses="display-6"
        text="Create your package using @sveltejs/package and preview/showcase your
        work with SvelteKit"
    />

    <Paragraph cssClasses="mt-5 display-6" text={inputFullName} />
    <!-- <input bind:value={inputFullName}/> -->

    <div class="container">
        <div class="row justify-content-center">
            <!-- <Input id="inputFullName" placeHolder="Full Name"  bind:value={inputFullName} /> -->
            <div class="inputsContainer col">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="write a message"
                        bind:value={inputFullName}
                    />
                    <label for="floatingInput">Your Message</label>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mb-3">
            <div class="inputsContainer col">
                <div class="col input-group form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="ProtoTypes Range"
                        bind:value={inputProtoTypes}
                    />
                    <span class="input-group-text" id="basic-addon2"
                        >Number of ProtoTypes</span
                    >

                    <label for="floatingInput">ProtoTypes Range</label>
                </div>
            </div>

            <div class="col align-content-center">
                <input
                    type="range"
                    class="form-range"
                    bind:value={inputProtoTypes}
                    min="1"
                    max="7"
                />
            </div>
        </div>

        <div class="row justify-content-center mb-3">
            <div class="inputsContainer col">
                <div class="col input-group form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Price Range"
                        bind:value={inputTimeInDays}
                    />
                    <span class="input-group-text" id="basic-addon2">days</span>

                    <label for="floatingInput">Time Range</label>
                </div>
            </div>

            <div class="col align-content-center">
                <input
                    type="range"
                    class="form-range"
                    bind:value={inputTimeInDays}
                    min="3"
                    max="30"
                />
            </div>
        </div>

        <div class="row justify-content-center mb-3">
            <!-- <Input id="inputFullName" placeHolder="Full Name"  bind:value={inputFullName} /> -->
            <div class="inputsContainer col">
                <div class="input-group form-floating mb-3">
                    <input
                        type="number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="write a message"
                        bind:value={inputStartingPrice}
                        disabled
                        readonly
                    />
                    <span class="input-group-text" id="basic-addon2">OMR</span>
                    <label for="floatingInput">Starting Price</label>
                </div>
            </div>
        </div>

        <div class="d-flex flex-row mb-3">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    bind:checked={isChecked}
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Do you accept Terms & Conditions
                </label>
            </div>

            <div class="col">
                <Button
                    text="Register"
                    cssClasses="btn-success"
                    disabled={!isChecked}
                />
            </div>
        </div>

        <div class="d-flex flex-row mb-3">
            <div class="shadow p-3 my-3">
                <Paragraph
                    cssClasses="display-6"
                    text="Radio Buttons Array Group "
                />
                {#each orderFor as o}
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            bind:group={selectedRadioButton}
                            value={o}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                            {o}
                        </label>
                    </div>
                {/each}

                <Paragraph cssClasses="mt-5" text={selectedRadioButton} />
                <Button
                    cssClasses="btn-success mt-2"
                    text="alert selected"
                    on:click={alertOrderFor}
                />
            </div>
        </div>

        <div class="d-flex flex-row mb-3">
            <div class="shadow p-3 my-3">
                <Paragraph cssClasses="display-6" text="Checkbox Array Group" />
                {#each extras as extra}
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            bind:group={selectedExtras}
                            value={extra}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            {extra}
                        </label>
                    </div>
                {/each}

                <Paragraph
                    cssClasses="mt-5"
                    text={displaySelectedExtras(selectedExtras)}
                />
                <Button
                    cssClasses="btn-success mt-2"
                    text="alert selected"
                    on:click={alertSelectedExtras}
                />
            </div>
        </div>

        <div class="row justify-content-center">
            <Paragraph
                cssClasses="text-primary display-6"
                text={textareaValue}
            />

            <div class="inputsContainer col">
                <div class="form-floating mb-3">
                    <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style="height: 100px"
                        bind:value={textareaValue}
                    />
                    <label for="floatingTextarea2">Comments</label>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <Paragraph
                cssClasses="mt-3 text-primary display-6"
                text={selectedGenra}
            />

            <div class="inputsContainer col">
                <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    bind:value={selectedGenra}
                >
                    {#each genras as genra}
                        <option value={genra}>{genra}</option>
                    {/each}
                </select>
            </div>
        </div>

        <div class="row justify-content-center">
            <Paragraph
                cssClasses="mt-3 text-primary display-6"
                text={selectedExtras}
            />

            <div class="inputsContainer col">
                <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    multiple
                    bind:value={selectedExtras}
                >
                    {#each extras as extra}
                        <option value={extra}>{extra}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
</div>

<style>
    #mainContainer {
        padding: 4rem;
        /* align-items: center; */
        text-align: center;
        background-color: bisque;
    }

    .inputsContainer {
        width: 50%;
    }
</style>
