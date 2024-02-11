<script lang="ts">
    let canvas: HTMLCanvasElement;
    import {
        drawArtToCanvas,
        generateArtBorderColor,
    } from "$lib/utils/artSerde";
    import { onMount } from "svelte";

    // props
    export let pixel_data;
<<<<<<< HEAD
    const palette = ["#FFFFFF", "#999999", "#000000"];
    
    onMount(() => {
        drawArtToCanvas(canvas, { pixel_data } , palette);
=======
    
    onMount(() => {
        drawArtToCanvas(canvas, { pixel_data });
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
        canvas.style.borderColor = generateArtBorderColor(pixel_data);
    });

</script>

<canvas class="w-full aspect-square" bind:this={canvas} />

<style>
    canvas {
        image-rendering: pixelated;
        border-width: 6px;
        border-style: outset;
        border-radius: 5px;
    }
</style>