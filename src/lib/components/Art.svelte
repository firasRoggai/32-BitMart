<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Tooltip from "$lib/components/ui/tooltip";

    // assets
    import FaHeart from "svelte-icons/fa/FaHeart.svelte";
    import FaRegHeart from "svelte-icons/fa/FaRegHeart.svelte";
    import FaRegQuestionCircle from "svelte-icons/fa/FaRegQuestionCircle.svelte";

    import { getArtById } from "$lib/client/artClient";
    import {
        drawArtToCanvas,
        generateArtBorderColor,
    } from "$lib/utils/artSerde";
    import { onMount } from "svelte";
    import ArtDropdown from "./ArtDropdown.svelte";

    export let art_id: string;

    let canvas: HTMLCanvasElement;

    let data: any;

    onMount(async () => {
        const response = await getArtById(art_id);

        data = response;

        console.log(data);

        const pixel_data = data.pixel_data;

        drawArtToCanvas(canvas, { pixel_data });
        canvas.style.borderColor = generateArtBorderColor(pixel_data);
    });
</script>

<div class="w-[270px]">
    <Card.Root>
        {#if data}
            <Card.Header>
                <Card.Title class="flex justify-between w-full">
                    <div>
                        Owned by: <span class="underline">@{data.artist_id}</span>
                    </div>
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <div class="w-[20px]"><FaRegQuestionCircle /></div>
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                            <p>Artist : @{data.artist_id}</p>
                            <p>Palette : {data.palette}</p>
                        </Tooltip.Content>
                    </Tooltip.Root>
                </Card.Title>
            </Card.Header>
        {/if}
        <Card.Content>
            <canvas class="w-full aspect-square" bind:this={canvas} />
        </Card.Content>
        {#if data}
            <Card.Footer>
                <div class="w-full flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="text-red-600 text-sm w-[15px] mr-1">
                            {#if data.liked}
                                <FaHeart />
                            {:else}
                                <FaRegHeart />
                            {/if}
                        </div>
                        <p>{data.likes}</p>
                    </div>
                    <div class="text-sm w-[7px]">
                        <ArtDropdown />
                    </div>
                </div>
            </Card.Footer>
        {/if}
    </Card.Root>
</div>

<style>
    canvas {
        image-rendering: pixelated;
        border-width: 6px;
        border-style: outset;
        border-radius: 5px;
    }
</style>
