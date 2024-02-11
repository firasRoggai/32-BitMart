<script lang="ts">
    // imports
    import heroImage from "$lib/assets/HeroImage.gif";
    import Art from "$lib/components/Art.svelte";
<<<<<<< HEAD
    import Banner from "$lib/components/Banner.svelte";
=======
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
    import Heading from "$src/lib/components/Heading.svelte";

    const arts = [
        { id: 1, art_id: "12345" },
<<<<<<< HEAD
        { id: 2, art_id: "12345" },
        { id: 3, art_id: "12345" },
        { id: 4, art_id: "12345" },
        { id: 5, art_id: "12345" },
=======
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
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
<<<<<<< HEAD
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center md:justify-items-start py-5">
=======
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start py-5">
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
        {#each arts as art (art.id)}
            <Art art_id={art.art_id} />
        {/each}
    </div>

    <Heading text="TRENDING ART" />
<<<<<<< HEAD
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center md:justify-items-start py-5">
=======
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start py-5">
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
        {#each arts as art (art.id)}
            <Art art_id={art.art_id} />
        {/each}
    </div>
</section>
