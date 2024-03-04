import { ArtPalette, UserRole } from "./const";
import type { UserModel, ArtModel } from "./lib/models/models";

export const user_models: UserModel[] = [
    {
        display_name: "JoeyArtist",
        user_id: "123",
        profile_pic: "4321234125987009860760098",
        coins: 100,
        palettes: [],
        role: UserRole.User,
        previous_bonus_collect: new Date(),
    },
    {
        display_name: "Gamer123",
        user_id: "456",
        profile_pic: "0981091673450913645234687",
        coins: 100,
        palettes: [],
        role: UserRole.User,
        previous_bonus_collect: new Date(),
    },
];

export const art_models: ArtModel[] = [
    {
        liked: ["123"],
        id: "art-1",
        pixel_data: "0120".repeat(64),
        owner_id: "456",
        artist_id: "456",
        palette: ArtPalette.BnW,
        price: 0,
        created: new Date("1-25-2024"),
    },
    {
        liked: [""],
        id: "art-2",
        pixel_data: "0012".repeat(64),
        owner_id: "123",
        artist_id: "123",
        palette: ArtPalette.Ocean,
        price: 60,
        created: new Date("2-20-2024"),
    }
]