<script lang="ts">
    // imports
    import heroImage from "$lib/assets/HeroImage.gif";
    import Art from "$lib/components/Art.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import { getLatestArt } from "$src/lib/client/artClient";
    import Heading from "$src/lib/components/Heading.svelte";
    import { onMount } from "svelte";

    let latest_art: ArtModel[] = [];

    onMount(()=>{
        getLatestArt().then((art)=>{
            latest_art = art;
        });
    });
    
</script>

<section class="p-5">
    <Banner
        title="January Event"
        description="Discover the power of colors with new themes and more! get your spot now."
        buttonText="Join Now!"
        buttonLink="/profile"
        imageSrc={{ src: heroImage, alt: "Main Image" }}
    />
</section>

<section class="p-5 m-auto">
    <Heading text="LATEST ART" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 justify-items-center md:justify-items-start py-5">
        {#each latest_art as art}
            <Art data={art} />
        {/each}
    </div>

    <!-- <Heading text="TRENDING ART" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center md:justify-items-start py-5">
        {#each arts as art (art.id)}
            <Art art_id={art.art_id} />
        {/each}
    </div> -->
</section>
