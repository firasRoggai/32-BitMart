<script>
    import { createEventDispatcher } from "svelte";
    export let name;
    export let colorPalette;

    let dispatch = createEventDispatcher();

    function handleClick(e) {
        dispatch("choosePalette", {
            ...e,
            paletteName: name,
            colorPalette: colorPalette,
        });
    }
</script>

<button
    on:click={handleClick}
    class="hover:outline hover:outline-black rounded p-2 w-fit flex flex-col justify-center cursor-pointer"
>
    <div class="w-full text-center font-bold text-xl text-black">{name}</div>
    <div class="flex justify-center items-center gap-2">
        {#each colorPalette as color}
            <button
                style={`background-color: ${color}`}
                class="border border-black my-3 h-[50px] w-[50px] p-4 rounded-[80px]"
            ></button>
        {/each}
    </div>
</button>
