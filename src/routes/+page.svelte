<script lang="ts">
    // imports
    import Banner from "$lib/components/Banner.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import heroImage from "$lib/assets/HeroImage.gif";
    import Art from "$lib/components/Art.svelte";
    import Heading from "$src/lib/components/Heading.svelte";

    const arts = [
        { id: 1, art_id: "12345" },
    ];
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start py-5">
        {#each arts as art (art.id)}
            <Art art_id={art.art_id} />
        {/each}
    </div>

    <Heading text="TRENDING ART" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start py-5">
        {#each arts as art (art.id)}
            <Art art_id={art.art_id} />
        {/each}
    </div>
</section>
