<script lang="ts">
    // imports
    import { Button } from "$lib/components/ui/button";

    // props
    export let title: string;
    export let description: string;
    export let buttonText: string;
    export let buttonLink: string;
    export let imageSrc: { src: string; alt: string };
</script>

<div class="bg-zinc-200 md:flex justify-between items-start p-4 rounded-md">
    <div class="text-center md:text-left md:w-[70%]">
        <h2 class="text-2xl my-2">{title}</h2>
        <h1 class="font-bold text-3xl md:text-4xl my-3">{@html description}</h1>
        <a href={buttonLink}>
            <Button class="my-4" variant="outline">
                {buttonText}
            </Button>
        </a>
    </div>
    <div class="flex justify-center">
        <img src={imageSrc.src} alt={imageSrc.alt} />
    </div>
</div>
