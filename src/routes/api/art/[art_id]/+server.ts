import { json } from '@sveltejs/kit';
import { ArtPalette } from "$src/const";

export function GET({ params }) {
    const { art_id } = params;

	return json({
        liked: false,
        id: art_id,
        pixel_data: "1212".repeat(64),
        owner_id: "joey",
        artist_id: "joey",
        palette: ArtPalette.BnW,
        likes: 32,
        price: 800,
    } as ArtModel);
}
