<script lang="ts">
    import Banner from "$lib/components/Banner.svelte";
    import Navbar from "../lib/components/Navbar.svelte";
    import heroImage from "../lib/assets/HeroImage.gif";
</script>

<Navbar />
<section class="p-5">
    <Banner
        title="January Event"
        description="Discover the power of colors with new themes and more! get your spot now."
        imageSrc={{ src: heroImage, alt: "Main Image" }}
    />
</section>
