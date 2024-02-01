<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";

    // assets
    import art from "../assets/art.png";
    import FaHeart from "svelte-icons/fa/FaHeart.svelte";
    import FaEllipsisV from "svelte-icons/fa/FaEllipsisV.svelte";
    
    import { onMount } from "svelte";
    import {
        drawArtToCanvas,
        example_art_data,
        generateArtBorderColor,
    } from "$lib/utils/artSerde";
    import ArtDropdown from "./ArtDropdown.svelte";
    import { getArtById } from "$lib/client/artClient";

    export let art_id: string;

    let canvas: HTMLCanvasElement;

    onMount(async () => {
        const response = await getArtById(art_id);

        console.log(response)
        
        const pixel_data = response.pixel_data;
        drawArtToCanvas(canvas, { pixel_data });
        canvas.style.borderColor = generateArtBorderColor(pixel_data);
    });
</script>

<div class="w-[270px]">
    <Card.Root>
        <Card.Header>
            <Card.Title>BytmartOriginal</Card.Title>
        </Card.Header>
        <Card.Content>
            <canvas class="w-full aspect-square" bind:this={canvas} />
        </Card.Content>
        <Card.Footer>
            <div class="w-full flex justify-between items-center">
                <div class="flex items-center">
                    <div class="text-red-600 text-sm w-[15px] mr-1">
                        <FaHeart />
                    </div>
                    <p>134</p>
                </div>
                <div class="text-sm w-[7px]">
                    <ArtDropdown />
                </div>
            </div>
        </Card.Footer>
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
