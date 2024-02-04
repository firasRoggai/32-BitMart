<script>
    // imports
    import * as Card from "$lib/components/ui/card";
    import ArtDisplay from "$src/lib/components/ArtDisplay.svelte";

    export let data;

    const { display_name, user_id, coins, palletes, profile_pic_id, role } =
        data;
</script>

<Card.Root class="border border-black w-[300px]">
    <ArtDisplay pixel_data={data.profile_pic_id} />
    <Card.Content class="p-2">
        <Card.Title>Name: {display_name}</Card.Title>
        <Card.Description>ID: @{user_id}</Card.Description>
        <Card.Description>
            <p>
                Available palettes :
                {data.palettes.join(",")}
            </p>
            <p>Coins: {coins}</p>
        </Card.Description>
    </Card.Content>
</Card.Root>
