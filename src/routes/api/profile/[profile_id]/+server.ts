import { json } from '@sveltejs/kit';

export function GET({ params }) {
    const { profile_id } = params;

	return json({
        display_name: "firas",
        user_id: profile_id,
        profile_pic_id: "1202".repeat(64),
        coins: 45,
        palettes: ["BnW"],
        role: "admin"
    } as CurrentUserModel);
}
