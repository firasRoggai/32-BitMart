<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Tooltip from "$lib/components/ui/tooltip";
// assets
    import FaHeart from "svelte-icons/fa/FaHeart.svelte";
    import FaRegHeart from "svelte-icons/fa/FaRegHeart.svelte";
    import FaRegQuestionCircle from "svelte-icons/fa/FaRegQuestionCircle.svelte";

    
    import { cn } from "../utils";
    import ArtDisplay from "./ArtDisplay.svelte";
    import ArtDropdown from "./ArtDropdown.svelte";

    export let className: string = "";
    export let data: ArtModel;

    let canvas: HTMLCanvasElement;
</script>

<div class={cn(className, "w-full")}>
    <Card.Root>
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
        <Card.Content>
            <ArtDisplay pixel_data={data.pixel_data} />
        </Card.Content>
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
    </Card.Root>
</div>


