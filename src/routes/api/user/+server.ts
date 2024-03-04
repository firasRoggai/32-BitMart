import type { UserJWT } from '$src/lib/models/models.js';
import { user_models } from '$src/test-data.js';
import { json } from '@sveltejs/kit';
import jwt from "jsonwebtoken";

// TODO: Probably make a helper function that gets the user's JWT or returns an error message

export function GET({ request }) {
    const token = request.headers.get("auth");

    if (!token) {
        // TODO: Probably also reroute to the login page?
        return json({
            msg: "Not logged in!",
        }, {
            status: 401
        });
    }

    const { user_id } = jwt.decode(token) as UserJWT;

    // TODO: Use Firebase functions
    const found_user = user_models.find(user => user.user_id = user_id);

    if (found_user == undefined) {
        return json({
            msg: "You don't exist!",
        }, {
            status: 404
        });
    }

    return json(found_user);
}
