import type { UserModel } from '$src/lib/models/models.js';
import { user_models } from '$src/test-data.js';
import { json } from '@sveltejs/kit';

export function GET({ params }) {
    const { user_id } = params;

    // TODO: Switch to firebase code
    const found_user = user_models.find(user => user.user_id == user_id);

    if (found_user == undefined) {
        return json({
            msg: "User not found with that ID"
        }, {
            status: 404
        });
    }

	return json(found_user);
}
