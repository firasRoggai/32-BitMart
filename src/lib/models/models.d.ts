import type { UserRole } from "$src/const"

/** Art model given freely to the public */
type PublicArtModel = {
    /** Holds whether user who is querying data has liked this art or not */
    liked: boolean

    id: string
    pixel_data: string
    owner_id: string
    artist_id: string
    palette: ArtPalette
    likes: number
    price: number
}

/** Art model as seen on the DB */
type ArtModel = {
    // Technically "liked" needs to be a firebase collection. I think?
    /** Collection of user IDs who have liked this art */
    liked: string[]

    id: string
    /** 256 ternary digits (16x16 pixels) */
    pixel_data: string
    owner_id: string
    artist_id: string
    palette: ArtPalette
    price: number
    /** The date the art piece was created on */
    created: Date
}

/** The model of another user that's not you (you don't need all their private info) */
type PublicUserModel = {
    display_name: string
    user_id: string
    profile_pic_id: string
}

/** The user model stored as on the server and which is also given to the current user */
type UserModel = {
    display_name: string
    user_id: string
    /** 5x5 pixels, the colors of which are represented by 0-9 (10 colors)  (could also do hex?) */
    profile_pic: string
    coins: number
    palettes: ArtPalette[]
    role: UserRole
    /** Previous date when the user collected their bonus */
    previous_bonus_collect: Date
}

/** Model of a logged in user's decoded JWT */
type UserJWT = {
    user_id: string
}
