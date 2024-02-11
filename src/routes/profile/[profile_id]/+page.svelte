<script>
    // imports
    import * as Card from "$lib/components/ui/card";
    import ArtDisplay from "$src/lib/components/ArtDisplay.svelte";

    export let data;

<<<<<<< HEAD
    const { display_name, user_id, coins, palettes, profile_pic_id, role } =
=======
    const { display_name, user_id, coins, palletes, profile_pic_id, role } =
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
        data;
</script>

<Card.Root class="border border-black w-[300px]">
<<<<<<< HEAD
    <ArtDisplay pixel_data={profile_pic_id} />
    <Card.Content class="p-2">
        <Card.Title class="pb-1">Name: {display_name}</Card.Title>
        <Card.Description>ID: @{user_id}</Card.Description>
        <Card.Description>Role: {role}</Card.Description>
        <Card.Description>
            <p>
                Available palettes :
                {palettes.join(",")}
=======
    <ArtDisplay pixel_data={data.profile_pic_id} />
    <Card.Content class="p-2">
        <Card.Title>Name: {display_name}</Card.Title>
        <Card.Description>ID: @{user_id}</Card.Description>
        <Card.Description>
            <p>
                Available palettes :
                {data.palettes.join(",")}
>>>>>>> d667ae88886709eb1627c9cfda60627be930d189
            </p>
            <p>Coins: {coins}</p>
        </Card.Description>
    </Card.Content>
</Card.Root>
