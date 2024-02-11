<script lang="ts">
    import {
        drawArtToCanvas,
        generateArtBorderColor,
        getMousePos,
    } from "$src/lib/utils/artSerde";
    import * as Dialog from "$lib/components/ui/dialog";
    import { onMount } from "svelte";
    import paint from "$lib/assets/paint.png";
    import eraser from "$lib/assets/eraser.png";
    import ColorPalette from "$src/lib/components/ColorPalette.svelte";
    import { ArtPalette, palette_colors } from "$src/const";

    let canvas: HTMLCanvasElement;
    let mouseDown = false; // Track mouse state
    let pixel_data = "10122".repeat(64);

    onMount(() => {
        drawArtToCanvas(canvas, { pixel_data }, currentPalette);
        canvas.style.borderColor = generateArtBorderColor(pixel_data);
    });

    // Event listener for continuous painting while mouse is down
    function handleMouseMove(e) {
        if (mouseDown) {
            const mousePos = getMousePos(canvas, e);
            const { x, y } = mousePos;
            let pixelArray = pixel_data.split("");

            pixelArray[x + y * 16] = currentColor;
            pixel_data = pixelArray.join("");
            drawArtToCanvas(canvas, { pixel_data }, currentPalette);
        }
    }

    let currentPalette = palette_colors.BnW;
    let currentColor = "0";

    // dialogue
    let isOpen = false;

    function setIsOpen(newValue) {
        isOpen = newValue;
    }

    function choosePalette(e) {
        currentPalette = e.detail.colorPalette;
        drawArtToCanvas(canvas, { pixel_data }, currentPalette);
        isOpen = false;
    }
</script>

<section class="flex justify-center items-center h-[90vh]">
    <div class="md:flex gap-4">
        <div class="w-[400px] h-[400px]">
            <canvas
                on:mousedown={(e) => {
                    mouseDown = true;
                    handleMouseMove(e);
                }}
                on:mouseup={() => {
                    mouseDown = false;
                }}
                on:mousemove={handleMouseMove}
                class="w-full aspect-square"
                bind:this={canvas}
            />
        </div>

        <!-- control panel -->
        <div
            class="md:flex flex-col items-center md:w-fit rounded px-3 border-2"
        >
            {#each currentPalette as color}
                <button
                    on:click={() => {
                        currentColor = currentPalette.indexOf(color).toString();
                    }}
                    style={`background-color: ${color}`}
                    class="border border-black mx-3 md:mx-0 my-3 h-[50px] w-[50px] p-4 rounded-[80px]"
                ></button>
            {/each}

            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger>
                    <button class="mx-3 md:mx-0 my-3 h-[50px] w-[50px]">
                        <img src={paint} alt="color pallets" srcset="" />
                    </button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title class="py-3"
                            >Choose a color pallets</Dialog.Title
                        >
                        <Dialog.Description>
                            <div class="grid grid-cols-2">
                                <ColorPalette
                                    on:choosePalette={choosePalette}
                                    colorPalette={palette_colors.BnW}
                                    name={ArtPalette.BnW}
                                />
                                <ColorPalette
                                    on:choosePalette={choosePalette}
                                    colorPalette={palette_colors.Medieval}
                                    name="Medieval"
                                />
                                <ColorPalette
                                    on:choosePalette={choosePalette}
                                    colorPalette={palette_colors.Cyberpunk}
                                    name={ArtPalette.Cyberpunk}
                                />
                                <ColorPalette
                                    on:choosePalette={choosePalette}
                                    colorPalette={palette_colors.Forest}
                                    name={ArtPalette.Forest}
                                />
                                <ColorPalette
                                    on:choosePalette={choosePalette}
                                    colorPalette={palette_colors.Ocean}
                                    name={ArtPalette.Ocean}
                                />
                            </div>
                        </Dialog.Description>
                    </Dialog.Header>
                </Dialog.Content>
            </Dialog.Root>

            <button
                on:click={() => {
                    pixel_data = "1111".repeat(64);
                    drawArtToCanvas(canvas, { pixel_data }, currentPalette);
                }}
                class="mx-3 md:mx-0 my-3 h-[50px] w-[50px]"
            >
                <img src={eraser} alt="color pallets" srcset="" />
            </button>
        </div>
    </div>
</section>

<style>
    canvas {
        image-rendering: pixelated;
        border-width: 6px;
        border-style: outset;
        border-radius: 5px;
    }
</style>
