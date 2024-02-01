<script lang="ts">
    // imports
    import Banner from "$lib/components/Banner.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import heroImage from "$lib/assets/HeroImage.gif";
    import Art from "$lib/components/Art.svelte";

</script>

<Navbar />
<section class="p-5">
    <Banner
        title="January Event"
        description="Discover the power of colors with new themes and more! get your spot now."
        imageSrc={{ src: heroImage, alt: "Main Image" }}
    />
</section>

<section class="p-5">
    <Art art_id="12345" />
</section>
