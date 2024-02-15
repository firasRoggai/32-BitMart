import { ArtPalette } from '$src/const';
import { json } from '@sveltejs/kit';

export function GET() {

    return json([
        {
            liked: false,
            id: "12345",
            pixel_data: "1212".repeat(64),
            owner_id: "joey",
            artist_id: "joey",
            palette: ArtPalette.BnW,
            likes: 32,
            price: 800,
        },
        {
            liked: false,
            id: "12345",
            pixel_data: "1212".repeat(64),
            owner_id: "joey",
            artist_id: "joey",
            palette: ArtPalette.BnW,
            likes: 32,
            price: 800,
        },
        {
            liked: false,
            id: "12345",
            pixel_data: "1212".repeat(64),
            owner_id: "joey",
            artist_id: "joey",
            palette: ArtPalette.BnW,
            likes: 32,
            price: 800,
        },
        {
            liked: false,
            id: "12345",
            pixel_data: "1212".repeat(64),
            owner_id: "joey",
            artist_id: "joey",
            palette: ArtPalette.BnW,
            likes: 32,
            price: 800,
        },
    ]);
}
